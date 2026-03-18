const GAME_CONFIG = {
  // Board height in tiles.
  rows: 6,
  // Board width in tiles.
  cols: 4,
  // Add one row and one column every N rounds.
  boardGrowthEveryRounds: 5,
  // The round number shown when a new game starts.
  startingRound: 1,
  // How many cat tiles the player must find in round 1.
  startingCats: 5,
  // How many seconds the player gets in round 1.
  startingTimeSeconds: 10,
  // After round 1, Frito steals this many seconds from round 2.
  onboardingTimeStealSeconds: 4,
  // How many new cat targets get added after a perfect rescue.
  catsAddedPerRound: 1,
  // Time bonus for rescuing every cat in the round.
  perfectRescueBonusSeconds: 1,
  // Start offering the mole trap from this round onward.
  trapOfferRound: 7,
  // The first fake trap offer appears at this round.
  trapTeaseRound: 6,
  // Hairball cost of the first fake trap offer.
  trapTeaseCostHairballs: 10,
  // The cat first offers the mute button on this round.
  muteOfferRound: 3,
  // Hairball cost to unlock the mute button.
  muteOfferCostHairballs: 2,
  // Hairball cost to unlock the bottom exit button.
  exitOfferCostHairballs: 1,
  // Chance a special offer appears after the first tease offer.
  trapOfferChance: 0.8,
  // Start mixing in time trade offers from this round onward.
  timeOfferStartsAtRound: 16,
  // Chance that a late-game special offer is for extra time instead of a trap.
  timeOfferShare: 0.5,
  // Minimum number of seconds the player can buy in the time offer.
  timeOfferMinSeconds: 1,
  // Maximum number of seconds the player can buy in the time offer.
  timeOfferMaxSeconds: 9,
  // Start adding a bonus clock tile from this round onward.
  bonusClockStartsAtRound: 5,
  // Chance that the bonus clock appears before the late-game boost.
  bonusClockChance: 0.6,
  // Chance that the bonus clock appears from round 11 onward.
  bonusClockChanceAfterRound10: 0.85,
  // Seconds added to the next round when the bonus clock is selected.
  bonusClockSeconds: 1,
  // Start adding a bonus yarn tile from this round onward.
  bonusYarnStartsAtRound: 5,
  // Chance that the bonus yarn appears before the late-game boost.
  bonusYarnChance: 0.45,
  // Chance that the bonus yarn appears from round 11 onward.
  bonusYarnChanceAfterRound10: 0.7,
  // Hairballs added when the bonus yarn is selected.
  bonusYarnHairballs: 1,
  // Before round 11, bonus hints start when this share of time is left.
  bonusHintStartRatio: 0.5,
  // After round 10, bonus hints start later by this amount each round.
  bonusHintLateRoundStep: 0.04,
  // After round 10, never let the bonus hint start later than this share of time.
  bonusHintMinRatio: 0.18,
  // From round 15 onward, start bonus hints this many seconds before time runs out.
  bonusHintLateStartSeconds: 1,
  // After round 15, reduce the hint window by this much each round.
  bonusHintLateStepSeconds: 0.2,
  // Never let the late-game hint window shrink below this time.
  bonusHintLateMinSeconds: 0.2,
  // Meter removed when the mole gets trapped instead of firing the column event.
  trapMolePenalty: 0.3,
  // How long the trap reveal takes at the start of a round.
  trapRevealMs: 380,
  // How long the trap and mole shake together when the trap catches the mole.
  trapCatchShakeMs: 300,
  // How long the trap takes to fall away after catching the mole.
  trapExitMs: 220,
  // Missed cats start removing time from this round onward.
  missedCatPenaltyStartsAtRound: 6,
  // Number of missed or canceled cats that count as one time penalty step.
  missedCatsPerPenaltyStep: 1,
  // Seconds removed from the next round for each penalty step.
  missedCatPenaltySeconds: 1,
  // If the next round would fall below this time, the game ends.
  minimumNextRoundTimeSeconds: 1,
  // How often the timer bar and timer text update.
  timerTickMs: 50,
  // Delay between resolving one selected tile and the next.
  reviewStepDelayMs: 420,
  // Smallest allowed delay between review checks on larger boards.
  reviewStepDelayMinMs: 180,
  // How long the Time's up overlay stays visible.
  timeoutFlashMs: 1500,
  // How long missed cats stay visible before the result panel opens.
  missedRevealDelayMs: 500,
  // Extra pause after tile checking before the result screen opens.
  resultScreenDelayMs: 300,
  // How long fanfare and nullification effects stay on screen.
  effectDurationMs: 800,
  // Mole meter value at the start of a new game.
  moleStartsAt: 0.0,
  // The mole becomes visible from this round onward.
  moleVisibleRound: 5,
  // The mole event cannot happen before this round.
  moleEarliestRound: 6,
  // Lowest random mole meter gain added at the start of a round.
  moleGainMin: 0.16,
  // Highest random mole meter gain added at the start of a round.
  moleGainMax: 0.36,
  // Number of random rolls averaged together to keep the meter growth less spiky.
  moleGainRolls: 3,
  // Meter value needed to arm the mole event for a round.
  moleTriggerThreshold: 1,
  // Meter removed after the mole event fires.
  moleMeterPenaltyOnTrigger: 0.5,
  // Wait this long after a mole swap before it can return in the same round.
  moleRepeatDelayMs: 3000,
  // Base chance for the mole to come back after a successful column swap.
  moleRepeatChanceBase: 0.5,
  // Additional repeat chance added for each round after the first mole round.
  moleRepeatChancePerRound: 0.03,
  // Require more than this much time left before a repeat mole swap can arm.
  moleRepeatMinimumTimeSeconds: 5,
  // Do not trigger the mole event when the round has less time than this left.
  moleMinimumTriggerTimeSeconds: 2,
  // Meter removed instead when the mole is blocked for being too late in the round.
  moleMeterPenaltyOnLateBlock: 0.25,
  // Point in the round when the mole check happens.
  moleTriggerAtTimeRatio: 0.5,
  // Start making the mole trigger earlier from this round onward.
  moleEarlierAttackStartsAtRound: 15,
  // Additional early-trigger ratio added each round after the late-game start.
  moleEarlierAttackRatioPerRound: 0.03,
  // Cap for how early the mole can attack in the late game.
  moleEarlierAttackMaxRatio: 0.75,
  // The mole patrol speed while idling at the bottom border.
  molePatrolMs: 4200,
  // How long the mole takes to align to the target column.
  moleEnterMs: 180,
  // How long the mole shakes before the column event starts.
  moleAlignShakeMs: 300,
  // Red warning shake duration before the column drops.
  moleWarningMs: 250,
  // Time for the old column to drop out.
  moleDropMs: 200,
  // Gap pause before the new column falls in.
  moleGapMs: 200,
  // Time for the new column to fall into place.
  moleFallMs: 200,
  // How long the mole takes to drop away after the swap.
  moleExitMs: 200
};

const CAT_EMOJIS = ["🐱", "🐈", "🐈‍⬛", "😺", "😸", "😻", "😹", "🙀", "😿", "😽", "😾", "😼"];
const OTHER_EMOJIS = [
  "🐶", "🐭", "🐹", "🐰", "🦊", "🐻", "🐼", "🐨",
  "🐯", "🦁", "🐮", "🐷", "🐸", "🐵", "🐙", "🦄",
  "🐔", "🐧", "🐢", "🐠", "🦋", "🍕", "🌮", "🍟",
  "🥨", "🍩", "🍓", "🍒", "🌵", "🌈", "⭐", "⚽",
  "🎈", "🎲", "🚗", "🛸", "👁️", "🦴", "🌭", "🍔",
  "🌼", "🌝", "🐥", "💩", "🫏", "🦉", "🐕"
];

const LATE_TILE_SKINS = [
  { fill: "#f2dce7", border: "#d9b6ca" },
  { fill: "#dce8f4", border: "#b7cde0" },
  { fill: "#e7def5", border: "#c8b8e1" },
  { fill: "#e0edd8", border: "#b9d1ab" },
  { fill: "#f5e1d4", border: "#dfbaa4" },
  { fill: "#efe0ea", border: "#d4b8ca" }
];

const AUDIO_TRACKS = {
  startScreen: "sound/start_screen.mp3",
  start: "sound/start.mp3",
  music: "sound/music.mp3",
  countdown: "sound/countdown.mp3",
  gameOver: "sound/game_over.mp3",
  laugh: "sound/laugh.mp3",
  buff: "sound/buff.mp3",
  error: "sound/error.mp3",
  shine: "sound/shine.mp3",
  trap: "sound/trap.mp3",
  rocks: "sound/rocks.mp3"
};

const TRAP_TIERS = [
  {
    id: "basic",
    name: "Regular Trap",
    image: "images/trap.png",
    successChance: 0.5,
    costMin: 2,
    costMax: 2
  },
  {
    id: "steel",
    name: "Steel Trap",
    image: "images/steel_trap.png",
    successChance: 0.6,
    costMin: 3,
    costMax: 3
  },
  {
    id: "gold",
    name: "Gold Trap",
    image: "images/gold_trap.png",
    successChance: 0.7,
    costMin: 4,
    costMax: 4
  },
  {
    id: "diamond",
    name: "Diamond Trap",
    image: "images/diamond_trap.png",
    successChance: 0.8,
    costMin: 5,
    costMax: 5
  }
];

const boardEl = document.getElementById("board");
const boardWrapEl = boardEl.parentElement;
const gameEl = document.querySelector(".game");
const timerLabel = document.getElementById("timerLabel");
const targetLabel = document.getElementById("targetLabel");
const roundLabel = document.getElementById("roundLabel");
const bottomExitBtn = document.getElementById("bottomExitBtn");
const pickedLabel = document.getElementById("pickedLabel");
const languageToggle = document.getElementById("languageToggle");
const muteToggle = document.getElementById("muteToggle");
const progressFill = document.getElementById("progressFill");
const moleRunner = document.getElementById("moleRunner");
const trapRunner = document.getElementById("trapRunner");

const landingPanel = document.getElementById("landingPanel");
const splashPanel = document.getElementById("splashPanel");
const splashText = document.getElementById("splashText");
const playBtn = document.getElementById("playBtn");
const startBtn = document.getElementById("startBtn");
const timeoutFlash = document.getElementById("timeoutFlash");

