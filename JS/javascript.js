const buttons = document.querySelectorAll(".button");

buttons.forEach(button => button.addEventListener('click', displayToScreen));

function displayToScreen(e) {
    let temp = this.getAttribute("class");
    let parts = temp.split(" ");
    let val = parts[1];
    const screen = document.querySelector(".displayed-text");
    const result = document.querySelector(".answer");
    if (val === "clear") {
        screen.textContent = "";
    } else if (val === "delete") {
        screen.textContent = screen.textContent.substring(0, screen.textContent.length - 1);
    } else if (val === "=") {
        screen.textContent = "";
        result.textContent = "result";
    } else if (val === "+" || val === "-" || val === "/" || val == "*") {
        screen.textContent += " " + val + " ";

    } else {
        
        screen.textContent += val;
    }

}