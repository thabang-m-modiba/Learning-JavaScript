const addZero = document.getElementById("zero-btn").addEventListener("click", e => {
    let currentValue = document.getElementById("display-screen").value;
    if(currentValue != null){
        var concatenatedString = currentValue.toString() + 0;
        document.getElementById("display-screen").value = concatenatedString;
    }else{
        document.getElementById("display-screen").value = 0;
    }
});
const addOne = document.getElementById("one-btn").addEventListener("click", e => {
    let currentValue = document.getElementById("display-screen").value;
    if(currentValue != null){
        var concatenatedString = currentValue.toString() + 1;
        document.getElementById("display-screen").value = concatenatedString;
    }else{
        document.getElementById("display-screen").value = 1;
    }
});
const addTwo = document.getElementById("two-btn").addEventListener("click", e => {
    let currentValue = document.getElementById("display-screen").value;
    if(currentValue != null){
        var concatenatedString = currentValue.toString() + 2;
        document.getElementById("display-screen").value = concatenatedString;
    }else{
        document.getElementById("display-screen").value = 2;
    }
});
const addThree = document.getElementById("three-btn");
const addFour = document.getElementById("four-btn");
const addFive = document.getElementById("five-btn");
const addSix = document.getElementById("six-btn");
const addSeven = document.getElementById("seven-btn");
const addEight = document.getElementById("eight-btn");
const addNine = document.getElementById("nine-btn");

// Operations
const addition = document.getElementById("addition").addEventListener("click", e => {
});
const subtraction = document.getElementById("subtraction");
const multiplication = document.getElementById("multiplication");
const division = document.getElementById("division");
