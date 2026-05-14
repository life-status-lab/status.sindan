let action = 0;
let mental = 0;
let social = 0;
let thinking = 0;
let future = 0;

function startDiagnosis(){
  location.href="question1.html";
}


function q1(answer){
  if(answer === "a"){
    //すぐ起きて行動できる
    action += 3;
    thinking += 2;
    future += 2;
    mental += 1;
  }
  else if(answer === "b"){
    //少しダラダラ
    action += 1;
    thinking +=1;
  }
  else if(answer === "c"){
    //スマホダラダラ
    action += 0;
    future -= 1;
    thinking -=1;
  }
  else if(answer === "d"){ 
    //起きない
    action -= 2;
    mental -= 2;
    future -= 2;
    thinking -=1;
  }
  else if(answer ==='e'){
    //二度寝
    action -=1;
    mental -=1;
  }
  alert("action=" + action + " mental=" + mental);
}
