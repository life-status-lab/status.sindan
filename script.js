let action = 0;
let mental = 0;
let social = 0;
let thinking = 0;
let future = 0;

// 選択保存
let q1_answer = null;
let q2_answer = null;

function startDiagnosis(){
  location.href = "question1.html";
}

function nextQuestion1(){
  location.href = "question2.html";
}

//
// =====================
// Q1（朝の行動）
// =====================
//
function q1(answer){

  // ① まず前の選択を取り消す
  if (q1_answer === "a"){
    action -= 3;
    thinking -= 2;
    future -= 2;
    mental -= 1;
  }
  else if (q1_answer === "b"){
    action -= 1;
    thinking -= 1;
  }
  else if (q1_answer === "c"){
    thinking += 1;
    future += 1;
  }
  else if (q1_answer === "d"){
    action += 2;
    mental += 2;
    future += 2;
    thinking += 1;
  }
  else if (q1_answer === "e"){
    action += 1;
    mental += 1;
  }

  // ② 新しい選択を加算
  if (answer === "a"){
    action += 3;
    thinking += 2;
    future += 2;
    mental += 1;
  }
  else if (answer === "b"){
    action += 1;
    thinking += 1;
  }
  else if (answer === "c"){
    thinking -= 1;
    future -= 1;
  }
  else if (answer === "d"){
    action -= 2;
    mental -= 2;
    future -= 2;
    thinking -= 1;
  }
  else if (answer === "e"){
    action -= 1;
    mental -= 1;
  }

  // ③ 保存
  q1_answer = answer;

  console.log("Q1更新", action, mental, thinking, future, social);
}

//
// =====================
// Q2（やる気・先延ばし）
// =====================
//
function q2(answer){

  // ① 前の選択を取り消す
  if (q2_answer === "a"){
    action -= 3;
    thinking -= 2;
    future -= 1;
  }
  else if (q2_answer === "b"){
    action -= 1;
    thinking -= 1;
    mental -= 2;
  }
  else if (q2_answer === "c"){
    action += 1;
    future += 2;
    thinking += 1;
  }
  else if (q2_answer === "d"){
    action += 2;
    mental += 2;
    future += 1;
  }
  else if (q2_answer === "e"){
    thinking += 1;
    mental += 1;
    future += 1;
    social -= 1;
  }

  // ② 新しい選択を加算
  if (answer === "a"){
    action += 3;
    thinking += 2;
    future += 1;
  }
  else if (answer === "b"){
    action += 1;
    thinking += 1;
    mental += 2;
  }
  else if (answer === "c"){
    action -= 1;
    future -= 2;
    thinking -= 1;
  }
  else if (answer === "d"){
    action -= 2;
    mental -= 2;
    future -= 1;
  }
  else if (answer === "e"){
    thinking -= 1;
    mental -= 1;
    future -= 1;
    social += 1;
  }

  // ③ 保存
  q2_answer = answer;

  console.log("Q2更新", action, mental, thinking, future, social);
}
