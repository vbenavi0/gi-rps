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
    showButs();
    showChoose();
}

function win(){
    document.getElementById("winner").innerHTML = "You win";
    document.getElementById("winner").style.color = 'green';
    pWins += 1;
    document.getElementById("pWins").innerHTML = "Player Wins: " + pWins;
    showButs();
    showChoose();
}

function tie(){
    document.getElementById("winner").innerHTML = "You tie";
    document.getElementById("winner").style.color = 'blue';
    showButs();
    showChoose();
}

function pRock(){
    document.getElementById("playerImg").src = "images/rock.png";
    document.getElementById("choice").innerHTML = "You chose: rock";
}
function pPaper(){
    document.getElementById("playerImg").src = "images/paper.png";
    document.getElementById("choice").innerHTML = "You chose: paper";
}
function pScissors(){
    document.getElementById("playerImg").src = "images/scissors.png";
    document.getElementById("choice").innerHTML = "You chose: scissors";
}

function cRock(){
    document.getElementById("cpuImg").src = "images/rock.png";
    document.getElementById("cpuChoice").innerHTML = "CPU chose: rock";
}
function cPaper(){
    document.getElementById("cpuImg").src = "images/paper.png";
    document.getElementById("cpuChoice").innerHTML = "CPU chose: paper";
}
function cScissors(){
    document.getElementById("cpuImg").src = "images/scissors.png";
    document.getElementById("cpuChoice").innerHTML = "CPU chose: scissors";
}

function hideButs(){
    document.getElementById("buts").style.opacity = '0';
}

function showButs(){
    document.getElementById("buts").style.opacity = '1';
}

function hideChoose(){
    document.getElementById("choose").style.opacity = '0';
}

function showChoose(){
    document.getElementById("choose").style.opacity = '1';
}

function choice(hand){
    document.getElementById("choice").style.opacity = '0';
    document.getElementById("playerImg").style.opacity = '0';
    document.getElementById("cpuChoice").style.opacity = '0';
    document.getElementById("cpuImg").style.opacity = '0';
    document.getElementById("winner").style.opacity = '0';
    hideButs();
    hideChoose();
    player = hand;

    if(player === "rock"){
        setTimeout(pRock, 1000);
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
    document.getElementById("choose").innerHTML = "Choose Next Hand!"
}

function reset(){
    // document.getElementById("choose").innerHTML = "Choose Rock, Paper, or Scissors!"
    // document.getElementById("choice").innerHTML = "Player"
    // document.getElementById("cpuChoice").innerHTML = "CPU";
    // document.getElementById("winner").innerHTML = "Result";
    // pWins = 0;
    // cWins = 0;
    // document.getElementById("pWins").innerHTML = "Player Wins: " + pWins;
    // document.getElementById("cWins").innerHTML = "CPU Wins: " + cWins;
    // document.getElementById("choice").style.opacity = '0';
    // document.getElementById("playerImg").style.opacity = '0';
    // document.getElementById("cpuChoice").style.opacity = '0';
    // document.getElementById("cpuImg").style.opacity = '0';
    // document.getElementById("winner").style.opacity = '0';
    location.reload();
}

function showPlayer(){
    document.getElementById("choice").style.opacity = '1.0';
    document.getElementById("playerImg").style.opacity = '1.0';
    console.log('opacity1');
}

function showCPU(){
    document.getElementById("cpuChoice").style.opacity = '1.0';
    document.getElementById("cpuImg").style.opacity = '1.0';
}

function showNext(){
    document.getElementById("winner").style.opacity = '1.0';
}