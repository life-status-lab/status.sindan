var speed = 0;
var mental = 0;
var communication = 0;
var intelligence = 0;
var experience = 0;

var answers = {};


function startDiagnosis() {
  speed = 0;
  mental = 0;
  communication = 0;
  intelligence = 0;
  experience = 0;
  answers = {};
  sessionStorage.removeItem('statusScores');
  console.log("startDiagnosis よばれた");
  location.href = "question1.html";
}

function nextQuestion1() {
  console.log("nextQuestion1 よばれた");
  sukoa_hozon();
  location.href = "question2.html";
}

function nextQuestion2() {
  console.log("nextQuestion2 よばれた");
  sukoa_hozon();
  location.href = "question3.html";
}

function befQuestion1() {
  console.log("befQuestion1 よばれた");
  sukoa_hozon();
  location.href = "question1.html";
}

function befQuestion2() {
  console.log("befQuestion2 よばれた");
  sukoa_hozon();
  location.href = "question2.html";
}

function next3() {
  console.log("next3 よばれた");
  sukoa_hozon();
  location.href = "result.html";
}


function sukoa_hozon() {
  var hozon_data = {
    speed: speed,
    mental: mental,
    communication: communication,
    intelligence: intelligence,
    experience: experience,
    answers: answers
  };
  sessionStorage.setItem('statusScores', JSON.stringify(hozon_data));
  console.log("sukoa_hozon できた");
  console.log(hozon_data);
}

function sukoa_yomikomi() {
  var data_moji = sessionStorage.getItem('statusScores');
  console.log("sukoa_yomikomi data_moji：" + data_moji);

  if (data_moji) {
    var s = JSON.parse(data_moji);

    if (s.speed) { speed = s.speed; } else { speed = 0; }
    if (s.mental) { mental = s.mental; } else { mental = 0; }
    if (s.communication) { communication = s.communication; } else { communication = 0; }
    if (s.intelligence) { intelligence = s.intelligence; } else { intelligence = 0; }
    if (s.experience) { experience = s.experience; } else { experience = 0; }
    if (s.answers) { answers = s.answers; } else { answers = {}; }

    console.log("sukoa_yomikomi 完了");
    console.log("speed：" + speed);
    console.log("mental：" + mental);
    console.log("communication：" + communication);
    console.log("intelligence：" + intelligence);
    console.log("experience：" + experience);
  }
}

sukoa_yomikomi();


function buttonErabi(q, button) {
  var btn_list = document.querySelectorAll("." + q);
  for (var i = 0; i < btn_list.length; i++) {
    btn_list[i].classList.remove("selected");
  }
  button.classList.add("selected");
  console.log("buttonErabi：" + q + " selected!");
}

function sukoa_keisan(q, answer, scores_list) {
  if (answers[q]) {
    var furui_sukoa = scores_list[answers[q]];
    speed         -= furui_sukoa[0];
    mental        -= furui_sukoa[1];
    communication -= furui_sukoa[2];
    intelligence  -= furui_sukoa[3];
    experience    -= furui_sukoa[4];
    console.log("furui sukoa hikita：" + answers[q]);
  }

  var atarashii_sukoa = scores_list[answer];
  speed         += atarashii_sukoa[0];
  mental        += atarashii_sukoa[1];
  communication += atarashii_sukoa[2];
  intelligence  += atarashii_sukoa[3];
  experience    += atarashii_sukoa[4];
  answers[q] = answer;

  console.log("sukoa_keisan owatta q：" + q + " answer：" + answer);
  console.log("speed：" + speed + " mental：" + mental + " communication：" + communication + " intelligence：" + intelligence + " experience：" + experience);
}


function q1(answer, button) {
  buttonErabi("q1", button);
  var sukoa_hyou = {
    a: [3,1,0,2,2], b: [1,0,0,1,0],
    c: [0,0,0,-1,-1], d: [-2,-2,0,-1,-2], e: [-1,-1,0,0,0]
  };
  sukoa_keisan("q1", answer, sukoa_hyou);
}

function q2(answer, button) {
  buttonErabi("q2", button);
  var sukoa_hyou = {
    a: [3,0,0,2,1], b: [1,2,0,1,1],
    c: [-1,0,0,-1,-2], d: [-2,-2,0,0,-1], e: [0,-1,1,0,0]
  };
  sukoa_keisan("q2", answer, sukoa_hyou);
}

function q3(answer, button) {
  buttonErabi("q3", button);
  var sukoa_hyou = {
    a: [2,1,0,0,3], b: [1,1,0,0,2],
    c: [0,0,1,0,1], d: [-1,0,0,-1,-1], e: [-2,-1,0,0,-2]
  };
  sukoa_keisan("q3", answer, sukoa_hyou);
}

function q4(answer, button) {
  buttonErabi("q4", button);
  var sukoa_hyou = {
    a: [2,1,0,2,1], b: [1,0,0,1,0],
    c: [0,-1,0,-1,-1], d: [-1,-2,0,-2,-2], e: [-2,-2,0,-2,-2]
  };
  sukoa_keisan("q4", answer, sukoa_hyou);
}

function q5(answer, button) {
  buttonErabi("q5", button);
  var sukoa_hyou = {
    a: [1,1,3,0,2], b: [0,1,2,0,2],
    c: [0,0,1,0,0], d: [-1,0,-1,0,-1], e: [-2,0,-2,0,-1]
  };
  sukoa_keisan("q5", answer, sukoa_hyou);
}

function q6(answer, button) {
  buttonErabi("q6", button);
  var sukoa_hyou = {
    a: [2,1,3,0,2], b: [1,1,2,1,1],
    c: [0,0,0,0,0], d: [-1,-1,-1,0,-1], e: [-2,-2,-2,0,-1]
  };
  sukoa_keisan("q6", answer, sukoa_hyou);
}

