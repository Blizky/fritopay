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
  startingTimeSeconds: 8,
  // How many seconds the player gets in round 1 on Easy mode.
  easyModeStartingTimeSeconds: 10,
  // Extra seconds Easy mode grants after each completed round.
  easyModeRoundBonusSeconds: 2,
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
  muteOfferCostHairballs: 1,
  // The cat first offers the score board on this round.
  scoreboardOfferRound: 4,
  // Hairball cost to unlock the score board.
  scoreboardOfferCostHairballs: 1,
  // The cat first offers the exit button on this round.
  exitOfferRound: 5,
  // Hairball cost to unlock the bottom exit button.
  exitOfferCostHairballs: 2,
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
  bonusYarnStartsAtRound: 3,
  // Chance that the bonus yarn appears before the late-game boost.
  bonusYarnChance: 0.45,
  // Chance that the bonus yarn appears from round 11 onward.
  bonusYarnChanceAfterRound10: 0.7,
  // Hairballs added when the bonus yarn is selected.
  bonusYarnHairballs: 1,
  // Start the memory bonus challenge from round 2 onward.
  roundBonusStartsAtRound: 2,
  // How many memorized emoji targets appear each challenge round.
  roundBonusEmojiCount: 3,
  // Seconds granted by the memory bonus time reward.
  roundBonusTimeRewardSeconds: 3,
  // Hairballs granted by the memory bonus hairball reward.
  roundBonusHairballRewardCount: 2,
  // Points awarded whenever the memory bonus is completed.
  roundBonusScorePoints: 10,
  // Start adding cassette tiles from this round onward.
  bonusCassetteStartsAtRound: 6,
  // Chance a cassette tile appears on eligible rounds.
  bonusCassetteChance: 0.5,
  // Maximum number of unlockable background music tracks.
  maxCassetteMusicTracks: 5,
  // Rounds up to this one keep bonus tiles glowing the whole time.
  bonusHintAlwaysThroughRound: 5,
  // Rounds up to this one start bonus glow at 50% remaining time.
  bonusHintHalfTimeThroughRound: 10,
  // Rounds up to this one start bonus glow at 25% remaining time.
  bonusHintQuarterTimeThroughRound: 20,
  // Missed cats start removing time from this round onward.
  missedCatPenaltyStartsAtRound: 1,
  // Number of missed or canceled cats that count as one time penalty step.
  missedCatsPerPenaltyStep: 1,
  // Seconds removed from the next round for each penalty step.
  missedCatPenaltySeconds: 1,
  // Seconds removed from the next round for each wrong tile picked.
  invalidTilePenaltySeconds: 1,
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
  resultScreenDelayMs: 1000,
  // How long fanfare and nullification effects stay on screen.
  effectDurationMs: 800,
  // Show a harmless tutorial mole preview on this round.
  molePreviewRound: 4,
  // The mole event cannot happen before this round.
  moleEarliestRound: 5,
  // Chance that the mole appears once during rounds 5 through 9.
  moleRound5To9Chance: 0.75,
  // Chance that the mole appears once during rounds 10 through 14.
  moleRound10To14Chance: 0.8,
  // Chance that the mole appears once during round 15 and beyond.
  moleRound15PlusChance: 0.9,
  // The mole can only start this many event bursts in one round.
  moleMaxEventsPerRound: 2,
  // The second mole event uses this share of the normal round chance.
  moleSecondEventChanceMultiplier: 0.5,
  // How long a mole event lasts during rounds 5 through 9.
  moleRound5To9EventDurationMs: 4000,
  // How long a mole event lasts during rounds 10 through 14.
  moleRound10To14EventDurationMs: 5000,
  // How long a mole event lasts during round 15 and beyond.
  moleRound15PlusEventDurationMs: 6000,
  // Chance that a non-cat search popup repops faster than normal.
  moleSearchFastRepeatChance: 0.5,
  // Earliest time for the first mole event once a round begins.
  moleFirstEventDelayMinMs: 1000,
  // Latest time for the first mole event once a round begins.
  moleFirstEventDelayMaxMs: 2000,
  // Wait this long after a mole attack before it can return in the same round.
  moleRepeatDelayMs: 400,
  // Faster repop used by some non-cat search popups to break the rhythm.
  moleSearchFastRepeatDelayMs: 200,
  // Earliest delay before another mole event can begin after one ends.
  moleFollowupEventDelayMinMs: 1000,
  // Latest delay before another mole event can begin after one ends.
  moleFollowupEventDelayMaxMs: 2000,
  // The mole cannot start a new popup once the round is below this many seconds.
  moleMinimumStartTimeRemainingSeconds: 3,
  // Chance that a mole attack targets a cat tile first.
  moleCatTargetChance: 0.25,
  // Time for the mole to pop up over a tile.
  molePopupRiseMs: 250,
  // How long the player gets to whack the mole once it is up before it steals the tile.
  moleTapWindowMs: 800,
  // How long the player gets to whack the mole on Easy mode before it steals the tile.
  easyModeMoleTapWindowMs: 1000,
  // Fully-up window while the mole is visible on a non-target search tile.
  moleSearchTapWindowMs: 350,
  // How long the hit flash and shake stays on the mole before it disappears.
  moleHitImpactMs: 350,
  // How long the tile shakes before a cat is marked as stolen.
  moleStealShakeMs: 320,
  // How long the mole takes to duck away after an attack.
  moleExitMs: 250
};

const CAT_EMOJIS = ["🐱", "🐈", "🐈‍⬛", "😺", "😸", "😻", "😹", "🙀", "😿", "😽", "😾", "😼"];
const CAT_EMOJI_SET = new Set(CAT_EMOJIS);
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
  moleMusic: "sound/music/mole.mp3",
  countdown: "sound/countdown.mp3",
  gameOver: "sound/game_over.mp3",
  laugh: "sound/laugh.mp3",
  buff: "sound/buff.mp3",
  error: "sound/error.mp3",
  shine: "sound/shine.mp3",
  trap: "sound/trap.mp3",
  trapFail: "sound/trap_fail.mp3",
  rocks: "sound/rocks.mp3",
  molePopIn: "sound/mole_popin.mp3",
  moleHit: "sound/pop2.mp3",
  moleSteal: "sound/smash.mp3"
};

const CASSETTE_MUSIC_TRACKS = Array.from(
  { length: GAME_CONFIG.maxCassetteMusicTracks },
  (_, index) => `sound/music/music${index + 1}.mp3`
);
const ROUND_BONUS_REWARD_KINDS = ["time", "hairballs", "trap"];

const TRAP_TIERS = [
  {
    id: "basic",
    name: "Regular Trap",
    image: "images/trap.png",
    successChance: 0.5,
    costMin: 1,
    costMax: 1
  },
  {
    id: "steel",
    name: "Steel Trap",
    image: "images/steel_trap.png",
    successChance: 0.6,
    costMin: 1,
    costMax: 2
  },
  {
    id: "gold",
    name: "Gold Trap",
    image: "images/gold_trap.png",
    successChance: 0.7,
    costMin: 2,
    costMax: 4
  },
  {
    id: "diamond",
    name: "Diamond Trap",
    image: "images/diamond_trap.png",
    successChance: 0.8,
    costMin: 2,
    costMax: 5
  }
];

const boardEl = document.getElementById("board");
const boardWrapEl = boardEl.parentElement;
const gameEl = document.querySelector(".game");
const timerLabel = document.getElementById("timerLabel");
const targetLabel = document.getElementById("targetLabel");
const roundLabel = document.getElementById("roundLabel");
const scoreLabel = document.getElementById("scoreLabel");
const trapInventoryEl = document.getElementById("trapInventory");
const bottomExitBtn = document.getElementById("bottomExitBtn");
const pickedLabel = document.getElementById("pickedLabel");
const languageToggle = document.getElementById("languageToggle");
const muteToggle = document.getElementById("muteToggle");
const progressFill = document.getElementById("progressFill");
const moleRunner = document.getElementById("moleRunner");

const landingPanel = document.getElementById("landingPanel");
const introPanel = document.getElementById("introPanel");
const introLanguageToggle = document.getElementById("introLanguageToggle");
const startScreenText = document.getElementById("startScreenText");
const startTimeNote = document.getElementById("startTimeNote");
const playBtn = document.getElementById("playBtn");
const startBtn = document.getElementById("startBtn");
const easyModeBtn = document.getElementById("easyModeBtn");
const clearCacheBtn = document.getElementById("clearCacheBtn");
const timeoutFlash = document.getElementById("timeoutFlash");

const resultPanel = document.getElementById("resultPanel");
const resultTitle = document.getElementById("resultTitle");
const resultText = document.getElementById("resultText");
const resultBreakdown = document.getElementById("resultBreakdown");
const trapOfferOverlay = document.getElementById("trapOfferOverlay");
const trapOffer = document.getElementById("trapOffer");
const trapOfferSeller = document.getElementById("trapOfferSeller");
const trapOfferMessage = document.getElementById("trapOfferMessage");
const trapOfferNote = document.getElementById("trapOfferNote");
const trapOfferSummary = document.getElementById("trapOfferSummary");
const trapOfferSummaryVisual = document.getElementById("trapOfferSummaryVisual");
const trapOfferSummaryItem = document.getElementById("trapOfferSummaryItem");
const trapOfferSummaryImage = document.getElementById("trapOfferSummaryImage");
const trapOfferSummaryText = document.getElementById("trapOfferSummaryText");
const trapOfferRows = document.getElementById("trapOfferRows");
const trapOfferDismissBtn = document.getElementById("trapOfferDismissBtn");
const trapOfferCloseBtn = document.getElementById("trapOfferCloseBtn");
const resourceSummary = document.getElementById("resourceSummary");
const hairballSummaryText = document.getElementById("hairballSummaryText");
const bottomHairballCount = document.getElementById("bottomHairballCount");
const resultTimeBar = document.getElementById("resultTimeBar");
const resultTimeBarFill = document.getElementById("resultTimeBarFill");
const resultTimeBarLoss = document.getElementById("resultTimeBarLoss");
const resultTimeBarGain = document.getElementById("resultTimeBarGain");
const resultTimeBarValue = document.getElementById("resultTimeBarValue");
const roundBonusPanel = document.getElementById("roundBonusPanel");
const roundBonusTitle = document.getElementById("roundBonusTitle");
const roundBonusItems = document.getElementById("roundBonusItems");
const timeNote = document.getElementById("timeNote");
const nextBtn = document.getElementById("nextBtn");
const exitBtn = document.getElementById("exitBtn");

let round = GAME_CONFIG.startingRound;
let targetCats = GAME_CONFIG.startingCats;
let roundTime = GAME_CONFIG.startingTimeSeconds;
let remainingTime = roundTime;
let currentGameMode = "normal";
let timerInterval = null;
let reviewInProgress = false;
let tiles = [];
let rescuedThisRound = 0;
let totalRescuedCats = 0;
let totalMissedCats = 0;
let totalHairballs = 0;
let totalScore = 0;
let nextRoundTime = roundTime;
let nextRoundCats = targetCats;
let currentRoundResultSummary = null;
let gameOver = false;
let audioCtx = null;
let currentRows = GAME_CONFIG.rows;
let currentCols = GAME_CONFIG.cols;
let currentTileCount = currentRows * currentCols;
let moleNextEventStartsAt = 0;
let moleSwapInProgress = false;
let pendingReviewAfterMole = false;
let moleAttacksTriggeredThisRound = 0;
let moleEventsStartedThisRound = 0;
let moleEventBurstActive = false;
let moleEventEndsAt = 0;
let moleCurrentAttackIsPreview = false;
let moleActiveTileIndex = -1;
let moleAttackTargetIsCat = false;
let moleAttackTargetIsStealable = false;
let moleAttackTapped = false;
let moleUsedTileIndexes = new Set();
let trapInventory = [];
let bonusClockEarnedThisRound = false;
let clockTilesSelectedThisRound = 0;
let cassetteTilesSelectedThisRound = 0;
let activeRoundBonusChallenge = null;
let upcomingRoundBonusChallenge = null;
let selectedRoundBonusEmojisAtRoundEnd = new Set();
let currentSpecialOfferOptions = [];
let currentSpecialOfferKind = "trap";
let currentSpecialOfferSellerImage = "images/racoon.png";
let earnedHairballThisRound = false;
let yarnHairballsEarnedThisRound = 0;
let yarnTilesSelectedThisRound = 0;
let currentTrapTierIndex = 0;
let diamondTrapFailed = false;
let currentLanguage = "en";
let currentSpecialOfferState = "hidden";
let currentOfferSummaryData = null;
let currentRescueScore = 0;
let currentRoundScore = 0;
let currentRivalName = "";
let currentRivalScore = 0;
let resultTimeBarTimeoutIds = [];
let resultTimeBarFrameId = null;
let resultTimeBarAnimationToken = 0;
let trapOfferRevealTimeoutId = null;
let muteControlUnlocked = true;
let exitControlUnlocked = true;
let scoreboardUnlocked = true;
let moleCatsLostThisRound = 0;
let currentRoundRescuableCats = targetCats;
let currentRoundMissedCats = 0;
let cassetteCount = 0;
let isMuted = false;
let wrongTilesSelectedThisRound = 0;
let moleRepeatTimeoutId = null;
let roundCountdownPlayed = false;
let roundIntroPlayer = null;
let backgroundMusicPlayer = null;
let moleMusicPlayer = null;
let countdownPlayer = null;
let roundAudioToken = 0;
let homeScreenPlayer = null;
let appAudioPausedByVisibility = false;
const activeAudioPlayers = new Set();
const pendingUiUnlockAnimations = new Set();
const LANGUAGE_STORAGE_KEY = "fritopay-language";
const PROGRESS_STORAGE_KEY = "fritopay-progress";

