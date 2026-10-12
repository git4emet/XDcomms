/** XDcomms is a presenter of host-supplied connector intents, not an auth broker. */
export type CascadeView = {
  state: 'deferred' | 'candidate_only' | 'ready_for_host_validation';
  capability: string;
  reason?: string;
  intentSha256?: string;
  providerAction?: string;
  targetRef?: string;
  executed: false;
  requiresHostAuthorization: boolean;
};

/** Parse an intent only. Never execute a connector or infer permission from its evidence status. */
export function inspectCascadePlan(input: unknown): CascadeView {
  if (!input || typeof input !== 'object' || Array.isArray(input)) throw new Error('Invalid cascade response');
  const plan = input as Record<string, unknown>;
  const state = plan.state;
  if (state !== 'deferred' && state !== 'candidate_only' && state !== 'ready_for_host_validation') {
    throw new Error('Unknown cascade state');
  }
  if (plan.invoked === true) throw new Error('Plan cannot assert remote execution');
  if (state === 'ready_for_host_validation') {
    const intent = plan.intent;
    if (!intent || typeof intent !== 'object' || Array.isArray(intent)) throw new Error('Missing intent');
    const item = intent as Record<string, unknown>;
    if (!/^[0-9a-f]{64}$/.test(String(plan.intent_sha256 ?? ''))) throw new Error('Missing intent digest');
    for (const key of ['capability', 'target_ref', 'provider', 'provider_action']) {
      if (typeof item[key] !== 'string' || !item[key]) throw new Error(`Missing ${key}`);
    }
    return { state, capability: item.capability as string,
             intentSha256: plan.intent_sha256 as string,
             providerAction: item.provider_action as string,
             targetRef: item.target_ref as string,
             executed: false, requiresHostAuthorization: true };
  }
  if (typeof plan.capability !== 'string' || !plan.capability) throw new Error('Missing capability');
  return { state, capability: plan.capability,
           reason: typeof plan.reason === 'string' ? plan.reason : undefined,
           executed: false, requiresHostAuthorization: state !== 'candidate_only' };
}
