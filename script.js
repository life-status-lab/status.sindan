let speed = 0;
let mental = 0;
let communication = 0;
let intelligence = 0;
let experience = 0;

let answers = {};

function startDiagnosis(){
  location.href = "question1.html";
}

function nextQuestion1(){
  location.href = "question2.html";
}

function nextQuestion2(){
  location.href = "question3.html";
}

function befQuestion1(){
   location.href = "question1.html";
}

function befQuestion2(){
   location.href = "question2.html";
}

function next3(){
   location.href = "result.html";
}

function selectButton(q, button){

  let buttons = document.querySelectorAll("." + q);

  buttons.forEach(btn => {
    btn.classList.remove("selected");
  });

  button.classList.add("selected");
}

function applyScore(q, answer, scores){

  if(answers[q]){

    let old = scores[answers[q]];

    speed -= old[0];
    mental -= old[1];
    communication -= old[2];
    intelligence -= old[3];
    experience -= old[4];
  }

  let now = scores[answer];

  speed += now[0];
  mental += now[1];
  communication += now[2];
  intelligence += now[3];
  experience += now[4];

  answers[q] = answer;
}

function q1(answer, button){

  selectButton("q1", button);

  applyScore("q1", answer, {
    a:[3,1,0,2,2],
    b:[1,0,0,1,0],
    c:[0,0,0,-1,-1],
    d:[-2,-2,0,-1,-2],
    e:[-1,-1,0,0,0]
  });
}

function q2(answer, button){

  selectButton("q2", button);

  applyScore("q2", answer, {
    a:[3,0,0,2,1],
    b:[1,2,0,1,1],
    c:[-1,0,0,-1,-2],
    d:[-2,-2,0,0,-1],
    e:[0,-1,1,0,0]
  });
}

function q3(answer, button){

  selectButton("q3", button);

  applyScore("q3", answer, {
    a:[2,1,0,0,3],
    b:[1,1,0,0,2],
    c:[0,0,1,0,1],
    d:[-1,0,0,-1,-1],
    e:[-2,-1,0,0,-2]
  });
}

function q4(answer, button){

  selectButton("q4", button);

  applyScore("q4", answer, {
    a:[2,1,0,2,1],
    b:[1,0,0,1,0],
    c:[0,-1,0,-1,-1],
    d:[-1,-2,0,-2,-2],
    e:[-2,-2,0,-2,-2]
  });
}

function q5(answer, button){

  selectButton("q5", button);

  applyScore("q5", answer, {
    a:[1,1,3,0,2],
    b:[0,1,2,0,2],
    c:[0,0,1,0,0],
    d:[-1,0,-1,0,-1],
    e:[-2,0,-2,0,-1]
  });
}

function q6(answer, button){

  selectButton("q6", button);

  applyScore("q6", answer, {
    a:[2,1,3,0,2],
    b:[1,1,2,1,1],
    c:[0,0,0,0,0],
    d:[-1,-1,-1,0,-1],
    e:[-2,-2,-2,0,-1]
  });
}

function q7(answer, button){

  selectButton("q7", button);

  applyScore("q7", answer, {
    a:[3,1,0,2,2],
    b:[2,0,0,3,2],
    c:[1,-1,0,0,0],
    d:[-2,-1,0,-1,-2],
    e:[-3,-1,0,-2,-3]
  });
}

function q8(answer, button){

  selectButton("q8", button);

  applyScore("q8", answer, {
    a:[1,3,1,0,1],
    b:[0,2,0,0,0],
    c:[0,0,0,0,0],
    d:[-1,-2,0,-1,-1],
    e:[-2,-3,0,-1,-1]
  });
}

function q9(answer, button){

  selectButton("q9", button);

  applyScore("q9", answer, {
    a:[2,1,0,2,3],
    b:[1,1,0,1,2],
    c:[0,0,0,0,0],
    d:[-1,-2,0,-1,-2],
    e:[-2,-1,0,-2,-2]
  });
}