const resultPanel = document.getElementById("resultPanel");
const resultTitle = document.getElementById("resultTitle");
const resultText = document.getElementById("resultText");
const trapOffer = document.getElementById("trapOffer");
const trapOfferSeller = document.getElementById("trapOfferSeller");
const trapOfferMessage = document.getElementById("trapOfferMessage");
const trapOfferNote = document.getElementById("trapOfferNote");
const trapOfferSummary = document.getElementById("trapOfferSummary");
const trapOfferSummaryImage = document.getElementById("trapOfferSummaryImage");
const trapOfferSummaryText = document.getElementById("trapOfferSummaryText");
const trapOfferRows = document.getElementById("trapOfferRows");
const trapOfferDismissBtn = document.getElementById("trapOfferDismissBtn");
const resourceSummary = document.getElementById("resourceSummary");
const hairballSummaryText = document.getElementById("hairballSummaryText");
const timeSummaryText = document.getElementById("timeSummaryText");
const timeNote = document.getElementById("timeNote");
const nextBtn = document.getElementById("nextBtn");
const exitBtn = document.getElementById("exitBtn");

let round = GAME_CONFIG.startingRound;
let targetCats = GAME_CONFIG.startingCats;
let roundTime = GAME_CONFIG.startingTimeSeconds;
let remainingTime = roundTime;
let timerInterval = null;
let reviewInProgress = false;
let tiles = [];
let rescuedThisRound = 0;
let totalRescuedCats = 0;
let totalMissedCats = 0;
let totalHairballs = 0;
let nextRoundTime = roundTime;
let nextRoundCats = targetCats;
let currentResultBonusLine = "";
let currentResultExtraLines = [];
let gameOver = false;
let audioCtx = null;
let currentRows = GAME_CONFIG.rows;
let currentCols = GAME_CONFIG.cols;
let currentTileCount = currentRows * currentCols;
let moleAppears = GAME_CONFIG.moleStartsAt;
let moleEventTriggeredThisRound = false;
let moleSwapInProgress = false;
let pendingReviewAfterMole = false;
let trapPurchasedForNextRound = null;
let activeTrap = null;
let bonusClockEarnedThisRound = false;
let currentSpecialOfferOptions = [];
let currentSpecialOfferKind = "trap";
let currentSpecialOfferSellerImage = "images/racoon.png";
let earnedHairballThisRound = false;
let yarnHairballsEarnedThisRound = 0;
let currentTrapTierIndex = 0;
let diamondTrapFailed = false;
let currentLanguage = "en";
let currentSpecialOfferState = "hidden";
let currentOfferSummaryData = null;
let currentRescueScore = 0;
let currentRivalName = "";
let currentRivalScore = 0;
let muteControlUnlocked = false;
let exitControlUnlocked = false;
let isMuted = false;
let moleRepeatTimeoutId = null;
let roundCountdownPlayed = false;
let roundIntroPlayer = null;
let backgroundMusicPlayer = null;
let countdownPlayer = null;
let roundAudioToken = 0;
let homeScreenPlayer = null;
let appAudioPausedByVisibility = false;
const activeAudioPlayers = new Set();
const LANGUAGE_STORAGE_KEY = "fritopay-language";

const COPY = {
  en: {
    round: value => `Round ${value}`,
    timeLabel: value => `Time: ${value.toFixed(1)}s`,
    targetLabel: "Find all the cats",
    rescuedCats: value => `Rescued cats: ${value}`,
    selectedTiles: value => `Selected tiles: ${value}`,
    splashIntro: seconds => `
      Frito the Chihuahua is insecure.<br>
      He doesn't like that cats are bigger than him.<br>
      He wants to capture all the cats.<br>
      You need to rescue them.<br><br>
      You have <strong>${seconds}</strong> seconds to find all the cats.
    `,
    startPlaying: "Start playing",
    startRescuingCats: "Start rescuing cats",
    timeout: "Time's up",
    roundOver: "Round Over",
    specialOffer: "Special Offer",
    nextRound: "Next Round",
    exit: "Exit",
    startOver: "Start over",
    exitOfferMessage: "Unlock the exit button.",
    dismiss: "Oh ok",
    hairballs: value => `Hairballs: ${value}`,
    hairballUnit: value => `Hairball${value === 1 ? "" : "s"}`,
    timeSummary: value => `Time: ${value} second${value === 1 ? "" : "s"}`,
    perfectRescue: "Perfect Rescue!",
    fritoLaughs: "Frito Laughs!",
    notBad: "Not Bad!",
    gameOver: "Game Over",
    catsRescued: (found, total) => `${found} of ${total} cats rescued`,
    firstRoundHurry: (stolen, left) => `Frito stole ${stolen} second${stolen === 1 ? "" : "s"} from you. You only have ${left} second${left === 1 ? "" : "s"} left, so hurry.`,
    earnedBonusLine: value => `Earned bonus: +${value} second${value === 1 ? "" : "s"}`,
    fritoStealsLine: value => `Frito steals ${value} second${value === 1 ? "" : "s"} for your next round`,
    noBonusLine: "No extra time this round",
    earnedClockLine: value => `⏰ You earned ${value} second${value === 1 ? "" : "s"}`,
    earnedHairballLine: value => `🧶 You earned ${value} Hairball${value === 1 ? "" : "s"}`,
    totalCatsRescued: value => `Total cats rescued: ${value}`,
    totalCatsMissed: value => `Total cats missed: ${value}`,
    rescueScore: value => `Your Rescue Score is ${value}%`,
    rivalScore: (name, value) => `${name} score is ${value}%`,
    tradeHairballs: (hairballs, seconds) => `Trade all ${hairballs} Hairball${hairballs === 1 ? "" : "s"} for ${seconds} second${seconds === 1 ? "" : "s"}.`,
    muteOfferMessage: "Unlock the mute button.",
    trapsCatchMole: "Traps can catch the mole.",
    bestForNow: "This is the best I have for now.",
    tierUpgradeNote: tierName => `${tierName} are much better.`,
    notEnoughHairballs: "You don't have enough hairballs.",
    timeOfferTitle: value => `+${value} Second${value === 1 ? "" : "s"}`,
    timeOfferSummary: value => `Time: +${value} second${value === 1 ? "" : "s"}`,
    muteOfferTitle: "Mute Game",
    muteOfferSummary: "Mute: 1",
    exitOfferTitle: "Exit Button",
    exitOfferSummary: "Exit: 1",
    buy: "Buy",
    trap_basic: "Regular Trap",
    trap_steel: "Steel Trap",
    trap_gold: "Gold Trap",
    trap_diamond: "Diamond Trap"
  },
  es: {
    round: value => `Ronda ${value}`,
    timeLabel: value => `Tiempo: ${value.toFixed(1)}s`,
    targetLabel: "Encuentra todos los gatos",
    rescuedCats: value => `Gatos rescatados: ${value}`,
    selectedTiles: value => `Casillas marcadas: ${value}`,
    splashIntro: seconds => `
      Frito el Chihuahua es inseguro.<br>
      No le gusta que los gatos sean más grandes que él.<br>
      Quiere capturar a todos los gatos.<br>
      Tienes que rescatarlos.<br><br>
      Tienes <strong>${seconds}</strong> segundos para encontrar a todos los gatos.
    `,
    startPlaying: "Empezar a jugar",
    startRescuingCats: "Empezar a rescatar gatos",
    timeout: "Se acabó el tiempo",
    roundOver: "Fin de ronda",
    specialOffer: "Oferta especial",
    nextRound: "Siguiente ronda",
    exit: "Salir",
    startOver: "Empezar de nuevo",
    exitOfferMessage: "Desbloquea el botón de salir.",
    dismiss: "Ah, ok",
    hairballs: value => `Bolas de pelo: ${value}`,
    hairballUnit: value => `bola${value === 1 ? "" : "s"} de pelo`,
    timeSummary: value => `Tiempo: ${value} segundo${value === 1 ? "" : "s"}`,
    perfectRescue: "¡Rescate perfecto!",
    fritoLaughs: "¡Frito se ríe!",
    notBad: "Nada mal",
    gameOver: "Fin del juego",
    catsRescued: (found, total) => `${found} de ${total} gatos rescatados`,
    firstRoundHurry: (stolen, left) => `Frito te robó ${stolen} segundo${stolen === 1 ? "" : "s"}. Solo te quedan ${left} segundo${left === 1 ? "" : "s"}, así que apúrate.`,
    earnedBonusLine: value => `Bonus ganado: +${value} segundo${value === 1 ? "" : "s"}`,
    fritoStealsLine: value => `Frito te roba ${value} segundo${value === 1 ? "" : "s"} para la próxima ronda`,
    noBonusLine: "Sin tiempo extra esta ronda",
    earnedClockLine: value => `⏰ Ganaste ${value} segundo${value === 1 ? "" : "s"}`,
    earnedHairballLine: value => `🧶 Ganaste ${value} bola${value === 1 ? "" : "s"} de pelo`,
    totalCatsRescued: value => `Total de gatos rescatados: ${value}`,
    totalCatsMissed: value => `Total de gatos perdidos: ${value}`,
    rescueScore: value => `Tu puntuación de rescate es ${value}%`,
    rivalScore: (name, value) => `${name} tiene ${value}%`,
    tradeHairballs: (hairballs, seconds) => `Cambia tus ${hairballs} bola${hairballs === 1 ? "" : "s"} de pelo por ${seconds} segundo${seconds === 1 ? "" : "s"}.`,
    muteOfferMessage: "Desbloquea el botón de silencio.",
    trapsCatchMole: "Las trampas pueden atrapar al topo.",
    bestForNow: "Esto es lo mejor que tengo por ahora.",
    tierUpgradeNote: tierName => `Las ${tierName.toLowerCase()} son mucho mejores.`,
    notEnoughHairballs: "No tienes suficientes bolas de pelo.",
    timeOfferTitle: value => `+${value} segundo${value === 1 ? "" : "s"}`,
    timeOfferSummary: value => `Tiempo: +${value} segundo${value === 1 ? "" : "s"}`,
    muteOfferTitle: "Silenciar juego",
    muteOfferSummary: "Silencio: 1",
    exitOfferTitle: "Botón salir",
    exitOfferSummary: "Salir: 1",
    buy: "Comprar",
    trap_basic: "trampas normales",
    trap_steel: "trampas de acero",
    trap_gold: "trampas de oro",
    trap_diamond: "trampas de diamante"
  }
};

function copy(key, ...args) {
  const entry = COPY[currentLanguage][key];
  return typeof entry === "function" ? entry(...args) : entry;
}

function normalizeLanguageCode(value) {
  if (typeof value !== "string") return "";
  return value.trim().toLowerCase().split("-")[0];
}

function isSupportedLanguage(language) {
  return Object.prototype.hasOwnProperty.call(COPY, language);
}

function getStoredPreferredLanguage() {
  try {
    const storedLanguage = normalizeLanguageCode(window.localStorage.getItem(LANGUAGE_STORAGE_KEY));
    return isSupportedLanguage(storedLanguage) ? storedLanguage : "";
  } catch {
    return "";
  }
}