function q7(answer, button) {
  buttonErabi("q7", button);
  var sukoa_hyou = {
    a: [3,1,0,2,2], b: [2,0,0,3,2],
    c: [1,-1,0,0,0], d: [-2,-1,0,-1,-2], e: [-3,-1,0,-2,-3]
  };
  sukoa_keisan("q7", answer, sukoa_hyou);
}

function q8(answer, button) {
  buttonErabi("q8", button);
  var sukoa_hyou = {
    a: [1,3,1,0,1], b: [0,2,0,0,0],
    c: [0,0,0,0,0], d: [-1,-2,0,-1,-1], e: [-2,-3,0,-1,-1]
  };
  sukoa_keisan("q8", answer, sukoa_hyou);
}

function q9(answer, button) {
  buttonErabi("q9", button);
  var sukoa_hyou = {
    a: [2,1,0,2,3], b: [1,1,0,1,2],
    c: [0,0,0,0,0], d: [-1,-2,0,-1,-2], e: [-2,-1,0,-2,-2]
  };
  sukoa_keisan("q9", answer, sukoa_hyou);
}

function q10(answer, button) {
  buttonErabi("q10", button);
  var sukoa_hyou = {
    a: [2,1,3,0,2], b: [1,1,2,0,1],
    c: [0,0,1,0,0], d: [-1,0,-1,0,-1], e: [-2,0,-2,0,-1]
  };
  sukoa_keisan("q10", answer, sukoa_hyou);
}

function q11(answer, button) {
  buttonErabi("q11", button);
  var sukoa_hyou = {
    a: [3,2,2,0,3], b: [2,2,1,0,2],
    c: [0,1,0,0,0], d: [-1,-1,0,-1,-1], e: [-2,-2,0,-1,-2]
  };
  sukoa_keisan("q11", answer, sukoa_hyou);
}

function q12(answer, button) {
  buttonErabi("q12", button);
  var sukoa_hyou = {
    a: [3,1,1,1,3], b: [1,0,0,3,2],
    c: [1,1,1,0,1], d: [-1,-1,0,-1,-1], e: [-2,-2,0,-1,-2]
  };
  sukoa_keisan("q12", answer, sukoa_hyou);
}

function q13(answer, button) {
  buttonErabi("q13", button);
  var sukoa_hyou = {
    a: [1,1,3,0,2], b: [0,0,1,1,1],
    c: [0,1,0,0,0], d: [-1,-1,0,-1,-1], e: [0,2,-1,1,0]
  };
  sukoa_keisan("q13", answer, sukoa_hyou);
}

function q14(answer, button) {
  buttonErabi("q14", button);
  var sukoa_hyou = {
    a: [2,3,0,1,3], b: [1,1,0,2,2],
    c: [0,0,0,0,0], d: [-1,-2,0,-1,-1], e: [-2,-3,0,-1,-2]
  };
  sukoa_keisan("q14", answer, sukoa_hyou);
}

function q15(answer, button) {
  buttonErabi("q15", button);
  var sukoa_hyou = {
    a: [3,1,3,0,2], b: [1,0,1,2,1],
    c: [0,0,1,0,0], d: [-1,-1,-1,0,-1], e: [-2,0,-2,0,-2]
  };
  sukoa_keisan("q15", answer, sukoa_hyou);
}

function q16(answer, button) {
  buttonErabi("q16", button);
  var sukoa_hyou = {
    a: [2,1,3,1,2], b: [1,1,2,1,1],
    c: [0,0,1,0,0], d: [-1,0,-1,0,-1], e: [-2,0,-2,0,-2]
  };
  sukoa_keisan("q16", answer, sukoa_hyou);
}

function q17(answer, button) {
  buttonErabi("q17", button);
  var sukoa_hyou = {
    a: [2,1,3,0,3], b: [1,1,2,1,2],
    c: [0,0,0,0,0], d: [-1,-1,-1,0,-1], e: [-2,-2,-2,0,-2]
  };
  sukoa_keisan("q17", answer, sukoa_hyou);
}

function q18(answer, button) {
  buttonErabi("q18", button);
  var sukoa_hyou = {
    a: [2,2,0,2,3], b: [1,1,0,1,2],
    c: [1,0,0,0,1], d: [-1,-1,0,-1,-1], e: [-2,-2,0,-2,-2]
  };
  sukoa_keisan("q18", answer, sukoa_hyou);
}

function q19(answer, button) {
  buttonErabi("q19", button);
  var sukoa_hyou = {
    a: [3,1,1,0,2], b: [1,1,0,3,2],
    c: [0,1,0,0,0], d: [-1,-1,1,0,-1], e: [-2,0,-1,-1,-2]
  };
  sukoa_keisan("q19", answer, sukoa_hyou);
}

function q20(answer, button) {
  buttonErabi("q20", button);
  var sukoa_hyou = {
    a: [2,1,0,2,2], b: [1,0,0,1,1],
    c: [0,0,0,0,0], d: [-1,-1,0,-1,-1], e: [-2,-2,0,-2,-2]
  };
  sukoa_keisan("q20", answer, sukoa_hyou);
}

function q21(answer, button) {
  buttonErabi("q21", button);
  var sukoa_hyou = {
    a: [2,1,3,0,2], b: [0,0,1,1,0],
    c: [0,1,0,0,0], d: [-1,-2,-1,-1,-1], e: [-2,-2,-2,0,-1]
  };
  sukoa_keisan("q21", answer, sukoa_hyou);
}

function q22(answer, button) {
  buttonErabi("q22", button);
  var sukoa_hyou = {
    a: [2,3,2,0,2], b: [1,2,0,1,2],
    c: [0,0,0,0,0], d: [-1,-2,0,-1,-1], e: [-2,-3,-1,-1,-2]
  };
  sukoa_keisan("q22", answer, sukoa_hyou);
}

function q23(answer, button) {
  buttonErabi("q23", button);
  var sukoa_hyou = {
    a: [2,1,1,0,2], b: [1,0,0,2,1],
    c: [0,0,1,0,0], d: [-1,-1,0,-1,-1], e: [-2,0,-1,0,-2]
  };
  sukoa_keisan("q23", answer, sukoa_hyou);
}

