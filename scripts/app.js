let maxScore = 1;
let userChoice;
let user2Choice;
let p1Wins = 0;
let p2Wins = 0;
let cpuChoice;


let scoreFormat = document.getElementById('scoreFormat');

let winnerTxt = document.getElementById('winnerTxt');
let player1Score = document.getElementById('player1Score');
let player2Score = document.getElementById('player2Score');
let DoneBtn1v1 = document.getElementById('DoneBtn1v1');
let btnradio1 = document.getElementById('btnradio1');
let btnradio2 = document.getElementById('btnradio2');
let btnradio3 = document.getElementById('btnradio3');

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