function detectPreferredLanguage() {
  const browserLanguages = Array.isArray(navigator.languages) && navigator.languages.length > 0
    ? navigator.languages
    : [navigator.language, navigator.userLanguage];

  for (const candidate of browserLanguages) {
    const normalizedLanguage = normalizeLanguageCode(candidate);
    if (isSupportedLanguage(normalizedLanguage)) {
      return normalizedLanguage;
    }
  }

  return "en";
}

function setCurrentLanguage(language, { persist = false } = {}) {
  const normalizedLanguage = normalizeLanguageCode(language);
  if (!isSupportedLanguage(normalizedLanguage)) {
    return false;
  }

  currentLanguage = normalizedLanguage;
  document.documentElement.lang = normalizedLanguage;

  if (persist) {
    try {
      window.localStorage.setItem(LANGUAGE_STORAGE_KEY, normalizedLanguage);
    } catch {}
  }

  return true;
}

function getTrapTierLabel(tierId, plural = false) {
  if (currentLanguage === "en") {
    const tier = getTrapTierById(tierId);
    return plural ? tier.name.replace(" Trap", " traps") : tier.name;
  }

  const key = `trap_${tierId}`;
  const value = copy(key);
  if (plural) return value;
  return value.replace(/^trampas /, "Trampa ").replace("normales", "normal");
}

function isPreGameScreenVisible() {
  return landingPanel.classList.contains("show") || splashPanel.classList.contains("show");
}

function getBoardGrowth(roundNumber = round) {
  return Math.floor(Math.max(0, roundNumber - 2) / GAME_CONFIG.boardGrowthEveryRounds);
}

function getBoardSize(roundNumber = round) {
  const growth = getBoardGrowth(roundNumber);
  const rows = GAME_CONFIG.rows + growth;
  const cols = GAME_CONFIG.cols + growth;

  return {
    rows,
    cols,
    tileCount: rows * cols,
    growth
  };
}

function clearMoleRepeatTimeout() {
  if (moleRepeatTimeoutId !== null) {
    clearTimeout(moleRepeatTimeoutId);
    moleRepeatTimeoutId = null;
  }
}

function applyBoardLayout(roundNumber = round) {
  const size = getBoardSize(roundNumber);
  currentRows = size.rows;
  currentCols = size.cols;
  currentTileCount = size.tileCount;

  const gap = Math.max(4, 8 - size.growth);
  const radius = Math.max(10, 16 - size.growth);
  const minFont = Math.max(1.14, 1.9 - size.growth * 0.09);
  const vwFont = Math.max(3.9, 6.8 - size.growth * 0.34);
  const maxFont = Math.max(1.72, 2.72 - size.growth * 0.12);

  boardEl.style.setProperty("--board-cols", String(currentCols));
  boardEl.style.setProperty("--board-rows", String(currentRows));
  boardEl.style.setProperty("--board-gap", `${gap}px`);
  boardEl.style.setProperty("--tile-radius", `${radius}px`);
  boardEl.style.setProperty(
    "--tile-font-size",
    `clamp(${minFont}rem, ${vwFont}vw, ${maxFont}rem)`
  );
}

function ensureAudio() {
  if (!audioCtx) {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (AudioContextClass) {
      audioCtx = new AudioContextClass();
    }
  }
  if (audioCtx && audioCtx.state === "suspended") {
    audioCtx.resume();
  }
}

function stopAudioPlayer(player) {
  if (!player) return;
  activeAudioPlayers.delete(player);
  player.pause();
  player.currentTime = 0;
}

function playTrack(name, { loop = false, volume = 1 } = {}) {
  if (isMuted) return null;

  const src = AUDIO_TRACKS[name];
  if (!src) return null;

  const player = new Audio(src);
  player.preload = "auto";
  player.loop = loop;
  player.volume = volume;
  activeAudioPlayers.add(player);
  player.addEventListener("ended", () => {
    activeAudioPlayers.delete(player);
  });
  player.play().catch(() => {});
  return player;
}

function stopAllAudioPlayers() {
  [...activeAudioPlayers].forEach(stopAudioPlayer);
}

function stopRoundSoundtrack() {
  roundAudioToken++;
  roundCountdownPlayed = false;
  stopAudioPlayer(roundIntroPlayer);
  stopAudioPlayer(backgroundMusicPlayer);
  stopAudioPlayer(countdownPlayer);
  roundIntroPlayer = null;
  backgroundMusicPlayer = null;
  countdownPlayer = null;
}

function stopHomeScreenAudio() {
  stopAudioPlayer(homeScreenPlayer);
  homeScreenPlayer = null;
}

function playHomeScreenAudio() {
  stopHomeScreenAudio();
  homeScreenPlayer = playTrack("startScreen", {
    loop: true,
    volume: 0.82
  });
}

function playRoundIntroAndMusic() {
  stopHomeScreenAudio();
  stopRoundSoundtrack();
  backgroundMusicPlayer = playTrack("music", {
    loop: true,
    volume: 0.72
  });
}

function beep(freq, duration, type = "sine", volume = 0.04, delay = 0) {
  if (!audioCtx || isMuted) return;
  const now = audioCtx.currentTime + delay;
  const osc = audioCtx.createOscillator();
  const gain = audioCtx.createGain();

  osc.type = type;
  osc.frequency.setValueAtTime(freq, now);

  gain.gain.setValueAtTime(0.0001, now);
  gain.gain.exponentialRampToValueAtTime(volume, now + 0.01);
  gain.gain.exponentialRampToValueAtTime(0.0001, now + duration);

  osc.connect(gain);
  gain.connect(audioCtx.destination);

  osc.start(now);
  osc.stop(now + duration + 0.02);
}

function updateMuteButton() {
  muteToggle.classList.toggle("hidden", !muteControlUnlocked);
  muteToggle.textContent = isMuted ? "🔇" : "🔈";
}

function updateBottomExitButton() {
  bottomExitBtn.classList.toggle("hidden", !exitControlUnlocked);
  bottomExitBtn.textContent = copy("exit");
}

function applyMuteState() {
  updateMuteButton();

  if (isMuted) {
    stopAllAudioPlayers();
    roundIntroPlayer = null;
    backgroundMusicPlayer = null;
    countdownPlayer = null;
    homeScreenPlayer = null;
    return;
  }

  if (isPreGameScreenVisible()) {
    playHomeScreenAudio();
  } else if (!resultPanel.classList.contains("show") && remainingTime > 0 && !gameOver) {
    playRoundIntroAndMusic();
    if (!roundCountdownPlayed && roundTime > 3 && remainingTime <= 3) {
      roundCountdownPlayed = true;
      countdownPlayer = playTrack("countdown", { volume: 0.95 });
    }
  }
}

function pauseAppAudioForVisibility() {
  if (appAudioPausedByVisibility) return;

  appAudioPausedByVisibility = true;
  stopAllAudioPlayers();
  roundIntroPlayer = null;
  backgroundMusicPlayer = null;
  countdownPlayer = null;
  homeScreenPlayer = null;

  if (audioCtx && audioCtx.state === "running") {
    audioCtx.suspend().catch(() => {});
  }
}

function resumeAppAudioFromVisibility() {
  if (!appAudioPausedByVisibility) return;

  appAudioPausedByVisibility = false;

  if (isMuted) {
    return;
  }

  ensureAudio();
  applyMuteState();
}

function handleVisibilityAudioChange() {
  if (document.hidden) {
    pauseAppAudioForVisibility();
  } else {
    resumeAppAudioFromVisibility();
  }
}

function preventIosGestures(event) {
  event.preventDefault();
}

function playSelectSound() {
  beep(620, 0.08, "square", 0.03);
}

function playDeselectSound() {
  beep(420, 0.07, "triangle", 0.025);
}

function playGoodSound() {
  beep(660, 0.08, "triangle", 0.04, 0);
  beep(880, 0.10, "triangle", 0.04, 0.08);
  beep(1100, 0.14, "triangle", 0.04, 0.16);
}

function playBadSound() {
  beep(240, 0.12, "sawtooth", 0.04, 0);
  beep(180, 0.16, "sawtooth", 0.04, 0.08);
}

function playNullifySound() {
  beep(300, 0.08, "square", 0.03, 0);
  beep(220, 0.11, "square", 0.03, 0.07);
}

function playRoundStartSound() {
  playRoundIntroAndMusic();
}

function playGameOverSound() {
  playTrack("gameOver", { volume: 0.96 });
}

function playPerfectSound() {
  playTrack("start", { volume: 0.95 });
}

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

function randomFrom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function buildTileData(type = "other") {
  const skin = round >= 10 ? randomFrom(LATE_TILE_SKINS) : null;
  return {
    emoji:
      type === "cat"
        ? randomFrom(CAT_EMOJIS)
        : type === "clock"
          ? "⏰"
          : type === "yarn"
            ? "🧶"
            : randomFrom(OTHER_EMOJIS),
    isCat: type === "cat",
    isClock: type === "clock",
    isYarn: type === "yarn",
    skin,
    selected: false,
    state: "idle"
  };
}

function getCatPlacementScore(selectedIndexes, candidateIndex, colCount) {
  if (selectedIndexes.length === 0) {
    return Math.random();
  }

  let score = Math.random() * 0.4;
  const candidateRow = Math.floor(candidateIndex / colCount);
  const candidateCol = candidateIndex % colCount;

  for (const selectedIndex of selectedIndexes) {
    const selectedRow = Math.floor(selectedIndex / colCount);
    const selectedCol = selectedIndex % colCount;
    const rowDiff = Math.abs(candidateRow - selectedRow);
    const colDiff = Math.abs(candidateCol - selectedCol);
    const manhattan = rowDiff + colDiff;

    if (rowDiff === 0 && colDiff === 0) {
      return -Infinity;
    }

    if (rowDiff <= 1 && colDiff <= 1) {
      score -= rowDiff === 0 || colDiff === 0 ? 18 : 12;
      continue;
    }

    if (manhattan === 2) {
      score -= 4;
      continue;
    }

    if (manhattan === 3) {
      score -= 1.5;
      continue;
    }

    score += Math.min(manhattan, 6) * 0.2;
  }

  return score;
}

function buildSpacedCatIndexes(totalCount, catCount, colCount) {
  const selectedIndexes = [];
  const remainingIndexes = Array.from({ length: totalCount }, (_, index) => index);

  for (let catIndex = 0; catIndex < catCount && remainingIndexes.length > 0; catIndex++) {
    let bestRemainingIndex = 0;
    let bestScore = -Infinity;

    for (let i = 0; i < remainingIndexes.length; i++) {
      const score = getCatPlacementScore(selectedIndexes, remainingIndexes[i], colCount);
      if (score > bestScore) {
        bestScore = score;
        bestRemainingIndex = i;
      }
    }

    selectedIndexes.push(remainingIndexes[bestRemainingIndex]);
    remainingIndexes.splice(bestRemainingIndex, 1);
  }

  return selectedIndexes;
}

