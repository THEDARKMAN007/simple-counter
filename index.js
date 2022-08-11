const btn1 = document.body.querySelector(".btn1");
const btn2 = document.body.querySelector(".btn2");
const btn3 = document.body.querySelector(".btn3");
const numberDisplay = document.body.querySelector(".number");

//decrease
btn1.addEventListener("click", () => {
    number = numberDisplay.innerText;
    number = parseInt(number);

    result = number - 1;
    numberDisplay.innerText = result;

    if (result < 0) {
        numberDisplay.style.color = "red";
    }
});

//reset
btn2.addEventListener("click", () => {
    result = 0;
    numberDisplay.innerText = result;
    numberDisplay.style.color = "hsl(209, 61%, 16%)";
});

//increase
btn3.addEventListener("click", () => {
    number = numberDisplay.innerText;
    number = parseInt(number);

    result = number + 1;
    numberDisplay.innerText = result;

    if (result > 0) {
        numberDisplay.style.color = "green";
    }
});
