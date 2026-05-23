// ==============================
// スコア変数
// ==============================
let speed = 0;
let mental = 0;
let communication = 0;
let intelligence = 0;
let experience = 0;

let answers = {};

// ==============================
// ページ遷移
// ==============================
function startDiagnosis() {
  speed = mental = communication = intelligence = experience = 0;
  answers = {};
  sessionStorage.removeItem('statusScores');
  location.href = "question1.html";
}

function nextQuestion1() { _saveScores(); location.href = "question2.html"; }
function nextQuestion2() { _saveScores(); location.href = "question3.html"; }
function befQuestion1()  { _saveScores(); location.href = "question1.html"; }
function befQuestion2()  { _saveScores(); location.href = "question2.html"; }
function next3()         { _saveScores(); location.href = "result.html"; }

// ==============================
// スコアの保存・復元（sessionStorage）
// ==============================
function _saveScores() {
  sessionStorage.setItem('statusScores', JSON.stringify({
    speed, mental, communication, intelligence, experience, answers
  }));
}

function _loadScores() {
  const data = sessionStorage.getItem('statusScores');
  if (data) {
    const s = JSON.parse(data);
    speed         = s.speed         || 0;
    mental        = s.mental        || 0;
    communication = s.communication || 0;
    intelligence  = s.intelligence  || 0;
    experience    = s.experience    || 0;
    answers       = s.answers       || {};
  }
}

_loadScores();

// ==============================
// ボタン選択・スコア計算
// ==============================
function selectButton(q, button) {
  let buttons = document.querySelectorAll("." + q);
  buttons.forEach(btn => btn.classList.remove("selected"));
  button.classList.add("selected");
}

function applyScore(q, answer, scores) {
  if (answers[q]) {
    let old = scores[answers[q]];
    speed -= old[0]; mental -= old[1]; communication -= old[2];
    intelligence -= old[3]; experience -= old[4];
  }
  let now = scores[answer];
  speed += now[0]; mental += now[1]; communication += now[2];
  intelligence += now[3]; experience += now[4];
  answers[q] = answer;
}