function buildRoundData() {
  const catCount = Math.min(targetCats, currentTileCount);
  const catIndexes = new Set(buildSpacedCatIndexes(currentTileCount, catCount, currentCols));
  let clockIndex = -1;
  let yarnIndex = -1;
  const lateBonusRound = round >= 11;
  const openIndexes = Array.from({ length: currentTileCount }, (_, index) => index)
    .filter(index => !catIndexes.has(index));

  if (
    round >= GAME_CONFIG.bonusClockStartsAtRound &&
    Math.random() < (lateBonusRound ? GAME_CONFIG.bonusClockChanceAfterRound10 : GAME_CONFIG.bonusClockChance) &&
    openIndexes.length > 0
  ) {
    clockIndex = randomFrom(openIndexes);
  }

  const remainingIndexes = openIndexes.filter(index => index !== clockIndex);
  if (
    round >= GAME_CONFIG.bonusYarnStartsAtRound &&
    Math.random() < (lateBonusRound ? GAME_CONFIG.bonusYarnChanceAfterRound10 : GAME_CONFIG.bonusYarnChance) &&
    remainingIndexes.length > 0
  ) {
    yarnIndex = randomFrom(remainingIndexes);
  }

  return Array.from({ length: currentTileCount }, (_, index) => {
    if (catIndexes.has(index)) return buildTileData("cat");
    if (index === clockIndex) return buildTileData("clock");
    if (index === yarnIndex) return buildTileData("yarn");
    return buildTileData("other");
  });
}

function createTileButton(index) {
  const tile = document.createElement("button");
  const tileData = tiles[index];

  tile.className = "tile";
  if (tileData.isClock || tileData.isYarn) {
    tile.classList.add("bonus-tile");
  }
  if (tileData.skin) {
    tile.style.setProperty("--tile-fill", tileData.skin.fill);
    tile.style.setProperty("--tile-stroke", tileData.skin.border);
  }
  tile.type = "button";
  tile.dataset.index = index;
  tile.innerHTML = `<span class="emoji">${tileData.emoji}</span>`;

  tile.addEventListener("click", () => {
    if (
      reviewInProgress ||
      moleSwapInProgress ||
      remainingTime <= 0 ||
      gameOver ||
      isPreGameScreenVisible()
    ) {
      return;
    }

    tileData.selected = !tileData.selected;
    tile.classList.toggle("selected", tileData.selected);

    if (tileData.selected) {
      if (tileData.isClock || tileData.isYarn) {
        playTrack("shine", { volume: 0.95 });
      } else {
        playSelectSound();
      }
    } else {
      playDeselectSound();
    }

    updatePickedCount();
  });

  return tile;
}

function updateBonusTileHints() {
  const hintStartSeconds = round >= 15
    ? Math.max(
        GAME_CONFIG.bonusHintLateMinSeconds,
        GAME_CONFIG.bonusHintLateStartSeconds - (round - 15) * GAME_CONFIG.bonusHintLateStepSeconds
      )
    : null;
  const lateRoundPenalty = Math.max(0, round - 10) * GAME_CONFIG.bonusHintLateRoundStep;
  const hintStartRatio = round <= 10
    ? GAME_CONFIG.bonusHintStartRatio
    : Math.max(
        GAME_CONFIG.bonusHintMinRatio,
        GAME_CONFIG.bonusHintStartRatio - lateRoundPenalty
      );
  const shouldHighlight = (
    remainingTime > 0 &&
    !reviewInProgress &&
    !isPreGameScreenVisible() &&
    (
      round >= 15
        ? remainingTime <= hintStartSeconds
        : remainingTime <= roundTime * hintStartRatio
    )
  );

  boardEl.querySelectorAll(".tile.bonus-tile").forEach(tileEl => {
    const tileIndex = Number(tileEl.dataset.index);
    const tileData = tiles[tileIndex];
    const isAvailableBonus = tileData && (tileData.isClock || tileData.isYarn) && tileData.state === "idle";
    tileEl.classList.toggle("bonus-urgent", Boolean(shouldHighlight && isAvailableBonus));
  });
}

function createBoard() {
  applyBoardLayout();
  boardEl.innerHTML = "";
  tiles = buildRoundData();
  rescuedThisRound = 0;
  bonusClockEarnedThisRound = false;
  moleEventTriggeredThisRound = false;
  moleSwapInProgress = false;
  pendingReviewAfterMole = false;
  if (pickedLabel) {
    pickedLabel.textContent = copy("selectedTiles", 0);
  }

  tiles.forEach((tileData, index) => {
    boardEl.appendChild(createTileButton(index));
  });

  updateBonusTileHints();
}

function updatePickedCount() {
  const selectedCount = tiles.filter(t => t.selected).length;
  if (pickedLabel) {
    pickedLabel.textContent = copy("selectedTiles", selectedCount);
  }
}

function updateTopUI() {
  timerLabel.textContent = copy("timeLabel", remainingTime);
  targetLabel.textContent = copy("targetLabel");
  roundLabel.textContent = copy("round", round);

  const pct = Math.max(0, Math.min(1, remainingTime / Math.max(roundTime, 0.001)));
  progressFill.style.width = `${pct * 100}%`;
  updateBonusTileHints();
}

function updateSplashText() {
  splashText.innerHTML = copy("splashIntro", GAME_CONFIG.startingTimeSeconds);
}

function resetGameState() {
  clearInterval(timerInterval);
  clearMoleRepeatTimeout();
  stopRoundSoundtrack();
  round = GAME_CONFIG.startingRound;
  targetCats = GAME_CONFIG.startingCats;
  roundTime = GAME_CONFIG.startingTimeSeconds;
  remainingTime = roundTime;
  timerInterval = null;
  reviewInProgress = false;
  tiles = [];
  rescuedThisRound = 0;
  totalRescuedCats = 0;
  totalMissedCats = 0;
  totalHairballs = 0;
  nextRoundTime = roundTime;
  nextRoundCats = targetCats;
  currentResultBonusLine = "";
  currentResultExtraLines = [];
  gameOver = false;
  moleAppears = GAME_CONFIG.moleStartsAt;
  moleEventTriggeredThisRound = false;
  moleSwapInProgress = false;
  pendingReviewAfterMole = false;
  trapPurchasedForNextRound = null;
  activeTrap = null;
  bonusClockEarnedThisRound = false;
  earnedHairballThisRound = false;
  yarnHairballsEarnedThisRound = 0;
  currentTrapTierIndex = 0;
  diamondTrapFailed = false;
  currentSpecialOfferOptions = [];
  currentSpecialOfferKind = "trap";
  currentSpecialOfferSellerImage = "images/racoon.png";
  currentSpecialOfferState = "hidden";
  currentOfferSummaryData = null;
  currentRescueScore = 0;
  currentRivalName = "";
  currentRivalScore = 0;
  hideMoleRunner(true);
  hideTrapRunner(true);
  hideTrapOffer();
  applyBoardLayout(round);
}

function getScaledReviewStepDelay() {
  const baseTileCount = GAME_CONFIG.rows * GAME_CONFIG.cols;
  const scale = baseTileCount / Math.max(baseTileCount, currentTileCount);
  return Math.max(
    GAME_CONFIG.reviewStepDelayMinMs,
    Math.round(GAME_CONFIG.reviewStepDelayMs * scale)
  );
}

function updateSummaryTexts() {
  hairballSummaryText.textContent = copy("hairballs", totalHairballs);
  timeSummaryText.textContent = copy("timeSummary", nextRoundTime);
}

function getRoundResultTitle() {
  const missedCats = Math.max(0, targetCats - rescuedThisRound);

  if (gameOver) return copy("gameOver");
  if (rescuedThisRound === targetCats) return copy("perfectRescue");
  return missedCats >= 3 ? copy("fritoLaughs") : copy("notBad");
}

function renderGameOverText() {
  resultText.innerHTML = `
    <strong>${copy("totalCatsRescued", totalRescuedCats)}</strong><br>
    <strong>${copy("totalCatsMissed", totalMissedCats)}</strong><br>
    <span class="bonus-line">${copy("rescueScore", currentRescueScore)}</span><br>
    <strong>${copy("rivalScore", currentRivalName, currentRivalScore)}</strong>
  `;
}

function updateLanguageToggle() {
  languageToggle.querySelectorAll(".language-toggle-btn").forEach(button => {
    button.classList.toggle("active", button.dataset.lang === currentLanguage);
  });
}

function updateLanguageUI() {
  document.documentElement.lang = currentLanguage;
  timeoutFlash.textContent = copy("timeout");
  playBtn.textContent = copy("startPlaying");
  startBtn.textContent = copy("startRescuingCats");
  trapOffer.querySelector(".trap-offer-title").textContent = copy("specialOffer");
  trapOfferDismissBtn.textContent = copy("dismiss");
  nextBtn.textContent = copy("nextRound");
  exitBtn.textContent = gameOver ? copy("startOver") : copy("exit");

  updateTopUI();
  updateSplashText();
  updatePickedCount();
  updateSummaryTexts();

  if (resultPanel.classList.contains("show")) {
    resultTitle.textContent = getRoundResultTitle();
    if (gameOver) {
      renderGameOverText();
    } else {
      renderRoundResultText();
    }
  } else {
    resultTitle.textContent = copy("roundOver");
  }

  if (!trapOffer.classList.contains("hidden")) {
    if (currentSpecialOfferState === "offer") {
      renderSpecialOffer(currentSpecialOfferOptions);
    } else if (currentSpecialOfferState === "insufficient") {
      showTrapOfferInsufficient();
    } else if (currentSpecialOfferState === "summary" && currentOfferSummaryData) {
      showPurchasedOfferSummary(currentOfferSummaryData);
    }
  }

  updateBottomExitButton();
  updateMuteButton();
  updateLanguageToggle();
}

function showHomeScreen() {
  resetGameState();
  createBoard();
  updateTopUI();
  updateSplashText();
  timeoutFlash.classList.remove("show");
  resultPanel.classList.remove("show");
  landingPanel.classList.add("show");
  splashPanel.classList.remove("show");
  gameEl.classList.add("home-screen-active");
  nextBtn.classList.remove("hidden");
  exitBtn.classList.add("hidden");
  updateLanguageUI();
  playHomeScreenAudio();
}

function showIntroScreen() {
  landingPanel.classList.remove("show");
  splashPanel.classList.add("show");
  timeoutFlash.classList.remove("show");
  resultPanel.classList.remove("show");
  gameEl.classList.add("home-screen-active");
  updateLanguageUI();
  playHomeScreenAudio();
}

