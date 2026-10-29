# Golden Event consumer

`golden-client.ts` exposes an incremental SSE decoder, a receipt-validating ordered consumer and an explicit avenue selection client. Resume with the last accepted sequence and receipt digest. Exact duplicate frames leave the checkpoint unchanged. Gaps, tampered wrappers and disconnected chains fail before checkpoint advance.

`_upstream` is a vendored snapshot, not an independently edited contract. `shared-contract.lock.json` records the owner commit, source paths and SHA-256 digests. `npm run check:contracts` verifies local bytes and a concrete 40-character commit pin. The test suite includes a Python-generated JSON fixture with Unicode and a floating-point script field to verify cross-language canonical byte preservation.

No destination is inferred from a hint. Providers translate and distribute descriptors; the coordinate core remains in `systemsNxXD`. The original frontend remains until a separate parity review.