function q10(answer, button){

  selectButton("q10", button);

  applyScore("q10", answer, {
    a:[2,1,3,0,2],
    b:[1,1,2,0,1],
    c:[0,0,1,0,0],
    d:[-1,0,-1,0,-1],
    e:[-2,0,-2,0,-1]
  });
}
  function q11(answer, button){

  selectButton("q11", button);

  applyScore("q11", answer, {
    a:[3,2,2,0,3],
    b:[2,2,1,0,2],
    c:[0,1,0,0,0],
    d:[-1,-1,0,-1,-1],
    e:[-2,-2,0,-1,-2]
  });
}

function q12(answer, button){

  selectButton("q12", button);

  applyScore("q12", answer, {
    a:[3,1,1,1,3],
    b:[1,0,0,3,2],
    c:[1,1,1,0,1],
    d:[-1,-1,0,-1,-1],
    e:[-2,-2,0,-1,-2]
  });
}

function q13(answer, button){

  selectButton("q13", button);

  applyScore("q13", answer, {
    a:[1,1,3,0,2],
    b:[0,0,1,1,1],
    c:[0,1,0,0,0],
    d:[-1,-1,0,-1,-1],
    e:[0,2,-1,1,0]
  });
}

function q14(answer, button){

  selectButton("q14", button);

  applyScore("q14", answer, {
    a:[2,3,0,1,3],
    b:[1,1,0,2,2],
    c:[0,0,0,0,0],
    d:[-1,-2,0,-1,-1],
    e:[-2,-3,0,-1,-2]
  });
}

function q15(answer, button){

  selectButton("q15", button);

  applyScore("q15", answer, {
    a:[3,1,3,0,2],
    b:[1,0,1,2,1],
    c:[0,0,1,0,0],
    d:[-1,-1,-1,0,-1],
    e:[-2,0,-2,0,-2]
  });
}

function q16(answer, button){

  selectButton("q16", button);

  applyScore("q16", answer, {
    a:[2,1,3,1,2],
    b:[1,1,2,1,1],
    c:[0,0,1,0,0],
    d:[-1,0,-1,0,-1],
    e:[-2,0,-2,0,-2]
  });
}

function q17(answer, button){

  selectButton("q17", button);

  applyScore("q17", answer, {
    a:[2,1,3,0,3],
    b:[1,1,2,1,2],
    c:[0,0,0,0,0],
    d:[-1,-1,-1,0,-1],
    e:[-2,-2,-2,0,-2]
  });
}

function q18(answer, button){

  selectButton("q18", button);

  applyScore("q18", answer, {
    a:[2,2,0,2,3],
    b:[1,1,0,1,2],
    c:[1,0,0,0,1],
    d:[-1,-1,0,-1,-1],
    e:[-2,-2,0,-2,-2]
  });
}

function q19(answer, button){

  selectButton("q19", button);

  applyScore("q19", answer, {
    a:[3,1,1,0,2],
    b:[1,1,0,3,2],
    c:[0,1,0,0,0],
    d:[-1,-1,1,0,-1],
    e:[-2,0,-1,-1,-2]
  });
}

function q20(answer, button){

  selectButton("q20", button);

  applyScore("q20", answer, {
    a:[2,1,0,2,2],
    b:[1,0,0,1,1],
    c:[0,0,0,0,0],
    d:[-1,-1,0,-1,-1],
    e:[-2,-2,0,-2,-2]
  });
}

  function q21(answer, button){

  selectButton("q21", button);

  applyScore("q21", answer, {
    a:[2,1,3,0,2],
    b:[0,0,1,1,0],
    c:[0,1,0,0,0],
    d:[-1,-2,-1,-1,-1],
    e:[-2,-2,-2,0,-1]
  });
}

function q22(answer, button){

  selectButton("q22", button);

  applyScore("q22", answer, {
    a:[2,3,2,0,2],
    b:[1,2,0,1,2],
    c:[0,0,0,0,0],
    d:[-1,-2,0,-1,-1],
    e:[-2,-3,-1,-1,-2]
  });
}

function q23(answer, button){

  selectButton("q23", button);

  applyScore("q23", answer, {
    a:[2,1,1,0,2],
    b:[1,0,0,2,1],
    c:[0,0,1,0,0],
    d:[-1,-1,0,-1,-1],
    e:[-2,0,-1,0,-2]
  });
}

