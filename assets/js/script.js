// function for countdown timer
let timerContentEl = document.createElement("section");
timerContentEl.id = "timer-content";
document.body.append(timerContentEl);

timer = 60;
let startTimer = function () {
    document.getElementById("timer").innerHTML = "Timer: " + timer;
    timer--;
    if (timer < 0) {
        alert("The timer has expired!")
    }
    else {
        setTimeout(startTimer, 1000);
    }
};

// function to deduct time when wrong answer chosen
let wrongAnswer = function () {
    timer -= 10;
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
let questionTwo = function () {
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
let questionThree = function () {
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
    answerWrong.setAttribute("style", "white-space: pre;");
    answerWrong.textContent = "let buttonEl = document.getElementById('btn-id'); \r\n"
    answerWrong.textContent += "buttonEl.addEventListener('click', helloAlert);"
    questionThreeContentEl.append(answerWrong);

    let answerWrongTwo = document.createElement("button");
    answerWrongTwo.className = "btn wrong"
    answerWrongTwo.setAttribute("style", "white-space: pre;");
    answerWrongTwo.textContent = "let buttonEl = document.getButtonByBtn-Id; \r\n"
    answerWrongTwo.textContent += "buttonEl.addEventListener('mouseover', helloAlert);"
    questionThreeContentEl.append(answerWrongTwo);

    let answerWrongThree = document.createElement("button");
    answerWrongThree.className = "btn wrong"
    answerWrongThree.setAttribute("style", "white-space: pre;");
    answerWrongThree.textContent = "let buttonMouseoverEl = document.getElementById('btn-id'); \r\n"
    answerWrongThree.textContent += "buttonEl.addEventListener('mouseover', helloAlert);"
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

// question four function
let questionFour = function () {
    // create new div element, add id
    let questionFourContentEl = document.createElement("section");
    questionFourContentEl.id = "question-four-content"
    document.body.append(questionFourContentEl);

    // adding h3 to new section element for T/F statement
    let questionFourHeader = document.createElement("h3");
    questionFourHeader.id = "question-header"
    questionFourHeader.textContent = "Which of the following will add 'rutabaga' to an array named theseAreVegetables?"
    questionFourContentEl.append(questionFourHeader);

    // adding possible answers beneath question
    let answerWrong = document.createElement("button");
    answerWrong.className = "btn wrong"
    answerWrong.textContent = "This is not possible to do outside of the original definition of an array."
    questionFourContentEl.append(answerWrong);

    let answerWrongTwo = document.createElement("button");
    answerWrongTwo.className = "btn wrong"
    answerWrongTwo.textContent = "theseAreVegetables.addString('rutabaga');"
    questionFourContentEl.append(answerWrongTwo);

    let answerWrongThree = document.createElement("button");
    answerWrongThree.className = "btn wrong"
    answerWrongThree.textContent = "addToArray.theseAreVegetables('rutabaga');"
    questionFourContentEl.append(answerWrongThree);

    let answerCorrect = document.createElement("button");
    answerCorrect.className = "btn"
    answerCorrect.id = "answer-correct"
    answerCorrect.textContent = "theseAreVegetables.push('rutabaga');"
    questionFourContentEl.append(answerCorrect);

    // if correct answer chosen
    answerCorrect.addEventListener("click", () => {
        questionFourContentEl.remove();
        questionFive();
    });

    // if incorrect answers chosen
    answerWrong.addEventListener("click", () => {
        wrongAnswer();
        questionFourContentEl.remove();
        questionFive();
    });
    answerWrongTwo.addEventListener("click", () => {
        wrongAnswer();
        questionFourContentEl.remove();
        questionFive();
    });
    answerWrongThree.addEventListener("click", () => {
        wrongAnswer();
        questionFourContentEl.remove();
        questionFive();
    });
};

// question five function
let questionFive = function () {
    // create new div element, add id
    let questionFiveContentEl = document.createElement("section");
    questionFiveContentEl.id = "question-five-content"
    document.body.append(questionFiveContentEl);

    // adding h3 to new section element for T/F statement
    let questionFiveHeader = document.createElement("h3");
    questionFiveHeader.id = "question-header"
    questionFiveHeader.textContent = "To send an item to local storage, which of the following would be used?"
    questionFiveContentEl.append(questionFiveHeader);

    // adding possible answers beneath question
    let answerWrong = document.createElement("button");
    answerWrong.className = "btn wrong"
    answerWrong.textContent = "localStorage.getItem"
    questionFiveContentEl.append(answerWrong);

    let answerWrongTwo = document.createElement("button");
    answerWrongTwo.className = "btn wrong"
    answerWrongTwo.textContent = "saveItem.localStorage"
    questionFiveContentEl.append(answerWrongTwo);

    let answerCorrect = document.createElement("button");
    answerCorrect.className = "btn"
    answerCorrect.id = "answer-correct"
    answerCorrect.textContent = "localStorage.setItem"
    questionFiveContentEl.append(answerCorrect);

    let answerWrongThree = document.createElement("button");
    answerWrongThree.className = "btn wrong"
    answerWrongThree.textContent = "localStorage.saveItem"
    questionFiveContentEl.append(answerWrongThree);

    // if correct answer chosen
    answerCorrect.addEventListener("click", () => {
        questionFiveContentEl.remove();
        returnScore();
    });

    // if incorrect answers chosen
    answerWrong.addEventListener("click", () => {
        wrongAnswer();
        questionFiveContentEl.remove();
        returnScore();
    });
    answerWrongTwo.addEventListener("click", () => {
        wrongAnswer();
        questionFiveContentEl.remove();
        returnScore();
    });
    answerWrongThree.addEventListener("click", () => {
        wrongAnswer();
        questionFiveContentEl.remove();
        returnScore();
    });
};

// if all questions are answered or timer <= 0, game ends

let returnScore = function () {
    // remove timer from page
    document.getElementById("timer").remove();

    // save score from timer
    let playerScore = timer;

    // prompt user for initials
    let alertBox = document.createElement("section")
    alertBox.id = "alert-box"
    document.body.append(alertBox);

    let gameOverStatement = document.createElement("p")
    gameOverStatement.textContent = "The quiz has ended! Your score was " + playerScore + ". Enter your initials to be included on the leaderboard."
    alertBox.append(gameOverStatement);

    let playerInitialsForm = document.createElement("form")
    alertBox.append(playerInitialsForm)

    let playerInitialsTextBox = document.createElement("input")
    playerInitialsTextBox.setAttribute("type", "text");
    playerInitialsTextBox.id = "player-initials";
    alertBox.append(playerInitialsTextBox);

    let playerInitialsSubmitBtn = document.createElement("input")
    playerInitialsSubmitBtn.setAttribute("type", "submit")
    alertBox.append(playerInitialsSubmitBtn);

    // addEventListener for click of submit button
    playerInitialsSubmitBtn.addEventListener("click", function (event) {
        event.preventDefault();
        let playerInitials = document.querySelector('#player-initials').value;

        if (playerInitials === "") {
            alert("Initials cannot be blank!");
        } else {
            // save initials and score to localStorage, then remove content from screen and display high scores
            localStorage.setItem("playerInitials", playerInitials);
            localStorage.setItem("score", playerScore);
            alertBox.remove();
            displayScores();
        }
    })
};

// display high scores on screen
let displayScores = function () {

let highScores = document.createElement("section");
highScores.id = "high-scores"
document.body.append(highScores);

let scoresHeader = document.createElement("h3");
scoresHeader.textContent = "High Scores"
highScores.append(scoresHeader);

let scoresTable = document.createElement("table")
highScores.append(scoresTable);

let tableRow = document.createElement("tr")
scoresTable.append(tableRow);

let tableHeaderPlayer = document.createElement("th")
tableHeaderPlayer.textContent = "Player"
tableRow.append(tableHeaderPlayer);

let tableHeaderScore = document.createElement("th")
tableHeaderScore.textContent = "Score"
tableRow.append(tableHeaderScore);


// prompt user to take quiz again

// function to click start button and initiate quiz and timer

}

let startButtonEl = document.getElementById("start-btn");

startButtonEl.addEventListener("click", () => {
    startQuiz();
    startTimer();
});
