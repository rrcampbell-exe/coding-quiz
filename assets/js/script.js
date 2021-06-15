// function for countdown timer

timerInitial = 60;
let startTimer = function () {
    document.getElementById("timer").innerHTML = timerInitial;
    timerInitial--;
    if (timerInitial < 0) {
        alert("The timer has expired!")
    }
    else {
        setTimeout(startTimer, 1000);
    }
};

let wrongAnswer = function() {
    timerInitial -= 10;
};

// functions for individual questions

let startQuiz = function () {
    let pageContentEl = document.getElementById("page-content");
    pageContentEl.remove();

    let questions = function () {
        // QUESTION ONE
        // create new div element, add id
        let pageContentEl = document.createElement("section");
        pageContentEl.id = "page-content"
        document.body.append(pageContentEl); 

        // adding h3 to new section element
        let questionOneHeader = document.createElement("h3");
        questionOneHeader.id = "question-header"
        questionOneHeader.textContent = "True or false: JavaScript and Java are the same thing."
        pageContentEl.append(questionOneHeader);

        // adding possible answers beneath question
        let answerWrong = document.createElement("button");
        answerWrong.className = "btn"
        answerWrong.id = "answer-wrong"
        answerWrong.textContent = "True"
        pageContentEl.append(answerWrong);
        
        let answerCorrect = document.createElement("button");
        answerCorrect.className = "btn"
        answerCorrect.id = "answer-correct"
        answerCorrect.textContent = "False"
        pageContentEl.append(answerCorrect);
        
        // if correct answer chosen
        answerCorrect.addEventListener("click", () => {
            pageContentEl.remove;
        });

        // if incorrect answer chosen
        answerWrong.addEventListener("click", () => {
            wrongAnswer();
            pageContentEl.remove;
        });

        // add the newly created element and its content to the DOM
        let questionOneSection = document.getElementById("page-content");
        document.body.insertBefore(pageContentEl, questionOneSection);
        
        // // QUESTION TWO
        // // create new div element, add id
        // let pageContentEl = document.createElement("section");
        // pageContentEl.id = "page-content"
        // document.body.append(pageContentEl); 
    
        // // adding h3 to new section element
        // let questionTwoHeader = document.createElement("h3");
        // questionTwoHeader.id = "question-header"
        // questionTwoHeader.textContent = "Which of the following will iterate a function over the length of an array with arrayName?"
        // pageContentEl.append(questionTwoHeader);
    
        // // adding possible answers beneath question
        // let answerWrong = document.createElement("button");
        // answerWrong.className = "btn"
        // answerWrong.id = "answer-wrong"
        // answerWrong.textContent = "True"
        // pageContentEl.append(answerWrong);
        
        // let answerCorrect = document.createElement("button");
        // answerCorrect.className = "btn"
        // answerCorrect.id = "answer-correct"
        // answerCorrect.textContent = "False"
        // pageContentEl.append(answerCorrect);
        
        // // if correct answer chosen
        // answerCorrect.addEventListener("click", alert("Correct!"));
    
        // // if incorrect answer chosen
        // answerWrong.addEventListener("click", () => {
        //     wrongAnswer();
        //     // questionTwo();
        // });
    
        // // add the newly created element and its content to the DOM
        // let questionOneSection = document.getElementById("page-content");
        // document.body.insertBefore(pageContentEl, questionOneSection);
        
    };
    questions();
    pageContentEl.remove;
    // let questionTwo = function() {
    //     alert("This is question two!");
    // }
};

// write question to screen (addContent)

// if else for answer selection

// if true, advance to next question
// if false, subtract 10 seconds from timer, advance to next question (removeContent, addContent)

// if all questions are answered or timer <= 0, game ends

// if score < 0, prompt to save initials and score

// store score and initials in local storage, display high scores

// prompt user to take quiz again

// function to click start button and initiate quiz and timer

let startButtonEl = document.getElementById("start-btn");

startButtonEl.addEventListener("click", () => {
    startQuiz();
    startTimer();
});