function q24(answer, button){

  selectButton("q24", button);

  applyScore("q24", answer, {
    a:[2,1,0,3,2],
    b:[0,0,0,1,0],
    c:[-1,-1,0,-1,-1],
    d:[-2,-2,0,-2,-2],
    e:[-3,-3,0,-3,-3]
  });
}

function q25(answer, button){

  selectButton("q25", button);

  applyScore("q25", answer, {
    a:[3,1,1,2,3],
    b:[1,2,0,1,1],
    c:[2,1,2,0,2],
    d:[0,1,0,0,0],
    e:[-2,0,-2,-1,-1]
  });
}

function q26(answer, button){

  selectButton("q26", button);

  applyScore("q26", answer, {
    a:[3,1,1,0,3],
    b:[1,0,0,2,2],
    c:[0,0,1,0,0],
    d:[-1,0,0,0,-1],
    e:[-2,-1,-1,-1,-2]
  });
}

function q27(answer, button){

  selectButton("q27", button);

  applyScore("q27", answer, {
    a:[2,1,3,0,2],
    b:[1,2,2,1,2],
    c:[0,1,1,0,0],
    d:[-1,0,-1,1,-1],
    e:[-2,-1,-2,0,-2]
  });
}

function q28(answer, button){

  selectButton("q28", button);

  applyScore("q28", answer, {
    a:[2,0,2,-1,1],
    b:[1,1,0,1,1],
    c:[0,0,1,1,0],
    d:[-1,0,-1,0,-1],
    e:[-2,1,-2,2,-1]
  });
}

function q29(answer, button){

  selectButton("q29", button);

  applyScore("q29", answer, {
    a:[3,2,3,0,3],
    b:[2,1,2,0,2],
    c:[0,0,0,0,0],
    d:[-1,-1,-2,0,-1],
    e:[-2,-2,-3,-1,-2]
  });
}

function q30(answer, button){

  selectButton("q30", button);

  applyScore("q30", answer, {
    a:[3,2,1,1,3],
    b:[1,3,0,1,2],
    c:[0,1,0,0,0],
    d:[1,-1,0,1,1],
    e:[0,2,0,0,2]
  });
}
// ==============================
// キャラクター分類ロジック
// ==============================
// スコア変数: speed, mental, communication, intelligence, experience
// 条件: ↑ = 以上, 以下 = 以下, - = 条件なし（判定に含めない）