function q24(answer, button) {
  buttonErabi("q24", button);
  var sukoa_hyou = {
    a: [2,1,0,3,2], b: [0,0,0,1,0],
    c: [-1,-1,0,-1,-1], d: [-2,-2,0,-2,-2], e: [-3,-3,0,-3,-3]
  };
  sukoa_keisan("q24", answer, sukoa_hyou);
}

function q25(answer, button) {
  buttonErabi("q25", button);
  var sukoa_hyou = {
    a: [3,1,1,2,3], b: [1,2,0,1,1],
    c: [2,1,2,0,2], d: [0,1,0,0,0], e: [-2,0,-2,-1,-1]
  };
  sukoa_keisan("q25", answer, sukoa_hyou);
}

function q26(answer, button) {
  buttonErabi("q26", button);
  var sukoa_hyou = {
    a: [3,1,1,0,3], b: [1,0,0,2,2],
    c: [0,0,1,0,0], d: [-1,0,0,0,-1], e: [-2,-1,-1,-1,-2]
  };
  sukoa_keisan("q26", answer, sukoa_hyou);
}

function q27(answer, button) {
  buttonErabi("q27", button);
  var sukoa_hyou = {
    a: [2,1,3,0,2], b: [1,2,2,1,2],
    c: [0,1,1,0,0], d: [-1,0,-1,1,-1], e: [-2,-1,-2,0,-2]
  };
  sukoa_keisan("q27", answer, sukoa_hyou);
}

function q28(answer, button) {
  buttonErabi("q28", button);
  var sukoa_hyou = {
    a: [2,0,2,-1,1], b: [1,1,0,1,1],
    c: [0,0,1,1,0], d: [-1,0,-1,0,-1], e: [-2,1,-2,2,-1]
  };
  sukoa_keisan("q28", answer, sukoa_hyou);
}

function q29(answer, button) {
  buttonErabi("q29", button);
  var sukoa_hyou = {
    a: [3,2,3,0,3], b: [2,1,2,0,2],
    c: [0,0,0,0,0], d: [-1,-1,-2,0,-1], e: [-2,-2,-3,-1,-2]
  };
  sukoa_keisan("q29", answer, sukoa_hyou);
}

function q30(answer, button) {
  buttonErabi("q30", button);
  var sukoa_hyou = {
    a: [3,2,1,1,3], b: [1,3,0,1,2],
    c: [0,1,0,0,0], d: [1,-1,0,1,1], e: [0,2,0,0,2]
  };
  sukoa_keisan("q30", answer, sukoa_hyou);
}


var GAS_URL = 'https://script.google.com/macros/s/AKfycbxn8vsZSN6S_fOq8rHqmIbI6ZzoEPvqhtWlSYQPsICMyuBUUjpNA4sYWlFCeI6G-OYxCQ/exec';

var HENSACHI_MEAN = 21.01;
var HENSACHI_STD  = 30.16;
var statsSource   = 'simulation';

function loadStats() {
  var url = GAS_URL + '?t=' + Date.now();
  console.log("loadStats fetch url：" + url);

  return fetch(url)
    .then(function(r) {
      return r.json();
    })
    .then(function(d) {
      console.log("loadStats レスポンス：");
      console.log(d);

      if (d.status === 'ok') {
        if (d.std > 0) {
          HENSACHI_MEAN = d.mean;
          HENSACHI_STD  = d.std;
          statsSource   = d.source;
          console.log("統計 更新できた！ mean：" + d.mean + " std：" + d.std + " source：" + d.source);
        } else {
          console.log("std が 0 だったのでシミュレーション値のまま");
        }
      } else {
        console.log("status が ok じゃなかった");
      }
    })
    .catch(function() {
      console.log("loadStats fetch 失敗した。シミュレーション値で行く");
    });
}

function calcHensachi() {
  var total = speed + mental + communication + intelligence + experience;
  console.log("calcHensachi total：" + total);
  console.log("HENSACHI_MEAN：" + HENSACHI_MEAN + " HENSACHI_STD：" + HENSACHI_STD);

  var h = 50 + 10 * (total - HENSACHI_MEAN) / HENSACHI_STD;
  console.log("h（まるめ前）：" + h);

  if (h > 99) { h = 99; }
  if (h < 1)  { h = 1; }

  h = Math.round(h);
  console.log("hensachi 最終：" + h);

  return h;
}


