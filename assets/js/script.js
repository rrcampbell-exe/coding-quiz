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
    runQuestions();
};

// FUNCTIONS FOR INDIVIDUAL QUESTIONS

// question function
function runQuestions() {
    let questionAreaContentEl = document.createElement("section");
    questionAreaContentEl.id = "question-area-content"
    document.body.append(questionAreaContentEl);

    let currentQ = 0
    let questionHeader = document.createElement("h3");
    questionAreaContentEl.append(questionHeader)
    
    let choices = document.createElement("button");
    choices.className = "btn"
    questionAreaContentEl.append(choices);
    let choicesEl = document.querySelectorAll(".btn");

    function iterate() {
        questionHeader.textContent = questionData[currentQ].question
        choicesEl.forEach((el, i) => {
            el.textContent = questionData[currentQ].choices[i]
        })
    }
    choicesEl.forEach(el => {
        el.addEventListener("click", function (event) {
            let choice = this.textContent
            if (choice === questionData[currentQ].answer) {
                console.log("Correct!")
            } else {
                console.log("Incorrect")
                wrongAnswer();
            }

            currentQ++;
            if (currentQ < questionData.length) {
                iterate()
            } else {
                returnScore();
            }
        }
        );

        iterate();

    })
}

// if all questions are answered or timer <= 0, game ends

let returnScore = function () {
    // remove timer from page
    document.getElementById("timer").remove();
    document.getElementById("question-area-content").remove();

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
    startTimer();
    startQuiz();
});
