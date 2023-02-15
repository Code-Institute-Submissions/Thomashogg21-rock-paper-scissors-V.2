//Caching the DOM helps to store code so that you dont have to keep writing the same code over again.
var playerScore = 0;
var computerScore = 0;
const playerScore_ = document.getElementById("player-score");
const computerScore_ = document.getElementById("computer-score");
const scoreBoard = document.querySelector(".score-board");
const answer = document.querySelector(".answer > p");
const rock = document.getElementById("r");
const paper = document.getElementById("p");
const scissors = document.getElementById("s");

function getComputerOption() {
    const options = ['r', 'p', 's'];
    const randomOption = Math.floor(Math.random()* 3);
    return options[randomOption];
}

function characterToWord(character) {
    if (character === "r") return "Rock";
    if (character === "p") return "Paper";
    return "Scissors";
}

function lose(playerOption, computerOption) {
    computerScore++;
    playerScore_.innerHTML = playerScore;
    computerScore_.innerHTML = computerScore;
    answer.innerHTML = characterToWord(playerOption) + " is no match for " + characterToWord(computerOption) + "! You lose!"
}

function draw(playerOption, computerOption) {
    playerScore_.innerHTML = playerScore;
    computerScore_.innerHTML = computerScore;
    answer.innerHTML = characterToWord(playerOption) + " is equal to " + characterToWord(computerOption) + "! It's a draw!"
}

function win(playerOption, computerOption) {
    playerScore++;
    playerScore_.innerHTML = playerScore;
    computerScore_.innerHTML = computerScore;
    answer.innerHTML = characterToWord(playerOption) + " is no match for " + characterToWord(computerOption) + "! You win!"
}

function play(userOption) {
    const computerOption = getComputerOption();
    switch (userOption + computerOption) {
        case "rs":
        case "pr":
        case "sp":
            win(userOption, computerOption);
            break;
        case "rp":
        case "ps":
        case "sr":
          lose(userOption, computerOption);
          break;
        case "rr":
        case "pp":
        case "ss":
            draw(userOption, computerOption);
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