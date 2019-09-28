// questions

var questions = [
    {
      title: "Commonly used data types DO NOT include:",
      choices: ["strings", "booleans", "alerts", "numbers"],
      answer: "alerts"
    },
    {
      title: "The condition in an if / else statement is enclosed within ____.",
      choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
      answer: "parentheses"
    },
    {
     title: "Inside which HTML tag do you put the Javascript?",
     choices: ["<scripting>", "<script>","<js>","<java>"],
     answer: "<script>"
    },
    {
     title: "What is the correct syntax for referring to an external script called 'xxx.js?",
     choices: ["<script href='xxx.js'>","<script src='xxx.js'>","<script name='xxx.js'>","<script link='xxx.js'>"],
     answer: "<script src='xxx.js'>"
    },
    {
        title: "What is the correct way to write a JavaScript array?",
        choices: ["var colors = (1:red,2:green,3:blue)", "var colors = 1=red,2=green,3=blue", "var colors = ['red','green','blue']","var colors = 'red','green','blue'"],
        answer: "var colors = ['red','green','blue']"
    }
    ///etc.
  ];

// startQuiz();
//   functions

    var qTitle = document.querySelector(".questionDisplay");
    var aButtons = document.getElementsByClassName("button");
    // timer
    var timeLeft = questions.length * 15;
    var timeEl = document.getElementById("timerDiv");
    
    function countDownTimer(){
        var timeInterval = setInterval(function(){
            timeLeft--;
            timeEl.textContent = "Time remaining: " + timeLeft;
            if(timeLeft === 0) {
                clearInterval(timeInterval);
                timeEl.textContent = "Time remaining: 0";
                alert("TIMES UP!");
                alert("Score: " + timeLeft)
              }
        
        
        
        }, 1000);
    }



    var questionIndex = 0;

    function setupEventListeners(){
        for(var i = 0; i<aButtons.length;i++){
            var theButton = aButtons[i];
            theButton.addEventListener("click", function(){
                buttonPress(event.target.value);
            }, false);
            
        }

    }
    function buttonPress(value) {
         //do button stuff
         
        if (value == questions[questionIndex].answer) {
            console.log("yeah this is it");
            questionIndex++;
            setupQuestions();
            // if(questions.length === questionIndex){
            //     alert("Quiz done!");
            // }
        } else {
            console.log("not it");
            timeLeft = timeLeft - 5; 
        }
          
    }
    function setupQuestions() { 
        qTitle.textContent = questions[questionIndex].title;
        for(i=0;i<aButtons.length;i++){
            var theButton = aButtons[i];
            theButton.innerText = questions[questionIndex].choices[i];
            theButton.value = questions[questionIndex].choices[i];
            
            
            }
      
        }
    setupEventListeners();
    setupQuestions();
    countDownTimer();


    