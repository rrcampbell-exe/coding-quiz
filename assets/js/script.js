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


// functions for individual questions

let startQuiz = function () {
    let pageContentEl = document.getElementById("page-content");
    pageContentEl.remove();

    let questionOne = function () {
        // create new div element, add id
        let pageContentEl = document.createElement("section");
        pageContentEl.id = "page-content"

        // // adding h3 to new section element
        // let questionOneHeader = document.createElement("h3");
        // questionOneHeader.id = "question-header"

        // // adding question content to h3
        // document.getElementById("question-header").innerHTML = "Is this a question?";
        
        // // add the header to the newly created section
        // pageContentEl.appendChild(quesionOneHeader);
        
        // adding content to new section element
        let questionOneContent = document.createTextNode("This is the content of the first question.");

        // add the text node to the newly created section
        pageContentEl.appendChild(questionOneContent);

        // add the newly created element and its content to the DOM
        let questionOneSection = document.getElementById("page-content");
        document.body.insertBefore(pageContentEl, questionOneSection);

    };
    questionOne();
    pageContentEl.remove;
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
