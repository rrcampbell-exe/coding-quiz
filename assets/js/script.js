// function for countdown timer

timerInitial = 60;
let startTimer = function() {
    document.getElementById("timer").innerHTML = timerInitial;
    timerInitial--;
    if (timerInitial < 0) {
        alert("The timer has expired!")
    } 
    else {
        setTimeout(startTimer, 1000);
    }
};


// functions for individual questions

let startQuiz = function() {
    alert("The quiz has begun!");
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

startButtonEl.addEventListener("click",() => {
    startQuiz();
    startTimer();
});