var CHARA_LIST = [
  {
    namae: "チャレン", type_namae: "人生主人公界隈",
    jouken: [
      { stat_namae: "speed",        op: ">=", val: 12 },
      { stat_namae: "mental",       op: ">=", val: 6  },
      { stat_namae: "intelligence", op: ">=", val: 7  },
      { stat_namae: "experience",   op: ">=", val: 10 },
    ]
  },
  {
    namae: "ワンダ", type_namae: "冒険中毒界隈",
    jouken: [
      { stat_namae: "speed",      op: ">=", val: 7 },
      { stat_namae: "mental",     op: ">=", val: 1 },
      { stat_namae: "experience", op: ">=", val: 8 },
    ]
  },
  {
    namae: "ポカリン", type_namae: "陽キャ最前線界隈",
    jouken: [
      { stat_namae: "speed",         op: ">=", val: 4 },
      { stat_namae: "communication", op: ">=", val: 9 },
      { stat_namae: "experience",    op: ">=", val: 6 },
    ]
  },
  {
    namae: "ユラ", type_namae: "共感性バグ界隈",
    jouken: [
      { stat_namae: "mental",        op: ">=", val: 4 },
      { stat_namae: "communication", op: ">=", val: 8 },
    ]
  },
  {
    namae: "ミナモ", type_namae: "空気読み界隈",
    jouken: [
      { stat_namae: "mental",        op: ">=", val: 2 },
      { stat_namae: "communication", op: ">=", val: 6 },
      { stat_namae: "intelligence",  op: ">=", val: 3 },
    ]
  },
  {
    namae: "キュルン", type_namae: "愛され界隈",
    jouken: [
      { stat_namae: "mental",        op: ">=", val: 2 },
      { stat_namae: "communication", op: ">=", val: 8 },
      { stat_namae: "experience",    op: "<=", val: 5 },
    ]
  },
  {
    namae: "ノート", type_namae: "記録魔界隈",
    jouken: [
      { stat_namae: "intelligence", op: ">=", val: 5 },
      { stat_namae: "experience",   op: ">=", val: 7 },
    ]
  },
  {
    namae: "キョロリ", type_namae: "好奇心暴走界隈",
    jouken: [
      { stat_namae: "communication", op: ">=", val: 4 },
      { stat_namae: "intelligence",  op: ">=", val: 5 },
      { stat_namae: "experience",    op: ">=", val: 7 },
    ]
  },
  {
    namae: "ハコベ", type_namae: "収集狂界隈",
    jouken: [
      { stat_namae: "mental",       op: ">=", val: 1 },
      { stat_namae: "intelligence", op: ">=", val: 4 },
      { stat_namae: "experience",   op: ">=", val: 7 },
    ]
  },
  {
    namae: "ロギ", type_namae: "理屈最強界隈",
    jouken: [
      { stat_namae: "mental",       op: "<=", val: -2 },
      { stat_namae: "intelligence", op: ">=", val: 4  },
    ]
  },
  {
    namae: "ツムリィ", type_namae: "考察界隈",
    jouken: [
      { stat_namae: "speed",         op: "<=", val: -1 },
      { stat_namae: "communication", op: "<=", val: -1 },
      { stat_namae: "intelligence",  op: ">=", val: 4  },
    ]
  },
  {
    namae: "ヨルミー", type_namae: "深夜界隈",
    jouken: [
      { stat_namae: "mental",        op: "<=", val: -1 },
      { stat_namae: "communication", op: "<=", val: 2  },
      { stat_namae: "intelligence",  op: ">=", val: 4  },
    ]
  },
  {
    namae: "ヤミィ", type_namae: "雰囲気界隈",
    jouken: [
      { stat_namae: "speed",         op: "<=", val: -3 },
      { stat_namae: "communication", op: "<=", val: -1 },
    ]
  },
  {
    namae: "ラッシュ", type_namae: "人生RTA界隈",
    jouken: [
      { stat_namae: "mental",     op: "<=", val: -3 },
      { stat_namae: "experience", op: "<=", val: -1 },
    ]
  },
  {
    namae: "フレア", type_namae: "感情暴走界隈",
    jouken: [
      { stat_namae: "speed",        op: "<=", val: -1 },
      { stat_namae: "mental",       op: "<=", val: -1 },
      { stat_namae: "intelligence", op: "<=", val: -1 },
    ]
  },
];

function jouken_check(jouken_obj) {
  var sukoa_map = {
    speed: speed,
    mental: mental,
    communication: communication,
    intelligence: intelligence,
    experience: experience
  };

  var ima_val = sukoa_map[jouken_obj.stat_namae];

  if (jouken_obj.op === ">=") {
    return ima_val >= jouken_obj.val;
  }
  if (jouken_obj.op === "<=") {
    return ima_val <= jouken_obj.val;
  }

  return false;
}

function diagnoseCharacter() {
  var ichiban_ii_chara = null;
  var ichiban_ii_count = -1;

  console.log("diagnoseCharacter kaishi");

  for (var i = 0; i < CHARA_LIST.length; i++) {
    var ima_chara = CHARA_LIST[i];
    var match_count = 0;

    for (var j = 0; j < ima_chara.jouken.length; j++) {
      if (jouken_check(ima_chara.jouken[j])) {
        match_count = match_count + 1;
      }
    }

    console.log(ima_chara.namae + " match_count：" + match_count);

    if (match_count > ichiban_ii_count) {
      ichiban_ii_count = match_count;
      ichiban_ii_chara = ima_chara;
    }
  }

  console.log("kekka chara：" + ichiban_ii_chara.namae);
  console.log("kekka type：" + ichiban_ii_chara.type_namae);
  console.log("kekka match_count：" + ichiban_ii_count);

  return {
    name: ichiban_ii_chara.namae,
    type: ichiban_ii_chara.type_namae,
    matchCount: ichiban_ii_count
  };
}


