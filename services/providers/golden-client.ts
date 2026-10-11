/** Transport consumer. The transition table and receipt contract belong upstream. */
import { validateGoldenEvent, type GoldenEvent, type Selection } from "./_upstream/golden-event.ts";
export type { GoldenEvent, Selection } from "./_upstream/golden-event.ts";

export interface SseFrame { id: string; event: string; data: string }

/** Incremental decoder supports chunk splits, CRLF and multiline SSE data. */
export class SseDecoder {
  private buffer = "";
  private lines: string[] = [];
  push(chunk: string): SseFrame[] {
    this.buffer += chunk;
    const frames: SseFrame[] = [];
    let newline: number;
    while ((newline = this.buffer.indexOf("\n")) >= 0) {
      const line = this.buffer.slice(0, newline).replace(/\r$/, "");
      this.buffer = this.buffer.slice(newline + 1);
      if (line !== "") { this.lines.push(line); continue; }
      let id = "", event = "message";
      const data: string[] = [];
      for (const field of this.lines) {
        if (field.startsWith(":")) continue;
        const colon = field.indexOf(":");
        const key = colon < 0 ? field : field.slice(0, colon);
        const value = colon < 0 ? "" : field.slice(colon + 1).replace(/^ /, "");
        if (key === "data") data.push(value);
        if (key === "event") event = value;
        if (key === "id" && !value.includes("\0")) id = value;
      }
      if (data.length) frames.push({ id, event, data: data.join("\n") });
      this.lines = [];
    }
    return frames;
  }
}

/** One ordered receipt stream. Retains only its cursor and immediately prior receipt. */
export class GoldenConsumer {
  cursor = "0";
  previousReceipt = "0".repeat(64);
  private lastEventId = "";
  constructor(cursor = "0", previousReceipt = "0".repeat(64)) {
    if (!/^\d+$/.test(cursor) || !/^[0-9a-f]{64}$/.test(previousReceipt)) throw new Error("Invalid resume checkpoint");
    this.cursor = cursor;
    this.previousReceipt = previousReceipt;
  }
  async accept(frame: SseFrame): Promise<GoldenEvent | null> {
    if (frame.event !== "golden") return null;
    if (!/^\d+$/.test(frame.id)) throw new Error("Missing durable sequence cursor");
    const event = await validateGoldenEvent(JSON.parse(frame.data));
    const seq = BigInt(frame.id), cursor = BigInt(this.cursor);
    if (seq === cursor && event.tofar.receipt_sha256 === this.previousReceipt) return null;
    if (seq !== cursor + 1n || event.event_id === this.lastEventId
        || event.tofar.CRED.TOFAR.previous_sha256 !== this.previousReceipt) {
      throw new Error("Receipt stream is out of order or disconnected");
    }
    this.cursor = frame.id;
    this.previousReceipt = event.tofar.receipt_sha256;
    this.lastEventId = event.event_id;
    return event;
  }
}

/** Explicit user selection only. Callers supply their own origin and session authorization. */
export async function selectAvenue(baseUrl: string, selection: Selection, signal?: AbortSignal): Promise<GoldenEvent> {
  const response = await fetch(new URL("select", baseUrl.endsWith("/") ? baseUrl : `${baseUrl}/`), {
    method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(selection), signal,
  });
  if (!response.ok) throw new Error(`Selection rejected (${response.status})`);
  return validateGoldenEvent(await response.json());
}
