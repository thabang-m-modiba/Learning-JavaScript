

function startGame(){
    var names = ["Thabang", "Siyabonga", "Lindokuhle", "Nokuthula", "Siphesihle", "Zandile"];
    var rearrangedNames = ["bnhatga", "gniyabosga", "duindoklhle", "ahokutnula", "hiiphesshle", "diandzle"];
    document.getElementById("form1-container").style.display = "none";
    document.getElementById("name-container").style.display = "flex";
    document.getElementById("game-content").style.display = "flex";
    
    var randomName = rearrangedNames[getRandomNumber()];
    document.getElementById("rearranged-name").innerHTML = randomName;

    for(var i = 0; i < names.length; i++){
        var elementName = "name" + i.toString();
        document.getElementById(elementName).innerHTML = names[i];
        //console.log(elementName);
    }
}

function checkAnswer(){
    var names = ["Thabang", "Siyabonga", "Lindokuhle", "Nokuthula", "Siphesihle", "Zandile"];
    var rearrangedNames = ["bnhatga", "gniyabosga", "duindoklhle", "ahokutnula", "hiiphesshle", "diandzle"];

    var userAnswer = document.getElementById("answer").value;
    var question = document.getElementById("rearranged-name").innerHTML;

    if(userAnswer === "thabang" && question === "bnhatga"){
        document.getElementById("results").innerHTML = "Correct! Well done.";
        document.getElementById("results").style.color = "green";
    }else if(userAnswer === "siyabonga" && question === "gniyabosga"){
        document.getElementById("results").innerHTML = "Correct! Well done.";
        document.getElementById("results").style.color = "green";
    }else if(userAnswer === "lindokuhle" && question === "duindoklhle"){
        document.getElementById("results").innerHTML = "Correct! Well done.";
        document.getElementById("results").style.color = "green";
    }else if(userAnswer === "nokuthula" && question === "ahokutnula"){
        document.getElementById("results").innerHTML = "Correct! Well done.";
        document.getElementById("results").style.color = "green";
    }else if(userAnswer === "siphesihle" && question === "hiiphesshle"){
        document.getElementById("results").innerHTML = "Correct! Well done.";
        document.getElementById("results").style.color = "green";
    }else if(userAnswer === "zandile" && question === "diandzle"){
        document.getElementById("results").innerHTML = "Correct! Well done.";
        document.getElementById("results").style.color = "green";
    }else{
        document.getElementById("results").innerHTML = "Incorrect! Try again.";
        document.getElementById("results").style.color = "red";
    }
    
    //console.log(question);
    //console.log(userAnswer);
}

function getRandomNumber() {
    return Math.floor(Math.random() * 6);
}