function randomMoleGain() {
  const range = GAME_CONFIG.moleGainMax - GAME_CONFIG.moleGainMin;
  let rollTotal = 0;

  for (let i = 0; i < GAME_CONFIG.moleGainRolls; i++) {
    rollTotal += Math.random();
  }

  const averagedRoll = rollTotal / GAME_CONFIG.moleGainRolls;
  return GAME_CONFIG.moleGainMin + range * averagedRoll;
}

function getMoleRepeatChance() {
  const roundsSinceMoleStart = Math.max(0, round - GAME_CONFIG.moleEarliestRound);
  return Math.min(
    1,
    GAME_CONFIG.moleRepeatChanceBase +
      roundsSinceMoleStart * GAME_CONFIG.moleRepeatChancePerRound
  );
}

function getMoleTriggerRatio() {
  if (round < GAME_CONFIG.moleEarlierAttackStartsAtRound) {
    return GAME_CONFIG.moleTriggerAtTimeRatio;
  }

  const lateRoundBoost = (
    round - GAME_CONFIG.moleEarlierAttackStartsAtRound + 1
  ) * GAME_CONFIG.moleEarlierAttackRatioPerRound;

  return Math.min(
    GAME_CONFIG.moleEarlierAttackMaxRatio,
    GAME_CONFIG.moleTriggerAtTimeRatio + lateRoundBoost
  );
}

function scheduleMoleRepeatCheck() {
  clearMoleRepeatTimeout();

  moleRepeatTimeoutId = setTimeout(() => {
    moleRepeatTimeoutId = null;

    if (
      reviewInProgress ||
      gameOver ||
      moleSwapInProgress ||
      pendingReviewAfterMole ||
      remainingTime <= GAME_CONFIG.moleRepeatMinimumTimeSeconds
    ) {
      return;
    }

    if (Math.random() > getMoleRepeatChance()) {
      return;
    }

    moleEventTriggeredThisRound = false;
    moleAppears = Math.max(moleAppears, GAME_CONFIG.moleTriggerThreshold);
    showIdleMoleRunner();
  }, GAME_CONFIG.moleRepeatDelayMs);
}

function prepareRoundHazards() {
  clearMoleRepeatTimeout();
  moleAppears += randomMoleGain();
  if (round === GAME_CONFIG.moleEarliestRound) {
    moleAppears = Math.max(moleAppears, GAME_CONFIG.moleTriggerThreshold);
  }
  moleEventTriggeredThisRound = false;
  moleSwapInProgress = false;
  pendingReviewAfterMole = false;
}

function startTimer() {
  clearInterval(timerInterval);
  const start = performance.now();
  roundCountdownPlayed = false;

  timerInterval = setInterval(() => {
    const elapsed = (performance.now() - start) / 1000;
    remainingTime = Math.max(0, roundTime - elapsed);
    updateTopUI();

    if (!roundCountdownPlayed && roundTime > 3 && remainingTime <= 3 && remainingTime > 0) {
      roundCountdownPlayed = true;
      stopAudioPlayer(countdownPlayer);
      countdownPlayer = playTrack("countdown", { volume: 0.95 });
    }

    if (
      activeTrap &&
      round >= GAME_CONFIG.moleVisibleRound &&
      !moleEventTriggeredThisRound &&
      !moleSwapInProgress &&
      doesRunnerOverlapTrap()
    ) {
      triggerPatrolTrapCatch();
      return;
    }

    if (
      round >= GAME_CONFIG.moleEarliestRound &&
      !moleEventTriggeredThisRound &&
      !moleSwapInProgress &&
      moleAppears >= GAME_CONFIG.moleTriggerThreshold &&
      remainingTime <= roundTime * getMoleTriggerRatio()
    ) {
      if (remainingTime < GAME_CONFIG.moleMinimumTriggerTimeSeconds) {
        moleAppears = Math.max(
          0,
          moleAppears - GAME_CONFIG.moleMeterPenaltyOnLateBlock
        );
        moleEventTriggeredThisRound = true;
      } else {
        triggerMoleColumnSwap();
      }
    }

    if (remainingTime <= 0) {
      clearInterval(timerInterval);
      remainingTime = 0;
      stopRoundSoundtrack();
      if (moleSwapInProgress) {
        pendingReviewAfterMole = true;
      } else {
        lockBoard();
        showTimeoutAndReview();
      }
    }
  }, GAME_CONFIG.timerTickMs);
}

async function showTimeoutAndReview() {
  clearMoleRepeatTimeout();
  hideMoleRunner(true);
  hideTrapRunner(true);
  activeTrap = null;
  timeoutFlash.classList.remove("show");
  void timeoutFlash.offsetWidth;
  timeoutFlash.classList.add("show");
  await wait(GAME_CONFIG.timeoutFlashMs);
  timeoutFlash.classList.remove("show");
  startReview();
}

function lockBoard() {
  [...boardEl.children].forEach(el => el.classList.add("locked"));
}

function sortedSelectedIndexes() {
  const selected = [];
  for (let i = 0; i < tiles.length; i++) {
    if (tiles[i].selected) selected.push(i);
  }
  return selected;
}

function getUnrescuedCatIndexes() {
  const indexes = [];
  for (let i = 0; i < tiles.length; i++) {
    if (
      tiles[i].isCat &&
      tiles[i].state !== "rescued" &&
      tiles[i].state !== "nullified"
    ) {
      indexes.push(i);
    }
  }
  return indexes;
}

function fanfare(tileEl) {
  const fx = document.createElement("div");
  fx.className = "fanfare";
  fx.textContent = "🎉";
  tileEl.appendChild(fx);
  setTimeout(() => fx.remove(), GAME_CONFIG.effectDurationMs);
}

function nullMark(tileEl) {
  const fx = document.createElement("div");
  fx.className = "null-mark";
  fx.textContent = "💀";
  tileEl.appendChild(fx);
  setTimeout(() => fx.remove(), GAME_CONFIG.effectDurationMs);
}

function nullifyOneCat() {
  const candidates = getUnrescuedCatIndexes();
  if (candidates.length === 0) return false;

  const idx = candidates[0];
  tiles[idx].state = "nullified";

  const tileEl = boardEl.children[idx];
  tileEl.classList.remove("selected", "good", "bad");
  tileEl.classList.add("nullified");
  nullMark(tileEl);
  playNullifySound();

  return true;
}

function getMoleRunnerMetrics(columnIndex) {
  const columnIndexes = getColumnIndexes(columnIndex);
  const bottomTileIndex = columnIndexes[columnIndexes.length - 1];
  const bottomTileEl = boardEl.children[bottomTileIndex];

  if (!bottomTileEl) return null;

  const wrapRect = boardWrapEl.getBoundingClientRect();
  const tileRect = bottomTileEl.getBoundingClientRect();
  const size = clamp(tileRect.width * 1.18, 46, 88);
  const x = tileRect.left - wrapRect.left + tileRect.width / 2 - size / 2;
  const y = 6;

  return { x, y, size };
}

function setMoleRunnerTarget({ x, y, size }) {
  moleRunner.style.setProperty("--mole-size", `${size}px`);
  moleRunner.style.setProperty("--mole-x", `${x}px`);
  moleRunner.style.setProperty("--mole-y", `${y}px`);
}

function setTrapRunnerTarget({ x, y, size }) {
  trapRunner.style.setProperty("--trap-size", `${size}px`);
  trapRunner.style.setProperty("--trap-x", `${x}px`);
  trapRunner.style.setProperty("--trap-y", `${y}px`);
}

function setMoleRunnerPatrol({ startX, endX, y, size }) {
  moleRunner.style.setProperty("--mole-size", `${size}px`);
  moleRunner.style.setProperty("--mole-patrol-start", `${startX}px`);
  moleRunner.style.setProperty("--mole-patrol-end", `${endX}px`);
  moleRunner.style.setProperty("--mole-y", `${y}px`);
  moleRunner.style.setProperty("--mole-patrol-duration", `${GAME_CONFIG.molePatrolMs}ms`);
}

function hideMoleRunner(immediate = false) {
  moleRunner.classList.remove("show", "idle", "entering", "shaking", "exiting");

  if (immediate) {
    moleRunner.style.opacity = "0";
    moleRunner.style.transform = "translate(-150%, 26px) rotate(-3deg)";
  }
}

function hideTrapRunner(immediate = false) {
  trapRunner.classList.remove("show", "arming", "trapped", "exiting");

  if (immediate) {
    trapRunner.style.opacity = "0";
    trapRunner.style.transform = "translate(-180%, 72px) scale(1.45)";
  }
}

function getIdleMoleRunnerMetrics() {
  const wrapRect = boardWrapEl.getBoundingClientRect();
  const boardRect = boardEl.getBoundingClientRect();
  const firstTileEl = boardEl.children[0];
  const tileWidth = firstTileEl ? firstTileEl.getBoundingClientRect().width : boardRect.width / Math.max(currentCols, 1);
  const size = clamp(tileWidth * 1.18, 46, 88);
  const startX = boardRect.left - wrapRect.left - size * 0.08;
  const endX = boardRect.right - wrapRect.left - size * 0.92;
  const y = Math.max(6, size * 0.08);

  return { startX, endX, y, size };
}

function getTrapRunnerMetrics(columnIndex) {
  const columnIndexes = getColumnIndexes(columnIndex);
  const bottomTileIndex = columnIndexes[columnIndexes.length - 1];
  const tileEl = boardEl.children[bottomTileIndex];

  if (!tileEl) return null;

  const wrapRect = boardWrapEl.getBoundingClientRect();
  const tileRect = tileEl.getBoundingClientRect();
  const size = clamp(tileRect.width * 1.12, 44, 86);
  const x = tileRect.left - wrapRect.left + tileRect.width / 2 - size / 2;
  const y = Math.max(10, size * 0.14);

  return { col: columnIndex, x, y, size };
}

function getCenterColumnIndex() {
  return Math.floor(currentCols / 2);
}

function getCurrentMoleRunnerMetrics() {
  const wrapRect = boardWrapEl.getBoundingClientRect();
  const runnerRect = moleRunner.getBoundingClientRect();

  if (!runnerRect.width || !runnerRect.height) return null;

  const baseTop = wrapRect.top + wrapRect.height - runnerRect.height;
  return {
    x: runnerRect.left - wrapRect.left,
    y: runnerRect.top - baseTop,
    size: runnerRect.width
  };
}

function doesRunnerOverlapTrap() {
  if (!activeTrap || moleRunner.style.opacity === "0" || trapRunner.style.opacity === "0") {
    return false;
  }

  const moleRect = moleRunner.getBoundingClientRect();
  const trapRect = trapRunner.getBoundingClientRect();

  if (!moleRect.width || !moleRect.height || !trapRect.width || !trapRect.height) {
    return false;
  }

  const overlapWidth = Math.min(moleRect.right, trapRect.right) - Math.max(moleRect.left, trapRect.left);
  const overlapHeight = Math.min(moleRect.bottom, trapRect.bottom) - Math.max(moleRect.top, trapRect.top);

  return overlapWidth > 10 && overlapHeight > 10;
}