const CHARACTERS = [
  {
    name: "チャレン", type: "主人公型",
    conditions: [
      { stat: "speed",         op: ">=", val: 20 },
      { stat: "mental",        op: ">=", val: 0  },
      // communication: なし
      { stat: "intelligence",  op: ">=", val: 5  },
      { stat: "experience",    op: ">=", val: 15 },
    ]
  },
  {
    name: "フレア", type: "衝動型",
    conditions: [
      { stat: "speed",         op: ">=", val: 25 },
      // mental: なし
      // communication: なし
      { stat: "intelligence",  op: "<=", val: 0  },
      { stat: "experience",    op: ">=", val: 10 },
    ]
  },
  {
    name: "ラッシュ", type: "暴走型",
    conditions: [
      { stat: "speed",         op: ">=", val: 30 },
      { stat: "mental",        op: "<=", val: -5 },
      // communication: なし
      // intelligence: なし
      { stat: "experience",    op: ">=", val: 20 },
    ]
  },
  {
    name: "ヨルミー", type: "夜型",
    conditions: [
      // speed: なし
      { stat: "mental",        op: ">=", val: 25 },
      { stat: "communication", op: "<=", val: 0  },
      { stat: "intelligence",  op: ">=", val: 15 },
      // experience: なし
    ]
  },
  {
    name: "ユラ", type: "情緒揺れ",
    conditions: [
      { stat: "speed",         op: ">=", val: 5  },
      { stat: "mental",        op: ">=", val: 20 },
      { stat: "communication", op: ">=", val: 10 },
      // intelligence: なし
      // experience: なし
    ]
  },
  {
    name: "ヤミィ", type: "闇抱え込み",
    conditions: [
      { stat: "speed",         op: "<=", val: -10 },
      { stat: "mental",        op: ">=", val: 30  },
      { stat: "communication", op: "<=", val: -10 },
      { stat: "intelligence",  op: ">=", val: 10  },
      // experience: なし
    ]
  },
  {
    name: "キュルン", type: "愛され型",
    conditions: [
      // speed: なし
      { stat: "mental",        op: ">=", val: 15 },
      { stat: "communication", op: ">=", val: 25 },
      // intelligence: なし
      { stat: "experience",    op: ">=", val: 5  },
    ]
  },
  {
    name: "ポカリン", type: "陽キャ型",
    conditions: [
      { stat: "speed",         op: ">=", val: 10 },
      { stat: "mental",        op: ">=", val: 10 },
      { stat: "communication", op: ">=", val: 20 },
      // intelligence: なし
      { stat: "experience",    op: ">=", val: 10 },
    ]
  },
  {
    name: "ミナモ", type: "空気読み",
    conditions: [
      // speed: なし
      { stat: "mental",        op: ">=", val: 20 },
      { stat: "communication", op: ">=", val: 20 },
      { stat: "intelligence",  op: ">=", val: 10 },
      // experience: なし
    ]
  },
  {
    name: "ツムリィ", type: "考察型",
    conditions: [
      { stat: "speed",         op: "<=", val: -5 },
      { stat: "mental",        op: ">=", val: 15 },
      { stat: "communication", op: "<=", val: -5 },
      { stat: "intelligence",  op: ">=", val: 30 },
      // experience: なし
    ]
  },
  {
    name: "ロギ", type: "合理主義",
    conditions: [
      { stat: "speed",         op: ">=", val: 5  },
      { stat: "mental",        op: "<=", val: -10 },
      // communication: なし
      { stat: "intelligence",  op: ">=", val: 25 },
      // experience: なし
    ]
  },
  {
    name: "ノート", type: "記録者",
    conditions: [
      // speed: なし
      { stat: "mental",        op: ">=", val: 5  },
      // communication: なし
      { stat: "intelligence",  op: ">=", val: 20 },
      { stat: "experience",    op: ">=", val: 20 },
    ]
  },
  {
    name: "キョロリ", type: "好奇心",
    conditions: [
      { stat: "speed",         op: ">=", val: 15 },
      // mental: なし
      { stat: "communication", op: ">=", val: 10 },
      { stat: "intelligence",  op: ">=", val: 5  },
      { stat: "experience",    op: ">=", val: 25 },
    ]
  },
  {
    name: "ワンダ", type: "冒険家",
    conditions: [
      { stat: "speed",         op: ">=", val: 20 },
      { stat: "mental",        op: ">=", val: 5  },
      // communication: なし
      // intelligence: なし
      { stat: "experience",    op: ">=", val: 30 },
    ]
  },
  {
    name: "ハコベ", type: "収集家",
    conditions: [
      // speed: なし
      { stat: "mental",        op: ">=", val: 0  },
      // communication: なし
      { stat: "intelligence",  op: ">=", val: 15 },
      { stat: "experience",    op: ">=", val: 25 },
    ]
  },
];

/**
 * 1つの条件を評価する
 */
function checkCondition(condition) {
  const scores = { speed, mental, communication, intelligence, experience };
  const val = scores[condition.stat];
  if (condition.op === ">=") return val >= condition.val;
  if (condition.op === "<=") return val <= condition.val;
  return false;
}

/**
 * キャラクターを診断して返す
 * - 条件を満たした数が最も多いキャラを返す
 * - 同点の場合は配列の先頭（優先度）を返す
 * @returns {{ name: string, type: string, matchCount: number }}
 */
function diagnoseCharacter() {
  let best = null;
  let bestCount = -1;

  for (const chara of CHARACTERS) {
    const count = chara.conditions.filter(c => checkCondition(c)).length;
    if (count > bestCount) {
      bestCount = count;
      best = chara;
    }
  }

  return {
    name: best.name,
    type: best.type,
    matchCount: bestCount,
  };
}

/**
 * result.html などで呼び出す例:
 *
 *   const result = diagnoseCharacter();
 *   document.getElementById("chara-name").textContent = result.name;
 *   document.getElementById("chara-type").textContent = result.type;
 */
