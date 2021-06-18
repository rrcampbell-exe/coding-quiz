let questionData = [{
    question: "True or false: JavaScript and Java are the same thing.",
    choices: ["True", "False"],
    answer: "False"
},
{
    question: "Which of the following will iterate a function over the length of an array named arrayName?",
    choices: ["for (i = 1, i < arrayName.length, i++)", "for (i = 0, i < arrayName.length, i++)", "for (i = 0, i < arrayName.length, i+)", "for (i = 0, i < arrayName, i++)"],
    answer: "for (i = 0, i < arrayName.length, i++)"
},
{
    question: "Which of the following will initiate a function helloAlert when a button with 'btn-id' is mouseover-ed?",
    choices: ["let buttonEl = document.getElementById('btn-id'); buttonEl.addEventListener('mouseover', helloAlert);", "let buttonEl = document.getElementById('btn-id'); buttonEl.addEventListener('click', helloAlert);", "let buttonEl = document.getButtonByBtn-Id; buttonEl.addEventListener('mouseover', helloAlert);", "let buttonMouseoverEl = document.getElementById('btn-id'); buttonEl.addEventListener('mouseover', helloAlert);"],
    answer: "let buttonEl = document.getElementById('btn-id'); buttonEl.addEventListener('mouseover', helloAlert);"
},
{
    question: "Which of the following will add 'rutabaga' to an array named theseAreVegetables?",
    choices: ["This is not possible to do outside of the original definition of an array.", "theseAreVegetables.addString('rutabaga');", "addToArray.theseAreVegetables('rutabaga');", "theseAreVegetables.push('rutabaga');"],
    answer: "theseAreVegetables.push('rutabaga');"
},
{
    question: "To send an item to local storage, which of the following would be used?",
    choices: ["localStorage.getItem", "saveItem.localStorage", "localStorage.setItem", "localStorage.saveItem"],
    answer: "localStorage.setItem"
}]


// First Point - Array of Objects

// let questionData = [{
//     question: "True or false: JavaScript and Java are the same thing.",
//     answers: ["True", "False"],

// }]

// Second Point - Control the Index of the Question, go to i++ on click on any button

// Third Point - For length of answers, build buttons

// Fourth Point = "This" (the event that was listened to, or classes)