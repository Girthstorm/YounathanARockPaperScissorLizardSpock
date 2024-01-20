let maxScore;
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
let DoneBtn1vCPU = document.getElementById("DoneBtn1vCPU");
let winRedirect = document.getElementById("winRedirect");

btnradio1.addEventListener('click', function(e){
    if(maxScore !== 1){
        maxScore = 1;
        p1Wins = 0;
        p2Wins = 0;
        localStorage.setItem('Max Score', maxScore);
        console.log(maxScore);
    }
})

btnradio2.addEventListener('click', function(e){
    if(maxScore !== 3){
        maxScore = 3;
        p1Wins = 0;
        p2Wins = 0;
        localStorage.setItem('Max Score', maxScore);
        console.log(maxScore);
    }
})

btnradio3.addEventListener('click', function(e){
    if(maxScore !== 4){
        maxScore = 4;
        p1Wins = 0;
        p2Wins = 0;
        localStorage.setItem('Max Score', maxScore);
        console.log(maxScore);
    }
})


function Rock(){
    userChoice = "Rock";
    console.log("player one: " + userChoice);
}

function Paper(){
    userChoice = "Paper";
    console.log("player one: " + userChoice);
}

function Scissors(){
    userChoice = "Scissors";
    console.log("player one: " + userChoice);
}

function Lizard(){
    userChoice = "Lizard";
    console.log("player one: " + userChoice);
}

function Spock(){
    userChoice = "Spock";
    console.log("player one: " + userChoice);
}

function Rock2(){
    user2Choice = "Rock";
    console.log("player two: " + user2Choice);
}

function Paper2(){
    user2Choice = "Paper";
    console.log("player two: " + user2Choice);
}

function Scissors2(){
    user2Choice = "Scissors";
    console.log("player two: " + user2Choice);
}

function Lizard2(){
    user2Choice = "Lizard";
    console.log("player two: " + user2Choice);
}

function Spock2(){
    user2Choice = "Spock";
    console.log("player two: " + user2Choice);
}

function DoneBtn(){
    maxScore = localStorage.getItem('Max Score')
    if (userChoice === user2Choice) {
        console.log("Tie");
    } else {
        // Check for user's choice and determine the winner
        if (
            (userChoice === "Rock" && (user2Choice === "Scissors" || user2Choice === "Lizard")) ||
            (userChoice === "Paper" && (user2Choice === "Rock" || user2Choice === "Spock")) ||
            (userChoice === "Scissors" && (user2Choice === "Paper" || user2Choice === "Lizard")) ||
            (userChoice === "Lizard" && (user2Choice === "Spock" || user2Choice === "Paper")) ||
            (userChoice === "Spock" && (user2Choice === "Scissors" || user2Choice === "Rock"))
        ) {
            console.log("You win!");
                p1Wins++; 
                console.log(p1Wins);
                console.log(maxScore);
                player1Score.innerText = p1Wins;
            if(p1Wins >= maxScore){
                gameEnd();
                
            }
            
        } else {
            console.log("You lose!");
            p2Wins++; 
                console.log(p2Wins);
                console.log(maxScore);
                player2Score.innerText = p2Wins;
            if(p2Wins >= maxScore){
                gameEnd2();
                
            }
        }
    }
}

whoWon();
function whoWon(){
    if(p1Wins == maxScore && p1Wins > p2Wins){
        winnerTxt.innerText = "PLAYER 1";
    } else {
        winnerTxt.innerText = "PLAYER 2";
    }
}

let p1Winning = "PLAYER 1";
let p2Winning = "PLAYER 2";

function gameEnd(){
    window.location.href = 'winnerPage.html';
}
function gameEnd2(){
    window.location.href = 'winnerPage2.html';
}

function resetMaxScore(){
    localStorage.setItem("Max Score", 1);
}

async function cpuPlay(){
    const response = await fetch('https://scottsrpsls.azurewebsites.net/api/RockPaperScissors/GetRandomOption');
    const data = await response.text();
    console.log(data);
    user2Choice = data;
    console.log(user2Choice);
}

function CPUDoneBtn(){
    cpuPlay()
    maxScore = localStorage.getItem('Max Score')
    if (userChoice === user2Choice) {
        console.log("Tie");
    } else {
        // Check for user's choice and determine the winner
        if (
            (userChoice === "Rock" && (user2Choice === "Scissors" || user2Choice === "Lizard")) ||
            (userChoice === "Paper" && (user2Choice === "Rock" || user2Choice === "Spock")) ||
            (userChoice === "Scissors" && (user2Choice === "Paper" || user2Choice === "Lizard")) ||
            (userChoice === "Lizard" && (user2Choice === "Spock" || user2Choice === "Paper")) ||
            (userChoice === "Spock" && (user2Choice === "Scissors" || user2Choice === "Rock"))
        ) {
            console.log("You win!");
                p1Wins++; 
                console.log(p1Wins);
                console.log(maxScore);
                player1Score.innerText = p1Wins;
            if(p1Wins >= maxScore){
                gameEnd();
                
            }
            
        } else {
            console.log("You lose!");
            p2Wins++; 
                console.log(p2Wins);
                console.log(maxScore);
                player2Score.innerText = p2Wins;
            if(p2Wins >= maxScore){
                gameEnd2();
                
            }
        }
    }
}