// ==============================
// Q1〜Q30 スコア定義
// ==============================
function q1(answer, button) {
  selectButton("q1", button);
  applyScore("q1", answer, {
    a: [3,1,0,2,2], b: [1,0,0,1,0],
    c: [0,0,0,-1,-1], d: [-2,-2,0,-1,-2], e: [-1,-1,0,0,0]
  });
}
function q2(answer, button) {
  selectButton("q2", button);
  applyScore("q2", answer, {
    a: [3,0,0,2,1], b: [1,2,0,1,1],
    c: [-1,0,0,-1,-2], d: [-2,-2,0,0,-1], e: [0,-1,1,0,0]
  });
}
function q3(answer, button) {
  selectButton("q3", button);
  applyScore("q3", answer, {
    a: [2,1,0,0,3], b: [1,1,0,0,2],
    c: [0,0,1,0,1], d: [-1,0,0,-1,-1], e: [-2,-1,0,0,-2]
  });
}
function q4(answer, button) {
  selectButton("q4", button);
  applyScore("q4", answer, {
    a: [2,1,0,2,1], b: [1,0,0,1,0],
    c: [0,-1,0,-1,-1], d: [-1,-2,0,-2,-2], e: [-2,-2,0,-2,-2]
  });
}
function q5(answer, button) {
  selectButton("q5", button);
  applyScore("q5", answer, {
    a: [1,1,3,0,2], b: [0,1,2,0,2],
    c: [0,0,1,0,0], d: [-1,0,-1,0,-1], e: [-2,0,-2,0,-1]
  });
}
function q6(answer, button) {
  selectButton("q6", button);
  applyScore("q6", answer, {
    a: [2,1,3,0,2], b: [1,1,2,1,1],
    c: [0,0,0,0,0], d: [-1,-1,-1,0,-1], e: [-2,-2,-2,0,-1]
  });
}
function q7(answer, button) {
  selectButton("q7", button);
  applyScore("q7", answer, {
    a: [3,1,0,2,2], b: [2,0,0,3,2],
    c: [1,-1,0,0,0], d: [-2,-1,0,-1,-2], e: [-3,-1,0,-2,-3]
  });
}
function q8(answer, button) {
  selectButton("q8", button);
  applyScore("q8", answer, {
    a: [1,3,1,0,1], b: [0,2,0,0,0],
    c: [0,0,0,0,0], d: [-1,-2,0,-1,-1], e: [-2,-3,0,-1,-1]
  });
}
function q9(answer, button) {
  selectButton("q9", button);
  applyScore("q9", answer, {
    a: [2,1,0,2,3], b: [1,1,0,1,2],
    c: [0,0,0,0,0], d: [-1,-2,0,-1,-2], e: [-2,-1,0,-2,-2]
  });
}
function q10(answer, button) {
  selectButton("q10", button);
  applyScore("q10", answer, {
    a: [2,1,3,0,2], b: [1,1,2,0,1],
    c: [0,0,1,0,0], d: [-1,0,-1,0,-1], e: [-2,0,-2,0,-1]
  });
}
function q11(answer, button) {
  selectButton("q11", button);
  applyScore("q11", answer, {
    a: [3,2,2,0,3], b: [2,2,1,0,2],
    c: [0,1,0,0,0], d: [-1,-1,0,-1,-1], e: [-2,-2,0,-1,-2]
  });
}
function q12(answer, button) {
  selectButton("q12", button);
  applyScore("q12", answer, {
    a: [3,1,1,1,3], b: [1,0,0,3,2],
    c: [1,1,1,0,1], d: [-1,-1,0,-1,-1], e: [-2,-2,0,-1,-2]
  });
}
function q13(answer, button) {
  selectButton("q13", button);
  applyScore("q13", answer, {
    a: [1,1,3,0,2], b: [0,0,1,1,1],
    c: [0,1,0,0,0], d: [-1,-1,0,-1,-1], e: [0,2,-1,1,0]
  });
}
function q14(answer, button) {
  selectButton("q14", button);
  applyScore("q14", answer, {
    a: [2,3,0,1,3], b: [1,1,0,2,2],
    c: [0,0,0,0,0], d: [-1,-2,0,-1,-1], e: [-2,-3,0,-1,-2]
  });
}
function q15(answer, button) {
  selectButton("q15", button);
  applyScore("q15", answer, {
    a: [3,1,3,0,2], b: [1,0,1,2,1],
    c: [0,0,1,0,0], d: [-1,-1,-1,0,-1], e: [-2,0,-2,0,-2]
  });
}
function q16(answer, button) {
  selectButton("q16", button);
  applyScore("q16", answer, {
    a: [2,1,3,1,2], b: [1,1,2,1,1],
    c: [0,0,1,0,0], d: [-1,0,-1,0,-1], e: [-2,0,-2,0,-2]
  });
}
function q17(answer, button) {
  selectButton("q17", button);
  applyScore("q17", answer, {
    a: [2,1,3,0,3], b: [1,1,2,1,2],
    c: [0,0,0,0,0], d: [-1,-1,-1,0,-1], e: [-2,-2,-2,0,-2]
  });
}
function q18(answer, button) {
  selectButton("q18", button);
  applyScore("q18", answer, {
    a: [2,2,0,2,3], b: [1,1,0,1,2],
    c: [1,0,0,0,1], d: [-1,-1,0,-1,-1], e: [-2,-2,0,-2,-2]
  });
}
function q19(answer, button) {
  selectButton("q19", button);
  applyScore("q19", answer, {
    a: [3,1,1,0,2], b: [1,1,0,3,2],
    c: [0,1,0,0,0], d: [-1,-1,1,0,-1], e: [-2,0,-1,-1,-2]
  });
}
function q20(answer, button) {
  selectButton("q20", button);
  applyScore("q20", answer, {
    a: [2,1,0,2,2], b: [1,0,0,1,1],
    c: [0,0,0,0,0], d: [-1,-1,0,-1,-1], e: [-2,-2,0,-2,-2]
  });
}
function q21(answer, button) {
  selectButton("q21", button);
  applyScore("q21", answer, {
    a: [2,1,3,0,2], b: [0,0,1,1,0],
    c: [0,1,0,0,0], d: [-1,-2,-1,-1,-1], e: [-2,-2,-2,0,-1]
  });
}
function q22(answer, button) {
  selectButton("q22", button);
  applyScore("q22", answer, {
    a: [2,3,2,0,2], b: [1,2,0,1,2],
    c: [0,0,0,0,0], d: [-1,-2,0,-1,-1], e: [-2,-3,-1,-1,-2]
  });
}
function q23(answer, button) {
  selectButton("q23", button);
  applyScore("q23", answer, {
    a: [2,1,1,0,2], b: [1,0,0,2,1],
    c: [0,0,1,0,0], d: [-1,-1,0,-1,-1], e: [-2,0,-1,0,-2]
  });
}
function q24(answer, button) {
  selectButton("q24", button);
  applyScore("q24", answer, {
    a: [2,1,0,3,2], b: [0,0,0,1,0],
    c: [-1,-1,0,-1,-1], d: [-2,-2,0,-2,-2], e: [-3,-3,0,-3,-3]
  });
}
function q25(answer, button) {
  selectButton("q25", button);
  applyScore("q25", answer, {
    a: [3,1,1,2,3], b: [1,2,0,1,1],
    c: [2,1,2,0,2], d: [0,1,0,0,0], e: [-2,0,-2,-1,-1]
  });
}
function q26(answer, button) {
  selectButton("q26", button);
  applyScore("q26", answer, {
    a: [3,1,1,0,3], b: [1,0,0,2,2],
    c: [0,0,1,0,0], d: [-1,0,0,0,-1], e: [-2,-1,-1,-1,-2]
  });
}
function q27(answer, button) {
  selectButton("q27", button);
  applyScore("q27", answer, {
    a: [2,1,3,0,2], b: [1,2,2,1,2],
    c: [0,1,1,0,0], d: [-1,0,-1,1,-1], e: [-2,-1,-2,0,-2]
  });
}
function q28(answer, button) {
  selectButton("q28", button);
  applyScore("q28", answer, {
    a: [2,0,2,-1,1], b: [1,1,0,1,1],
    c: [0,0,1,1,0], d: [-1,0,-1,0,-1], e: [-2,1,-2,2,-1]
  });
}
function q29(answer, button) {
  selectButton("q29", button);
  applyScore("q29", answer, {
    a: [3,2,3,0,3], b: [2,1,2,0,2],
    c: [0,0,0,0,0], d: [-1,-1,-2,0,-1], e: [-2,-2,-3,-1,-2]
  });
}
function q30(answer, button) {
  selectButton("q30", button);
  applyScore("q30", answer, {
    a: [3,2,1,1,3], b: [1,3,0,1,2],
    c: [0,1,0,0,0], d: [1,-1,0,1,1], e: [0,2,0,0,2]
  });
}

