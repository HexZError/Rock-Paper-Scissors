let rockbtn = document.getElementById('rockbtn');
let paperbtn = document.getElementById('paperbtn');
let cutbtn = document.getElementById('cutbtn');
let PlayerSide = document.getElementById('PlayerSide');
let ComputerSide = document.getElementById('ComputerSide');
let DisplayResult = document.getElementsByClassName('DisplayResult');
let playerChoice;




function ComputerChoice(){
    let ComputerValue = 0;
    let randomValue = Math.floor((Math.random() * 3) + 1);
    console.log("Random No : ",randomValue);
    switch(randomValue){
        case 1:
            return ComputerValue = "Rock";
            break;
        case 2:
            return ComputerValue = "Paper";
            break;
        case 3:
            return ComputerValue = "Scissors";
            break;
    }
}

function GameController(ComputerValue){
    if(playerChoice === ComputerValue){
        DisplayResult[0].innerHTML = "Draw Match";
    }
    else if(playerChoice === "Rock" && ComputerValue === "Scissors"){
        PlayerSide.src = "icons/RockPNG.png";
        ComputerSide.src = "icons/cutPNG.png";
        DisplayResult[0].innerHTML = "Player Wins!";
    }
    else if(playerChoice === "Rock" && ComputerValue === "Paper"){
        PlayerSide.src = "icons/RockPNG.png";
        ComputerSide.src = "icons/papePNG.png";
        DisplayResult[0].innerHTML = "Computer Wins!";
    }
    else if(playerChoice === "Paper" && ComputerValue === "Scissors"){
        PlayerSide.src = "icons/papePNG.png";
        ComputerSide.src = "icons/cutPNG.png";
        DisplayResult[0].innerHTML = "Computer Wins!";
    }
    else if(playerChoice === "Paper" && ComputerValue === "Rock"){
        PlayerSide.src = "icons/papePNG.png";
        ComputerSide.src = "icons/RockPNG.png";
        DisplayResult[0].innerHTML = "Player Wins!";
    }
    else if(playerChoice === "Scissors" && ComputerValue === "Rock"){
        console.log("Computer Wins");
        PlayerSide.src = "icons/cutPNG.png";
        ComputerSide.src = "icons/rockPNG.png";
        DisplayResult[0].innerHTML = "Computer Wins!";
    }
    else if(playerChoice === "Scissors" && ComputerValue === "Paper"){
        PlayerSide.src = "icons/cutPNG.png";
        ComputerSide.src = "icons/PapePNG.png";
        DisplayResult[0].innerHTML = "Player Wins!";
    }
}

rockbtn.addEventListener('click',()=>{
    playerChoice = "Rock";
    let computerValue = ComputerChoice();
    GameController(computerValue);
})

paperbtn.addEventListener('click',()=>{
    playerChoice = "Paper";
    let computerValue = ComputerChoice();
    GameController(computerValue);
})

cutbtn.addEventListener('click',()=>{
    playerChoice = "Scissors";
    let computerValue = ComputerChoice();
    GameController(computerValue);
})