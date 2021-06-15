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

// function to deduct time when wrong answer chosen

let wrongAnswer = function() {
    timerInitial -= 10;
};

// functions to start quiz

let startQuiz = function () {
    let pageContentEl = document.getElementById("page-content");
    pageContentEl.remove();
    questionOne();
};

// FUNCTIONS FOR INDIVIDUAL QUESTIONS

// question one function
let questionOne = function () {
    // create new div element, add id
    let questionOneContentEl = document.createElement("section");
    questionOneContentEl.id = "question-one-content"
    document.body.append(questionOneContentEl); 

    // adding h3 to new section element for T/F statement
    let questionOneHeader = document.createElement("h3");
    questionOneHeader.id = "question-header"
    questionOneHeader.textContent = "True or false: JavaScript and Java are the same thing."
    questionOneContentEl.append(questionOneHeader);

    // adding possible answers beneath question
    let answerWrong = document.createElement("button");
    answerWrong.className = "btn"
    answerWrong.id = "answer-wrong"
    answerWrong.textContent = "True"
    questionOneContentEl.append(answerWrong);
    
    let answerCorrect = document.createElement("button");
    answerCorrect.className = "btn"
    answerCorrect.id = "answer-correct"
    answerCorrect.textContent = "False"
    questionOneContentEl.append(answerCorrect);
    
    // if correct answer chosen
    answerCorrect.addEventListener("click", () => {
        questionOneContentEl.remove();
        questionTwo();
    });

    // if incorrect answer chosen
    answerWrong.addEventListener("click", () => {
        wrongAnswer();
        questionOneContentEl.remove();
        questionTwo();
    });
};

// question two function
let questionTwo = function() {    
    // create new div element, add id
    let questionTwoContentEl = document.createElement("section");
    questionTwoContentEl.id = "question-two-content"
    document.body.append(questionTwoContentEl); 
    
    // adding h3 to new section element for T/F statement
    let questionTwoHeader = document.createElement("h3");
    questionTwoHeader.id = "question-header"
    questionTwoHeader.textContent = "Which of the following will iterate a function over the length of an array named arrayName?"
    questionTwoContentEl.append(questionTwoHeader);
    
    // adding possible answers beneath question
    let answerWrong = document.createElement("button");
    answerWrong.className = "btn wrong"
    answerWrong.textContent = "for (i = 1, i < arrayName.length, i++)"
    questionTwoContentEl.append(answerWrong);
    
    let answerCorrect = document.createElement("button");
    answerCorrect.className = "btn"
    answerCorrect.id = "answer-correct"
    answerCorrect.textContent = "for (i = 0, i < arrayName.length, i++)"
    questionTwoContentEl.append(answerCorrect);

    let answerWrongTwo = document.createElement("button");
    answerWrongTwo.className = "btn wrong"
    answerWrongTwo.textContent = "for (i = 0, i < arrayName.length, i+)"
    questionTwoContentEl.append(answerWrongTwo);
 
    let answerWrongThree = document.createElement("button");
    answerWrongThree.className = "btn wrong"
    answerWrongThree.textContent = "for (i = 0, i < arrayName, i++)"
    questionTwoContentEl.append(answerWrongThree);
    
    // if correct answer chosen
    answerCorrect.addEventListener("click", () => {
        questionTwoContentEl.remove();
        questionThree();
    });
    
    // if incorrect answers chosen
    answerWrong.addEventListener("click", () => {
        wrongAnswer();
        questionTwoContentEl.remove();
        questionThree();
    });
    answerWrongTwo.addEventListener("click", () => {
        wrongAnswer();
        questionTwoContentEl.remove();
        questionThree();
    });
    answerWrongThree.addEventListener("click", () => {
        wrongAnswer();
        questionTwoContentEl.remove();
        questionThree();
    });
};

// question three function
let questionThree = function() {    
    // create new div element, add id
    let questionThreeContentEl = document.createElement("section");
    questionThreeContentEl.id = "question-three-content"
    document.body.append(questionThreeContentEl); 
    
    // adding h3 to new section element for T/F statement
    let questionThreeHeader = document.createElement("h3");
    questionThreeHeader.id = "question-header"
    questionThreeHeader.textContent = "Which of the following will initiate a function helloAlert when a button with 'btn-id' is mouseover-ed?"
    questionThreeContentEl.append(questionThreeHeader);
    
    // adding possible answers beneath question
    let answerCorrect = document.createElement("button");
    answerCorrect.className = "btn"
    answerCorrect.id = "answer-correct"
    answerCorrect.setAttribute("style", "white-space: pre;");
    answerCorrect.textContent = "let buttonEl = document.getElementById('btn-id'); \r\n";
    answerCorrect.textContent += "buttonEl.addEventListener('mouseover', helloAlert);"
    questionThreeContentEl.append(answerCorrect);
    
    let answerWrong = document.createElement("button");
    answerWrong.className = "btn wrong"
    answerWrong.textContent = "for (i = 1, i < arrayName.length, i++)"
    questionThreeContentEl.append(answerWrong);

    let answerWrongTwo = document.createElement("button");
    answerWrongTwo.className = "btn wrong"
    answerWrongTwo.textContent = "for (i = 0, i < arrayName.length, i+)"
    questionThreeContentEl.append(answerWrongTwo);
 
    let answerWrongThree = document.createElement("button");
    answerWrongThree.className = "btn wrong"
    answerWrongThree.textContent = "for (i = 0, i < arrayName, i++)"
    questionThreeContentEl.append(answerWrongThree);
    
    // if correct answer chosen
    answerCorrect.addEventListener("click", () => {
        questionThreeContentEl.remove();
        questionFour();
    });
    
    // if incorrect answers chosen
    answerWrong.addEventListener("click", () => {
        wrongAnswer();
        questionThreeContentEl.remove();
        questionFour();
    });
    answerWrongTwo.addEventListener("click", () => {
        wrongAnswer();
        questionThreeContentEl.remove();
        questionFour();
    });
    answerWrongThree.addEventListener("click", () => {
        wrongAnswer();
        questionThreeContentEl.remove();
        questionFour();
    });
};

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