async function triggerPatrolTrapCatch() {
  if (!activeTrap || moleSwapInProgress || reviewInProgress || remainingTime <= 0) {
    return;
  }

  moleSwapInProgress = true;

  const moleMetrics = getCurrentMoleRunnerMetrics() || getMoleRunnerMetrics(activeTrap.col);
  const trapped = await triggerTrapCatch(moleMetrics);
  moleSwapInProgress = false;

  if (trapped) {
    moleEventTriggeredThisRound = true;
  } else {
    moleEventTriggeredThisRound = false;
    showIdleMoleRunner();
  }

  if (trapped && (pendingReviewAfterMole || remainingTime <= 0)) {
    pendingReviewAfterMole = false;
    lockBoard();
    showTimeoutAndReview();
  }
}

function showIdleMoleRunner() {
  if (round < GAME_CONFIG.moleVisibleRound || moleSwapInProgress || gameOver) {
    hideMoleRunner(true);
    return;
  }

  const metrics = getIdleMoleRunnerMetrics();
  setMoleRunnerPatrol(metrics);
  moleRunner.classList.remove("entering", "shaking", "exiting");
  moleRunner.classList.add("show", "idle");
  moleRunner.style.opacity = "1";
  moleRunner.style.transform = "";
}

async function alignMoleRunnerToColumn(columnIndex) {
  const targetMetrics = getMoleRunnerMetrics(columnIndex);
  if (!targetMetrics) return null;

  const currentMetrics = getCurrentMoleRunnerMetrics() || targetMetrics;
  hideMoleRunner(false);
  setMoleRunnerTarget(targetMetrics);

  moleRunner.classList.add("show");
  moleRunner.style.opacity = "1";
  moleRunner.style.transform = `translate(${currentMetrics.x}px, ${currentMetrics.y}px) rotate(-3deg)`;
  void moleRunner.offsetWidth;

  moleRunner.classList.add("entering");
  moleRunner.style.transform = `translate(${targetMetrics.x}px, ${targetMetrics.y}px) rotate(-3deg)`;

  await wait(GAME_CONFIG.moleEnterMs);
  moleRunner.classList.remove("entering");
  moleRunner.classList.add("shaking");
  await wait(GAME_CONFIG.moleAlignShakeMs);
  moleRunner.classList.remove("shaking");
  moleRunner.style.transform = `translate(${targetMetrics.x}px, ${targetMetrics.y}px) rotate(-3deg)`;

  return targetMetrics;
}

async function animateMoleRunnerOut(metrics) {
  if (!metrics) return;

  moleRunner.classList.remove("idle", "entering", "shaking");
  moleRunner.classList.add("show", "exiting");
  moleRunner.style.opacity = "0";
  moleRunner.style.transform = `translate(${metrics.x}px, ${metrics.y + 52}px) rotate(6deg)`;

  await wait(GAME_CONFIG.moleExitMs);
  hideMoleRunner(true);
}

async function deployTrapForRound() {
  if (!trapPurchasedForNextRound) {
    activeTrap = null;
    hideTrapRunner(true);
    return;
  }

  const trapTier = getTrapTierById(trapPurchasedForNextRound);
  trapPurchasedForNextRound = null;
  const trapCol = getCenterColumnIndex();
  const trapMetrics = getTrapRunnerMetrics(trapCol);

  if (!trapMetrics) {
    activeTrap = null;
    hideTrapRunner(true);
    return;
  }

  trapRunner.src = trapTier.image;
  activeTrap = {
    ...trapMetrics,
    tierId: trapTier.id,
    successChance: trapTier.successChance
  };
  setTrapRunnerTarget(trapMetrics);
  hideTrapRunner(true);
  void trapRunner.offsetWidth;

  trapRunner.classList.add("show", "arming");
  trapRunner.style.opacity = "1";
  trapRunner.style.transform = `translate(${trapMetrics.x}px, ${trapMetrics.y + 84}px) scale(1.45)`;
  void trapRunner.offsetWidth;
  trapRunner.style.transform = `translate(${trapMetrics.x}px, ${trapMetrics.y}px) scale(1)`;

  await wait(GAME_CONFIG.trapRevealMs);
  trapRunner.classList.remove("arming");
  trapRunner.style.transform = `translate(${trapMetrics.x}px, ${trapMetrics.y}px) scale(1)`;
}

async function triggerTrapCatch(moleMetrics) {
  if (!activeTrap || !moleMetrics) return false;

  const trapTier = getTrapTierById(activeTrap.tierId);
  const trapWorked = Math.random() < trapTier.successChance;

  moleRunner.classList.remove("idle", "entering", "exiting");
  trapRunner.classList.remove("arming", "exiting", "failing", "trapped");
  moleRunner.classList.add("show");
  moleRunner.style.opacity = "1";
  trapRunner.style.opacity = "1";
  moleRunner.style.transform = `translate(${activeTrap.x}px, ${activeTrap.y}px) rotate(-3deg)`;
  trapRunner.style.transform = `translate(${activeTrap.x}px, ${activeTrap.y}px) scale(1)`;

  if (trapWorked) {
    playTrack("trap", { volume: 0.95 });
    moleRunner.classList.add("shaking");
    trapRunner.classList.add("show", "trapped");

    await wait(GAME_CONFIG.trapCatchShakeMs);

    moleRunner.classList.remove("shaking");
    trapRunner.classList.remove("trapped");
    moleRunner.classList.add("show", "exiting");
    trapRunner.classList.add("show", "exiting");
    moleRunner.style.opacity = "0";
    trapRunner.style.opacity = "0";
    moleRunner.style.transform = `translate(${activeTrap.x}px, ${activeTrap.y + 52}px) rotate(6deg)`;
    trapRunner.style.transform = `translate(${activeTrap.x}px, ${activeTrap.y + 46}px) scale(0.84)`;

    await wait(Math.max(GAME_CONFIG.moleExitMs, GAME_CONFIG.trapExitMs));
    hideMoleRunner(true);
    hideTrapRunner(true);
    activeTrap = null;
    moleAppears = Math.max(0, moleAppears - GAME_CONFIG.trapMolePenalty);

    return true;
  }

  playTrack("error", { volume: 0.95 });
  trapRunner.classList.add("show", "failing");
  await wait(GAME_CONFIG.trapCatchShakeMs);
  trapRunner.classList.remove("failing");
  hideTrapRunner(true);
  unlockNextTrapTier(trapTier.id);
  activeTrap = null;

  return false;
}

function getColumnIndexes(columnIndex) {
  return Array.from({ length: currentRows }, (_, rowIndex) => rowIndex * currentCols + columnIndex);
}

function buildReplacementColumnData(catCount) {
  const catIndexes = new Set(buildSpacedCatIndexes(currentRows, catCount, 1));
  return Array.from({ length: currentRows }, (_, index) => (
    catIndexes.has(index) ? buildTileData("cat") : buildTileData("other")
  ));
}

async function triggerMoleColumnSwap() {
  moleEventTriggeredThisRound = true;
  moleSwapInProgress = true;

  if (activeTrap) {
    const trapColumnIndex = activeTrap.col;
    const moleMetrics = await alignMoleRunnerToColumn(trapColumnIndex);
    const trapped = await triggerTrapCatch(moleMetrics);

    if (trapped) {
      moleSwapInProgress = false;
      if (pendingReviewAfterMole || remainingTime <= 0) {
        pendingReviewAfterMole = false;
        lockBoard();
        showTimeoutAndReview();
      }
      return;
    }
  }

  playTrack("rocks", { volume: 0.95 });

  const columnIndex = Math.floor(Math.random() * currentCols);
  const columnIndexes = getColumnIndexes(columnIndex);
  const columnElements = columnIndexes.map(index => boardEl.children[index]);
  const outgoingCatCount = columnIndexes.filter(index => tiles[index].isCat).length;

  columnElements.forEach(tileEl => {
    tileEl.classList.remove("selected");
    tileEl.classList.add("mole-warning");
  });

  columnIndexes.forEach(index => {
    tiles[index].selected = false;
  });
  updatePickedCount();

  const moleMetrics = await alignMoleRunnerToColumn(columnIndex);

  moleAppears = Math.max(0, moleAppears - GAME_CONFIG.moleMeterPenaltyOnTrigger);

  await wait(GAME_CONFIG.moleWarningMs);

  columnElements.forEach(tileEl => {
    tileEl.classList.remove("mole-warning");
    tileEl.classList.add("mole-drop");
  });

  await wait(GAME_CONFIG.moleDropMs);

  columnElements.forEach(tileEl => {
    tileEl.classList.remove("mole-drop");
    tileEl.classList.add("mole-gap");
    tileEl.innerHTML = "";
  });

  await wait(GAME_CONFIG.moleGapMs);

  const replacementData = buildReplacementColumnData(outgoingCatCount);

  columnIndexes.forEach((index, replacementIndex) => {
    tiles[index] = replacementData[replacementIndex];
    const replacementTile = createTileButton(index);
    replacementTile.classList.add("mole-fall");
    boardEl.replaceChild(replacementTile, boardEl.children[index]);
  });

  const moleExitPromise = animateMoleRunnerOut(moleMetrics);
  await wait(GAME_CONFIG.moleFallMs);

  columnIndexes.forEach(index => {
    boardEl.children[index].classList.remove("mole-fall");
  });

  await moleExitPromise;

  moleSwapInProgress = false;
  scheduleMoleRepeatCheck();

  if (pendingReviewAfterMole || remainingTime <= 0) {
    pendingReviewAfterMole = false;
    lockBoard();
    showTimeoutAndReview();
  }
}