// ==============================
// 人生偏差値の計算
// データが30件未満 → シミュレーション値を使用
// データが30件以上 → スプレッドシートの実データで計算
// ==============================
const GAS_URL = 'https://script.google.com/macros/s/AKfycbxn8vsZSN6S_fOq8rHqmIbI6ZzoEPvqhtWlSYQPsICMyuBUUjpNA4sYWlFCeI6G-OYxCQ/exec';

let HENSACHI_MEAN = 21.01;
let HENSACHI_STD  = 30.16;
let statsSource   = 'simulation';

// result.htmlで呼ばれる（統計取得完了を待つPromiseを返す）
function loadStats() {
  return fetch(GAS_URL + '?t=' + Date.now())
    .then(r => r.json())
    .then(d => {
      if (d.status === 'ok' && d.std > 0) {
        HENSACHI_MEAN = d.mean;
        HENSACHI_STD  = d.std;
        statsSource   = d.source;
        console.log(`統計: ${d.source} | n=${d.count} mean=${d.mean} std=${d.std}`);
      }
    })
    .catch(() => {});
}

function calcHensachi() {
  const total = speed + mental + communication + intelligence + experience;
  const h = 50 + 10 * (total - HENSACHI_MEAN) / HENSACHI_STD;
  return Math.round(Math.min(99, Math.max(1, h)));
}

