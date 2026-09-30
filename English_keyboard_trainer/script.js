// ===== Элементы =====
const gameArea   = document.getElementById('game');
const overlay    = document.getElementById('overlay');
const scoreEl    = document.getElementById('score');
const livesEl    = document.getElementById('lives');
const timeEl     = document.getElementById('time');
const comboEl    = document.getElementById('combo');
const onScreenEl = document.getElementById('onScreen');
const limitEl    = document.getElementById('limit');
const startBtn   = document.getElementById('startBtn');
const resetBtn   = document.getElementById('resetBtn');

const speedRange = document.getElementById('speedRange');
const speedValue = document.getElementById('speedValue');
const spawnRange = document.getElementById('spawnRange');
const spawnValue = document.getElementById('spawnValue');
const limitRange = document.getElementById('limitRange');
const limitValue = document.getElementById('limitValue');
const livesRange = document.getElementById('livesRange');
const livesValue = document.getElementById('livesValue');
const timeRange  = document.getElementById('timeRange');
const timeValue  = document.getElementById('timeValue');

const caughtTotalEl = document.getElementById('caughtTotal');
const missedTotalEl = document.getElementById('missedTotal');
const wrongTotalEl  = document.getElementById('wrongTotal');
const accuracyEl    = document.getElementById('accuracy');
const bestScoreEl   = document.getElementById('bestScore');
const bestComboEl   = document.getElementById('bestCombo');
const gamesPlayedEl = document.getElementById('gamesPlayed');
const lettersListEl = document.getElementById('lettersList');

// ===== Наборы букв =====
const RU_LETTERS = 'АБВГДЕЖЗИКЛМНОПРСТУФХЦШЫЭЮЯ'.split('');
const EN_LETTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

// ===== Настройки =====
const SETTINGS_KEY = 'letterCatchSettings_v5';

function loadSettings() {
  const defaults = {
    layout: 'ru',
    speed: 1.5,
    spawn: 1200,
    maxLetters: 4,
    lives: 3,
    time: 60
  };

  const saved = localStorage.getItem(SETTINGS_KEY);
  if (!saved) return defaults;

  const parsed = JSON.parse(saved);

  if (parsed.layout !== 'ru' && parsed.layout !== 'en') {
    parsed.layout = 'ru';
  }

  return { ...defaults, ...parsed };
}

function saveSettings() {
  localStorage.setItem(SETTINGS_KEY, JSON.stringify(settings));
}

let settings = loadSettings();

function applySettingsToUI() {
  const radio = document.querySelector(`input[name="layout"][value="${settings.layout}"]`);
  if (radio) radio.checked = true;

  speedRange.value = settings.speed;
  speedValue.textContent = Number(settings.speed).toFixed(1);

  spawnRange.value = settings.spawn;
  spawnValue.textContent = settings.spawn;

  limitRange.value = settings.maxLetters;
  limitValue.textContent = settings.maxLetters;

  livesRange.value = settings.lives;
  livesValue.textContent = settings.lives;

  timeRange.value = settings.time;
  timeValue.textContent = settings.time;

  scoreEl.textContent = 0;
  livesEl.textContent = settings.lives;
  timeEl.textContent = settings.time;
  updateOnScreen();
}

function getLetterPool() {
  return settings.layout === 'en' ? EN_LETTERS : RU_LETTERS;
}

function updateOnScreen() {
  if (!onScreenEl || !limitEl) return;
  onScreenEl.textContent = fallingLetters.length;
  limitEl.textContent = settings.maxLetters;
}

// ===== Обработчики настроек =====
speedRange.addEventListener('input', () => {
  settings.speed = parseFloat(speedRange.value);
  speedValue.textContent = settings.speed.toFixed(1);
  saveSettings();
});

spawnRange.addEventListener('input', () => {
  settings.spawn = parseInt(spawnRange.value, 10);
  spawnValue.textContent = settings.spawn;
  saveSettings();

  if (running && spawnTimer) {
    clearTimeout(spawnTimer);
    scheduleSpawn();
  }
});