const COPY = {
  en: {
    round: value => `Round ${value}`,
    timeLabel: value => `Time: ${value.toFixed(1)}s`,
    targetLabel: "Find all the cats",
    rescuedCats: value => `Rescued cats: ${value}`,
    selectedTiles: value => `Selected tiles: ${value}`,
    splashIntro: () => `
      Frito is small. Cats are bigger. Frito doesn't like.<br><br>
      He made a rocket. Will capture all cats. Send them to space.<br><br>
      <strong>YOU NEED TO RESCUE THE CATS!</strong>
    `,
    splashTimeNotice: value => `You have ${value} second${value === 1 ? "" : "s"} to find all the cats.`,
    freeHairballWon: "You won a free hairball!",
    perfectRescueTimeWon: value => `You won +${value} seconds.`,
    play: "Play",
    startPlaying: "Start playing",
    easyMode: "Easy mode",
    jumpToLevel: value => `Jump to level ${value}`,
    clearCache: "Clear cache",
    timeout: "Time's up",
    roundOver: "Round Over",
    specialOffer: "Special Offer",
    nextRound: "Next Round",
    exit: "Exit",
    startOver: "Start over",
    trapFailed: "Trap failed",
    moleTrapped: "Mole trapped",
    exitOfferMessage: "Unlock the exit button.",
    scoreOfferMessage: "Unlock the score board.",
    dismiss: "Oh ok",
    dismissInsufficient: "Oh ok 😿",
    hairballs: value => `Hairballs: ${value}`,
    nextRoundTimeTitle: "Time for next round",
    roundBonusTitle: "Special Bonus",
    nextRoundObjective: value => `Rescue all the cats in ${value} second${value === 1 ? "" : "s"}`,
    specialBonusLine: reward => `Special bonus: ${reward}`,
    specialBonusRewardTime: value => `+${value} second${value === 1 ? "" : "s"}`,
    specialBonusRewardHairballs: value => `${value} Hairball${value === 1 ? "" : "s"}`,
    specialBonusRewardTrap: tierName => `1 ${tierName}`,
    hairballUnit: value => `Hairball${value === 1 ? "" : "s"}`,
    timeSummaryLabel: "Time",
    timeSummary: value => `Time: ${value} second${value === 1 ? "" : "s"}`,
    secondUnit: value => `second${value === 1 ? "" : "s"}`,
    scoreLabel: value => `Score: ${value}`,
    perfectRescue: "Frito is upset",
    fritoLaughs: "Frito Laughs!",
    notBad: "Frito is happy",
    gameOver: "Game Over",
    catsRescued: (found, total) => `${found} of ${total} cats rescued`,
    rescuableCats: (found, total) => `${found} of ${total} rescuable cats rescued`,
    firstRoundHurry: (stolen, left) => `Frito stole ${stolen} second${stolen === 1 ? "" : "s"} from you. You only have ${left} second${left === 1 ? "" : "s"} left, so hurry.`,
    earnedBonusLine: value => `Earned bonus: +${value} second${value === 1 ? "" : "s"}`,
    fritoStealsLine: value => `Frito steals ${value} second${value === 1 ? "" : "s"} for your next round`,
    noBonusLine: "No extra time this round",
    earnedClockLine: value => `⏰ You earned ${value} second${value === 1 ? "" : "s"}`,
    earnedHairballLine: value => `🧶 You earned ${value} Hairball${value === 1 ? "" : "s"}`,
    totalCatsRescued: value => `Total cats rescued: ${value}`,
    totalCatsMissed: value => `Total cats missed: ${value}`,
    rivalPoints: (name, value) => `${name} got ${value}`,
    totalScore: value => `Total score: ${value}`,
    resultScoreTitle: "Score",
    resultCatsRescuedRow: value => `${value} cat${value === 1 ? "" : "s"} rescued`,
    resultPerfectRescueRow: "Perfect rescue",
    resultRoundBonusRow: value => `Completing round ${value}`,
    resultCatsMissedRow: value => `${value} cat${value === 1 ? "" : "s"} missed`,
    resultHairballsFoundRow: value => `${value} Hairball${value === 1 ? "" : "s"} found`,
    resultClocksFoundRow: value => `${value} Clock${value === 1 ? "" : "s"} found`,
    resultCassettesFoundRow: value => `${value} Cassette${value === 1 ? "" : "s"} found`,
    resultSpecialBonusRow: "Special bonus",
    resultTotalRow: "Total this round",
    resultPointsValue: value => `${value} point${value === 1 ? "" : "s"}`,
    resultSecondsValue: value => `${value} second${Math.abs(value) === 1 ? "" : "s"}`,
    tradeHairballs: (hairballs, seconds) => `Trade all ${hairballs} Hairball${hairballs === 1 ? "" : "s"} for ${seconds} second${seconds === 1 ? "" : "s"}.`,
    muteOfferMessage: "Unlock the mute button.",
    trapsCatchMole: "Traps can catch the mole.",
    bestForNow: "This is the best I have for now.",
    tierUpgradeNote: tierName => `${tierName} are much better.`,
    notEnoughHairballs: "You don't have enough hairballs.",
    timeOfferTitle: value => `+${value} Second${value === 1 ? "" : "s"}`,
    timeOfferSummary: value => `Time: +${value} second${value === 1 ? "" : "s"}`,
    timePurchaseMessage: value => `You have extra ${value} second${value === 1 ? "" : "s"}.`,
    muteOfferTitle: "Mute Game",
    muteOfferSummary: "Mute: 1",
    scoreOfferTitle: "Score Board",
    scoreOfferSummary: "Score Board: 1",
    exitOfferTitle: "Exit Button",
    exitOfferSummary: "Exit: 1",
    purchaseTitle: "Congratulations!",
    purchaseMessage: product => `You have a new ${product}.`,
    purchaseProductMute: "Mute button",
    purchaseProductScoreboard: "Score Board",
    purchaseProductExit: "Exit button",
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
    splashIntro: () => `
      Frito el Chihuahua<br>
      <strong>no soporta que los gatos</strong><br>
      sean más grandes que él 😹<br><br>
      Quiere capturar a todos los gatos<br>
      y ponerlos en un cohete 🚀 😧<br><br>
      <strong>TIENES QUE RESCATARLOS 🙀</strong>
    `,
    splashTimeNotice: value => `Tienes ${value} segundo${value === 1 ? "" : "s"} para encontrar a todos los gatos.`,
    freeHairballWon: "¡Ganaste una bola de pelo gratis!",
    perfectRescueTimeWon: value => `Ganaste +${value} segundos.`,
    play: "Jugar",
    startPlaying: "Empezar a jugar",
    easyMode: "Modo fácil",
    jumpToLevel: value => `Ir al nivel ${value}`,
    clearCache: "Borrar cache",
    timeout: "Se acabó el tiempo",
    roundOver: "Fin de ronda",
    specialOffer: "Oferta especial",
    nextRound: "Siguiente ronda",
    exit: "Salir",
    startOver: "Empezar de nuevo",
    trapFailed: "La trampa falló",
    moleTrapped: "Topo atrapado",
    exitOfferMessage: "Desbloquea el botón de salir.",
    scoreOfferMessage: "Desbloquea el marcador.",
    dismiss: "Ah, ok",
    dismissInsufficient: "Ah, ok 😿",
    hairballs: value => `Bolas de pelo: ${value}`,
    nextRoundTimeTitle: "Tiempo para la próxima ronda",
    roundBonusTitle: "Bonus especial",
    nextRoundObjective: value => `Rescata a todos los gatos en ${value} segundo${value === 1 ? "" : "s"}`,
    specialBonusLine: reward => `Bonus especial: ${reward}`,
    specialBonusRewardTime: value => `+${value} segundo${value === 1 ? "" : "s"}`,
    specialBonusRewardHairballs: value => `${value} bola${value === 1 ? "" : "s"} de pelo`,
    specialBonusRewardTrap: tierName => `1 ${tierName}`,
    hairballUnit: value => `bola${value === 1 ? "" : "s"} de pelo`,
    timeSummaryLabel: "Tiempo",
    timeSummary: value => `Tiempo: ${value} segundo${value === 1 ? "" : "s"}`,
    secondUnit: value => `segundo${value === 1 ? "" : "s"}`,
    scoreLabel: value => `Puntos: ${value}`,
    perfectRescue: "Esto pone triste a Frito",
    fritoLaughs: "¡Frito se ríe!",
    notBad: "Esto pone feliz a Frito",
    gameOver: "Fin del juego",
    catsRescued: (found, total) => `${found} de ${total} gatos rescatados`,
    rescuableCats: (found, total) => `${found} de ${total} gatos rescatables rescatados`,
    firstRoundHurry: (stolen, left) => `Frito te robó ${stolen} segundo${stolen === 1 ? "" : "s"}. Solo te quedan ${left} segundo${left === 1 ? "" : "s"}, así que apúrate.`,
    earnedBonusLine: value => `Bonus ganado: +${value} segundo${value === 1 ? "" : "s"}`,
    fritoStealsLine: value => `Frito te roba ${value} segundo${value === 1 ? "" : "s"} para la próxima ronda`,
    noBonusLine: "Sin tiempo extra esta ronda",
    earnedClockLine: value => `⏰ Ganaste ${value} segundo${value === 1 ? "" : "s"}`,
    earnedHairballLine: value => `🧶 Ganaste ${value} bola${value === 1 ? "" : "s"} de pelo`,
    totalCatsRescued: value => `Total de gatos rescatados: ${value}`,
    totalCatsMissed: value => `Total de gatos perdidos: ${value}`,
    rivalPoints: (name, value) => `${name} consiguió ${value}`,
    totalScore: value => `Puntuación total: ${value}`,
    resultScoreTitle: "Puntos",
    resultCatsRescuedRow: value => `${value} gato${value === 1 ? "" : "s"} rescatado${value === 1 ? "" : "s"}`,
    resultPerfectRescueRow: "Rescate perfecto",
    resultRoundBonusRow: value => `Completar ronda ${value}`,
    resultCatsMissedRow: value => `${value} gato${value === 1 ? "" : "s"} perdido${value === 1 ? "" : "s"}`,
    resultHairballsFoundRow: value => `${value} bola${value === 1 ? "" : "s"} de pelo encontrada${value === 1 ? "" : "s"}`,
    resultClocksFoundRow: value => `${value} reloj${value === 1 ? "" : "es"} encontrado${value === 1 ? "" : "s"}`,
    resultCassettesFoundRow: value => `${value} cassette${value === 1 ? "" : "s"} encontrado${value === 1 ? "" : "s"}`,
    resultSpecialBonusRow: "Bonus especial",
    resultTotalRow: "Total de esta ronda",
    resultPointsValue: value => `${value} punto${value === 1 ? "" : "s"}`,
    resultSecondsValue: value => `${value} segundo${Math.abs(value) === 1 ? "" : "s"}`,
    tradeHairballs: (hairballs, seconds) => `Cambia tus ${hairballs} bola${hairballs === 1 ? "" : "s"} de pelo por ${seconds} segundo${seconds === 1 ? "" : "s"}.`,
    muteOfferMessage: "Desbloquea el botón de silencio.",
    trapsCatchMole: "Las trampas pueden atrapar al topo.",
    bestForNow: "Esto es lo mejor que tengo por ahora.",
    tierUpgradeNote: tierName => `Las ${tierName.toLowerCase()} son mucho mejores.`,
    notEnoughHairballs: "No tienes suficientes bolas de pelo.",
    timeOfferTitle: value => `+${value} segundo${value === 1 ? "" : "s"}`,
    timeOfferSummary: value => `Tiempo: +${value} segundo${value === 1 ? "" : "s"}`,
    timePurchaseMessage: value => `Tienes ${value} segundo${value === 1 ? "" : "s"} extra.`,
    muteOfferTitle: "Silenciar juego",
    muteOfferSummary: "Silencio: 1",
    scoreOfferTitle: "Marcador",
    scoreOfferSummary: "Marcador: 1",
    exitOfferTitle: "Botón salir",
    exitOfferSummary: "Salir: 1",
    purchaseTitle: "¡Felicidades!",
    purchaseMessage: product => `Tienes un nuevo ${product}.`,
    purchaseProductMute: "botón de silencio",
    purchaseProductScoreboard: "marcador",
    purchaseProductExit: "botón de salida",
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

function isEasyMode(mode = currentGameMode) {
  return mode === "easy";
}

function setGameMode(mode = "normal") {
  currentGameMode = isEasyMode(mode) ? "easy" : "normal";
}

function getStartingTimeSeconds(mode = currentGameMode) {
  return isEasyMode(mode)
    ? GAME_CONFIG.easyModeStartingTimeSeconds
    : GAME_CONFIG.startingTimeSeconds;
}

function getModeRoundTimeBonusSeconds(mode = currentGameMode) {
  return isEasyMode(mode) ? GAME_CONFIG.easyModeRoundBonusSeconds : 0;
}

function getMoleTapWindowMs(mode = currentGameMode) {
  return isEasyMode(mode)
    ? GAME_CONFIG.easyModeMoleTapWindowMs
    : GAME_CONFIG.moleTapWindowMs;
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

function getDefaultStoredProgress() {
  return {
    muteUnlocked: true,
    exitUnlocked: true,
    scoreboardUnlocked: true
  };
}

function getStoredProgress() {
  return getDefaultStoredProgress();
}

function persistStoredProgress() {
  try {
    window.localStorage.setItem(PROGRESS_STORAGE_KEY, JSON.stringify({
      muteUnlocked: muteControlUnlocked,
      exitUnlocked: exitControlUnlocked,
      scoreboardUnlocked
    }));
  } catch {}
}

function applyStoredProgress() {
  const storedProgress = getStoredProgress();
  muteControlUnlocked = storedProgress.muteUnlocked;
  exitControlUnlocked = storedProgress.exitUnlocked;
  scoreboardUnlocked = storedProgress.scoreboardUnlocked;
  cassetteCount = 0;
}

function clearStoredProgress() {
  try {
    window.localStorage.removeItem(PROGRESS_STORAGE_KEY);
  } catch {}

  muteControlUnlocked = true;
  exitControlUnlocked = true;
  scoreboardUnlocked = true;
  cassetteCount = 0;
}

function buildSimulatedStartState(startRound) {
  const safeStartRound = clamp(startRound, GAME_CONFIG.startingRound, 999);
  const startingTimeSeconds = getStartingTimeSeconds();
  const simulatedState = {
    round: GAME_CONFIG.startingRound,
    targetCats: GAME_CONFIG.startingCats,
    roundTime: startingTimeSeconds,
    totalHairballs: 0,
    totalScore: 0,
    totalRescuedCats: 0,
    totalMissedCats: 0,
    muteUnlocked: true,
    exitUnlocked: true,
    scoreboardUnlocked: true,
    cassetteCount: 0,
    currentTrapTierIndex: 0,
    diamondTrapFailed: false,
    trapInventory: [],
    nextRoundTime: startingTimeSeconds,
    nextRoundCats: GAME_CONFIG.startingCats
  };

  for (let completedRound = GAME_CONFIG.startingRound; completedRound < safeStartRound; completedRound++) {
    const rescuedCats = Math.min(simulatedState.targetCats, getBoardSize(completedRound).tileCount);
    simulatedState.totalRescuedCats += rescuedCats;
    simulatedState.totalScore += rescuedCats + 3 + completedRound;
    simulatedState.totalHairballs += 1;

    const nextRoundNumber = completedRound + 1;
    const nextRoundTime = (
      simulatedState.roundTime +
      GAME_CONFIG.perfectRescueBonusSeconds +
      getModeRoundTimeBonusSeconds()
    );
    const nextRoundCats = Math.min(
      simulatedState.targetCats + GAME_CONFIG.catsAddedPerRound,
      getBoardSize(nextRoundNumber).tileCount
    );

    simulatedState.round = nextRoundNumber;
    simulatedState.roundTime = nextRoundTime;
    simulatedState.targetCats = nextRoundCats;
    simulatedState.nextRoundTime = nextRoundTime;
    simulatedState.nextRoundCats = nextRoundCats;
  }

  return simulatedState;
}

function applySimulatedStartState(startRound) {
  resetGameState();

  const simulatedState = buildSimulatedStartState(startRound);
  round = simulatedState.round;
  targetCats = simulatedState.targetCats;
  roundTime = simulatedState.roundTime;
  remainingTime = roundTime;
  totalHairballs = simulatedState.totalHairballs;
  totalScore = simulatedState.totalScore;
  totalRescuedCats = simulatedState.totalRescuedCats;
  totalMissedCats = simulatedState.totalMissedCats;
  muteControlUnlocked = simulatedState.muteUnlocked;
  exitControlUnlocked = simulatedState.exitUnlocked;
  scoreboardUnlocked = simulatedState.scoreboardUnlocked;
  cassetteCount = simulatedState.cassetteCount;
  currentTrapTierIndex = simulatedState.currentTrapTierIndex;
  diamondTrapFailed = simulatedState.diamondTrapFailed;
  trapInventory = [...simulatedState.trapInventory];
  nextRoundTime = simulatedState.nextRoundTime;
  nextRoundCats = simulatedState.nextRoundCats;
  currentRoundResultSummary = null;
  currentSpecialOfferOptions = [];
  currentSpecialOfferKind = "trap";
  currentSpecialOfferSellerImage = "images/racoon.png";
  currentSpecialOfferState = "hidden";
  currentOfferSummaryData = null;
  currentRescueScore = 0;
  currentRoundScore = 0;
  currentRivalName = "";
  currentRivalScore = 0;
  rescuedThisRound = 0;
  bonusClockEarnedThisRound = false;
  clockTilesSelectedThisRound = 0;
  cassetteTilesSelectedThisRound = 0;
  earnedHairballThisRound = false;
  yarnHairballsEarnedThisRound = 0;
  yarnTilesSelectedThisRound = 0;
  wrongTilesSelectedThisRound = 0;
  moleNextEventStartsAt = 0;
  moleSwapInProgress = false;
  pendingReviewAfterMole = false;
  moleAttacksTriggeredThisRound = 0;
  moleEventsStartedThisRound = 0;
  moleEventBurstActive = false;
  moleEventEndsAt = 0;
  moleCurrentAttackIsPreview = false;
  moleActiveTileIndex = -1;
  moleAttackTargetIsCat = false;
  moleAttackTargetIsStealable = false;
  moleAttackTapped = false;
  moleUsedTileIndexes.clear();
  moleCatsLostThisRound = 0;
  currentRoundRescuableCats = targetCats;
  currentRoundMissedCats = 0;
  selectedRoundBonusEmojisAtRoundEnd = new Set();
  hideTrapOffer();
  hideMoleRunner(true);
  applyBoardLayout(round);
  renderTrapInventory();
  initializeRoundBonusChallenges(round);
}

async function clearBrowserCaches() {
  if (!("caches" in window)) return;

  try {
    const cacheKeys = await window.caches.keys();
    await Promise.all(cacheKeys.map((cacheKey) => window.caches.delete(cacheKey)));
  } catch {}
}

async function unregisterServiceWorkers() {
  if (!("serviceWorker" in navigator)) return;

  try {
    const registrations = await navigator.serviceWorker.getRegistrations();
    await Promise.all(registrations.map((registration) => registration.unregister()));
  } catch {}
}

function deleteIndexedDbDatabaseByName(databaseName) {
  return new Promise((resolve) => {
    if (!databaseName || !window.indexedDB) {
      resolve(false);
      return;
    }

    try {
      const request = window.indexedDB.deleteDatabase(databaseName);
      request.onsuccess = () => resolve(true);
      request.onerror = () => resolve(false);
      request.onblocked = () => resolve(false);
    } catch {
      resolve(false);
    }
  });
}

async function clearIndexedDbDatabases() {
  if (!window.indexedDB || typeof window.indexedDB.databases !== "function") return;

  try {
    const databases = await window.indexedDB.databases();
    const databaseNames = databases
      .map((database) => database?.name)
      .filter((databaseName) => typeof databaseName === "string" && databaseName.length > 0);

    await Promise.all(databaseNames.map(deleteIndexedDbDatabaseByName));
  } catch {}
}

function reloadWithCacheBust() {
  try {
    const reloadUrl = new URL(window.location.href);
    reloadUrl.searchParams.set("fritopay_reload", Date.now().toString());
    window.location.replace(reloadUrl.toString());
  } catch {
    window.location.reload();
  }
}

async function clearBrowserDataAndReload() {
  stopAllAudioPlayers();
  stopRoundSoundtrack();
  stopHomeScreenAudio();
  clearStoredProgress();

  try {
    window.localStorage.clear();
  } catch {}

  try {
    window.sessionStorage.clear();
  } catch {}

  await Promise.all([
    clearBrowserCaches(),
    unregisterServiceWorkers(),
    clearIndexedDbDatabases()
  ]);

  reloadWithCacheBust();
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

function formatRoundBonusRewardLabel(reward) {
  if (!reward) return "";

  if (reward.kind === "time") {
    return copy("specialBonusRewardTime", reward.seconds);
  }

  if (reward.kind === "hairballs") {
    return copy("specialBonusRewardHairballs", reward.hairballs);
  }

  if (reward.kind === "trap") {
    return copy("specialBonusRewardTrap", getTrapTierLabel(reward.tierId));
  }

  return "";
}

function renderRoundBonusPreview() {
  if (!roundBonusPanel || !roundBonusTitle || !roundBonusItems) return;

  const previewChallenge = !gameOver ? upcomingRoundBonusChallenge : null;
  const shouldShow = Boolean(previewChallenge?.emojis?.length);

  roundBonusTitle.textContent = copy("roundBonusTitle");
  roundBonusItems.innerHTML = shouldShow
    ? previewChallenge.emojis.map(emoji => `<span class="result-bonus-item">${emoji}</span>`).join("")
    : "";
  roundBonusPanel.classList.toggle("hidden", !shouldShow);
}

function isRoundBonusMatchTile(tile, challenge = activeRoundBonusChallenge) {
  return Boolean(tile?.emoji && challenge?.emojis?.includes(tile.emoji));
}

function getSelectedRoundBonusEmojis(sourceTiles = tiles, challenge = activeRoundBonusChallenge) {
  const selectedBonusEmojis = new Set();

  for (const tile of sourceTiles) {
    if (
      tile &&
      tile.state === "idle" &&
      tile.selected &&
      isRoundBonusMatchTile(tile, challenge)
    ) {
      selectedBonusEmojis.add(tile.emoji);
    }
  }

  return selectedBonusEmojis;
}

function resolveRoundBonusReward() {
  if (!activeRoundBonusChallenge?.emojis?.length) {
    return null;
  }

  const selectedBonusEmojis = selectedRoundBonusEmojisAtRoundEnd;

  if (selectedBonusEmojis.size !== activeRoundBonusChallenge.emojis.length) {
    return null;
  }

  if (!activeRoundBonusChallenge.emojis.every(emoji => selectedBonusEmojis.has(emoji))) {
    return null;
  }

  const rewardKind = randomFrom(ROUND_BONUS_REWARD_KINDS);

  if (rewardKind === "time") {
    nextRoundTime += GAME_CONFIG.roundBonusTimeRewardSeconds;
    return {
      kind: "time",
      seconds: GAME_CONFIG.roundBonusTimeRewardSeconds
    };
  }

  if (rewardKind === "hairballs") {
    totalHairballs += GAME_CONFIG.roundBonusHairballRewardCount;
    return {
      kind: "hairballs",
      hairballs: GAME_CONFIG.roundBonusHairballRewardCount
    };
  }

  const tierId = TRAP_TIERS[currentTrapTierIndex].id;
  trapInventory.push(tierId);
  renderTrapInventory();
  return {
    kind: "trap",
    tierId
  };
}

function isPreGameScreenVisible() {
  return landingPanel.classList.contains("show") || introPanel.classList.contains("show");
}

function isCatTile(tile) {
  return Boolean(tile && (tile.isCat || CAT_EMOJI_SET.has(tile.emoji)));
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

function getRescuableCatCount() {
  return targetCats;
}

function isPerfectRescueThisRound() {
  return rescuedThisRound === getRescuableCatCount();
}

function formatSignedValue(value, unit = "") {
  const sign = value > 0 ? "+" : value < 0 ? "-" : "";
  const absoluteValue = Math.abs(value);
  const unitSuffix = unit ? ` ${unit}` : "";
  return `${sign}${absoluteValue}${unitSuffix}`;
}

function formatBreakdownPoints(value) {
  return copy("resultPointsValue", value);
}

function formatBreakdownSeconds(value) {
  return copy("resultSecondsValue", value);
}

function formatTimeBarValueMarkup() {
  const delta = nextRoundTime - roundTime;
  if (delta === 0) {
    return `${roundTime} ${copy("secondUnit", roundTime)}`;
  }

  const deltaSign = delta > 0 ? "+" : "-";
  const deltaClass = delta > 0 ? "positive" : delta < 0 ? "negative" : "neutral";
  const absoluteDelta = Math.abs(delta);

  return `${roundTime} ` +
    `<span class="time-summary-delta ${deltaClass}">${deltaSign} ${absoluteDelta}</span> = ` +
    `${nextRoundTime} ${copy("secondUnit", nextRoundTime)}`;
}

function clearResultTimeBarAnimation() {
  resultTimeBarTimeoutIds.forEach(timeoutId => clearTimeout(timeoutId));
  resultTimeBarTimeoutIds = [];
  if (resultTimeBarFrameId !== null) {
    cancelAnimationFrame(resultTimeBarFrameId);
    resultTimeBarFrameId = null;
  }
  resultTimeBarAnimationToken += 1;
}

function clearTrapOfferRevealTimeout() {
  if (trapOfferRevealTimeoutId !== null) {
    clearTimeout(trapOfferRevealTimeoutId);
    trapOfferRevealTimeoutId = null;
  }
}

function setResultTimeBarValue(markup) {
  if (!resultTimeBarValue) return;
  resultTimeBarValue.innerHTML = markup;
}

function animateResultTimeBarValue(fromValue, toValue, durationMs, delayMs = 0, token = resultTimeBarAnimationToken) {
  const startAnimation = () => {
    if (token !== resultTimeBarAnimationToken) return;
    if (durationMs <= 0) {
      setResultTimeBarValue(toValue);
      return;
    }

    const startedAt = performance.now();

    const step = now => {
      if (token !== resultTimeBarAnimationToken) return;
      const progress = Math.min(1, (now - startedAt) / durationMs);
      setResultTimeBarValue(fromValue + (toValue - fromValue) * progress);

      if (progress < 1) {
        resultTimeBarFrameId = requestAnimationFrame(step);
        return;
      }

      resultTimeBarFrameId = null;
      setResultTimeBarValue(toValue);
    };

    resultTimeBarFrameId = requestAnimationFrame(step);
  };

  if (delayMs > 0) {
    const timeoutId = setTimeout(startAnimation, delayMs);
    resultTimeBarTimeoutIds.push(timeoutId);
    return;
  }

  startAnimation();
}

function getResultTimeBarMetrics() {
  const maxTime = Math.max(1, roundTime, nextRoundTime);
  return {
    delta: nextRoundTime - roundTime,
    baseWidthPct: (roundTime / maxTime) * 100,
    nextWidthPct: (nextRoundTime / maxTime) * 100
  };
}

function applyResultTimeBarState() {
  if (!resultTimeBar || !resultTimeBarFill || !resultTimeBarLoss || !resultTimeBarGain) return;

  clearResultTimeBarAnimation();

  const { delta, baseWidthPct, nextWidthPct } = getResultTimeBarMetrics();
  resultTimeBar.classList.toggle("hidden", roundTime <= 0 && nextRoundTime <= 0);

  resultTimeBarFill.style.transition = "none";
  resultTimeBarLoss.style.transition = "none";
  resultTimeBarGain.style.transition = "none";

  resultTimeBarLoss.style.left = "0%";
  resultTimeBarLoss.style.width = "0%";
  resultTimeBarGain.style.left = "0%";
  resultTimeBarGain.style.width = "0%";

  if (delta > 0) {
    resultTimeBarFill.style.width = `${baseWidthPct}%`;
    resultTimeBarGain.style.left = `${baseWidthPct}%`;
    resultTimeBarGain.style.width = `${Math.max(0, nextWidthPct - baseWidthPct)}%`;
  } else if (delta < 0) {
    resultTimeBarFill.style.width = `${nextWidthPct}%`;
    resultTimeBarLoss.style.left = `${nextWidthPct}%`;
    resultTimeBarLoss.style.width = `${Math.max(0, baseWidthPct - nextWidthPct)}%`;
  } else {
    resultTimeBarFill.style.width = `${baseWidthPct}%`;
  }

  setResultTimeBarValue(formatTimeBarValueMarkup());
}

function playResultTimeBarAnimation() {
  if (!resultTimeBar || !resultTimeBarFill || !resultTimeBarLoss || !resultTimeBarGain) return;
  if (resourceSummary.classList.contains("hidden")) return;

  clearResultTimeBarAnimation();

  const { delta, baseWidthPct, nextWidthPct } = getResultTimeBarMetrics();
  const baseDurationMs = Math.max(1, Math.round(Math.max(roundTime, 0) * 60));
  const deltaDurationMs = Math.max(1, Math.round(Math.abs(delta) * 200));
  const pauseMs = 200;

  resultTimeBar.classList.remove("hidden");
  resultTimeBarFill.style.transition = "none";
  resultTimeBarLoss.style.transition = "none";
  resultTimeBarGain.style.transition = "none";
  resultTimeBarFill.style.width = "0%";
  resultTimeBarLoss.style.left = "0%";
  resultTimeBarLoss.style.width = "0%";
  resultTimeBarGain.style.left = `${baseWidthPct}%`;
  resultTimeBarGain.style.width = "0%";
  setResultTimeBarValue(formatTimeBarValueMarkup());
  void resultTimeBar.offsetWidth;

  resultTimeBarFill.style.transition = `width ${baseDurationMs}ms linear`;
  resultTimeBarFill.style.width = `${baseWidthPct}%`;

  if (delta === 0) {
    return;
  }

  const phaseTimeoutId = setTimeout(() => {
    if (delta < 0) {
      resultTimeBarLoss.style.left = `${nextWidthPct}%`;
      resultTimeBarLoss.style.width = `${Math.max(0, baseWidthPct - nextWidthPct)}%`;
      resultTimeBarFill.style.transition = `width ${deltaDurationMs}ms linear`;
      resultTimeBarFill.style.width = `${nextWidthPct}%`;
      return;
    }

    resultTimeBarGain.style.left = `${baseWidthPct}%`;
    resultTimeBarGain.style.width = "0%";
    void resultTimeBarGain.offsetWidth;
    resultTimeBarGain.style.transition = `width ${deltaDurationMs}ms linear`;
    resultTimeBarGain.style.width = `${Math.max(0, nextWidthPct - baseWidthPct)}%`;
  }, baseDurationMs + pauseMs);

  resultTimeBarTimeoutIds.push(phaseTimeoutId);
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
  try {
    if (!audioCtx) {
      const AudioContextClass = window.AudioContext || window.webkitAudioContext;
      if (AudioContextClass) {
        audioCtx = new AudioContextClass();
      }
    }

    if (audioCtx && audioCtx.state === "suspended") {
      audioCtx.resume().catch(() => {});
    }
  } catch {}
}

function tryEnsureAudio() {
  ensureAudio();
}

function startFreshGame(mode = "normal") {
  tryEnsureAudio();
  setGameMode(mode);
  resetGameState();
  beginRound();
}

function startSimulatedGame(startRound, mode = currentGameMode) {
  tryEnsureAudio();
  setGameMode(mode);
  applySimulatedStartState(startRound);
  beginRound();
}

function stopAudioPlayer(player) {
  if (!player) return;
  activeAudioPlayers.delete(player);
  player.pause();
  player.currentTime = 0;
}

function playAudioSource(src, { loop = false, volume = 1 } = {}) {
  if (isMuted) return null;
  if (!src) return null;

  try {
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
  } catch {
    return null;
  }
}

function playTrack(name, { loop = false, volume = 1 } = {}) {
  return playAudioSource(AUDIO_TRACKS[name], { loop, volume });
}

function getNextRoundMusicTrackPath() {
  return CASSETTE_MUSIC_TRACKS[
    clamp(cassetteCount, 0, GAME_CONFIG.maxCassetteMusicTracks - 1)
  ];
}

function playBackgroundMusicTrack(trackPath = getNextRoundMusicTrackPath()) {
  stopAudioPlayer(backgroundMusicPlayer);
  backgroundMusicPlayer = playAudioSource(trackPath, {
    loop: true,
    volume: 0.75
  });
  return backgroundMusicPlayer;
}

function startMoleEventMusic() {
  if (isMuted || moleMusicPlayer) return moleMusicPlayer;

  stopAudioPlayer(backgroundMusicPlayer);
  backgroundMusicPlayer = null;
  moleMusicPlayer = playTrack("moleMusic", {
    loop: true,
    volume: 0.78
  });
  return moleMusicPlayer;
}

function restoreRoundBackgroundMusic() {
  stopAudioPlayer(moleMusicPlayer);
  moleMusicPlayer = null;

  if (isMuted || isPreGameScreenVisible() || resultPanel.classList.contains("show") || gameOver || remainingTime <= 0) {
    return null;
  }

  return playBackgroundMusicTrack();
}

function stopAllAudioPlayers() {
  [...activeAudioPlayers].forEach(stopAudioPlayer);
}

function stopRoundSoundtrack() {
  roundAudioToken++;
  roundCountdownPlayed = false;
  stopAudioPlayer(roundIntroPlayer);
  stopAudioPlayer(backgroundMusicPlayer);
  stopAudioPlayer(moleMusicPlayer);
  stopAudioPlayer(countdownPlayer);
  roundIntroPlayer = null;
  backgroundMusicPlayer = null;
  moleMusicPlayer = null;
  countdownPlayer = null;
}

function stopHomeScreenAudio() {
  stopAudioPlayer(homeScreenPlayer);
  homeScreenPlayer = null;
}

function playHomeScreenAudio() {
  if (homeScreenPlayer && !homeScreenPlayer.ended) {
    homeScreenPlayer.loop = true;
    homeScreenPlayer.volume = 0.82;
    homeScreenPlayer.play().catch(() => {});
    return homeScreenPlayer;
  }

  stopHomeScreenAudio();
  homeScreenPlayer = playTrack("startScreen", {
    loop: true,
    volume: 0.82
  });
  return homeScreenPlayer;
}

function playRoundIntroAndMusic() {
  stopHomeScreenAudio();
  stopRoundSoundtrack();
  playBackgroundMusicTrack();
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
  updateUnlockableUiItem(muteToggle, muteControlUnlocked, "mute");
  muteToggle.textContent = isMuted ? "🔇" : "🔈";
}

function updateBottomExitButton() {
  updateUnlockableUiItem(bottomExitBtn, exitControlUnlocked, "exit");
  bottomExitBtn.textContent = copy("exit");
}

function triggerUiUnlockPop(element, key) {
  if (!element || !pendingUiUnlockAnimations.has(key)) return;
  if (isPreGameScreenVisible() || resultPanel.classList.contains("show")) return;

  pendingUiUnlockAnimations.delete(key);
  element.classList.remove("ui-unlock-pop");
  void element.offsetWidth;
  element.classList.add("ui-unlock-pop");
  element.addEventListener("animationend", () => {
    element.classList.remove("ui-unlock-pop");
  }, { once: true });
}

function updateUnlockableUiItem(element, shouldShow, key) {
  if (!element) return;

  const wasHidden = element.classList.contains("hidden");
  element.classList.toggle("hidden", !shouldShow);

  if (shouldShow && (wasHidden || pendingUiUnlockAnimations.has(key))) {
    triggerUiUnlockPop(element, key);
  }
}

function flushPendingUiUnlockAnimations() {
  updateScoreDisplay();
  updateBottomExitButton();
  updateMuteButton();
}

function applyMuteState() {
  updateMuteButton();

  if (isMuted) {
    stopAllAudioPlayers();
    roundIntroPlayer = null;
    backgroundMusicPlayer = null;
    moleMusicPlayer = null;
    countdownPlayer = null;
    homeScreenPlayer = null;
    return;
  }

  if (isPreGameScreenVisible()) {
    playHomeScreenAudio();
  } else if (!resultPanel.classList.contains("show") && remainingTime > 0 && !gameOver) {
    if (moleSwapInProgress || moleEventBurstActive || moleMusicPlayer) {
      startMoleEventMusic();
    } else {
      playRoundIntroAndMusic();
    }
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

function randomIntBetween(min, max) {
  return min + Math.floor(Math.random() * (max - min + 1));
}

function pickUniqueRandomItems(items, count) {
  const pool = [...items];
  const picked = [];

  while (pool.length > 0 && picked.length < count) {
    const pickedIndex = randomIntBetween(0, pool.length - 1);
    picked.push(pool[pickedIndex]);
    pool.splice(pickedIndex, 1);
  }

  return picked;
}

function shouldUseRoundBonusForRound(roundNumber) {
  return roundNumber >= GAME_CONFIG.roundBonusStartsAtRound;
}

function createRoundBonusChallenge(roundNumber = round + 1) {
  if (!shouldUseRoundBonusForRound(roundNumber)) {
    return null;
  }

  return {
    emojis: pickUniqueRandomItems(OTHER_EMOJIS, GAME_CONFIG.roundBonusEmojiCount)
  };
}

function initializeRoundBonusChallenges(currentRound = round) {
  activeRoundBonusChallenge = createRoundBonusChallenge(currentRound);
  upcomingRoundBonusChallenge = createRoundBonusChallenge(currentRound + 1);
}

function getRandomOtherEmoji(excludedEmojis = []) {
  const filteredPool = OTHER_EMOJIS.filter(emoji => !excludedEmojis.includes(emoji));
  const source = filteredPool.length > 0 ? filteredPool : OTHER_EMOJIS;
  return randomFrom(source);
}

function buildTileData(type = "other", {
  emoji = "",
  excludedOtherEmojis = [],
  isRoundBonusItem = false
} = {}) {
  const skin = round >= 10 ? randomFrom(LATE_TILE_SKINS) : null;
  const resolvedEmoji = emoji || (
    type === "cat"
      ? randomFrom(CAT_EMOJIS)
      : type === "clock"
        ? "⏰"
        : type === "yarn"
          ? "🧶"
          : type === "cassette"
            ? ""
            : getRandomOtherEmoji(excludedOtherEmojis)
  );

  return {
    emoji: resolvedEmoji,
    imageSrc:
      type === "clock"
        ? "images/time.png"
        : type === "yarn"
          ? "images/hairball.png"
          : type === "cassette"
            ? "svg/cassette.svg"
            : "",
    isCat: type === "cat",
    isClock: type === "clock",
    isYarn: type === "yarn",
    isCassette: type === "cassette",
    isRoundBonusItem,
    roundBonusEmoji: isRoundBonusItem ? resolvedEmoji : "",
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
  const roundBonusIndexes = new Map();
  let clockIndex = -1;
  let yarnIndex = -1;
  let cassetteIndex = -1;
  const lateBonusRound = round >= 11;
  const openIndexes = Array.from({ length: currentTileCount }, (_, index) => index)
    .filter(index => !catIndexes.has(index));
  const challengeEmojis = activeRoundBonusChallenge?.emojis || [];
  let remainingIndexes = [...openIndexes];

  challengeEmojis.forEach(emoji => {
    if (remainingIndexes.length === 0) return;
    const selectedIndex = randomFrom(remainingIndexes);
    roundBonusIndexes.set(selectedIndex, emoji);
    remainingIndexes = remainingIndexes.filter(index => index !== selectedIndex);
  });

  if (
    round >= GAME_CONFIG.bonusClockStartsAtRound &&
    Math.random() < (lateBonusRound ? GAME_CONFIG.bonusClockChanceAfterRound10 : GAME_CONFIG.bonusClockChance) &&
    remainingIndexes.length > 0
  ) {
    clockIndex = randomFrom(remainingIndexes);
    remainingIndexes = remainingIndexes.filter(index => index !== clockIndex);
  }

  if (
    round >= GAME_CONFIG.bonusYarnStartsAtRound &&
    Math.random() < (lateBonusRound ? GAME_CONFIG.bonusYarnChanceAfterRound10 : GAME_CONFIG.bonusYarnChance) &&
    remainingIndexes.length > 0
  ) {
    yarnIndex = randomFrom(remainingIndexes);
    remainingIndexes = remainingIndexes.filter(index => index !== yarnIndex);
  }

  if (
    round >= GAME_CONFIG.bonusCassetteStartsAtRound &&
    Math.random() < GAME_CONFIG.bonusCassetteChance &&
    remainingIndexes.length > 0
  ) {
    cassetteIndex = randomFrom(remainingIndexes);
  }

  return Array.from({ length: currentTileCount }, (_, index) => {
    if (catIndexes.has(index)) return buildTileData("cat");
    if (roundBonusIndexes.has(index)) {
      const roundBonusEmoji = roundBonusIndexes.get(index);
      return buildTileData("other", {
        emoji: roundBonusEmoji,
        isRoundBonusItem: true
      });
    }
    if (index === clockIndex) return buildTileData("clock");
    if (index === yarnIndex) return buildTileData("yarn");
    if (index === cassetteIndex) return buildTileData("cassette");
    return buildTileData("other");
  });
}

function createTileButton(index) {
  const tile = document.createElement("button");
  const tileData = tiles[index];

  tile.className = "tile";
  if (tileData.isClock || tileData.isYarn || tileData.isCassette) {
    tile.classList.add("bonus-tile");
  }
  if (tileData.isCassette) {
    tile.classList.add("cassette-tile");
  }
  if (tileData.skin) {
    tile.style.setProperty("--tile-fill", tileData.skin.fill);
    tile.style.setProperty("--tile-stroke", tileData.skin.border);
  }
  tile.type = "button";
  tile.dataset.index = index;
  tile.innerHTML = tileData.imageSrc
    ? `<img class="${
      tileData.isCassette
        ? "tile-asset tile-asset-cassette"
        : "tile-asset tile-asset-bonus"
    }" src="${tileData.imageSrc}" alt="" />`
    : `<span class="emoji">${tileData.emoji}</span>`;

  tile.addEventListener("click", () => {
    const tileBlockedByMole = moleSwapInProgress && index === moleActiveTileIndex;

    if (
      reviewInProgress ||
      tileBlockedByMole ||
      remainingTime <= 0 ||
      gameOver ||
      isPreGameScreenVisible() ||
      tileData.state !== "idle"
    ) {
      return;
    }

    tileData.selected = !tileData.selected;
    tile.classList.toggle("selected", tileData.selected);

    if (tileData.selected) {
      if (tileData.isClock || tileData.isYarn || tileData.isCassette) {
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
  const shouldHighlight = (
    remainingTime > 0 &&
    !reviewInProgress &&
    !isPreGameScreenVisible() &&
    (
      round <= GAME_CONFIG.bonusHintAlwaysThroughRound ||
      (
        round <= GAME_CONFIG.bonusHintHalfTimeThroughRound &&
        remainingTime <= roundTime * 0.5
      ) ||
      (
        round <= GAME_CONFIG.bonusHintQuarterTimeThroughRound &&
        remainingTime <= roundTime * 0.25
      )
    )
  );

  boardEl.querySelectorAll(".tile.bonus-tile").forEach(tileEl => {
    const tileIndex = Number(tileEl.dataset.index);
    const tileData = tiles[tileIndex];
    const isAvailableBonus = tileData && (tileData.isClock || tileData.isYarn || tileData.isCassette) && tileData.state === "idle";
    tileEl.classList.toggle("bonus-urgent", Boolean(shouldHighlight && isAvailableBonus));
  });
}

function createBoard() {
  applyBoardLayout();
  boardEl.innerHTML = "";
  tiles = buildRoundData();
  rescuedThisRound = 0;
  bonusClockEarnedThisRound = false;
  clockTilesSelectedThisRound = 0;
  cassetteTilesSelectedThisRound = 0;
  moleNextEventStartsAt = 0;
  moleSwapInProgress = false;
  moleActiveTileIndex = -1;
  moleEventEndsAt = 0;
  moleAttackTargetIsCat = false;
  moleAttackTargetIsStealable = false;
  moleAttackTapped = false;
  moleUsedTileIndexes.clear();
  moleCatsLostThisRound = 0;
  currentRoundRescuableCats = targetCats;
  currentRoundMissedCats = 0;
  yarnTilesSelectedThisRound = 0;
  selectedRoundBonusEmojisAtRoundEnd = new Set();
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
  progressFill.classList.toggle("low-time", pct <= 0.25);
  updateBonusTileHints();
}

function updateStartScreenText() {
  const startingTimeSeconds = getStartingTimeSeconds();

  if (startScreenText) {
    startScreenText.innerHTML = copy("splashIntro", startingTimeSeconds);
  }

  if (startTimeNote) {
    startTimeNote.textContent = copy("splashTimeNotice", startingTimeSeconds);
  }
}

function resetGameState() {
  clearInterval(timerInterval);
  clearMoleRepeatTimeout();
  stopRoundSoundtrack();
  applyStoredProgress();
  const startingTimeSeconds = getStartingTimeSeconds();
  round = GAME_CONFIG.startingRound;
  targetCats = GAME_CONFIG.startingCats;
  roundTime = startingTimeSeconds;
  remainingTime = roundTime;
  timerInterval = null;
  reviewInProgress = false;
  tiles = [];
  rescuedThisRound = 0;
  totalRescuedCats = 0;
  totalMissedCats = 0;
  totalHairballs = 0;
  totalScore = 0;
  nextRoundTime = roundTime;
  nextRoundCats = targetCats;
  currentRoundResultSummary = null;
  gameOver = false;
  moleNextEventStartsAt = 0;
  moleSwapInProgress = false;
  pendingReviewAfterMole = false;
  moleAttacksTriggeredThisRound = 0;
  moleEventsStartedThisRound = 0;
  moleEventBurstActive = false;
  moleEventEndsAt = 0;
  moleCurrentAttackIsPreview = false;
  moleActiveTileIndex = -1;
  moleAttackTargetIsCat = false;
  moleAttackTargetIsStealable = false;
  moleAttackTapped = false;
  moleUsedTileIndexes.clear();
  trapInventory = [];
  bonusClockEarnedThisRound = false;
  clockTilesSelectedThisRound = 0;
  cassetteTilesSelectedThisRound = 0;
  activeRoundBonusChallenge = null;
  upcomingRoundBonusChallenge = null;
  selectedRoundBonusEmojisAtRoundEnd = new Set();
  earnedHairballThisRound = false;
  yarnHairballsEarnedThisRound = 0;
  yarnTilesSelectedThisRound = 0;
  wrongTilesSelectedThisRound = 0;
  currentTrapTierIndex = 0;
  diamondTrapFailed = false;
  currentSpecialOfferOptions = [];
  currentSpecialOfferKind = "trap";
  currentSpecialOfferSellerImage = "images/racoon.png";
  currentSpecialOfferState = "hidden";
  currentOfferSummaryData = null;
  currentRescueScore = 0;
  currentRoundScore = 0;
  currentRivalName = "";
  currentRivalScore = 0;
  hideMoleRunner(true);
  moleCatsLostThisRound = 0;
  currentRoundRescuableCats = targetCats;
  currentRoundMissedCats = 0;
  hideTrapOffer();
  applyBoardLayout(round);
  renderTrapInventory();
  initializeRoundBonusChallenges(round);
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
  if (hairballSummaryText) {
    hairballSummaryText.textContent = copy("hairballs", totalHairballs);
  }
  if (bottomHairballCount) {
    bottomHairballCount.textContent = String(totalHairballs);
  }
  if (timeNote) {
    timeNote.textContent = copy("nextRoundObjective", nextRoundTime);
  }
  setResultTimeBarValue(formatTimeBarValueMarkup());
  applyResultTimeBarState();
  renderRoundBonusPreview();
}

function updateResultTitleAppearance({ perfect = false } = {}) {
  resultTitle.classList.toggle("perfect-fireworks", perfect);
}

function updateScoreDisplay() {
  updateUnlockableUiItem(scoreLabel, scoreboardUnlocked, "scoreboard");
  scoreLabel.textContent = copy("scoreLabel", totalScore);
}

function getRoundResultTitle() {
  const missedCats = Math.max(0, getRescuableCatCount() - rescuedThisRound);

  if (gameOver) return copy("gameOver");
  if (isPerfectRescueThisRound()) return copy("perfectRescue");
  return missedCats >= 3 ? copy("fritoLaughs") : copy("notBad");
}

function renderGameOverText() {
  const specialBonusMarkup = currentRoundResultSummary?.specialBonusReward
    ? `<div class="result-special-bonus">${copy("specialBonusLine", formatRoundBonusRewardLabel(currentRoundResultSummary.specialBonusReward))}</div>`
    : "";
  resultText.classList.add("game-over-text");
  resultText.innerHTML = `
    ${specialBonusMarkup}
    <div class="game-over-line" style="--line-delay: 0ms;"><strong>${copy("totalCatsRescued", totalRescuedCats)}</strong></div>
    <div class="game-over-line" style="--line-delay: 90ms;"><strong>${copy("totalCatsMissed", totalMissedCats)}</strong></div>
    <div class="game-over-line game-over-line-score" style="--line-delay: 180ms;"><strong>${copy("totalScore", totalScore)}</strong></div>
    <div class="game-over-line" style="--line-delay: 1270ms;"><strong>${copy("rivalPoints", currentRivalName, currentRivalScore)}</strong></div>
  `;
  resultBreakdown.innerHTML = "";
  resultBreakdown.classList.add("hidden");
}

function updateLanguageToggle() {
  [languageToggle, introLanguageToggle].forEach(toggle => {
    if (!toggle) return;
    toggle.querySelectorAll(".language-toggle-btn").forEach(button => {
      button.classList.toggle("active", button.dataset.lang === currentLanguage);
    });
  });
}

function renderTrapInventory() {
  if (!trapInventoryEl) return;

  trapInventoryEl.innerHTML = trapInventory.map(tierId => {
    const tier = getTrapTierById(tierId);
    return `
      <div class="trap-inventory-item" aria-hidden="true">
        <img src="${tier.image}" alt="" />
      </div>
    `;
  }).join("");

  trapInventoryEl.classList.toggle("hidden", trapInventory.length === 0);
}

function handleLanguageToggleClick(event) {
  const button = event.target.closest(".language-toggle-btn");
  if (!button || button.dataset.lang === currentLanguage) {
    return;
  }

  if (!setCurrentLanguage(button.dataset.lang, { persist: true })) {
    return;
  }

  updateLanguageUI();
}

function updateLanguageUI() {
  document.documentElement.lang = currentLanguage;
  timeoutFlash.textContent = copy("timeout");
  playBtn.textContent = copy("play");
  startBtn.textContent = copy("startPlaying");
  if (easyModeBtn) {
    easyModeBtn.textContent = copy("easyMode");
  }
  clearCacheBtn.textContent = copy("clearCache");
  renderTrapInventory();
  trapOffer.querySelector(".trap-offer-title").textContent = copy("specialOffer");
  trapOfferDismissBtn.textContent = copy("dismiss");
  nextBtn.textContent = copy("nextRound");
  exitBtn.textContent = gameOver ? copy("startOver") : copy("exit");

  updateTopUI();
  updateStartScreenText();
  updatePickedCount();
  updateSummaryTexts();
  updateScoreDisplay();

  if (resultPanel.classList.contains("show")) {
    resultTitle.textContent = getRoundResultTitle();
    updateResultTitleAppearance({ perfect: !gameOver && isPerfectRescueThisRound() });
    if (gameOver) {
      renderGameOverText();
    } else {
      renderRoundResultText();
      renderResultBreakdown();
    }
  } else {
    resultTitle.textContent = copy("roundOver");
    updateResultTitleAppearance({ perfect: false });
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

function setOverlayPanelVisible(panel, visible) {
  if (!panel) return;
  panel.classList.toggle("show", visible);
  panel.style.display = visible ? "flex" : "none";
}

function showHomeScreen() {
  setGameMode("normal");
  resetGameState();
  createBoard();
  updateTopUI();
  updateStartScreenText();
  timeoutFlash.classList.remove("show");
  resultPanel.classList.remove("show");
  setOverlayPanelVisible(landingPanel, true);
  setOverlayPanelVisible(introPanel, false);
  gameEl.classList.add("home-screen-active");
  nextBtn.classList.remove("hidden");
  exitBtn.classList.add("hidden");
  updateLanguageUI();
  playHomeScreenAudio();
}

function showIntroScreen() {
  timeoutFlash.classList.remove("show");
  resultPanel.classList.remove("show");
  setOverlayPanelVisible(landingPanel, false);
  setOverlayPanelVisible(introPanel, true);
  gameEl.classList.add("home-screen-active");
  updateLanguageUI();
  playHomeScreenAudio();
}

function getMoleRoundFirstChance(roundNumber = round) {
  if (roundNumber === GAME_CONFIG.molePreviewRound) {
    return 1;
  }

  if (roundNumber >= 15) {
    return GAME_CONFIG.moleRound15PlusChance;
  }

  if (roundNumber >= 10) {
    return GAME_CONFIG.moleRound10To14Chance;
  }

  if (roundNumber >= 5) {
    return GAME_CONFIG.moleRound5To9Chance;
  }

  return 0;
}

function getMoleEventChance(roundNumber = round, appearanceNumber = moleEventsStartedThisRound + 1) {
  const baseChance = getMoleRoundFirstChance(roundNumber);

  if (appearanceNumber <= 1) {
    return baseChance;
  }

  if (appearanceNumber === 2) {
    return baseChance * GAME_CONFIG.moleSecondEventChanceMultiplier;
  }

  return 0;
}

function canStartAnotherMoleEvent() {
  return moleEventsStartedThisRound < GAME_CONFIG.moleMaxEventsPerRound;
}

function getMoleEventDurationMs(roundNumber = round) {
  if (roundNumber >= 15) {
    return GAME_CONFIG.moleRound15PlusEventDurationMs;
  }

  if (roundNumber >= 10) {
    return GAME_CONFIG.moleRound10To14EventDurationMs;
  }

  if (roundNumber >= 5) {
    return GAME_CONFIG.moleRound5To9EventDurationMs;
  }

  return 0;
}

function getMoleEventStartDelayMs({ firstEvent = false } = {}) {
  if (firstEvent) {
    return randomIntBetween(
      GAME_CONFIG.moleFirstEventDelayMinMs,
      GAME_CONFIG.moleFirstEventDelayMaxMs
    );
  }

  return randomIntBetween(
    GAME_CONFIG.moleFollowupEventDelayMinMs,
    GAME_CONFIG.moleFollowupEventDelayMaxMs
  );
}

function hasMinimumTimeForMoleStart(timeRemaining = remainingTime) {
  return timeRemaining >= GAME_CONFIG.moleMinimumStartTimeRemainingSeconds;
}

function canScheduleMoleEventAfterDelay(delayMs) {
  if (
    reviewInProgress ||
    gameOver ||
    pendingReviewAfterMole ||
    remainingTime <= 0 ||
    !hasMinimumTimeForMoleStart()
  ) {
    return false;
  }

  const remainingAfterDelayMs = (remainingTime * 1000) - delayMs;
  return remainingAfterDelayMs >= (GAME_CONFIG.moleMinimumStartTimeRemainingSeconds * 1000);
}

function maybeScheduleMoleEvent({ firstEvent = false } = {}) {
  moleNextEventStartsAt = 0;

  if (round < GAME_CONFIG.molePreviewRound) {
    return false;
  }

  const isPreviewEvent = firstEvent && round === GAME_CONFIG.molePreviewRound;
  if (!isPreviewEvent && round < GAME_CONFIG.moleEarliestRound) {
    return false;
  }

  if (!isPreviewEvent && !canStartAnotherMoleEvent()) {
    return false;
  }

  const delayMs = getMoleEventStartDelayMs({ firstEvent });
  if (!canScheduleMoleEventAfterDelay(delayMs)) {
    return false;
  }

  const appearanceNumber = isPreviewEvent ? 1 : moleEventsStartedThisRound + 1;
  if (Math.random() >= getMoleEventChance(round, appearanceNumber)) {
    return false;
  }

  moleNextEventStartsAt = performance.now() + delayMs;
  return true;
}

function hasMoleEventTimeRemaining(now = performance.now()) {
  return moleEventBurstActive && moleEventEndsAt > now;
}

function endMoleEvent() {
  moleEventBurstActive = false;
  moleEventEndsAt = 0;
  restoreRoundBackgroundMusic();

  if (round >= GAME_CONFIG.moleEarliestRound) {
    maybeScheduleMoleEvent();
  }
}

function scheduleMoleRepeatCheck(delayMs = GAME_CONFIG.moleRepeatDelayMs) {
  clearMoleRepeatTimeout();

  if (!hasMoleEventTimeRemaining() || moleCurrentAttackIsPreview) {
    return;
  }

  moleRepeatTimeoutId = setTimeout(() => {
    moleRepeatTimeoutId = null;

    if (
      reviewInProgress ||
      gameOver ||
      moleSwapInProgress ||
      pendingReviewAfterMole ||
      remainingTime <= 0
    ) {
      return;
    }

    if (!hasMinimumTimeForMoleStart()) {
      endMoleEvent();
      return;
    }

    if (!hasMoleEventTimeRemaining()) {
      endMoleEvent();
      return;
    }

    triggerMoleTileAttack();
  }, delayMs);
}

function prepareRoundHazards() {
  clearMoleRepeatTimeout();
  moleAttacksTriggeredThisRound = 0;
  moleEventsStartedThisRound = 0;
  moleEventBurstActive = false;
  moleEventEndsAt = 0;
  moleCurrentAttackIsPreview = false;
  moleNextEventStartsAt = 0;
  moleSwapInProgress = false;
  pendingReviewAfterMole = false;
  moleActiveTileIndex = -1;
  moleAttackTargetIsCat = false;
  moleAttackTapped = false;
  moleUsedTileIndexes.clear();
  maybeScheduleMoleEvent({ firstEvent: true });
}

function startTimer() {
  clearInterval(timerInterval);
  const start = performance.now();
  roundCountdownPlayed = false;

  timerInterval = setInterval(() => {
    const now = performance.now();
    const elapsed = (now - start) / 1000;
    remainingTime = Math.max(0, roundTime - elapsed);
    updateTopUI();

    if (!roundCountdownPlayed && roundTime > 3 && remainingTime <= 3 && remainingTime > 0) {
      roundCountdownPlayed = true;
      stopAudioPlayer(countdownPlayer);
      countdownPlayer = playTrack("countdown", { volume: 0.95 });
    }

    if (
      round >= GAME_CONFIG.molePreviewRound &&
      moleNextEventStartsAt > 0 &&
      !moleSwapInProgress &&
      !moleEventBurstActive &&
      now >= moleNextEventStartsAt
    ) {
      moleNextEventStartsAt = 0;
      if (hasMinimumTimeForMoleStart() || round === GAME_CONFIG.molePreviewRound) {
        triggerMoleTileAttack();
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
      isCatTile(tiles[i]) &&
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
  for (let i = 0; i < 9; i++) {
    const piece = document.createElement("span");
    piece.className = "fanfare-piece";
    fx.appendChild(piece);
  }
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

function getMoleTileMetrics(tileIndex) {
  const tileEl = boardEl.children[tileIndex];
  if (!tileEl) return null;

  const wrapRect = boardWrapEl.getBoundingClientRect();
  const tileRect = tileEl.getBoundingClientRect();
  const size = clamp(tileRect.width * 0.9, 42, 82);
  const left = tileRect.left - wrapRect.left + tileRect.width / 2 - size / 2;
  const bottom = wrapRect.bottom - tileRect.bottom;

  return {
    left,
    bottom: Math.max(0, bottom),
    size
  };
}

function getCurrentMoleBurstMetrics() {
  const left = parseFloat(moleRunner.style.left);
  const bottom = parseFloat(moleRunner.style.bottom);
  const size = parseFloat(moleRunner.style.width);

  if (!Number.isFinite(left) || !Number.isFinite(bottom) || !Number.isFinite(size)) {
    return null;
  }

  return { left, bottom, size };
}

function createMoleDirtBurst(metrics, direction = "out") {
  if (!metrics) return;

  const burst = document.createElement("div");
  burst.className = `mole-dirt-burst mole-dirt-burst-${direction}`;
  burst.style.left = `${metrics.left + metrics.size / 2}px`;
  burst.style.bottom = `${Math.max(0, metrics.bottom + metrics.size * 0.08)}px`;
  burst.style.setProperty("--mole-dirt-size", `${Math.max(18, metrics.size * 0.7)}px`);

  const pieceCount = 9;
  for (let index = 0; index < pieceCount; index++) {
    const piece = document.createElement("span");
    piece.className = "mole-dirt-piece";
    piece.style.setProperty("--dirt-x", `${randomIntBetween(-32, 32)}px`);
    piece.style.setProperty("--dirt-y", `${direction === "in" ? randomIntBetween(10, 26) : randomIntBetween(-26, -8)}px`);
    piece.style.setProperty("--dirt-rot", `${randomIntBetween(-90, 90)}deg`);
    piece.style.setProperty("--dirt-delay", `${index * 18}ms`);
    piece.style.setProperty("--dirt-size", `${randomIntBetween(5, 11)}px`);
    burst.appendChild(piece);
  }

  boardWrapEl.appendChild(burst);
  setTimeout(() => burst.remove(), 520);
}

function getMoleTargetIndexes() {
  return tiles.reduce((indexes, tile, index) => {
    if (!tile || tile.state !== "idle") {
      return indexes;
    }

    indexes.push(index);
    return indexes;
  }, []);
}

function pickMoleTargetIndex() {
  const idleIndexes = getMoleTargetIndexes();
  if (idleIndexes.length === 0) {
    return -1;
  }

  let indexes = idleIndexes.filter(index => !moleUsedTileIndexes.has(index));
  if (indexes.length === 0) {
    moleUsedTileIndexes.clear();
    indexes = idleIndexes;
  }

  const targetIndex = randomFrom(indexes);
  moleAttackTargetIsStealable = true;
  moleAttackTargetIsCat = isCatTile(tiles[targetIndex]);
  moleUsedTileIndexes.add(targetIndex);
  return targetIndex;
}

function placeMoleRunnerAtTile(metrics) {
  moleRunner.classList.remove("idle", "entering", "shaking", "exiting", "tappable", "attackable", "hit", "hit-exit");
  moleRunner.classList.add("show", "attackable");
  moleRunner.style.transition = "none";
  moleRunner.style.left = `${metrics.left}px`;
  moleRunner.style.bottom = `${metrics.bottom}px`;
  moleRunner.style.width = `${metrics.size}px`;
  moleRunner.style.opacity = "1";
  moleRunner.style.transform = "translateY(62%) scaleX(1)";
  playTrack("molePopIn", { volume: 0.9 });
  createMoleDirtBurst(metrics, "in");
}

function markMoleHit(tileIndex) {
  const tileEl = boardEl.children[tileIndex];
  if (!tileEl) return;

  tileEl.classList.remove("mole-hit-flash");
  void tileEl.offsetWidth;
  tileEl.classList.add("mole-hit-flash");
  setTimeout(() => tileEl.classList.remove("mole-hit-flash"), GAME_CONFIG.moleHitImpactMs);
}

function showMoleStink(tileEl) {
  const stink = document.createElement("span");
  stink.className = "mole-stink";
  stink.textContent = "🦨";
  tileEl.appendChild(stink);
  setTimeout(() => stink.remove(), 950);
}

function consumeNextTrap() {
  if (trapInventory.length === 0) {
    return null;
  }

  const tierId = trapInventory.shift();
  renderTrapInventory();
  return getTrapTierById(tierId);
}

function showTrapTileEffect(tileIndex, trapTier, succeeded) {
  const tileEl = boardEl.children[tileIndex];
  if (!tileEl || !trapTier) return;

  const fx = document.createElement("div");
  fx.className = `tile-trap-effect ${succeeded ? "success" : "fail"}`;
  fx.innerHTML = `<img src="${trapTier.image}" alt="" />`;
  tileEl.appendChild(fx);
  setTimeout(() => fx.remove(), 460);
}

async function resolveTrapDefense(tileIndex) {
  const trapTier = consumeNextTrap();
  if (!trapTier) {
    return false;
  }

  const trapWorked = Math.random() < trapTier.successChance;
  showTrapTileEffect(tileIndex, trapTier, trapWorked);

  if (trapWorked) {
    playTrack("trap", { volume: 0.95 });
    await animateMoleRunnerDown({ hit: true });
    return true;
  }

  playTrack("trapFail", { volume: 0.95 });
  unlockNextTrapTier(trapTier.id);
  return false;
}

function stealMoleTargetTile(tileIndex) {
  const tile = tiles[tileIndex];
  const tileEl = boardEl.children[tileIndex];

  if (!tile || !tileEl || tile.state !== "idle") {
    return;
  }

  tile.selected = false;
  tile.state = "stolen";
  if (isCatTile(tile)) {
    moleCatsLostThisRound += 1;
  }
  playTrack("moleSteal", { volume: 0.95 });
  tileEl.classList.remove("selected");
  tileEl.classList.add("locked", "mole-shake");
  updatePickedCount();

  setTimeout(() => {
    tileEl.classList.remove("mole-shake");
    tileEl.classList.add("mole-stolen");
    showMoleStink(tileEl);
  }, GAME_CONFIG.moleStealShakeMs);
}

function resetActiveMoleAttack() {
  moleActiveTileIndex = -1;
  moleCurrentAttackIsPreview = false;
  moleAttackTargetIsCat = false;
  moleAttackTargetIsStealable = false;
  moleAttackTapped = false;
  moleRunner.classList.remove("tappable", "attackable", "hit", "hit-exit");
}

function finishMoleAttack({
  scheduleRepeat = true,
  endBurst = false,
  repeatDelayMs = GAME_CONFIG.moleRepeatDelayMs
} = {}) {
  resetActiveMoleAttack();
  moleSwapInProgress = false;

  if (endBurst) {
    endMoleEvent();
  } else if (scheduleRepeat && hasMoleEventTimeRemaining()) {
    scheduleMoleRepeatCheck(repeatDelayMs);
  } else if (moleEventBurstActive) {
    endMoleEvent();
  }

  if (pendingReviewAfterMole || remainingTime <= 0) {
    pendingReviewAfterMole = false;
    lockBoard();
    showTimeoutAndReview();
  }
}

async function animateMoleRunnerDown({ hit = false } = {}) {
  createMoleDirtBurst(getCurrentMoleBurstMetrics(), "out");
  moleRunner.classList.remove("tappable", "attackable");

  if (hit) {
    moleRunner.style.transition = "none";
    moleRunner.style.opacity = "1";
    moleRunner.style.transform = "translateY(0%) scaleX(1)";
    moleRunner.classList.remove("hit-exit");
    moleRunner.classList.add("hit");
    await wait(GAME_CONFIG.moleHitImpactMs);
    moleRunner.classList.remove("hit");
    moleRunner.classList.add("hit-exit");
    await wait(GAME_CONFIG.moleExitMs);
    hideMoleRunner(true);
    return;
  }

  moleRunner.classList.remove("hit", "hit-exit");
  const exitMs = GAME_CONFIG.moleExitMs;
  moleRunner.style.transition = `transform ${exitMs}ms ease, opacity ${exitMs}ms ease`;
  moleRunner.style.transform = "translateY(62%) scaleX(-1)";
  moleRunner.style.opacity = "0";

  await wait(exitMs);
  hideMoleRunner(true);
}

function isMoleAttackStillActive(tileIndex) {
  return moleSwapInProgress && !reviewInProgress && !gameOver && moleActiveTileIndex === tileIndex;
}

function waitForMoleAttackPhase(tileIndex, durationMs) {
  return new Promise(resolve => {
    const startedAt = performance.now();

    function tick(now) {
      if (!isMoleAttackStillActive(tileIndex)) {
        resolve("stopped");
        return;
      }

      if (moleAttackTapped) {
        resolve("hit");
        return;
      }

      if (now - startedAt >= durationMs) {
        resolve("elapsed");
        return;
      }

      requestAnimationFrame(tick);
    }

    requestAnimationFrame(tick);
  });
}

async function resolveMoleHit(tileIndex) {
  markMoleHit(tileIndex);
  playTrack("moleHit", { volume: 0.95 });
  await animateMoleRunnerDown({ hit: true });
  finishMoleAttack({
    scheduleRepeat: moleEventBurstActive,
    endBurst: !moleEventBurstActive
  });
}

function hideMoleRunner(immediate = false) {
  moleRunner.classList.remove("show", "idle", "entering", "shaking", "exiting", "tappable", "hit", "hit-exit");

  if (immediate) {
    moleRunner.style.transition = "none";
    moleRunner.style.opacity = "0";
    moleRunner.style.transform = "translate(-150%, 26px) rotate(-3deg)";
    moleRunner.style.left = "";
    moleRunner.style.bottom = "";
    moleRunner.style.width = "";
  }
}

function getColumnIndexes(columnIndex) {
  return Array.from({ length: currentRows }, (_, rowIndex) => rowIndex * currentCols + columnIndex);
}

function getMolePreviewTileIndex() {
  const previewRowIndex = Math.min(2, Math.max(0, currentRows - 1));
  const previewColIndex = Math.min(2, Math.max(0, currentCols - 1));
  const previewTileIndex = previewRowIndex * currentCols + previewColIndex;
  return previewTileIndex >= 0 && previewTileIndex < tiles.length ? previewTileIndex : -1;
}

async function animateMolePreviewLevelFour() {
  const previewTileIndex = getMolePreviewTileIndex();
  if (previewTileIndex === -1) {
    hideMoleRunner(true);
    finishMoleAttack({ scheduleRepeat: false, endBurst: true });
    return;
  }

  moleActiveTileIndex = previewTileIndex;
  moleAttackTapped = false;
  moleAttackTargetIsCat = false;
  moleAttackTargetIsStealable = false;

  const tileMetrics = getMoleTileMetrics(previewTileIndex);
  if (!tileMetrics) {
    hideMoleRunner(true);
    finishMoleAttack({ scheduleRepeat: false, endBurst: true });
    return;
  }

  placeMoleRunnerAtTile(tileMetrics);
  moleRunner.classList.remove("attackable", "tappable");
  void moleRunner.offsetWidth;

  moleRunner.style.transition = `transform ${GAME_CONFIG.molePopupRiseMs}ms ease`;
  moleRunner.style.transform = "translateY(0%) scaleX(1)";

  let phaseResult = await waitForMoleAttackPhase(previewTileIndex, GAME_CONFIG.molePopupRiseMs);
  if (phaseResult !== "elapsed") return;

  phaseResult = await waitForMoleAttackPhase(previewTileIndex, 300);
  if (phaseResult !== "elapsed") return;

  moleRunner.style.transition = "transform 120ms ease";
  moleRunner.style.transform = "translateY(0%) scaleX(-1)";
  phaseResult = await waitForMoleAttackPhase(previewTileIndex, 300);
  if (phaseResult !== "elapsed") return;

  moleRunner.style.transition = "transform 120ms ease";
  moleRunner.style.transform = "translateY(0%) scaleX(1)";
  phaseResult = await waitForMoleAttackPhase(previewTileIndex, 300);
  if (phaseResult !== "elapsed") return;

  createMoleDirtBurst(getCurrentMoleBurstMetrics(), "out");
  moleRunner.style.transition = `transform ${GAME_CONFIG.moleExitMs}ms ease, opacity ${GAME_CONFIG.moleExitMs}ms ease`;
  moleRunner.style.transform = "translateY(62%) scaleX(1)";
  moleRunner.style.opacity = "0";
  await wait(GAME_CONFIG.moleExitMs);
  hideMoleRunner(true);
  finishMoleAttack({ scheduleRepeat: false, endBurst: true });
}

async function triggerMoleTileAttack() {
  moleNextEventStartsAt = 0;
  moleCurrentAttackIsPreview = round === GAME_CONFIG.molePreviewRound;

  if (!moleCurrentAttackIsPreview && !hasMinimumTimeForMoleStart()) {
    if (moleEventBurstActive) {
      endMoleEvent();
    }
    return;
  }

  if (moleCurrentAttackIsPreview) {
    moleEventBurstActive = false;
    moleEventEndsAt = 0;
  } else if (!hasMoleEventTimeRemaining()) {
    if (!canStartAnotherMoleEvent()) {
      return;
    }

    moleEventsStartedThisRound += 1;
    moleEventBurstActive = true;
    moleEventEndsAt = performance.now() + getMoleEventDurationMs(round);
  }

  moleSwapInProgress = true;
  moleAttacksTriggeredThisRound += 1;

  if (!moleCurrentAttackIsPreview && !moleMusicPlayer) {
    startMoleEventMusic();
  }

  if (moleCurrentAttackIsPreview) {
    await animateMolePreviewLevelFour();
    return;
  }

  const tileIndex = pickMoleTargetIndex();
  if (tileIndex === -1) {
    hideMoleRunner(true);
    finishMoleAttack({ scheduleRepeat: false, endBurst: true });
    return;
  }

  moleActiveTileIndex = tileIndex;
  moleAttackTapped = false;
  const tapWindowMs = moleCurrentAttackIsPreview
    ? GAME_CONFIG.moleSearchTapWindowMs
    : getMoleTapWindowMs();
  const riseMs = GAME_CONFIG.molePopupRiseMs;

  const tileMetrics = getMoleTileMetrics(tileIndex);
  if (!tileMetrics) {
    hideMoleRunner(true);
    finishMoleAttack({ scheduleRepeat: false, endBurst: true });
    return;
  }

  placeMoleRunnerAtTile(tileMetrics);
  void moleRunner.offsetWidth;
  moleRunner.style.transition = `transform ${riseMs}ms ease`;
  moleRunner.style.transform = "translateY(0%) scaleX(1)";

  let phaseResult = await waitForMoleAttackPhase(tileIndex, riseMs);
  if (phaseResult === "hit") {
    await resolveMoleHit(tileIndex);
    return;
  }
  if (phaseResult !== "elapsed") return;

  moleRunner.classList.add("tappable");
  phaseResult = await waitForMoleAttackPhase(tileIndex, tapWindowMs);
  if (phaseResult === "hit") {
    await resolveMoleHit(tileIndex);
    return;
  }
  if (phaseResult !== "elapsed") return;

  moleRunner.classList.remove("tappable", "attackable");

  if (!moleCurrentAttackIsPreview) {
    if (moleAttackTargetIsCat) {
      const trapSavedTile = await resolveTrapDefense(tileIndex);

      if (trapSavedTile) {
        finishMoleAttack({
          scheduleRepeat: moleEventBurstActive,
          endBurst: !moleEventBurstActive
        });
        return;
      }
    }

    stealMoleTargetTile(tileIndex);
    await wait(GAME_CONFIG.moleStealShakeMs);
    await animateMoleRunnerDown();
    finishMoleAttack({
      scheduleRepeat: moleEventBurstActive,
      endBurst: !moleEventBurstActive
    });
    return;
  }

  await animateMoleRunnerDown();
  finishMoleAttack({
    scheduleRepeat: moleEventBurstActive,
    endBurst: !moleEventBurstActive
  });
}

async function startReview() {
  clearMoleRepeatTimeout();
  reviewInProgress = true;
  const selectedIndexes = sortedSelectedIndexes();
  const tileEls = [...boardEl.children];
  const reviewStepDelay = getScaledReviewStepDelay();
  selectedRoundBonusEmojisAtRoundEnd = getSelectedRoundBonusEmojis();
  rescuedThisRound = 0;
  bonusClockEarnedThisRound = false;
  clockTilesSelectedThisRound = 0;
  cassetteTilesSelectedThisRound = 0;
  earnedHairballThisRound = false;
  yarnHairballsEarnedThisRound = 0;
  yarnTilesSelectedThisRound = 0;
  wrongTilesSelectedThisRound = 0;

  for (const idx of selectedIndexes) {
    const t = tiles[idx];
    const el = tileEls[idx];

    if (isCatTile(t) && t.state === "idle") {
      rescuedThisRound++;
      t.state = "rescued";
      t.selected = false;
      el.classList.remove("selected");
      el.classList.add("good");
      fanfare(el);
      playGoodSound();
    } else if (t.isClock && t.state === "idle") {
      bonusClockEarnedThisRound = true;
      clockTilesSelectedThisRound++;
      t.state = "bonus";
      t.selected = false;
      el.classList.remove("selected");
      el.classList.add("good");
      fanfare(el);
    } else if (t.isYarn && t.state === "idle") {
      yarnTilesSelectedThisRound++;
      yarnHairballsEarnedThisRound += GAME_CONFIG.bonusYarnHairballs;
      t.state = "bonus";
      t.selected = false;
      el.classList.remove("selected");
      el.classList.add("good");
      fanfare(el);
    } else if (t.isCassette && t.state === "idle") {
      cassetteTilesSelectedThisRound++;
      cassetteCount = clamp(cassetteCount + 1, 0, GAME_CONFIG.maxCassetteMusicTracks - 1);
      persistStoredProgress();
      t.state = "bonus";
      t.selected = false;
      el.classList.remove("selected");
      el.classList.add("good");
      fanfare(el);
    } else if (t.state === "idle" && isRoundBonusMatchTile(t)) {
      t.state = "bonus";
      t.selected = false;
      el.classList.remove("selected");
      el.classList.add("good");
      fanfare(el);
    } else if (!isCatTile(t)) {
      t.state = "wrong";
      wrongTilesSelectedThisRound++;
      t.selected = false;
      el.classList.remove("selected");
      el.classList.add("bad");
      playBadSound();
    }

    await wait(reviewStepDelay);
  }

  const missedCatIndexes = [];
  for (let i = 0; i < tiles.length; i++) {
    if (isCatTile(tiles[i]) && tiles[i].state === "idle" && !tiles[i].selected) {
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

function getScoreboardOfferOption() {
  return {
    kind: "scoreboard",
    offerId: "scoreboard",
    cost: GAME_CONFIG.scoreboardOfferCostHairballs
  };
}

function getExitOfferOption() {
  return {
    kind: "exit",
    offerId: "exit",
    cost: GAME_CONFIG.exitOfferCostHairballs
  };
}

function getOfferProductLabel(kind, tierId = "") {
  if (kind === "time") return copy("timeOfferTitle", getTimeOfferSeconds());
  if (kind === "mute") return copy("muteOfferTitle");
  if (kind === "scoreboard") return copy("scoreOfferTitle");
  if (kind === "exit") return copy("exitOfferTitle");
  return getTrapTierLabel(tierId);
}

function getPurchasedProductLabel(kind, tierId = "") {
  if (kind === "time") return copy("timeOfferTitle", getTimeOfferSeconds());
  if (kind === "mute") return copy("purchaseProductMute");
  if (kind === "scoreboard") return copy("purchaseProductScoreboard");
  if (kind === "exit") return copy("purchaseProductExit");
  return getTrapTierLabel(tierId);
}

function getOfferVisualMarkup(kind, { tierId = "", summary = false } = {}) {
  if (kind === "time") {
    const imageClass = summary ? "trap-offer-summary-image" : "trap-offer-row-image";
    return `<img class="${imageClass}" src="images/time.png" alt="" />`;
  }

  if (kind === "mute") {
    return `<div class="offer-visual offer-visual-mute${summary ? " offer-visual-summary" : ""}" aria-hidden="true">🔇</div>`;
  }

  if (kind === "scoreboard") {
    return `<div class="offer-visual offer-visual-score${summary ? " offer-visual-summary" : ""}" aria-hidden="true">🎖️</div>`;
  }

  if (kind === "exit") {
    return `<div class="offer-visual offer-visual-exit${summary ? " offer-visual-summary" : ""}" aria-hidden="true">${copy("exit")}</div>`;
  }

  const imageClass = summary ? "trap-offer-summary-image" : "trap-offer-row-image";
  return `<img class="${imageClass}" src="${getTrapTierById(tierId).image}" alt="" />`;
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

    if (roundNumber >= GAME_CONFIG.timeOfferStartsAtRound && canShowTimeOffer()) {
      offerPool.push(getTimeOfferOption());
    }

    offerPool.push({
      kind: "trap",
      offerId: TRAP_TIERS[currentTrapTierIndex].id,
      tierId: TRAP_TIERS[currentTrapTierIndex].id,
      cost: randomIntBetween(
        TRAP_TIERS[currentTrapTierIndex].costMin,
        TRAP_TIERS[currentTrapTierIndex].costMax
      )
    });

    if (roundNumber >= GAME_CONFIG.timeOfferStartsAtRound && Math.random() >= GAME_CONFIG.timeOfferShare) {
      const timeIndex = offerPool.findIndex(option => option.kind === "time");
      if (timeIndex !== -1) {
        offerPool.splice(timeIndex, 1);
      }
    }

    return [randomFrom(offerPool)];
  }

  return [];
}

function hideTrapOffer() {
  clearTrapOfferRevealTimeout();
  if (trapOfferOverlay) {
    trapOfferOverlay.classList.add("hidden");
  }
  trapOffer.classList.add("hidden");
  trapOffer.classList.remove("purchased", "compact");
  resultPanel.classList.remove("offer-modal-active");
  trapOffer.querySelector(".trap-offer-title").textContent = copy("specialOffer");
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
  trapOfferSummaryVisual.classList.remove("celebrate");
  trapOfferSummaryItem.innerHTML = `<img class="trap-offer-summary-image" id="trapOfferSummaryImage" src="images/trap.png" alt="" />`;
  trapOfferSummaryText.textContent = copy("trap_basic");
  trapOfferRows.innerHTML = "";
  trapOfferRows.classList.remove("hidden");
  trapOfferDismissBtn.classList.add("hidden");
}

function renderSpecialOffer(options) {
  currentSpecialOfferOptions = options;
  currentSpecialOfferState = "offer";
  currentOfferSummaryData = null;
  if (trapOfferOverlay) {
    trapOfferOverlay.classList.remove("hidden");
  }
  resultPanel.classList.add("offer-modal-active");
  trapOffer.classList.remove("hidden", "purchased", "compact");
  trapOfferSummary.classList.add("hidden");
  trapOfferSummaryVisual.classList.remove("celebrate");
  trapOfferRows.classList.remove("hidden");
  trapOfferDismissBtn.classList.add("hidden");
  trapOffer.querySelector(".trap-offer-title").textContent = copy("specialOffer");

  const primaryOption = options[0] || null;
  currentSpecialOfferKind = primaryOption?.kind || "trap";
  currentSpecialOfferSellerImage = (currentSpecialOfferKind === "time" || currentSpecialOfferKind === "mute" || currentSpecialOfferKind === "scoreboard" || currentSpecialOfferKind === "exit")
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
  } else if (currentSpecialOfferKind === "scoreboard") {
    trapOfferMessage.textContent = copy("scoreOfferMessage");
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
    const isScoreboardOffer = option.kind === "scoreboard";
    const isExitOffer = option.kind === "exit";
    const rowTitle = getOfferProductLabel(option.kind, option.tierId);
    const rowVisual = getOfferVisualMarkup(option.kind, { tierId: option.tierId });
    const rowCost = isTimeOffer ? getTimeOfferCost() : option.cost;
    return `
      <div class="trap-offer-row${isTimeOffer ? " trap-offer-row-time" : ""}${isScoreboardOffer ? " trap-offer-row-scoreboard" : ""}">
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
  const summaryLabel = summaryData.kind === "time"
    ? copy("timeOfferSummary", summaryData.seconds)
    : summaryData.kind === "mute"
      ? copy("muteOfferSummary")
      : summaryData.kind === "scoreboard"
        ? copy("scoreOfferSummary")
      : summaryData.kind === "exit"
        ? copy("exitOfferSummary")
    : `${getTrapTierLabel(summaryData.tierId)}: 1`;
  const productLabel = getPurchasedProductLabel(summaryData.kind, summaryData.tierId);
  const purchaseMessage = summaryData.kind === "time"
    ? copy("timePurchaseMessage", summaryData.seconds)
    : copy("purchaseMessage", productLabel);

  if (trapOfferOverlay) {
    trapOfferOverlay.classList.remove("hidden");
  }
  resultPanel.classList.add("offer-modal-active");
  trapOffer.classList.remove("hidden", "compact");
  trapOffer.classList.add("purchased");
  trapOfferSeller.src = currentSpecialOfferSellerImage;
  trapOffer.querySelector(".trap-offer-title").textContent = copy("purchaseTitle");
  trapOfferMessage.textContent = purchaseMessage;
  trapOfferMessage.classList.remove("hidden");
  trapOfferNote.classList.add("hidden");
  trapOfferRows.classList.add("hidden");
  trapOfferDismissBtn.classList.add("hidden");
  trapOfferSummaryVisual.classList.add("celebrate");
  trapOfferSummaryItem.innerHTML = getOfferVisualMarkup(summaryData.kind, {
    tierId: summaryData.tierId,
    summary: true
  });
  trapOfferSummaryText.textContent = summaryLabel;
  trapOfferSummary.classList.remove("hidden");
}

function showTrapOfferInsufficient() {
  currentSpecialOfferState = "insufficient";
  if (trapOfferOverlay) {
    trapOfferOverlay.classList.remove("hidden");
  }
  resultPanel.classList.add("offer-modal-active");
  trapOffer.classList.remove("hidden", "purchased", "compact");
  trapOfferSummaryVisual.classList.remove("celebrate");
  trapOfferSeller.src = currentSpecialOfferKind === "trap"
    ? "images/sad_racoon.png"
    : currentSpecialOfferSellerImage;
  trapOfferMessage.textContent = copy("notEnoughHairballs");
  trapOfferMessage.classList.remove("hidden");
  trapOfferNote.classList.add("hidden");
  trapOfferSummary.classList.add("hidden");
  trapOfferRows.classList.add("hidden");
  trapOfferDismissBtn.textContent = copy("dismissInsufficient");
  trapOfferDismissBtn.classList.remove("hidden");
}

function renderRoundResultText() {
  if (!currentRoundResultSummary) {
    resultText.classList.remove("game-over-text");
    resultText.innerHTML = "";
    return;
  }

  const specialBonusMarkup = currentRoundResultSummary.specialBonusReward
    ? `<div class="result-special-bonus">${copy("specialBonusLine", formatRoundBonusRewardLabel(currentRoundResultSummary.specialBonusReward))}</div>`
    : "";

  resultText.classList.remove("game-over-text");
  resultText.innerHTML = `
    ${specialBonusMarkup}
    ${currentRoundResultSummary.perfectRescue ? `
      <div class="result-free-hairball">${copy("freeHairballWon")}</div>
      <div class="result-free-hairball">${copy("perfectRescueTimeWon", GAME_CONFIG.perfectRescueBonusSeconds)}</div>
    ` : ""}
  `;
}

function renderResultBreakdown() {
  if (!currentRoundResultSummary) {
    resultBreakdown.innerHTML = "";
    resultBreakdown.classList.add("hidden");
    return;
  }

  const rows = [
    {
      label: copy("resultCatsRescuedRow", currentRoundResultSummary.rescued),
      value: formatBreakdownPoints(currentRoundResultSummary.rescuedPoints),
      amount: currentRoundResultSummary.rescuedPoints
    },
    {
      label: copy("resultPerfectRescueRow"),
      value: formatBreakdownPoints(currentRoundResultSummary.perfectRescuePoints),
      amount: currentRoundResultSummary.perfectRescuePoints
    },
    {
      label: copy("resultRoundBonusRow", currentRoundResultSummary.roundNumber),
      value: formatBreakdownPoints(currentRoundResultSummary.roundBonusPoints),
      amount: currentRoundResultSummary.roundBonusPoints
    },
    {
      label: copy("resultHairballsFoundRow", currentRoundResultSummary.hairballsFound),
      value: formatBreakdownPoints(currentRoundResultSummary.hairballPoints),
      amount: currentRoundResultSummary.hairballPoints
    },
    {
      label: copy("resultClocksFoundRow", currentRoundResultSummary.clocksFound),
      value: formatBreakdownPoints(currentRoundResultSummary.clockPoints),
      amount: currentRoundResultSummary.clockPoints
    },
    {
      label: copy("resultCassettesFoundRow", currentRoundResultSummary.cassettesFound),
      value: formatBreakdownPoints(currentRoundResultSummary.cassettePoints),
      amount: currentRoundResultSummary.cassettePoints
    },
    {
      label: copy("resultSpecialBonusRow"),
      value: formatBreakdownPoints(currentRoundResultSummary.specialBonusPoints),
      amount: currentRoundResultSummary.specialBonusPoints
    },
    {
      label: copy("resultTotalRow"),
      value: formatBreakdownPoints(currentRoundResultSummary.scoreEarned),
      total: true
    }
  ].filter(row => row.total || row.amount > 0);

  resultBreakdown.innerHTML = `
    <div class="result-breakdown-title">${copy("resultScoreTitle")}</div>
    ${rows.map(row => `
    <div class="result-breakdown-row${row.total ? " result-breakdown-row-total" : ""}">
      <span class="result-breakdown-label">${row.label}</span>
      <span class="result-breakdown-value">${row.value}</span>
    </div>
  `).join("")}
  `;
  resultBreakdown.classList.remove("hidden");
}

function showResult() {
  const rescuableCats = getRescuableCatCount();
  const missedCats = Math.max(0, rescuableCats - rescuedThisRound);
  const missedCatPenaltyEnabled = round >= GAME_CONFIG.missedCatPenaltyStartsAtRound;
  const perfectRescue = isPerfectRescueThisRound();
  const modeTimeBonus = getModeRoundTimeBonusSeconds();
  const wrongTilePenalty = wrongTilesSelectedThisRound * GAME_CONFIG.invalidTilePenaltySeconds;
  let resultSpecialOfferOptions = [];
  let shouldRevealOffer = false;
  let delta = 0;
  let clockDelta = 0;
  let specialBonusReward = null;
  let specialBonusPoints = 0;

  stopRoundSoundtrack();

  totalRescuedCats += rescuedThisRound;
  totalMissedCats += missedCats;
  currentRoundRescuableCats = rescuableCats;
  currentRoundMissedCats = missedCats;

  if (perfectRescue) {
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

  delta -= wrongTilePenalty;

  if (bonusClockEarnedThisRound) {
    clockDelta = GAME_CONFIG.bonusClockSeconds;
  }

  if (yarnHairballsEarnedThisRound > 0) {
    totalHairballs += yarnHairballsEarnedThisRound;
  }

  nextRoundTime = roundTime + delta + clockDelta + modeTimeBonus;
  specialBonusReward = resolveRoundBonusReward();
  specialBonusPoints = specialBonusReward ? GAME_CONFIG.roundBonusScorePoints : 0;
  gameOver = nextRoundTime < GAME_CONFIG.minimumNextRoundTimeSeconds;
  resultTitle.textContent = getRoundResultTitle();
  updateResultTitleAppearance({ perfect: !gameOver && perfectRescue });

  currentRoundScore = (
    rescuedThisRound +
    (perfectRescue ? 3 : 0) +
    round +
    clockTilesSelectedThisRound +
    yarnTilesSelectedThisRound +
    cassetteTilesSelectedThisRound * 5 +
    specialBonusPoints
  );
  totalScore += currentRoundScore;
  currentRoundResultSummary = {
    rescued: rescuedThisRound,
    rescuable: rescuableCats,
    missed: missedCats,
    moleLost: moleCatsLostThisRound,
    timeDelta: delta + clockDelta + modeTimeBonus,
    hairballsEarned: (earnedHairballThisRound ? 1 : 0) + yarnHairballsEarnedThisRound,
    scoreEarned: currentRoundScore,
    rescuedPoints: rescuedThisRound,
    perfectRescuePoints: perfectRescue ? 3 : 0,
    roundNumber: round,
    roundBonusPoints: round,
    missedSeconds: -(
      Math.ceil(missedCats / GAME_CONFIG.missedCatsPerPenaltyStep) *
      GAME_CONFIG.missedCatPenaltySeconds
    ),
    hairballsFound: yarnTilesSelectedThisRound,
    hairballPoints: yarnTilesSelectedThisRound,
    clocksFound: clockTilesSelectedThisRound,
    clockPoints: clockTilesSelectedThisRound,
    cassettesFound: cassetteTilesSelectedThisRound,
    cassettePoints: cassetteTilesSelectedThisRound * 5,
    specialBonusPoints,
    perfectRescue,
    specialBonusReward
  };
  updateSummaryTexts();
  updateScoreDisplay();
  const totalCatsSeen = totalRescuedCats + totalMissedCats;
  const rescueScore = totalCatsSeen === 0
    ? 0
    : Math.round((totalRescuedCats / totalCatsSeen) * 100);
  currentRescueScore = rescueScore;

  if (gameOver) {
    const rivalLead = Math.max(3, Math.round(Math.max(6, totalScore) * (0.08 + Math.random() * 0.14)));
    const rivalScore = totalScore + rivalLead;
    const rivalName = randomFakePlayerName();
    currentRivalName = rivalName;
    currentRivalScore = rivalScore;
    resultTitle.textContent = copy("gameOver");
    updateResultTitleAppearance({ perfect: false });
    renderGameOverText();
    resourceSummary.classList.add("hidden");
    hideTrapOffer();
    nextBtn.classList.add("hidden");
    exitBtn.textContent = copy("startOver");
    exitBtn.classList.remove("hidden");
    playGameOverSound();
  } else {
    playTrack("start", { volume: 0.95 });
    renderRoundResultText();
    renderResultBreakdown();
    resourceSummary.classList.remove("hidden");
    resultSpecialOfferOptions = getSpecialOfferOptions(round);
    shouldRevealOffer = resultSpecialOfferOptions.length > 0;
    hideTrapOffer();
    nextBtn.textContent = copy("nextRound");
    nextBtn.classList.remove("hidden");
    exitBtn.textContent = copy("exit");
    exitBtn.classList.add("hidden");
  }

  resultPanel.classList.add("show");
  if (!gameOver) {
    if (shouldRevealOffer) {
      clearTrapOfferRevealTimeout();
      trapOfferRevealTimeoutId = setTimeout(() => {
        trapOfferRevealTimeoutId = null;
        if (!resultPanel.classList.contains("show") || gameOver) return;
        renderSpecialOffer(resultSpecialOfferOptions);
      }, 1500);
    }
    playResultTimeBarAnimation();
  }
}

function beginRound() {
  setOverlayPanelVisible(landingPanel, false);
  setOverlayPanelVisible(introPanel, false);
  gameEl.classList.remove("home-screen-active");
  resultPanel.classList.remove("show");
  timeoutFlash.classList.remove("show");
  currentRoundResultSummary = null;
  currentRoundScore = 0;
  resultBreakdown.innerHTML = "";
  resultBreakdown.classList.add("hidden");
  updateResultTitleAppearance({ perfect: false });
  hideTrapOffer();
  hideMoleRunner(true);
  remainingTime = roundTime;
  createBoard();
  prepareRoundHazards();
  updateTopUI();
  flushPendingUiUnlockAnimations();
  playRoundStartSound();
  startTimer();
}

function nextRound() {
  if (gameOver) return;

  roundTime = nextRoundTime;
  targetCats = nextRoundCats;
  round++;
  activeRoundBonusChallenge = upcomingRoundBonusChallenge;
  upcomingRoundBonusChallenge = createRoundBonusChallenge(round + 1);
  beginRound();
}

function initGame() {
  showHomeScreen();
}

function handleMoleRunnerWhack(event) {
  if (!moleSwapInProgress || moleActiveTileIndex === -1 || !moleRunner.classList.contains("attackable")) {
    return;
  }

  event.preventDefault();
  event.stopPropagation();
  moleAttackTapped = true;
}

playBtn?.addEventListener("click", () => {
  tryEnsureAudio();
  showIntroScreen();
});

startBtn?.addEventListener("click", () => {
  startFreshGame("normal");
});

easyModeBtn?.addEventListener("click", () => {
  startFreshGame("easy");
});

clearCacheBtn?.addEventListener("click", async () => {
  await clearBrowserDataAndReload();
});

languageToggle?.addEventListener("click", handleLanguageToggleClick);
introLanguageToggle?.addEventListener("click", handleLanguageToggleClick);

muteToggle?.addEventListener("click", () => {
  if (!muteControlUnlocked) return;
  isMuted = !isMuted;
  ensureAudio();
  applyMuteState();
});

bottomExitBtn?.addEventListener("click", () => {
  if (!exitControlUnlocked) return;
  showHomeScreen();
});

nextBtn?.addEventListener("click", () => {
  ensureAudio();
  nextRound();
});

moleRunner?.addEventListener("pointerdown", handleMoleRunnerWhack, true);
moleRunner?.addEventListener("touchstart", handleMoleRunnerWhack, {
  capture: true,
  passive: false
});

trapOfferRows?.addEventListener("click", event => {
  const buyButton = event.target.closest(".trap-offer-buy");
  if (!buyButton) return;

  if (trapOffer.classList.contains("hidden") || gameOver) {
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
  const purchasedSeconds = selectedOption.kind === "time"
    ? getTimeOfferSeconds(purchaseCost)
    : 0;

  if (totalHairballs < purchaseCost) {
    showTrapOfferInsufficient();
    return;
  }

  totalHairballs -= purchaseCost;
  playTrack("buff", { volume: 0.95 });

  if (selectedOption.kind === "time") {
    nextRoundTime += purchasedSeconds;
    showPurchasedOfferSummary({
      kind: "time",
      seconds: purchasedSeconds
    });
  } else if (selectedOption.kind === "mute") {
    muteControlUnlocked = true;
    persistStoredProgress();
    showPurchasedOfferSummary({
      kind: "mute"
    });
    updateMuteButton();
  } else if (selectedOption.kind === "scoreboard") {
    scoreboardUnlocked = true;
    pendingUiUnlockAnimations.add("scoreboard");
    persistStoredProgress();
    showPurchasedOfferSummary({
      kind: "scoreboard"
    });
    updateScoreDisplay();
  } else if (selectedOption.kind === "exit") {
    exitControlUnlocked = true;
    persistStoredProgress();
    showPurchasedOfferSummary({
      kind: "exit"
    });
    updateBottomExitButton();
  } else {
    trapInventory.push(selectedOption.tierId);
    showPurchasedOfferSummary({
      kind: "trap",
      tierId: selectedOption.tierId
    });
    renderTrapInventory();
  }

  updateSummaryTexts();
  renderRoundResultText();
});

trapOfferDismissBtn?.addEventListener("click", () => {
  hideTrapOffer();
});

trapOfferCloseBtn?.addEventListener("click", () => {
  hideTrapOffer();
});

exitBtn?.addEventListener("click", () => {
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
