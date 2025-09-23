/**
 * Game Features:
 * 
 * 1. Display a rearranged name from a predefined list of names.
 * 2. Provide an input field for the user to guess the correct name.
 * 3. Check the user's answer and provide feedback (correct/incorrect).
 * 4. Proceed to the next name after each guess.
 * 5. Keep track of the score (number of correct answers).
 * 6. End the game after a certain number of rounds and display the final score.
 * 7. Option to restart the game.
 */

function startGame() {
    const names = ["Thabang", "Tshepho", "Moloko", "Thakgi", "Tumelo", "Alice", "Bob", "Charlie", "Diana", "Eve"];
    const rearrangedNames = names.map(name => name.split('').sort(() => Math.random() - 0.5).join(''));

    var score = 0;
    var currentRound = 0;

    // Hide instructions and start button, show game container
    document.getElementById("instruction-ctn").style.display = "none";
    document.getElementById("start-btn-ctn").style.display = "none";
    document.getElementById("game-ctn").style.display = "flex";

    // Do while for rounds
    document.getElementById("next").addEventListener("click", e =>{

        currentRound++;
        if(currentRound > 10){
            document.getElementById("myRound").innerHTML = currentRound.toString() + "/10";
            let randomInt = getRandomIndex();
            document.getElementById("rearranged-name").innerHTML = rearrangedNames[randomInt];
        }else{
            // End the game if all rounds are completed
            document.getElementById("name-list-ctn").style.display = "none";
            document.getElementById("rearranged-name-ctn").style.display = "none";
            document.getElementById("user-answer").style.display = "none";
            document.getElementById("final-results").innerHTML = "Game Over! Your score:";
        }
        
        /*do{
            // Display the random name
            if (currentRound >= 10) {
                // End the game if all rounds are completed
                document.getElementById("name-list-ctn").style.display = "none";
                document.getElementById("rearranged-name-ctn").style.display = "none";
                document.getElementById("user-answer").style.display = "none";
                document.getElementById("final-results").innerHTML = "Game Over! Your score:";
                break;
            } else {
                currentRound++;
                document.getElementById("myRound").innerHTML = currentRound.toString() + "/10";
                let randomInt = getRandomIndex();
                document.getElementById("rearranged-name").innerHTML = rearrangedNames[randomInt];
            }
            
        }while(false);*/
    });

    for(let i = 0; i < names.length; i++){
        var name = "name" + i.toString();
        document.getElementById(name).innerHTML = names[i];
    }

    

    /*for(var i = 0; i < rearrangedNames.length; i++) {
        console.log(`Rearranged Name: ${rearrangedNames[i]}`);
    }*/
}

// Function to generate a random index
function getRandomIndex() {
    return Math.floor(Math.random() * 10);
}

//startGame();




