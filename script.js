let player = '';
let cpu = '';
let pWins = 0;
let cWins = 0;
let cpuChoice;

function lose(){
    document.getElementById("winner").innerHTML = "You lose";
    document.getElementById("winner").style.color = 'red';
    cWins += 1;
    document.getElementById("cWins").innerHTML = "CPU Wins: " + cWins;
}

function win(){
    document.getElementById("winner").innerHTML = "You win";
    document.getElementById("winner").style.color = 'green';
    pWins += 1;
    document.getElementById("pWins").innerHTML = "Player Wins: " + pWins;
}

function tie(){
    document.getElementById("winner").innerHTML = "You tie"
    document.getElementById("winner").style.color = 'blue';
}

function choice(hand){
    player = hand;
    document.getElementById("choice").innerHTML = "You chose " + player;

    cpuChoice = Math.floor(Math.random() * 3);
    console.log(cpuChoice)
    if(cpuChoice === 0){
        cpu = 'rock';
    }
    else if(cpuChoice === 1){
        cpu = 'paper';
    }
    else if(cpuChoice === 2){
        cpu = 'scissors';
    }
    document.getElementById("cpuChoice").innerHTML = "CPU chose " + cpu;

    if(player === cpu){
        tie();
    }
    else if(player === 'rock' && cpu === 'paper'){
        lose();
    }
    else if(player === 'rock' && cpu === 'scissors'){
        win();
    }
    else if(player === 'paper' && cpu === 'scissors'){
        lose();
    }
    else if(player === 'paper' && cpu === 'rock'){
        win();
    }
    else if(player === 'scissors' && cpu === 'rock'){
        lose();
    }
    else if(player === 'scissors' && cpu === 'paper'){
        win();
    }

}

function reset(){
    document.getElementById("choice").innerHTML = "Choose Rock, Paper, or Scissors!"
    document.getElementById("cpuChoice").innerHTML = "";
    document.getElementById("winner").innerHTML = "";
    pWins = 0;
    cWins = 0;
    document.getElementById("pWins").innerHTML = "Player Wins: " + pWins;
    document.getElementById("cWins").innerHTML = "CPU Wins: " + cWins;
}