var CHARA_DATA = {
  "チャレン": {
    img:"images/08m.png", emoji:"⚡",
    catchcopy:"行動力と根性で道を切り拓く、生まれながらのリーダー",
    desc:"いつだってまっすぐ前を向く、生まれながらの主人公！困難にぶつかるほど燃えるタイプで、周りを自然と引っ張っていく存在。失敗を恐れず、挑戦し続けるその姿がみんなの憧れ！",
    good:"ワンダ", goodSub:"お互いの行動力が共鳴して最強コンビに",
    bad:"フレア", badSub:"衝動 vs 計画でぶつかりがち",
  },
  "フレア": {
    img:"images/09m.png", emoji:"🔥",
    catchcopy:"感情が先行する、止められない衝動の塊",
    desc:"感情の炎が一瞬で爆発！直感と勢いで突き進む衝動型。じっくり考えるより先に体が動いちゃうけど、その情熱こそが最大の武器。熱量だけは誰にも負けない！",
    good:"ラッシュ", goodSub:"同じ衝動型同士、テンションが合いすぎる",
    bad:"チャレン", badSub:"計画的なチャレンには理解されにくい",
  },
  "ラッシュ": {
    img:"images/02m.png", emoji:"💥",
    catchcopy:"空回りしながらも突き進む、予測不能な暴走機関車",
    desc:"止まれない、止められない！メンタルが低くても体だけは動いちゃうタイプ。時に空回りするけど、その突破力は本物。自分でも予測不能な暴走がクセになる。",
    good:"フレア", goodSub:"同じ衝動エネルギーで盛り上がれる",
    bad:"チャレン", badSub:"計画性のギャップでよくぶつかる",
  },
  "ヨルミー": {
    img:"images/03m.png", emoji:"🌙",
    catchcopy:"夜と静寂を愛する、内向きの知性派",
    desc:"夜が一番似合う、論理的で内向きな夜型人間。静かな時間に深く考え、感じるものを大切にするタイプ。昼より夜、にぎやかさより静寂。そんなあなたの世界には独特の美しさがある。",
    good:"ロギ", goodSub:"知性派同士、会話が深く刺さり合う",
    bad:"チャレン", badSub:"エネルギーの方向性が真逆すぎる",
  },
  "ユラ": {
    img:"images/01m.png", emoji:"🌊",
    catchcopy:"感情の波に揺れながら、誰よりも共感力が高い",
    desc:"感情がゆらゆら揺れる、豊かな心の持ち主。喜怒哀楽がダイレクトに伝わってくるから、一緒にいると感情移入しすぎることも。その繊細さが、誰よりも人の気持ちをわかる力になってる！",
    good:"ミナモ", goodSub:"感情を受け止めてくれるミナモに癒される",
    bad:"フレア", badSub:"フレアの爆発についていけないことも",
  },
  "ヤミィ": {
    img:"images/14mm.png", emoji:"🖤",
    catchcopy:"闇を静かに抱えながら前を向く、強さの人",
    desc:"深い闇を静かに抱えながら、それでも前を向いてる強さがある。見た目はクールでも、内側には激しい感情の嵐。一人で抱え込みがちだけど、その深さこそがあなたの魅力。",
    good:"ツムリィ", goodSub:"内向き同士、言葉なくても通じ合える",
    bad:"チャレン", badSub:"チャレンの明るさが眩しすぎる",
  },
  "キュルン": {
    img:"images/07m.png", emoji:"🍭",
    catchcopy:"気づけば周りに人が集まる、天然の愛されオーラ",
    desc:"気づいたら周りに人が集まってくる、天然の愛され体質！無意識に場を和ませて、みんなをほっこりさせる癒し系。甘えるのも甘やかすのも得意で、いつも誰かの「推し」になってる！",
    good:"ユラ", goodSub:"感情を共有し合えるベストパートナー",
    bad:"チャレン", badSub:"チャレンのガンガン系に気疲れしがち",
  },
  "ポカリン": {
    img:"images/05m.png", emoji:"☀️",
    catchcopy:"どこにいても場を明るくする、無限エネルギーの陽キャ",
    desc:"どこにいてもその場の空気を明るくしちゃう陽キャの王道！コミュ力バツグンで初対面でもすぐ打ち解けられる。笑顔が武器で、友達の数は多分数えきれない。エネルギーが無限！",
    good:"ワンダ", goodSub:"行動力とコミュ力で最強に楽しい時間を作れる",
    bad:"ツムリィ", badSub:"静かなツムリィには少しうるさいかも",
  },
  "ミナモ": {
    img:"images/06m.png", emoji:"💧",
    catchcopy:"場の空気を読む天才、縁の下の静かな立役者",
    desc:"空気を読む天才！場の流れを瞬時に察知して、自然と最適な立ち位置を取れる。でしゃばりすぎず、引きすぎず。そのバランス感覚こそがあなたのすごいところ。縁の下の力持ち系！",
    good:"キョロリ", goodSub:"知的好奇心を持つキョロリとの会話が弾む",
    bad:"チャレン", badSub:"チャレンのゴリ押しスタイルに合わせるのが大変",
  },
  "ツムリィ": {
    img:"images/13m.png", emoji:"🔍",
    catchcopy:"物事の奥底まで掘り下げる、孤高の考察マシン",
    desc:"物事をとことん深く考える、生粋の考察タイプ。表面だけじゃなく、その奥の奥まで見通そうとするから、気づいたら頭の中でひとり研究発表が始まってることも。分析力はピカイチ！",
    good:"ヨルミー", goodSub:"静かで知的な空間を一緒に作れる",
    bad:"チャレン", badSub:"チャレンの直感行動が理解できない",
  },
  "ロギ": {
    img:"images/10m.png", emoji:"📐",
    catchcopy:"感情を排除して最適解を導く、冷静な合理主義者",
    desc:"感情より論理、直感より根拠。データと理屈で動く合理主義者。無駄を嫌い、最短ルートを即座に計算できる。クールに見えるけど、実は正しいことへの強いこだわりを持ってる。",
    good:"ヨルミー", goodSub:"知性的な会話ができる最高の理解者",
    bad:"チャレン", badSub:"感情で動くチャレンとは相容れない",
  },
  "ノート": {
    img:"images/12m.png", emoji:"📓",
    catchcopy:"見たものを言語化せずにはいられない、記録の人",
    desc:"見たこと、感じたこと、考えたことを書き残さずにはいられない記録者。記憶より記録、感情より言語化。あなたの残してきたログが、いつか誰かの大切な地図になる。",
    good:"キョロリ", goodSub:"好奇心旺盛なキョロリの話をメモしたくなる",
    bad:"フレア", badSub:"フレアの衝動的な行動を記録しきれない",
  },
  "キョロリ": {
    img:"images/11m.png", emoji:"👀",
    catchcopy:"世界中のすべてに「なんで？」を問い続ける好奇心の塊",
    desc:"世界のすべてが気になって仕方ない、好奇心のかたまり！あっちにもこっちにも興味が飛んで、気づいたら知識が雑多に積み上がってる。その「なんで？」が止まらないのが最大の強み！",
    good:"ノート", goodSub:"お互いの知識欲が共鳴して話が尽きない",
    bad:"フレア", badSub:"フレアの感情的な行動が論理的に理解できない",
  },
  "ワンダ": {
    img:"images/15m.png", emoji:"🗺️",
    catchcopy:"未知への挑戦を止められない、本能の冒険家",
    desc:"未知の世界へ飛び込むことが何より好きな冒険家！地図のない道を楽しみながら進んでいける胆力の持ち主。新しい出会い、景色、経験…ぜんぶがあなたの燃料になってる！",
    good:"ポカリン", goodSub:"行動力×コミュ力で最高の冒険仲間に",
    bad:"フレア", badSub:"フレアの衝動は予測不能すぎてついていけない",
  },
  "ハコベ": {
    img:"images/04m.png", emoji:"📦",
    catchcopy:"こだわりのコレクションに人生を捧げる、深みのマニア",
    desc:"好きなものをひたすら集め、丁寧にコレクションしていく収集家。量より質、広さより深さ。こだわりのコレクションには確かな審美眼が光ってる。その情熱、本物のマニアの証！",
    good:"ノート", goodSub:"記録とコレクションで完璧なアーカイブを作れる",
    bad:"フレア", badSub:"フレアの雑な扱いがコレクションの天敵",
  },
};


