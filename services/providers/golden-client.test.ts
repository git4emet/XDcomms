import assert from "node:assert/strict";
import { test } from "node:test";
import { createHash } from "node:crypto";
import { GoldenConsumer, SseDecoder } from "./golden-client.ts";
import { validateGoldenEvent, type GoldenEvent } from "./_upstream/golden-event.ts";

function event(id = "one", previous = "0".repeat(64)): GoldenEvent {
  const CRED = { TOFAR: { previous_sha256: previous }, TOPHDARC: { source_receipts: ["source:original"] }, TOFARKLE: { traversal: { event_id: id, from: "Sense", via: "Parse", to: "Parse", script: "record", timestamp: "2026-10-11T00:00:00Z" } } };
  const body = JSON.stringify({ CRED });
  return { schema: "mobiius.golden-event.v1", event_id: id, ts: CRED.TOFARKLE.traversal.timestamp, kind: "coordinate.traversal", actor: "local-selection", thread_id: "coordinate:local", turn_index: 0, content: "Selected avenue recorded", extract: { point: "Parse", avenue: "Parse" }, links: ["source:original"], tofar: { receipt_sha256: createHash("sha256").update(body).digest("hex"), CRED }, dirty_sectors: ["hud"], metadata: { canonical_receipt_body: body } };
}
function frame(value: GoldenEvent, id = "1") { return { id, event: "golden", data: JSON.stringify(value) }; }

test("SSE frames survive character-at-a-time chunks and CRLF", () => {
  const decoder = new SseDecoder();
  const wire = ": heartbeat\r\n\r\nid: 1\r\nevent: golden\r\ndata: one\r\ndata: two\r\n\r\n";
  assert.deepEqual([...wire].flatMap((c) => decoder.push(c)), [{ id: "1", event: "golden", data: "one\ntwo" }]);
});
test("ordered receipt stream retains original IDs and source references", async () => {
  const consumer = new GoldenConsumer();
  const first = event();
  assert.equal((await consumer.accept(frame(first)))?.links[0], "source:original");
  assert.equal(await consumer.accept(frame(first)), null);
  const second = event("two", first.tofar.receipt_sha256);
  assert.equal((await consumer.accept(frame(second, "2")))?.event_id, "two");
  assert.equal(consumer.cursor, "2");
});
test("tampering cannot advance a consumer cursor", async () => {
  const consumer = new GoldenConsumer();
  const changed = event(); changed.tofar.CRED.TOFARKLE.traversal.to = "Return";
  await assert.rejects(consumer.accept(frame(changed)));
  assert.equal(consumer.cursor, "0");
});
test("a valid digest with an altered wrapper is rejected", async () => {
  const changed = event(); changed.extract.point = "Return";
  await assert.rejects(validateGoldenEvent(changed));
});
test("gaps and disconnected chains leave the last accepted checkpoint intact", async () => {
  const consumer = new GoldenConsumer(); const first = event();
  await consumer.accept(frame(first));
  await assert.rejects(consumer.accept(frame(event("two"), "2")));
  await assert.rejects(consumer.accept(frame(event("two", first.tofar.receipt_sha256), "3")));
  assert.equal(consumer.cursor, "1");
});
test("resume checkpoint accepts the next source-linked event", async () => {
  const first = event(); const consumer = new GoldenConsumer("1", first.tofar.receipt_sha256);
  assert.equal((await consumer.accept(frame(event("two", first.tofar.receipt_sha256), "2")))?.event_id, "two");
});

test("Python canonical receipt bytes survive the TypeScript boundary", async () => {
  const { readFileSync } = await import("node:fs");
  const fixture = JSON.parse(readFileSync(new URL("./_upstream/python-golden-event.json", import.meta.url), "utf8"));
  const consumer = new GoldenConsumer();
  const received = await consumer.accept(frame(fixture));
  assert.equal(received?.event_id, "python-fixture-1");
  assert.deepEqual(received?.links, ["source:original", "source:unicode-ש"]);
  assert.equal((received?.tofar.CRED.TOFARKLE.traversal.script as {scale:number}).scale, 1);
});