async function startReview() {
  clearMoleRepeatTimeout();
  reviewInProgress = true;
  const selectedIndexes = sortedSelectedIndexes();
  const tileEls = [...boardEl.children];
  const reviewStepDelay = getScaledReviewStepDelay();
  rescuedThisRound = 0;
  bonusClockEarnedThisRound = false;
  earnedHairballThisRound = false;
  yarnHairballsEarnedThisRound = 0;

  for (const idx of selectedIndexes) {
    const t = tiles[idx];
    const el = tileEls[idx];

    if (t.isCat && t.state === "idle") {
      rescuedThisRound++;
      t.state = "rescued";
      el.classList.remove("selected");
      el.classList.add("good");
      fanfare(el);
      playGoodSound();
    } else if (t.isClock && t.state === "idle") {
      bonusClockEarnedThisRound = true;
      t.state = "bonus";
      el.classList.remove("selected");
      el.classList.add("good");
      fanfare(el);
    } else if (t.isYarn && t.state === "idle") {
      yarnHairballsEarnedThisRound += GAME_CONFIG.bonusYarnHairballs;
      t.state = "bonus";
      el.classList.remove("selected");
      el.classList.add("good");
      fanfare(el);
    } else if (!t.isCat) {
      t.state = "wrong";
      el.classList.remove("selected");
      el.classList.add("bad");
      playBadSound();
      nullifyOneCat();
    }

    await wait(reviewStepDelay);
  }

  const missedCatIndexes = [];
  for (let i = 0; i < tiles.length; i++) {
    if (tiles[i].isCat && tiles[i].state === "idle" && !tiles[i].selected) {
      tiles[i].state = "missed";
      missedCatIndexes.push(i);
    }
  }

  if (missedCatIndexes.length > 0) {
    playBadSound();

    missedCatIndexes.forEach(idx => {
      tileEls[idx].classList.remove("selected");
      tileEls[idx].classList.add("missed");
    });

    await wait(GAME_CONFIG.missedRevealDelayMs);
  }

  await wait(GAME_CONFIG.resultScreenDelayMs);
  showResult();
  reviewInProgress = false;
}

function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function formatBonusLine(delta) {
  if (delta > 0) {
    return copy("earnedBonusLine", delta);
  }
  if (delta < 0) {
    return copy("fritoStealsLine", Math.abs(delta));
  }
  return copy("noBonusLine");
}

function randomFakePlayerName() {
  const names = [
    "xXCatLordXx",
    "MoleDestroyer77",
    "SirWhiskersLOL",
    "ToastyPaws9000",
    "FritoFan_420",
    "SneakyTabbyPro",
    "DrMeowgles",
    "DumpsterTiger99",
    "LaserPawzXD",
    "CrunchyKitten88"
  ];

  return randomFrom(names);
}

function getTrapTierById(tierId) {
  return TRAP_TIERS.find(tier => tier.id === tierId) || TRAP_TIERS[0];
}

function getTrapTierIndex(tierId) {
  return TRAP_TIERS.findIndex(tier => tier.id === tierId);
}

function unlockNextTrapTier(failedTierId) {
  const failedTierIndex = getTrapTierIndex(failedTierId);
  if (failedTierIndex === -1) return;

  if (failedTierId === "diamond") {
    diamondTrapFailed = true;
  }

  currentTrapTierIndex = Math.max(
    currentTrapTierIndex,
    Math.min(TRAP_TIERS.length - 1, failedTierIndex + 1)
  );
}

function getTimeOfferOption() {
  return {
    kind: "time",
    offerId: "time"
  };
}

function getMuteOfferOption() {
  return {
    kind: "mute",
    offerId: "mute",
    cost: GAME_CONFIG.muteOfferCostHairballs
  };
}

function getExitOfferOption() {
  return {
    kind: "exit",
    offerId: "exit",
    cost: GAME_CONFIG.exitOfferCostHairballs
  };
}

function canShowTimeOffer() {
  return totalHairballs > 0;
}

function getTimeOfferCost() {
  return totalHairballs;
}

function getTimeOfferSeconds(hairballCount = getTimeOfferCost()) {
  return hairballCount * 2;
}

function getSpecialOfferOptions(roundNumber = round) {
  if (nextRoundTime <= 5) {
    return canShowTimeOffer() ? [getTimeOfferOption()] : [];
  }

  if (roundNumber === GAME_CONFIG.muteOfferRound) {
    const earlyCatOffers = [];
    if (!muteControlUnlocked) earlyCatOffers.push(getMuteOfferOption());
    if (!exitControlUnlocked) earlyCatOffers.push(getExitOfferOption());
    if (earlyCatOffers.length > 0) {
      return [randomFrom(earlyCatOffers)];
    }
  }

  if (roundNumber === GAME_CONFIG.trapTeaseRound) {
    return [{
      kind: "trap",
      offerId: "basic",
      tierId: "basic",
      cost: GAME_CONFIG.trapTeaseCostHairballs
    }];
  }

  if (roundNumber >= GAME_CONFIG.trapOfferRound && Math.random() < GAME_CONFIG.trapOfferChance) {
    const offerPool = [];

    if (!muteControlUnlocked && roundNumber > GAME_CONFIG.muteOfferRound) {
      offerPool.push(getMuteOfferOption());
    }
    if (!exitControlUnlocked && roundNumber > GAME_CONFIG.muteOfferRound) {
      offerPool.push(getExitOfferOption());
    }

    if (roundNumber >= GAME_CONFIG.timeOfferStartsAtRound && canShowTimeOffer()) {
      offerPool.push(getTimeOfferOption());
    }

    offerPool.push({
      kind: "trap",
      offerId: TRAP_TIERS[currentTrapTierIndex].id,
      tierId: TRAP_TIERS[currentTrapTierIndex].id,
      cost: TRAP_TIERS[currentTrapTierIndex].costMin
    });

    if (roundNumber >= GAME_CONFIG.timeOfferStartsAtRound && Math.random() >= GAME_CONFIG.timeOfferShare) {
      const timeIndex = offerPool.findIndex(option => option.kind === "time");
      if (timeIndex !== -1) {
        offerPool.splice(timeIndex, 1);
      }
    }

    return [randomFrom(offerPool)];
  }

  if (
    roundNumber > GAME_CONFIG.muteOfferRound &&
    (!muteControlUnlocked || !exitControlUnlocked) &&
    Math.random() < GAME_CONFIG.trapOfferChance
  ) {
    const catOffers = [];
    if (!muteControlUnlocked) catOffers.push(getMuteOfferOption());
    if (!exitControlUnlocked) catOffers.push(getExitOfferOption());
    return catOffers.length > 0 ? [randomFrom(catOffers)] : [];
  }

  return [];
}

function hideTrapOffer() {
  trapOffer.classList.add("hidden");
  trapOffer.classList.remove("purchased", "compact");
  currentSpecialOfferOptions = [];
  currentSpecialOfferKind = "trap";
  currentSpecialOfferSellerImage = "images/racoon.png";
  currentSpecialOfferState = "hidden";
  currentOfferSummaryData = null;
  trapOfferSeller.src = "images/racoon.png";
  trapOfferMessage.textContent = "";
  trapOfferMessage.classList.add("hidden");
  trapOfferNote.textContent = "";
  trapOfferNote.classList.add("hidden");
  trapOfferSummary.classList.add("hidden");
  trapOfferSummaryImage.src = "images/trap.png";
  trapOfferSummaryText.textContent = copy("trap_basic");
  trapOfferRows.innerHTML = "";
  trapOfferRows.classList.remove("hidden");
  trapOfferDismissBtn.classList.add("hidden");
}

function renderSpecialOffer(options) {
  currentSpecialOfferOptions = options;
  currentSpecialOfferState = "offer";
  currentOfferSummaryData = null;
  trapOffer.classList.remove("hidden", "purchased", "compact");
  trapOfferSummary.classList.add("hidden");
  trapOfferRows.classList.remove("hidden");
  trapOfferDismissBtn.classList.add("hidden");

  const primaryOption = options[0] || null;
  currentSpecialOfferKind = primaryOption?.kind || "trap";
  currentSpecialOfferSellerImage = (currentSpecialOfferKind === "time" || currentSpecialOfferKind === "mute" || currentSpecialOfferKind === "exit")
    ? "images/cat.png"
    : "images/racoon.png";
  trapOfferSeller.src = currentSpecialOfferSellerImage;

  if (currentSpecialOfferKind === "time") {
    trapOfferMessage.textContent = copy("tradeHairballs", getTimeOfferCost(), getTimeOfferSeconds());
    trapOfferMessage.classList.remove("hidden");
    trapOfferNote.textContent = "";
    trapOfferNote.classList.add("hidden");
  } else if (currentSpecialOfferKind === "mute") {
    trapOfferMessage.textContent = copy("muteOfferMessage");
    trapOfferMessage.classList.remove("hidden");
    trapOfferNote.textContent = "";
    trapOfferNote.classList.add("hidden");
  } else if (currentSpecialOfferKind === "exit") {
    trapOfferMessage.textContent = copy("exitOfferMessage");
    trapOfferMessage.classList.remove("hidden");
    trapOfferNote.textContent = "";
    trapOfferNote.classList.add("hidden");
  } else {
    const offeredTierIndex = primaryOption
      ? getTrapTierIndex(primaryOption.tierId)
      : -1;

    if (offeredTierIndex <= 0) {
      trapOfferMessage.textContent = copy("trapsCatchMole");
      trapOfferMessage.classList.remove("hidden");
    } else {
      trapOfferMessage.textContent = "";
      trapOfferMessage.classList.add("hidden");
    }

    if (offeredTierIndex > 0) {
      if (offeredTierIndex === TRAP_TIERS.length - 1 && diamondTrapFailed) {
        trapOfferNote.textContent = copy("bestForNow");
      } else {
        trapOfferNote.textContent = copy("tierUpgradeNote", getTrapTierLabel(primaryOption.tierId, true));
      }
      trapOfferNote.classList.remove("hidden");
    } else {
      trapOfferNote.textContent = "";
      trapOfferNote.classList.add("hidden");
    }
  }

  trapOfferRows.innerHTML = options.map(option => {
    const isTimeOffer = option.kind === "time";
    const isMuteOffer = option.kind === "mute";
    const isExitOffer = option.kind === "exit";
    const tier = (isTimeOffer || isMuteOffer || isExitOffer) ? null : getTrapTierById(option.tierId);
    const rowTitle = isTimeOffer
      ? copy("timeOfferTitle", getTimeOfferSeconds())
      : isMuteOffer
        ? copy("muteOfferTitle")
        : isExitOffer
          ? copy("exitOfferTitle")
        : getTrapTierLabel(tier.id);
    const rowVisual = isMuteOffer
      ? `<div class="trap-offer-row-icon" aria-hidden="true">🔇</div>`
      : isExitOffer
        ? `<div class="trap-offer-row-button" aria-hidden="true">${copy("exit")}</div>`
      : `<img class="trap-offer-row-image" src="${isTimeOffer ? "images/time.png" : tier.image}" alt="" />`;
    const rowCost = isTimeOffer ? getTimeOfferCost() : option.cost;
    return `
      <div class="trap-offer-row${isTimeOffer ? " trap-offer-row-time" : ""}">
        ${rowVisual}
        <div class="trap-offer-row-copy">
          <div class="trap-offer-row-title">${rowTitle}</div>
          <div class="trap-offer-row-meta">${rowCost} ${copy("hairballUnit", rowCost)}</div>
        </div>
        <button class="cta-btn trap-offer-buy" type="button" data-offer-id="${option.offerId}">${copy("buy")}</button>
      </div>
    `;
  }).join("");
}

