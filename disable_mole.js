window.addEventListener('load', () => {
  if (typeof GAME_CONFIG !== 'object') return;
  const off = Number.MAX_SAFE_INTEGER;
  GAME_CONFIG.moleVisibleRound = off;
  GAME_CONFIG.moleEarliestRound = off;
  GAME_CONFIG.moleGainMin = 0;
  GAME_CONFIG.moleGainMax = 0;
  GAME_CONFIG.moleTriggerThreshold = off;
  GAME_CONFIG.moleRepeatChanceBase = 0;
  GAME_CONFIG.moleRepeatChancePerRound = 0;
  GAME_CONFIG.trapOfferRound = off;
  GAME_CONFIG.trapTeaseRound = off;
  GAME_CONFIG.trapOfferChance = 0;
  if (typeof hideMoleRunner === 'function') hideMoleRunner(true);
  if (typeof hideTrapRunner === 'function') hideTrapRunner(true);
  if (typeof hideDirtStrip === 'function') hideDirtStrip(true);
});
