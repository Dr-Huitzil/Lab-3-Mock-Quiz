randomizeCheckboxes();
randomizeRadioButton();
document.querySelector("#submit").addEventListener("click", checkAnswers);



if (localStorage.getItem("#attemptAmount") == null) {
  localStorage.setItem("#attemptAmount", 0);
}

document.querySelector("#attemptAmount").innerHTML = localStorage.getItem("#attemptAmount");


function checkAnswers() {
  var score = 0;

let ques1 = document.querySelector('input[name="#injectQuestion1"]:checked').value;
let ques2 = document.querySelector('input[name="#injectQuestion2"]:checked').value;
let ques3 = document.querySelector("#question3").value;
let ques4 = document.querySelector("#question-4-answers").value;
let ques5 = document.querySelector("#question-5-answers").value;

  if(ques1 == "Neo")
  {
   document.querySelector("#questionFeedback1").innerHTML = "Correct!" + ' ✅';
    score++
  }
  else
  {
    document.querySelector("#questionFeedback1").innerHTML = "Incorrect!" + '❌';
  }
  if(ques2 == "Moonstone")
  {
   document.querySelector("#questionFeedback2").innerHTML = "Correct!" + ' ✅';
    score++
  }
  else
  {
   document.querySelector("#questionFeedback2").innerHTML = "Incorrect!" + '❌';
  }
  if(ques3 == "2009")
  {
    document.querySelector("#questionFeedback3").innerHTML = "Correct!" + ' ✅';
    score++
  }
  else
  {
   document.querySelector("#questionFeedback3").innerHTML = "Incorrect!" + '❌';
  }

  if(ques4 == "Journey")
  {
   document.querySelector("#questionFeedback4").innerHTML = "Correct!" + ' ✅';
    score++
  }
  else{
    document.querySelector("#questionFeedback4").innerHTML = "Incorrect!" + '❌';
  }

  if(ques5 == "May 5th, 2023")
  {
   document.querySelector("#questionFeedback5").innerHTML = "Correct!" + ' ✅';
    score++
  }
  else
  {
    document.querySelector("#questionFeedback5").innerHTML = "Incorrect!" + '❌';
  }

  document.getElementbyClassName("totalScore").innerHTML(`Total Score: ${score}`);
if(score>=4){
  document.querySelector("#result").innerHTML = `<div class="text-success">Congratulations</div>`
}
}

    
function totalTimes() {
  //total times the quiz was taken using local storage
  var totalTimes = localStorage.getItem("totalTimes");
  if (totalTimes === null) {
    localStorage.setItem("totalTimes", 1);
  } else {
    totalTimes = parseInt(totalTimes);
    totalTimes++;
    localStorage.setItem("totalTimes", totalTimes);
  }
  document.querySelector("#totalTimes").innerHTML = "Total Times Taken: " + totalTimes;
}

function randomizeRadioButton() {
  let  answer1 = ["Neo", "Morpheous", "Trinity", "Agent Smith"];
answer1 = _.shuffle(answer1);
  for (let i = 0; i < answer1.length; i++) {
    document.querySelector("#injectQuestion1").innerHTML +=
      `<input type="radio" name="injectQuestion1" id="${answer1[i]}" value="${answer1[i]}"><label for="${answer1[i]}"> ${answer1[i]} </label> `;
  }
}

function randomizeCheckboxes() {

  let  answer2= ["Soul Stone", "Kryptonian Stone", "Time Stone", "Moon Stone"];

  answer2= _.shuffle(answer2);
  
  for (let i = 0; i < answer2.length; i++) {
    document.querySelector("#injectQuestion2").innerHTML +=
      `<label><input type="checkbox" name="answer2Types" value="${answer2[i]}"> ${answer2[i]} </label>`;
  }
}

// function congratulations() {
//   document.querySelector("#result").innerHTML = `<div class="text-success">Congratulations</div>`;
// }