function hensachiRankDasu(h) {
  var rank_moji = "";
  var up_moji = "";

  if (h >= 75) {
    rank_moji = "🏆 伝説級";
    up_moji = "上位1%のレジェンド";
  }
  if (h >= 70 && h < 75) {
    rank_moji = "👑 神クラス";
    up_moji = "上位2%の超人";
  }
  if (h >= 65 && h < 70) {
    rank_moji = "⭐ エリート";
    up_moji = "上位7%の実力者";
  }
  if (h >= 60 && h < 65) {
    rank_moji = "💪 優秀";
    up_moji = "上位16%の頑張り屋";
  }
  if (h >= 55 && h < 60) {
    rank_moji = "😊 平均以上";
    up_moji = "上位31%";
  }
  if (h >= 50 && h < 55) {
    rank_moji = "😐 ちょい上";
    up_moji = "ちょうど平均より上";
  }
  if (h >= 45 && h < 50) {
    rank_moji = "🤔 平均あたり";
    up_moji = "どまんなか";
  }
  if (h >= 40 && h < 45) {
    rank_moji = "😅 ちょい下";
    up_moji = "まだまだ伸びしろ大";
  }
  if (h >= 35 && h < 40) {
    rank_moji = "😔 個性派";
    up_moji = "人と違う道を歩んでる";
  }
  if (h < 35) {
    rank_moji = "🌙 隠れた才能型";
    up_moji = "磨けば光る原石";
  }

  console.log("rank出た：" + rank_moji);
  console.log("up_moji：" + up_moji);

  return { rank: rank_moji, up: up_moji };
}


function weaknessData(sp, me, co, iq, ex) {

  var koudouryoku_val = sp;
  var kanjou_val = me;
  var comm_val = co;
  var chisei_val = iq;
  var keikennchi_val = ex;

  console.log("koudouryoku_val：" + koudouryoku_val);
  console.log("kanjou_val：" + kanjou_val);
  console.log("comm_val：" + comm_val);
  console.log("chisei_val：" + chisei_val);
  console.log("keikennchi_val：" + keikennchi_val);

  var ichiban_hikui_namae = "";
  var ichiban_hikui_val = 99999;

  if (koudouryoku_val < ichiban_hikui_val) {
    ichiban_hikui_val = koudouryoku_val;
    ichiban_hikui_namae = "行動力";
  }
  if (kanjou_val < ichiban_hikui_val) {
    ichiban_hikui_val = kanjou_val;
    ichiban_hikui_namae = "感情";
  }
  if (comm_val < ichiban_hikui_val) {
    ichiban_hikui_val = comm_val;
    ichiban_hikui_namae = "コミュ力";
  }
  if (chisei_val < ichiban_hikui_val) {
    ichiban_hikui_val = chisei_val;
    ichiban_hikui_namae = "知性";
  }
  if (keikennchi_val < ichiban_hikui_val) {
    ichiban_hikui_val = keikennchi_val;
    ichiban_hikui_namae = "経験値";
  }

  console.log("いちばん低いの：" + ichiban_hikui_namae);

  var koudouryoku_comments = [
    "何者にもなれてないのに、悩んでる時間だけは一流。",
    "逃げ癖が染みつきすぎて、自分の人生すら前に進められてない。",
    "結局いつも『やらなかった側』にいる。",
  ];
  var kanjou_comments = [
    "情緒が終わってるせいで、毎回自分で自分を壊してる。",
    "被害妄想と自己否定だけで精神を消費してる。",
    "感情を制御できてない時点で、人生の主導権ほぼ失ってる。",
  ];
  var comm_comments = [
    "他人の顔色うかがうだけで、自分の中身が空っぽになってる。",
    "本音隠しすぎて、誰ともまともな関係作れてない。",
    "人間関係下手なくせに承認欲求だけは異常に強い。",
  ];
  var chisei_comments = [
    "何も考えずに動いて失敗して、また同じこと繰り返してる。",
    "浅い判断ばっかしてるから、人生ずっと効率悪い。",
    "勢いだけで生きてるせいで、自分の失敗すら分析できてない。",
  ];
  var keikennchi_comments = [
    "挑戦から逃げ続けた結果、人格が全然育ってない。",
    "安全圏に引きこもってるだけなのに、『慎重』だと思い込んでる。",
    "失敗を恐れて何もしないまま、時間だけ無駄に死んでいってる。",
  ];

  var eranda_comment = "";

  if (ichiban_hikui_namae == "行動力") {
    var random_num = Math.floor(Math.random() * 3);
    eranda_comment = koudouryoku_comments[random_num];
  }
  if (ichiban_hikui_namae == "感情") {
    var random_num = Math.floor(Math.random() * 3);
    eranda_comment = kanjou_comments[random_num];
  }
  if (ichiban_hikui_namae == "コミュ力") {
    var random_num = Math.floor(Math.random() * 3);
    eranda_comment = comm_comments[random_num];
  }
  if (ichiban_hikui_namae == "知性") {
    var random_num = Math.floor(Math.random() * 3);
    eranda_comment = chisei_comments[random_num];
  }
  if (ichiban_hikui_namae == "経験値") {
    var random_num = Math.floor(Math.random() * 3);
    eranda_comment = keikennchi_comments[random_num];
  }

  console.log("eranda_comment：" + eranda_comment);

  return "【" + ichiban_hikui_namae + "が弱点】" + eranda_comment;
}


