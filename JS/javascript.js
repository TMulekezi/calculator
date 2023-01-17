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
        result.textContent = "";
    } else if (val === "delete") {
        screen.textContent = screen.textContent.trim();
        screen.textContent = screen.textContent.substring(0, screen.textContent.length - 1);
    } else if (val === "=") {
        let input = screen.textContent;
        screen.textContent = "";
        
        let output = operate(input);

        result.textContent = output;
    } else if (val === "+" || val === "-" || val === "/" || val == "*") {
        screen.textContent += " " + val + " ";

    } else {
        
        screen.textContent += val;
    }

}

function add(a, b) {
    return (a + b).toFixed(2);
}

function subtract(a, b) {
    return (a - b).toFixed(2);
}

function multiply(a, b) {
    return (a * b).toFixed(2);
}

function divide(a, b) {

    if (b === 0) {
        return "Error";
    }
    return (a / b).toFixed(2);
}

function operate(input){
    input = input.trim();
    let parts = input.split(" ");
    console.log(parts);
    console.log(parts[1]);
    
    if (parts.length != 3) {
        console.log("here1");
        return "Error";
    }

    if (parts[1] !== "+" && parts[1] !== "-" && parts[1] !== "*" && parts[1] !== "/") {
        console.log("here2");
        return "Error";
    }

    let a = Number(parts[0]);
    let b = Number(parts[2]);

    if (parts[1] === "+") {
        return add(a, b);
    } else if (parts[1] === "-") {
        return subtract(a, b);
    } else if (parts[1] === "/") {
        return divide(a, b);
    } else {
        return multiply(a, b);
    }
    

}