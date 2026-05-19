let speed = 0;
let mental = 0;
let communication = 0;
let intelligence = 0;
let experience = 0;

let answers = {};

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
