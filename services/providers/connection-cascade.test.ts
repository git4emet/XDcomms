import test from 'node:test';
import assert from 'node:assert/strict';
import { inspectCascadePlan } from './connection-cascade.ts';

test('read-only plan remains unexecuted and host-gated', () => {
  const x = inspectCascadePlan({state: 'ready_for_host_validation', invoked: false,
    intent_sha256: 'a'.repeat(64), intent: {capability: 'github.repo.read',
      target_ref: 'repo:git4emet/XDcomms', provider: 'github', provider_action: 'mcp__GitHub__get_repo'}});
  assert.equal(x.executed, false);
  assert.equal(x.requiresHostAuthorization, true);
  assert.equal(x.targetRef, 'repo:git4emet/XDcomms');
});

test('candidate and missing scopes do not become permission', () => {
  assert.equal(inspectCascadePlan({state:'candidate_only', capability:'fcp.recipe.generate'}).executed, false);
  assert.equal(inspectCascadePlan({state:'deferred', capability:'gmail.message.search', reason:'missing_caller_bound_connection'}).state, 'deferred');
});

test('rejects implied execution and malformed host intents', () => {
  assert.throws(() => inspectCascadePlan({state:'ready_for_host_validation', invoked:true}), /cannot assert/);
  assert.throws(() => inspectCascadePlan({state:'ready_for_host_validation', intent_sha256:'0', intent:{}}), /digest/);
  assert.throws(() => inspectCascadePlan({state:'authorized'}), /Unknown/);
});
