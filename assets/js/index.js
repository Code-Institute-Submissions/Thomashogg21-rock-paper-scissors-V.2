const playerScore = 0;
const npcScore = 0;
const playerScore_ = document.getElementById("player-score");
const npcScore_ = document.getElementById("computer-score");
const scoreBoard = document.querySelector(".score-board");
const answer = document.querySelector(".answer");
const rock = document.getElementById("r");
const paper = document.getElementById("p");
const scissors = document.getElementById("s");

function getComputerOption() {
    const options = ['r', 'p', 's'];
    const randomOption = Math.floor(Math.random()* 3);
    return options[randomOption];
}


function play(userOption) {
    const computerOption = getComputerOption();
    switch (userOption + computerOption) {
        case "rs":
        case "pr":
        case "sp":
            console.log("You Win!");
            break;
        case "rp":
        case "ps":
        case "sr":
          console.log("You Lose!");
          break;
        case "rr":
        case "pp":
        case "ss":
            console.log("Draw!")
            break;

          
    }
}

function main() {
    rock.addEventListener('click', function() {
        play("r");
    })

    paper.addEventListener('click', function() {
        play("p");
    })

    scissors.addEventListener('click', function() {
        play("s");
    })

}

main();