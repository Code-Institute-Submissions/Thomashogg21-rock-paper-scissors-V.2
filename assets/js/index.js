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

console.log(getComputerOption());

function play(userOption) {
    const computerOption = getComputerOption();
    console.log("user option => " + userOption);
    console.log("computer option => " + computerOption);
}

play("G");

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