let playerPoints = document.querySelector('#playerPoints')
let computerPoints = document.querySelector('#computerPoints')
let movesLeft = document.querySelector('#movesLeft')
const choiceBtn = document.querySelectorAll('.choice')
let result = document.querySelector('#results')

let player;
let computer;
let pPoints = 0;
let cPoints = 0;

choiceBtn.forEach(button => button.addEventListener('click', function(){

    player = button.textContent;
    computerChoice();
    leftMoves();
    checkWinner();
    checkPoints();

}))

const option = ['ROCK', 'PAPER', 'SCISSORS']

function computerChoice(){
    computer = option[(Math.floor(Math.random()*3))]
    return computer
}

let counter = 10;

function leftMoves(){
    counter--;
    if (counter < 0) {
        return 0;
    }
    return movesLeft.innerHTML = `Moves left: ${counter}`
}

function checkWinner(){
    if (player === computer) {
        return result.innerHTML = `It's a tie!`
    }
    else if (player === "ROCK" && computer === "SCISSORS" || 
    player === "PAPER" && computer === "ROCK" ||
    player === "SCISSORS" && computer === "PAPER"){
        return result.innerHTML = 'You won!'
    }
    else {
        return result.innerHTML = 'You lost!'      
    }
}

function checkPoints(){
    if (checkWinner() === 'You won!'){
        pPoints++;
        return playerPoints.innerHTML = `${pPoints}`
    } else if (checkWinner() === 'You lost!'){
        cPoints++;
        return computerPoints.innerHTML = `${cPoints}`
    }
}









