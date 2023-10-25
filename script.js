let player = ''; //string for player choice
let cpu = ''; //string for cpu choice
let pWins = 0; //int to count player wins
let cWins = 0; //int to count cpu wins
let ties = 0; //int to count ties
let cpuChoice; //variable for cpu randomizer

function lose(){ //function for when player loses
    document.getElementById("winner").innerHTML = "You lose!";
    document.getElementById("winner").style.color = 'red'; // Change 
    cWins += 1;
    document.getElementById("cWins").innerHTML = "CPU Wins: " + cWins;
    showButs();
    showChoose();
}

function win(){ //function for when player wins
    document.getElementById("winner").innerHTML = "You win!";
    document.getElementById("winner").style.color = 'green';
    pWins += 1;
    document.getElementById("pWins").innerHTML = "Player Wins: " + pWins;
    showButs();
    showChoose();
}

function tie(){ //function for when player and cpu tie
    document.getElementById("winner").innerHTML = "You tie!";
    document.getElementById("winner").style.color = 'blue';
    ties += 1;
    document.getElementById("ties").innerHTML = "Ties: " + ties;
    showButs();
    showChoose();
}

function pRock(){ //function for if player chooses rock
    document.getElementById("playerImg").src = "images/rock.png";
    document.getElementById("choice").innerHTML = "You chose: rock";
}
function pPaper(){ //function for if player chooses paper
    document.getElementById("playerImg").src = "images/paper.png";
    document.getElementById("choice").innerHTML = "You chose: paper";
}
function pScissors(){ //function for if player chooses scissors
    document.getElementById("playerImg").src = "images/scissors.png";
    document.getElementById("choice").innerHTML = "You chose: scissors";
}

function cRock(){ //function for if cpu chooses rock
    document.getElementById("cpuImg").src = "images/rock.png";
    document.getElementById("cpuChoice").innerHTML = "CPU chose: rock";
}
function cPaper(){ //function for if cpu chooses paper
    document.getElementById("cpuImg").src = "images/paper.png";
    document.getElementById("cpuChoice").innerHTML = "CPU chose: paper";
}
function cScissors(){ //function for if cpu chooses scissors
    document.getElementById("cpuImg").src = "images/scissors.png";
    document.getElementById("cpuChoice").innerHTML = "CPU chose: scissors";
}

function hideButs(){ //function to hide player buttons
    document.getElementById("buts").style.opacity = '0';
}

function showButs(){ //function to show player buttons
    document.getElementById("buts").style.opacity = '1';
}

function hideChoose(){ //function to hide prompt
    document.getElementById("choose").style.opacity = '0';
}

function showChoose(){ //function to show prompt
    document.getElementById("choose").innerHTML = "Choose Next Hand:"
    document.getElementById("choose").style.opacity = '1';
}

function choice(hand){ //function to perform action based on player button input
    document.getElementById("choice").style.opacity = '0';
    document.getElementById("playerImg").style.opacity = '0';
    document.getElementById("cpuChoice").style.opacity = '0';
    document.getElementById("cpuImg").style.opacity = '0';
    document.getElementById("winner").style.opacity = '0';
    hideButs();
    hideChoose(); 
    //reset player view before playing user hand
    player = hand;

    if(player === "rock"){
        setTimeout(pRock, 1000); //time before functions animate on screen, 1000ms or 1sec
    }
    else if(player === "paper"){
        setTimeout(pPaper, 1000);
    }
    else if(player === "scissors"){
        setTimeout(pScissors, 1000);
    }

    cpuChoice = Math.floor(Math.random() * 3);
    console.log(cpuChoice)
    if(cpuChoice === 0){
        cpu = 'rock';
        setTimeout(cRock, 1000);
    }
    else if(cpuChoice === 1){
        cpu = 'paper';
        setTimeout(cPaper, 1000);
    }
    else if(cpuChoice === 2){
        cpu = 'scissors';
        setTimeout(cScissors, 1000)
    }

    if(player === cpu){
        setTimeout(tie, 3000);
    }
    else if(player === 'rock' && cpu === 'paper'){
        setTimeout(lose, 3000);
    }
    else if(player === 'rock' && cpu === 'scissors'){
        setTimeout(win, 3000);
    }
    else if(player === 'paper' && cpu === 'scissors'){
        setTimeout(lose, 3000);
    }
    else if(player === 'paper' && cpu === 'rock'){
        setTimeout(win, 3000);
    }
    else if(player === 'scissors' && cpu === 'rock'){
        setTimeout(lose, 3000);
    }
    else if(player === 'scissors' && cpu === 'paper'){
        setTimeout(win, 3000);
    }
    setTimeout(showPlayer, 1000);
    setTimeout(showCPU, 2000);
    setTimeout(showNext, 3000);
}

function reset(){ //function to reset page
    location.reload();
}

function showPlayer(){ //function to show player hand
    document.getElementById("choice").style.opacity = '1.0';
    document.getElementById("playerImg").style.opacity = '1.0';
    console.log('opacity1');
}

function showCPU(){ //function to show cpu hand
    document.getElementById("cpuChoice").style.opacity = '1.0';
    document.getElementById("cpuImg").style.opacity = '1.0';
}

function showNext(){ //function to show winner
    document.getElementById("winner").style.opacity = '1.0';
}