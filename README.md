# XDcomms communications consumer

This review branch makes `systemsNxXD` the owner of shared coordinate and Golden Event contracts. `services/providers` consumes that contract and records stream checkpoints. The retained application is a compatibility surface while its independent route and deployment requirements are reviewed.

```sh
npm ci
npm run typecheck
npm test
npm run test:providers
npm run check:contracts
npm run build
```

See [provider documentation](services/providers/README.md) and `shared-contract.lock.json`. The vendored contract and Python-generated fixture are exact snapshots pinned to a `systemsNxXD` review commit. Changes belong in the source owner first.

The consumer checks original receipt bytes, wrapper consistency, event sequence and previous receipt digest before advancing its cursor. `selectAvenue` submits an explicit selection. It performs no ranking, automatic binding or state lookup. It neither authenticates the source nor makes an unsigned receipt immutable.

Everybody DoinBetter Together.
