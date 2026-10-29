import { readFileSync } from "node:fs";
import { createHash } from "node:crypto";
import assert from "node:assert/strict";
const lock = JSON.parse(readFileSync(new URL("../shared-contract.lock.json", import.meta.url), "utf8"));
assert.equal(lock.repository, "git4emet/systemsNxXD");
assert.match(lock.commit, /^[a-f0-9]{40}$/, "contract needs a concrete owner commit");
for (const file of lock.files) {
  const bytes = readFileSync(new URL("../" + file.local_path, import.meta.url));
  assert.equal(createHash("sha256").update(bytes).digest("hex"), file.sha256, file.local_path);
}
console.log(`${lock.files.length} contract files match ${lock.commit}`);
