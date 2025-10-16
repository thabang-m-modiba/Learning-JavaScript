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
const addThree = document.getElementById("three-btn").addEventListener("click", e => {
    let currentValue = document.getElementById("display-screen").value;
    if(currentValue != null){
        var concatenatedString = currentValue.toString() + 3;
        document.getElementById("display-screen").value = concatenatedString;
    }else{
        document.getElementById("display-screen").value = 3;
    }
});
const addFour = document.getElementById("four-btn").addEventListener("click", e => {
    let currentValue = document.getElementById("display-screen").value;
    if(currentValue != null){
        var concatenatedString = currentValue.toString() + 4;
        document.getElementById("display-screen").value = concatenatedString;
    }else{
        document.getElementById("display-screen").value = 4;
    }
});
const addFive = document.getElementById("five-btn").addEventListener("click", e => {
    let currentValue = document.getElementById("display-screen").value;
    if(currentValue != null){
        var concatenatedString = currentValue.toString() + 5;
        document.getElementById("display-screen").value = concatenatedString;
    }else{
        document.getElementById("display-screen").value = 5;
    }
});
const addSix = document.getElementById("six-btn").addEventListener("click", e => {
    let currentValue = document.getElementById("display-screen").value;
    if(currentValue != null){
        var concatenatedString = currentValue.toString() + 6;
        document.getElementById("display-screen").value = concatenatedString;
    }else{
        document.getElementById("display-screen").value = 6;
    }
});
const addSeven = document.getElementById("seven-btn").addEventListener("click", e => {
    let currentValue = document.getElementById("display-screen").value;
    if(currentValue != null){
        var concatenatedString = currentValue.toString() + 7;
        document.getElementById("display-screen").value = concatenatedString;
    }else{
        document.getElementById("display-screen").value = 7;
    }
});
const addEight = document.getElementById("eight-btn").addEventListener("click", e => {
    let currentValue = document.getElementById("display-screen").value;
    if(currentValue != null){
        var concatenatedString = currentValue.toString() + 8;
        document.getElementById("display-screen").value = concatenatedString;
    }else{
        document.getElementById("display-screen").value = 8;
    }
});
const addNine = document.getElementById("nine-btn").addEventListener("click", e => {
    let currentValue = document.getElementById("display-screen").value;
    if(currentValue != null){
        var concatenatedString = currentValue.toString() + 9;
        document.getElementById("display-screen").value = concatenatedString;
    }else{
        document.getElementById("display-screen").value = 9;
    }
});

// Operations
const addition = document.getElementById("addition").addEventListener("click", e => {
    let currentValue = document.getElementById("display-screen").value;
    if(currentValue != null){
        var concatenatedString = currentValue.toString() + "+";
        document.getElementById("display-screen").value = concatenatedString;
    }else{
        document.getElementById("display-screen").value = "+";
    }
});
const subtraction = document.getElementById("subtraction");
const multiplication = document.getElementById("multiplication");
const division = document.getElementById("division");