// ==============================
// キャラクター分類ロジック
// ==============================
const CHARACTERS = [
  {
    name: "チャレン", type: "人生主人公界隈",
    conditions: [
      { stat: "speed",        op: ">=", val: 12 },
      { stat: "mental",       op: ">=", val: 6  },
      { stat: "intelligence", op: ">=", val: 7  },
      { stat: "experience",   op: ">=", val: 10 },
    ]
  },
  {
    name: "ワンダ", type: "冒険中毒界隈",
    conditions: [
      { stat: "speed",      op: ">=", val: 7 },
      { stat: "mental",     op: ">=", val: 1 },
      { stat: "experience", op: ">=", val: 8 },
    ]
  },
  {
    name: "ポカリン", type: "陽キャ最前線界隈",
    conditions: [
      { stat: "speed",         op: ">=", val: 4 },
      { stat: "communication", op: ">=", val: 9 },
      { stat: "experience",    op: ">=", val: 6 },
    ]
  },
  {
    name: "ユラ", type: "共感性バグ界隈",
    conditions: [
      { stat: "mental",        op: ">=", val: 4 },
      { stat: "communication", op: ">=", val: 8 },
    ]
  },
  {
    name: "ミナモ", type: "空気読み界隈",
    conditions: [
      { stat: "mental",        op: ">=", val: 2 },
      { stat: "communication", op: ">=", val: 6 },
      { stat: "intelligence",  op: ">=", val: 3 },
    ]
  },
  {
    name: "キュルン", type: "愛され界隈",
    conditions: [
      { stat: "mental",        op: ">=", val: 2 },
      { stat: "communication", op: ">=", val: 8 },
      { stat: "experience",    op: "<=", val: 5 },
    ]
  },
  {
    name: "ノート", type: "記録魔界隈",
    conditions: [
      { stat: "intelligence", op: ">=", val: 5 },
      { stat: "experience",   op: ">=", val: 7 },
    ]
  },
  {
    name: "キョロリ", type: "好奇心暴走界隈",
    conditions: [
      { stat: "communication", op: ">=", val: 4 },
      { stat: "intelligence",  op: ">=", val: 5 },
      { stat: "experience",    op: ">=", val: 7 },
    ]
  },
  {
    name: "ハコベ", type: "収集狂界隈",
    conditions: [
      { stat: "mental",       op: ">=", val: 1 },
      { stat: "intelligence", op: ">=", val: 4 },
      { stat: "experience",   op: ">=", val: 7 },
    ]
  },
  {
    name: "ロギ", type: "理屈最強界隈",
    conditions: [
      { stat: "mental",       op: "<=", val: -2 },
      { stat: "intelligence", op: ">=", val: 4  },
    ]
  },
  {
    name: "ツムリィ", type: "考察界隈",
    conditions: [
      { stat: "speed",         op: "<=", val: -1 },
      { stat: "communication", op: "<=", val: -1 },
      { stat: "intelligence",  op: ">=", val: 4  },
    ]
  },
  {
    name: "ヨルミー", type: "深夜界隈",
    conditions: [
      { stat: "mental",        op: "<=", val: -1 },
      { stat: "communication", op: "<=", val: 2  },
      { stat: "intelligence",  op: ">=", val: 4  },
    ]
  },
  {
    name: "ヤミィ", type: "雰囲気界隈",
    conditions: [
      { stat: "speed",         op: "<=", val: -3 },
      { stat: "communication", op: "<=", val: -1 },
    ]
  },
  {
    name: "ラッシュ", type: "人生RTA界隈",
    conditions: [
      { stat: "mental",     op: "<=", val: -3 },
      { stat: "experience", op: "<=", val: -1 },
    ]
  },
  {
    name: "フレア", type: "感情暴走界隈",
    conditions: [
      { stat: "speed",        op: "<=", val: -1 },
      { stat: "mental",       op: "<=", val: -1 },
      { stat: "intelligence", op: "<=", val: -1 },
    ]
  },
];

function checkCondition(condition) {
  const scores = { speed, mental, communication, intelligence, experience };
  const val = scores[condition.stat];
  if (condition.op === ">=") return val >= condition.val;
  if (condition.op === "<=") return val <= condition.val;
  return false;
}

function diagnoseCharacter() {
  let best = null;
  let bestCount = -1;
  for (const chara of CHARACTERS) {
    const count = chara.conditions.filter(c => checkCondition(c)).length;
    if (count > bestCount) { bestCount = count; best = chara; }
  }
  return { name: best.name, type: best.type, matchCount: bestCount };
}