limitRange.addEventListener('input', () => {
  settings.maxLetters = parseInt(limitRange.value, 10);
  limitValue.textContent = settings.maxLetters;
  saveSettings();
  updateOnScreen();
});

livesRange.addEventListener('input', () => {
  settings.lives = parseInt(livesRange.value, 10);
  livesValue.textContent = settings.lives;
  saveSettings();
});

timeRange.addEventListener('input', () => {
  settings.time = parseInt(timeRange.value, 10);
  timeValue.textContent = settings.time;
  saveSettings();
});

document.querySelectorAll('input[name="layout"]').forEach(el => {
  el.addEventListener('change', () => {
    settings.layout = el.value;
    saveSettings();
  });
});

// ===== Статистика =====
const STATS_KEY = 'letterCatchStatsKeyboard_v4';

function loadStats() {
  const saved = localStorage.getItem(STATS_KEY);
  return saved ? JSON.parse(saved) : {
    caught: 0, missed: 0, wrong: 0,
    bestScore: 0, bestCombo: 0, games: 0,
    letters: {}
  };
}

function saveStats() {
  localStorage.setItem(STATS_KEY, JSON.stringify(stats));
}

let stats = loadStats();

function renderStats() {
  caughtTotalEl.textContent = stats.caught;
  missedTotalEl.textContent = stats.missed;
  wrongTotalEl.textContent  = stats.wrong;
  gamesPlayedEl.textContent = stats.games;
  bestScoreEl.textContent   = stats.bestScore;
  bestComboEl.textContent   = stats.bestCombo;

  const totalPresses = stats.caught + stats.wrong;
  accuracyEl.textContent = totalPresses
    ? Math.round((stats.caught / totalPresses) * 100) + '%'
    : '—';

  lettersListEl.innerHTML = '';
  Object.entries(stats.letters)
    .sort((a, b) => b[1] - a[1])
    .forEach(([letter, count]) => {
      const span = document.createElement('span');
      span.textContent = `${letter}: ${count}`;
      lettersListEl.appendChild(span);
    });
}

// ===== Игровое состояние =====
let score = 0;
let lives = 3;
let timeLeft = 60;
let combo = 0;
let maxCombo = 0;
let running = false;
let fallingLetters = [];
let spawnTimer = null;
let gameTimer = null;
let rafId = null;

function startGame() {
  if (running) return;
  running = true;

  score = 0;
  lives = settings.lives;
  timeLeft = settings.time;
  combo = 0;
  maxCombo = 0;

  fallingLetters.forEach(l => l.el.remove());
  fallingLetters = [];

  updateHud();
  updateOnScreen();
  overlay.classList.add('hidden');

  gameTimer = setInterval(() => {
    timeLeft--;
    timeEl.textContent = timeLeft;
    if (timeLeft <= 0) endGame();
  }, 1000);

  spawnLetter();
  scheduleSpawn();
  loop();
}

function updateHud() {
  scoreEl.textContent = score;
  livesEl.textContent = lives;
  timeEl.textContent = timeLeft;
  comboEl.textContent = combo;
}

function scheduleSpawn() {
  if (!running) return;
  spawnTimer = setTimeout(() => {
    if (!running) return;
    spawnLetter();
    scheduleSpawn();
  }, settings.spawn);
}

function spawnLetter() {
  if (!running) return;

  // Ручной лимит букв на экране
  if (fallingLetters.length >= settings.maxLetters) return;

  const pool = getLetterPool();
  const active = new Set(fallingLetters.map(l => l.letter));
  const available = pool.filter(l => !active.has(l));
  if (!available.length) return;

  const letter = available[Math.floor(Math.random() * available.length)];
  const el = document.createElement('div');
  el.className = 'letter';
  el.textContent = letter;

  const W = 56;
  const areaW = gameArea.clientWidth;
  let x, tries = 0;
  do {
    x = Math.random() * (areaW - W);
    tries++;
  } while (tries < 20 && fallingLetters.some(l => Math.abs(l.x - x) < W + 10));

  el.style.left = x + 'px';
  el.style.top = '-60px';
  gameArea.appendChild(el);

  fallingLetters.push({
    el, x, y: -60,
    speed: (1.2 + Math.random() * 1.2) * settings.speed,
    letter
  });

  updateOnScreen();
}

