timer = 70;
let startTimer = function () {
    document.getElementById("timer").innerHTML = "Timer: " + timer;
    timer--;
    if (timer < 0) {
        alert("The timer has expired!")
        document.getElementById("question-area-content").remove();
        displayScores();
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

    let createButtons = function () {
        for (i = 0; i < questionData[currentQ].choices.length; i++) {
            let button = document.createElement("button");
            button.className = "btn"
            questionAreaContentEl.append(button);
        }
    }
    createButtons();

    let choicesEl = document.querySelectorAll(".btn");

    function iterate() {
        questionHeader.textContent = questionData[currentQ].question
        choicesEl.forEach((choicesButton, i) => {
            choicesButton.textContent = questionData[currentQ].choices[i]
        })
    }
    choicesEl.forEach(el => {
        el.addEventListener("click", function (event) {
            let choice = this.textContent
            if (choice === questionData[currentQ].answer) {
                let correctAnswer = document.createElement("h3")
                correctAnswer.textContent = "Correct!"
                $(correctAnswer).delay(200).fadeOut(500);
                document.body.append(correctAnswer)
            } else {
                let incorrectAnswer = document.createElement("h3")
                incorrectAnswer.textContent = "Incorrect!"
                $(incorrectAnswer).delay(200).fadeOut(500);
                document.body.append(incorrectAnswer)
                wrongAnswer();
            }

            currentQ++;
            if (currentQ < questionData.length) {
                iterate()
            } else {
                setTimeout(returnScore, 1000);
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
    let playerScore = timer

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
    playerInitialsSubmitBtn.id = "submit-btn"
    alertBox.append(playerInitialsSubmitBtn);

    // addEventListener for click of submit button
    playerInitialsSubmitBtn.addEventListener("click", function (event) {
        event.preventDefault();
        let playerInitials = document.querySelector('#player-initials').value;

        if (playerInitials === "") {
            alert("Initials cannot be blank!");
        } else {
            // save initials and score to localStorage, then remove content from screen and display high scores
            scoresArr.push(playerInitials);
            scoresArr.push(playerScore);
            console.log(scoresArr);
            localStorage.setItem("high-scores", JSON.stringify(scoresArr));
            // localStorage.setItem("playerInitials", playerInitials);
            // localStorage.setItem("score", playerScore);
            alertBox.remove();
            displayScores();
        }
    })
};

// display high scores on screen
let displayScores = function () {

    let highScores = document.createElement("section");
    highScores.id = "page-content"
    document.body.append(highScores);

    let scoresHeader = document.createElement("h2");
    scoresHeader.textContent = "High Scores"
    highScores.append(scoresHeader);

    // create list to display high scores
    let scoresList = document.createElement("ol")
    scoresList.id = "scoresList"
    highScores.append(scoresList);

    let addScores = function () {
        for (i = 0; i < 3; i++) {
            let scoreItem = document.createElement("li");
            scoresArr = JSON.parse(scoresArr)
            scoreItem.textContent = (localStorage.getItem("high-scores"));
            scoresList.append(scoreItem);
        }
    }
    addScores();
    
    // scoreItem.textContent = (localStorage.getItem("playerInitials") + " " + localStorage.getItem("score"));

    // prompt user to take quiz again
    let restartButtonEl = document.createElement("button")
    restartButtonEl.textContent = "Restart the quiz!"
    restartButtonEl.id = "start-btn"
    highScores.append(restartButtonEl);

    // function to click start button and initiate quiz and timer
    restartButtonEl.addEventListener("click", () => {
        let timerCreate = document.createElement("h2");
        timerCreate.id = "timer"
        timer = 70
        header.append(timerCreate);
        startTimer();
        startQuiz();
    });

}

// Function to start quiz on click
let startButtonEl = document.getElementById("start-btn");
startButtonEl.addEventListener("click", () => {
    startTimer();
    startQuiz();
});