function showPurchasedOfferSummary(summaryData) {
  currentSpecialOfferState = "summary";
  currentOfferSummaryData = summaryData;
  const summaryImage = summaryData.kind === "time"
    ? "images/time.png"
    : summaryData.kind === "mute"
      ? "images/cat.png"
      : summaryData.kind === "exit"
        ? "images/cat.png"
    : getTrapTierById(summaryData.tierId).image;
  const summaryLabel = summaryData.kind === "time"
    ? copy("timeOfferSummary", summaryData.seconds)
    : summaryData.kind === "mute"
      ? copy("muteOfferSummary")
      : summaryData.kind === "exit"
        ? copy("exitOfferSummary")
    : `${getTrapTierLabel(summaryData.tierId)}: 1`;

  trapOffer.classList.remove("hidden", "compact");
  trapOffer.classList.add("purchased");
  trapOfferSeller.src = currentSpecialOfferSellerImage;
  trapOfferMessage.textContent = "";
  trapOfferMessage.classList.add("hidden");
  trapOfferNote.classList.add("hidden");
  trapOfferRows.classList.add("hidden");
  trapOfferDismissBtn.classList.add("hidden");
  trapOfferSummaryImage.src = summaryImage;
  trapOfferSummaryText.textContent = summaryLabel;
  trapOfferSummary.classList.remove("hidden");
}

function showTrapOfferInsufficient() {
  currentSpecialOfferState = "insufficient";
  trapOffer.classList.remove("hidden", "purchased", "compact");
  trapOfferSeller.src = currentSpecialOfferKind === "trap"
    ? "images/sad_racoon.png"
    : currentSpecialOfferSellerImage;
  trapOfferMessage.textContent = copy("notEnoughHairballs");
  trapOfferMessage.classList.remove("hidden");
  trapOfferNote.classList.add("hidden");
  trapOfferSummary.classList.add("hidden");
  trapOfferRows.classList.add("hidden");
  trapOfferDismissBtn.classList.remove("hidden");
}

function renderRoundResultText() {
  const lines = [`<strong>${copy("catsRescued", rescuedThisRound, targetCats)}</strong>`];

  if (round === GAME_CONFIG.startingRound) {
    lines.push(`<span class="bonus-line">${copy("firstRoundHurry", GAME_CONFIG.onboardingTimeStealSeconds, nextRoundTime)}</span>`);
  } else if (currentResultBonusLine) {
    lines.push(`<span class="bonus-line">${currentResultBonusLine}</span>`);
  }

  currentResultExtraLines.forEach(line => {
    lines.push(`<span class="bonus-line">${line}</span>`);
  });

  resultText.innerHTML = lines.join("<br>");
}

function showResult() {
  const missedCats = Math.max(0, targetCats - rescuedThisRound);
  const missedCatPenaltyEnabled = round >= GAME_CONFIG.missedCatPenaltyStartsAtRound;
  let delta = 0;
  let clockDelta = 0;

  stopRoundSoundtrack();

  totalRescuedCats += rescuedThisRound;
  totalMissedCats += missedCats;

  if (rescuedThisRound === targetCats) {
    delta = GAME_CONFIG.perfectRescueBonusSeconds;
    totalHairballs += 1;
    earnedHairballThisRound = true;
    nextRoundCats = Math.min(
      targetCats + GAME_CONFIG.catsAddedPerRound,
      getBoardSize(round + 1).tileCount
    );
  } else {
    delta = missedCatPenaltyEnabled
      ? -(
          Math.ceil(missedCats / GAME_CONFIG.missedCatsPerPenaltyStep) *
          GAME_CONFIG.missedCatPenaltySeconds
        )
      : 0;
    nextRoundCats = targetCats;
  }

  if (bonusClockEarnedThisRound) {
    clockDelta = GAME_CONFIG.bonusClockSeconds;
  }

  if (yarnHairballsEarnedThisRound > 0) {
    totalHairballs += yarnHairballsEarnedThisRound;
  }

  if (round === GAME_CONFIG.startingRound) {
    delta -= GAME_CONFIG.onboardingTimeStealSeconds;
  }

  nextRoundTime = roundTime + delta + clockDelta;
  gameOver = nextRoundTime < GAME_CONFIG.minimumNextRoundTimeSeconds;
  resultTitle.textContent = getRoundResultTitle();

  const bonusLine = formatBonusLine(delta);
  currentResultBonusLine = bonusLine;
  currentResultExtraLines = [];
  if (bonusClockEarnedThisRound) {
    currentResultExtraLines.push(copy("earnedClockLine", GAME_CONFIG.bonusClockSeconds));
  }
  if (yarnHairballsEarnedThisRound > 0) {
    currentResultExtraLines.push(copy("earnedHairballLine", yarnHairballsEarnedThisRound));
  }
  updateSummaryTexts();
  const totalCatsSeen = totalRescuedCats + totalMissedCats;
  const rescueScore = totalCatsSeen === 0
    ? 0
    : Math.round((totalRescuedCats / totalCatsSeen) * 100);
  currentRescueScore = rescueScore;

  if (gameOver) {
    const rivalMultiplier = 1.1 + Math.random() * 0.15;
    const rivalScore = rescueScore === 0
      ? Math.floor(10 + Math.random() * 16)
      : Math.min(100, Math.round(rescueScore * rivalMultiplier));
    const rivalName = randomFakePlayerName();
    currentRivalName = rivalName;
    currentRivalScore = rivalScore;
    resultTitle.textContent = copy("gameOver");
    renderGameOverText();
    resourceSummary.classList.add("hidden");
    timeNote.textContent = "";
    hideTrapOffer();
    nextBtn.classList.add("hidden");
    exitBtn.textContent = copy("startOver");
    exitBtn.classList.remove("hidden");
    playGameOverSound();
  } else {
    playTrack("start", { volume: 0.95 });
    renderRoundResultText();
    resourceSummary.classList.remove("hidden");
    timeNote.textContent = "";
    const specialOfferOptions = getSpecialOfferOptions(round);
    const shouldForceTimeOffer = specialOfferOptions.some(option => option.kind === "time");

    if (specialOfferOptions.length > 0 && (!trapPurchasedForNextRound || shouldForceTimeOffer)) {
      renderSpecialOffer(specialOfferOptions);
    } else {
      hideTrapOffer();
    }
    nextBtn.textContent = copy("nextRound");
    nextBtn.classList.remove("hidden");
    exitBtn.textContent = copy("exit");
    exitBtn.classList.add("hidden");
  }

  resultPanel.classList.add("show");
}

async function beginRound() {
  landingPanel.classList.remove("show");
  splashPanel.classList.remove("show");
  gameEl.classList.remove("home-screen-active");
  resultPanel.classList.remove("show");
  timeoutFlash.classList.remove("show");
  hideTrapOffer();
  hideMoleRunner(true);
  prepareRoundHazards();
  remainingTime = roundTime;
  createBoard();
  updateTopUI();
  playRoundStartSound();
  await deployTrapForRound();
  showIdleMoleRunner();
  startTimer();
}

function nextRound() {
  if (gameOver) return;

  roundTime = nextRoundTime;
  targetCats = nextRoundCats;
  round++;
  beginRound();
}

function initGame() {
  showHomeScreen();
}

playBtn.addEventListener("click", () => {
  ensureAudio();
  showIntroScreen();
});

startBtn.addEventListener("click", () => {
  ensureAudio();
  beginRound();
});

languageToggle.addEventListener("click", event => {
  const button = event.target.closest(".language-toggle-btn");
  if (!button || button.dataset.lang === currentLanguage) {
    return;
  }

  if (!setCurrentLanguage(button.dataset.lang, { persist: true })) {
    return;
  }

  updateLanguageUI();
});

muteToggle.addEventListener("click", () => {
  if (!muteControlUnlocked) return;
  isMuted = !isMuted;
  ensureAudio();
  applyMuteState();
});

bottomExitBtn.addEventListener("click", () => {
  if (!exitControlUnlocked) return;
  showHomeScreen();
});

nextBtn.addEventListener("click", () => {
  ensureAudio();
  nextRound();
});

trapOfferRows.addEventListener("click", event => {
  const buyButton = event.target.closest(".trap-offer-buy");
  if (!buyButton) return;

  if (trapOffer.classList.contains("hidden") || trapPurchasedForNextRound || gameOver) {
    return;
  }

  const selectedOfferId = buyButton.dataset.offerId;
  const selectedOption = currentSpecialOfferOptions.find(option => option.offerId === selectedOfferId);

  if (!selectedOption) {
    return;
  }

  const purchaseCost = selectedOption.kind === "time"
    ? getTimeOfferCost()
    : selectedOption.cost;

  if (totalHairballs < purchaseCost) {
    showTrapOfferInsufficient();
    return;
  }

  totalHairballs -= purchaseCost;
  playTrack("buff", { volume: 0.95 });

  if (selectedOption.kind === "time") {
    const purchasedSeconds = getTimeOfferSeconds();
    nextRoundTime += purchasedSeconds;
    showPurchasedOfferSummary({
      kind: "time",
      seconds: purchasedSeconds
    });
  } else if (selectedOption.kind === "mute") {
    muteControlUnlocked = true;
    showPurchasedOfferSummary({
      kind: "mute"
    });
    updateMuteButton();
  } else if (selectedOption.kind === "exit") {
    exitControlUnlocked = true;
    showPurchasedOfferSummary({
      kind: "exit"
    });
    updateBottomExitButton();
  } else {
    trapPurchasedForNextRound = selectedOption.tierId;
    showPurchasedOfferSummary({
      kind: "trap",
      tierId: selectedOption.tierId
    });
  }

  updateSummaryTexts();
  renderRoundResultText();
});

trapOfferDismissBtn.addEventListener("click", () => {
  hideTrapOffer();
});

exitBtn.addEventListener("click", () => {
  showHomeScreen();
});

document.addEventListener("visibilitychange", handleVisibilityAudioChange);
document.addEventListener("gesturestart", preventIosGestures, { passive: false });
document.addEventListener("gesturechange", preventIosGestures, { passive: false });
document.addEventListener("gestureend", preventIosGestures, { passive: false });
window.addEventListener("pagehide", pauseAppAudioForVisibility);
window.addEventListener("blur", pauseAppAudioForVisibility);
window.addEventListener("focus", () => {
  if (!document.hidden) {
    resumeAppAudioFromVisibility();
  }
});

setCurrentLanguage(getStoredPreferredLanguage() || detectPreferredLanguage());

window.addEventListener("languagechange", () => {
  if (getStoredPreferredLanguage()) {
    return;
  }

  if (setCurrentLanguage(detectPreferredLanguage())) {
    updateLanguageUI();
  }
});

initGame();
