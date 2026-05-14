let action =0;
let mental =0;

function startDiagnosis(){
  location.href="question1.html";
}

function q1(answer){
  if(answer ==="a"){
      action +=2;
      mental +=1;
  }
  else if(answer ==="b"){
      action +=1;
  }
  else if(answer ==="c"){
      action +=0;
  }
  else if(answer ==="d"){
      action -=1;
      mental -=1;
  }
  alert("action=" + action + " mental=" + mental); 
}
