let maxScore = 1;
let userChoice = "Rock";
let user2Choice = "Rock";
let p1Wins = 0;
let p2Wins = 0;
let cpuChoice;


let scoreFormat = document.getElementById("scoreFormat");

let winnerTxt = document.getElementById("winnerTxt");
let player1Score = document.getElementById("player1Score");
let player2Score = document.getElementById("player2Score");
let DoneBtn1v1 = document.getElementById("DoneBtn1v1");
let btnradio1 = document.getElementById("btnradio1");
let btnradio2 = document.getElementById("btnradio2");
let btnradio3 = document.getElementById("btnradio3");

// The great btn mass
    // 1v1/CPU
        // Player 1
let btn1 = document.getElementById("btn1");
console.log(btn1)
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
let btn4 = document.getElementById("btn4");
let btn5 = document.getElementById("btn5");
        //Player 2
let btn6 = document.getElementById("btn6");
let btn7 = document.getElementById("btn7");
let btn8 = document.getElementById("btn8");
let btn9 = document.getElementById("btn9");
let btn10 = document.getElementById("btn10");


btnradio1.addEventListener('click', function(e){
    if(maxScore !== 1){
        maxScore = 1;
        console.log(maxScore);
    }
})

btnradio2.addEventListener('click', function(e){
    if(maxScore !== 3){
        maxScore = 3;
        console.log(maxScore);
    }
})

btnradio3.addEventListener('click', function(e){
    if(maxScore !== 4){
        maxScore = 4;
        console.log(maxScore);
    }
})


function Rock(){
    userChoice = "Rock";
    console.log(userChoice);
}

function Paper(){
    userChoice = "Paper";
    console.log(userChoice);
}

function Scissors(){
    userChoice = "Scissors";
    console.log(userChoice);
}

function Lizard(){
    userChoice = "Lizard";
    console.log(userChoice);
}

function Spock(){
    userChoice = "Spock";
    console.log(userChoice);
}


