let btnEl = document.querySelectorAll(".btn");

btnEl.forEach(el => {
    el.addEventListener("click", function() {
        // let choice = this.textContent;

        // switch (choice) {
        //     case "Button":
        //         console.log("yo");
        //         break;
        //     case "Booton":
        //         console.log("yo yo");
        //     default:
        //         console.log("yo yo yo")
        // }

        console.log("yo")
        console.log("yo yo")
        return 
        console.log("yo yo yo")
    })
})

function add(numOne, numTwo) {
    return numOne + numTwo
}

var solution = add(3, 5)
console.log(solution)
console.log(add(6,5))