function loop() {
  if (!running) return;
  const areaH = gameArea.clientHeight;

  for (let i = fallingLetters.length - 1; i >= 0; i--) {
    const l = fallingLetters[i];
    l.y += l.speed;
    l.el.style.top = l.y + 'px';

    if (l.y > areaH - 120) l.el.classList.add('danger');
    if (l.y > areaH) missLetter(i);
  }

  rafId = requestAnimationFrame(loop);
}

function missLetter(index) {
  const l = fallingLetters[index];
  l.el.remove();
  fallingLetters.splice(index, 1);

  lives--;
  combo = 0;
  updateHud();
  updateOnScreen();

  stats.missed++;
  saveStats();
  renderStats();

  if (lives <= 0) endGame();
}

// ===== Клавиатура =====
document.addEventListener('keydown', (e) => {
  if (!running) return;
  if (e.key.length !== 1) return;

  const pressed = e.key.toLowerCase();

  let foundIndex = -1;
  for (let i = 0; i < fallingLetters.length; i++) {
    if (fallingLetters[i].letter.toLowerCase() === pressed) {
      foundIndex = i;
      break;
    }
  }

  if (foundIndex !== -1) {
    catchLetter(foundIndex);
  } else {
    stats.wrong++;
    combo = 0;
    updateHud();
    saveStats();
    renderStats();

    gameArea.classList.add('wrong-flash');
    setTimeout(() => gameArea.classList.remove('wrong-flash'), 200);
  }
});

function catchLetter(index) {
  const l = fallingLetters[index];
  l.el.classList.add('hit');
  const el = l.el;
  setTimeout(() => el.remove(), 250);
  fallingLetters.splice(index, 1);

  combo++;
  if (combo > maxCombo) maxCombo = combo;

  const gain = 1 + Math.floor(combo / 5);
  score += gain;
  updateHud();
  updateOnScreen();

  gameArea.classList.add('correct-flash');
  setTimeout(() => gameArea.classList.remove('correct-flash'), 150);

  stats.caught++;
  stats.letters[l.letter] = (stats.letters[l.letter] || 0) + 1;
  saveStats();
  renderStats();
}

function endGame() {
  running = false;
  clearTimeout(spawnTimer);
  clearInterval(gameTimer);
  cancelAnimationFrame(rafId);
  spawnTimer = null;
  gameTimer = null;

  fallingLetters.forEach(l => l.el.remove());
  fallingLetters = [];
  updateOnScreen();

  stats.games++;
  if (score > stats.bestScore) stats.bestScore = score;
  if (maxCombo > stats.bestCombo) stats.bestCombo = maxCombo;
  saveStats();
  renderStats();

  overlay.querySelector('h2').textContent = 'Игра окончена!';
  overlay.querySelector('p').innerHTML =
    `Очки: <b>${score}</b> · Поймано: <b>${stats.caught}</b> · Макс. комбо: <b>${maxCombo}</b>`;
  startBtn.textContent = '▶ Играть снова';
  overlay.classList.remove('hidden');
}

function resetStats() {
  if (!confirm('Сбросить всю статистику?')) return;
  stats = {
    caught: 0, missed: 0, wrong: 0,
    bestScore: 0, bestCombo: 0, games: 0,
    letters: {}
  };
  saveStats();
  renderStats();
}

startBtn.addEventListener('click', startGame);
resetBtn.addEventListener('click', resetStats);

// ===== Инициализация =====
applySettingsToUI();
renderStats();