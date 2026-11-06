# XDcomms Requisite Skills

**Role:** transport consumer of the shared coordinate and Golden Event contract.  
**Contract owner:** [git4emet/systemsNxXD](https://github.com/git4emet/systemsNxXD).

## Recovered capabilities

### SSE transport
- Incremental SSE decoding across arbitrary chunk boundaries.
- CRLF normalization.
- Multiline `data:` field assembly.
- Event and sequence cursor parsing.
- Heartbeat/comment handling.

### Ordered event consumption
- Golden Event schema validation.
- Receipt digest verification.
- Wrapper-to-traversal consistency validation.
- Previous-receipt chain continuity.
- Duplicate frame handling.
- Sequence gap and disconnected-chain detection.
- Resume from the last accepted sequence and receipt digest.
- Preserve source receipt references.

### Explicit selection client
- Submit a caller-supplied avenue selection.
- Preserve the supplied source references.
- Validate the returned Golden Event.
- Do not infer a destination, rank avenues, or automatically bind an avenue.

### Contract maintenance
- Consume the owner contract as a pinned vendored snapshot.
- Verify source commit, file paths, and SHA-256 digests.
- Preserve cross-language canonical byte fixtures.
- Keep the coordinate transition table in the owner repository.

## Source artifacts inspected

- `services/providers/golden-client.ts`
- `services/providers/golden-client.test.ts`
- `shared-contract.lock.json`
- `services/providers/README.md`

Tests are present and describe chunk-splitting, CRLF, duplicate delivery, tampering, gaps, resume, and Python-to-TypeScript receipt compatibility. They were inspected but not executed in this review.

## Boundary

XDcomms transports and consumes coordinate events. It does not own the correlate-space resolver or transition table. See the [shared requisite-skill atlas](https://github.com/git4emet/systemsNxXD/blob/main/docs/skills/CONVERSATION_RECOVERED_SKILL_ATLAS.md).
