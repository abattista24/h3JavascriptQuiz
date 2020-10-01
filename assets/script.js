//-------------Variables Needed-------------
var timer =document.querySelector(".time");
var startQuiz = document.getElementById("begin");
var timeleft = 60;
var startPg = document.getElementById("welcome");
var current = "";
var runquiz = document.getElementById("quiz");

// put questions into an array
var questions ={
 first:{ 
    q: "Which is the correct notation for a function?",
    a: ["function?", "function//()", "function():", "function(){}"],
    correctA: "function(){}",
  },
  Second:{
    q: "what browser tool can help to see possible errors in the code?",
    a: [ "search","console", "google", "you need to download a program for this"],
    correctA: "console",
  },
 third: {
    q: "What do you use to make a true or false statement appear on the browser screen",
    a: ["statement", "t/f", "confirm", "tfState"],
    correctA: "confirm",

  }
};



// WHEN I click the start button

function begin( ){
   
    // THEN a timer starts {
  var quizTime = setInterval(function(){
    timeleft--;
    timer.textContent = timeleft + "seconds left";
 
    if(timeleft === 0 ){
    clearInterval(quizTime);
    }
  },1000)

   // clears out main page, ready for a question
  startPg.textContent= "";
  runquiz.textContent= questions.first.q;

};

// THEN I am presented with a question
  // function askQuestion (){
  //  console.log (runquiz.textContent= questions.first.q); 
  //  console.log (runquiz.textContent =questions.first.a);

  // //   // runquiz.textContent = current;
  // };



// WHEN I answer a question correctly   
 
    // THEN I am presented with another question
        // need a function to hold this
 
   
   // trigger start button to run quiz
startQuiz.addEventListener("click", begin,)
            


// WHEN I answer a question incorrectly
    // THEN time is subtracted from the clock
        // need a function to remove time from countdown

// if ABC subtract time, else D go on to next question

// WHEN all questions are answered or the timer reaches 0
    // THEN the game is over
        // need a way to stop quiz at the end of countdown
        // give back the score

// WHEN the game is over
    // THEN I can save my initials and score
        // prompt user to add initials
        // create grid on page to hold name and scores
        // function allScores () {
        //     console.log("this would be the scores")
        // }