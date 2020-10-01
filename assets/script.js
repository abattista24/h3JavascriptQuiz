//-------------Variables Needed-------------
var timer =document.getElementsByClassName("time");
var startQuiz = document.getElementById("begin");
var timeEl = 120;
var mainPg = document.getElementById("welcome");

// put questions into an array
var questions =[
  { 
    q: "Which is the correct notation for a function?",
    a: ["function?", "function//()", "function():", "function(){}"],
    correctA: "function(){}",
  },
  {
    q: "what browser tool can help to see possible errors in the code?",
    a: [ "search","console", "google", "you need to download a program for this"],
    correctA: "console",
  },
  {
    q: "What do you use to make a true or false statement appear on the browser screen",
    a: ["statement", "t/f", "confirm", "tfState"],
    correctA: "confirm",

  },
]



// WHEN I click the start button

function begin (e) {
    e.preventdefault;
    // THEN a timer starts 
    var quizTime = setInterval(function() {
        timeEl-1;
        console.log(timer.textContent = "quizTime");

        if(timeEl === 0 ){
            clearInterval(quizTime);
        }
            
    }, 1000)}
   // trigger start button to run fucntion above
startQuiz.addEventListener("click", begin)

    // THEN I am presented with a question
        // need a function to hold this 

        



    // function firstQ (){
    //     startQuiz.addEventListener("click"+ function(){
    //         mainPg.modal.display = "none";

    //     })
    // }
            

// WHEN I answer a question correctly   
    // THEN I am presented with another question
        // need a function to hold this

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
        function allScores () {
            console.log("this would be the scores")
        }