function tipsDasu(sp, me, co, iq, ex) {

  var koudouryoku_val = sp;
  var kanjou_val = me;
  var comm_val = co;
  var chisei_val = iq;
  var keikennchi_val = ex;

  console.log("tips用 koudouryoku_val：" + koudouryoku_val);
  console.log("tips用 kanjou_val：" + kanjou_val);
  console.log("tips用 comm_val：" + comm_val);
  console.log("tips用 chisei_val：" + chisei_val);
  console.log("tips用 keikennchi_val：" + keikennchi_val);

  var koudouryoku_tips = [
    "「5秒ルール」を使ってみよう。やろうと思ったら5秒以内に動く！",
    "朝のルーティンを決めて、自動的に行動できる仕組みを作ろう。",
    "小さなToDoリストで「完了」の快感を積み重ねよう。",
  ];
  var kanjou_tips = [
    "寝る前に「今日よかったこと3つ」を書く習慣が効果的。",
    "運動30分でメンタルが劇的に改善すると研究で証明済み！",
    "SNS断食を週1回。情報を絞るとメンタルが安定する。",
  ];
  var comm_tips = [
    "相手の話を最後まで聞くだけでコミュ力は上がる。",
    "「そうなんですね！」の一言で会話がスムーズに。",
    "ひとりカフェや一人旅で自分から話しかける練習をしよう。",
  ];
  var chisei_tips = [
    "読書15分/日で1年間に約10冊読める。まずは1ページから。",
    "気になったことをすぐ検索する習慣が知性を育てる。",
    "アウトプット（話す・書く）が理解を深める最速ルート。",
  ];
  var keikennchi_tips = [
    "週1回「初めてのこと」をやると1年で52個の経験が増える。",
    "失敗は経験値。失敗した数＝挑戦した数と考えよう。",
    "新しいコミュニティに顔を出すと世界が一気に広がる。",
  ];

  var stats_array = [
    { namae: "行動力", val: koudouryoku_val, icon: "⚡", tips: koudouryoku_tips },
    { namae: "感情",   val: kanjou_val,      icon: "💜", tips: kanjou_tips },
    { namae: "コミュ力", val: comm_val,       icon: "💬", tips: comm_tips },
    { namae: "知性",   val: chisei_val,      icon: "📚", tips: chisei_tips },
    { namae: "経験値", val: keikennchi_val,  icon: "🌍", tips: keikennchi_tips },
  ];

  stats_array.sort(function(a, b) { return a.val - b.val; });

  var html_moji = "";

  var tip1 = stats_array[0].tips[Math.floor(Math.random() * stats_array[0].tips.length)];
  html_moji += '<div class="tip-item"><div class="tip-icon">' + stats_array[0].icon + '</div><div class="tip-body"><div class="tip-stat">' + stats_array[0].namae + 'アップ</div><div class="tip-text">' + tip1 + '</div></div></div>';

  var tip2 = stats_array[1].tips[Math.floor(Math.random() * stats_array[1].tips.length)];
  html_moji += '<div class="tip-item"><div class="tip-icon">' + stats_array[1].icon + '</div><div class="tip-body"><div class="tip-stat">' + stats_array[1].namae + 'アップ</div><div class="tip-text">' + tip2 + '</div></div></div>';

  var tip3 = stats_array[2].tips[Math.floor(Math.random() * stats_array[2].tips.length)];
  html_moji += '<div class="tip-item"><div class="tip-icon">' + stats_array[2].icon + '</div><div class="tip-body"><div class="tip-stat">' + stats_array[2].namae + 'アップ</div><div class="tip-text">' + tip3 + '</div></div></div>';

  console.log("tips html_moji できた");

  return html_moji;
}


function barHyouji(bar_id, val_id, sukoa) {
  var MAX_suu = 50;
  var percent = ((sukoa + MAX_suu) / (MAX_suu * 2)) * 100;

  if (percent < 0) { percent = 0; }
  if (percent > 100) { percent = 100; }

  console.log("bar_id：" + bar_id + "  percent：" + percent);

  document.getElementById(val_id).textContent = sukoa;

  requestAnimationFrame(function() {
    requestAnimationFrame(function() {
      document.getElementById(bar_id).style.width = percent + "%";
    });
  });
}


function copyResult() {
  var kekka = diagnoseCharacter();
  var h = calcHensachi();
  var rank_data = hensachiRankDasu(h);
  var rank_moji = rank_data.rank;

  var copy_text = "🎉 STATUS診断結果 🎉\n私は「" + kekka.name + "」（" + kekka.type + "）\n人生偏差値: " + h + "（" + rank_moji + "）\nあなたも試してみて！ → " + location.origin;

  console.log("copy_text：" + copy_text);

  navigator.clipboard.writeText(copy_text).then(function() {
    var btn = document.getElementById('copy-btn');
    btn.textContent = '✅ コピーしました！';
    setTimeout(function() {
      btn.textContent = '📋 コピー';
    }, 2000);
  });
}


function shareInstagram() {
  var kekka = diagnoseCharacter();
  var h = calcHensachi();
  var rank_data = hensachiRankDasu(h);
  var rank_moji = rank_data.rank;

  var insta_text = "私は「" + kekka.name + "」（" + kekka.type + "）\n人生偏差値: " + h + "（" + rank_moji + "）";

  console.log("insta_text：" + insta_text);

  var url = "instagram-stories://share?backgroundTopColor=%23FFE54C&backgroundBottomColor=%23FF6BB5&caption=" + encodeURIComponent(insta_text);
  window.location.href = url;

  setTimeout(function() {
    if (document.visibilityState !== 'hidden') {
      alert('インスタアプリが見つかりませんでした。アプリからお試しください！');
    }
  }, 1500);
}


