document.addEventListener("DOMContentLoaded", function () {
    let display = document.querySelector("input");
    let buttons = document.querySelectorAll("button");
    let currentInput = "";

    buttons.forEach(button => {
        button.addEventListener("click", function () {
            let buttonText = this.innerText;

            if (buttonText === "C") {
                currentInput = "";
            } else if (buttonText === "=") {
                try {
                    currentInput = eval(currentInput.replace("x", "*").replace("÷", "/"));
                } catch (error) {
                    alert("Input tidak valid!");
                    currentInput = "";
                }
            } else {
                currentInput += buttonText;
            }

            display.value = currentInput;
        });
    });
});