function confettiDasu() {
  var iro_array = ['#FFE54C','#FF6BB5','#4CC9FF','#4CFFA0','#C97BFF','#FF8C42'];
  var katachi_array = ['◆','★','●','▲','♥'];
  var container = document.getElementById('confetti');

  for (var i = 0; i < 60; i++) {
    var el = document.createElement('div');
    el.className = 'confetti-piece';
    el.textContent = katachi_array[Math.floor(Math.random() * katachi_array.length)];
    el.style.left = Math.random() * 100 + 'vw';
    el.style.color = iro_array[Math.floor(Math.random() * iro_array.length)];
    el.style.fontSize = (Math.random() * 10 + 8) + 'px';
    el.style.animationDuration = (Math.random() * 2 + 1.5) + 's';
    el.style.animationDelay = (Math.random() * 1.2) + 's';
    container.appendChild(el);
  }

  setTimeout(function() {
    container.innerHTML = '';
  }, 4000);
}


function sparkleDasu() {
  var container = document.getElementById('card-img');
  var sparkle_array = ['✦','★','✨','⭐','💫','🌟'];

  setInterval(function() {
    var el = document.createElement('div');
    el.className = 'sparkle';
    el.textContent = sparkle_array[Math.floor(Math.random() * sparkle_array.length)];
    el.style.fontSize = (12 + Math.random() * 12) + 'px';

    var kakudo = Math.random() * Math.PI * 2;
    var kyori = 50 + Math.random() * 70;
    el.style.setProperty('--tx', Math.cos(kakudo) * kyori + 'px');
    el.style.setProperty('--ty', Math.sin(kakudo) * kyori + 'px');
    el.style.left = (30 + Math.random() * 40) + '%';
    el.style.top  = (15 + Math.random() * 55) + '%';
    el.style.animationDuration = (.8 + Math.random() * .8) + 's';

    container.appendChild(el);
    setTimeout(function() { el.remove(); }, 1600);
  }, 500);
}


window.addEventListener('DOMContentLoaded', function() {

  console.log("DOMContentLoaded きた");

  loadStats().then(function() {

    console.log("loadStats おわった");

    var kekka = diagnoseCharacter();
    console.log("kekka：");
    console.log(kekka);

    var chara_info = CHARA_DATA[kekka.name];

    if (!chara_info) {
      chara_info = {
        img:"", emoji:"❓", catchcopy:"謎めいた存在", desc:"謎のキャラクター！",
        good:"???", goodSub:"", bad:"???", badSub:""
      };
    }

    console.log("chara_info：");
    console.log(chara_info);

    var namae_el = document.getElementById('chara-name');
    namae_el.textContent = kekka.name;
    namae_el.className = 'chara-name accent-' + kekka.name;

    document.getElementById('chara-type').textContent = kekka.type;
    document.getElementById('type-badge').textContent = kekka.type;
    document.getElementById('chara-catchcopy').textContent = chara_info.catchcopy;
    document.getElementById('chara-desc').textContent = chara_info.desc;
    document.getElementById('card-top').className = 'card-top bg-' + kekka.name;

    var img_el = document.getElementById('chara-img');
    img_el.style.display = 'block';
    document.getElementById('chara-emoji').style.display = 'none';
    img_el.src = chara_info.img;
    img_el.alt = kekka.name;

    console.log("img set: " + chara_info.img);

    var h = calcHensachi();
    console.log("hensachi：" + h);

    var rank_data = hensachiRankDasu(h);
    console.log("rank_data：");
    console.log(rank_data);

    document.getElementById('hensachi-num').textContent = h;
    document.getElementById('hensachi-rank').textContent = rank_data.rank;
    document.getElementById('hensachi-up').textContent = rank_data.up;

    if (statsSource === 'realdata') {
      document.getElementById('hensachi-source').textContent = '実データで算出';
    } else {
      document.getElementById('hensachi-source').textContent = 'シミュレーションで算出';
    }

    console.log("statsSource：" + statsSource);

    document.getElementById('weakness-text').textContent =
      weaknessData(speed, mental, communication, intelligence, experience);

    document.getElementById('compat-good-name').textContent = chara_info.good;
    document.getElementById('compat-good-sub').textContent = chara_info.goodSub;
    document.getElementById('compat-bad-name').textContent = chara_info.bad;
    document.getElementById('compat-bad-sub').textContent = chara_info.badSub;

    barHyouji('bar-speed',  'val-speed',  speed);
    barHyouji('bar-mental', 'val-mental', mental);
    barHyouji('bar-comm',   'val-comm',   communication);
    barHyouji('bar-intel',  'val-intel',  intelligence);
    barHyouji('bar-exp',    'val-exp',    experience);

    console.log("bar全部set完了");

    document.getElementById('tips-list').innerHTML =
      tipsDasu(speed, mental, communication, intelligence, experience);

    var share_text = encodeURIComponent(
      "🎉 STATUS診断！\n私は「" + kekka.name + "」（" + kekka.type + "）\n人生偏差値: " + h + "（" + rank_data.rank + "）\nあなたも試して！"
    );
    var share_url = encodeURIComponent(location.href);

    document.getElementById('share-x').href =
      "https://twitter.com/intent/tweet?text=" + share_text + "&url=" + share_url;
    document.getElementById('share-line').href =
      "https://social-plugins.line.me/lineit/share?url=" + share_url + "&text=" + share_text;

    console.log("share URL set完了");

    confettiDasu();
    sparkleDasu();

    console.log("全部終わった！！！！");

    sendToGAS(kekka, h);
  });
});


function sendToGAS(kekka, hensachi_kekka) {

  console.log("GAS送信開始");
  console.log("kekka.name：" + kekka.name);
  console.log("hensachi_kekka：" + hensachi_kekka);

  fetch(GAS_URL, {
    method: 'POST',
    mode: 'no-cors',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      chara: kekka.name,
      type: kekka.type,
      hensachi: hensachi_kekka,
      speed: speed,
      mental: mental,
      comm: communication,
      intel: intelligence,
      exp: experience,
    })
  }).catch(function() {
    console.log("GAS送信失敗した（でもまあいっか）");
  });
}
