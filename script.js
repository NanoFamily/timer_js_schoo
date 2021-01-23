`use strict`;

let passedTime = 0;
let intervalId = null;
let timer = document.getElementById("timer");

function start() {
    if (intervalId != null){
        return;
    }
    intervalId = setInterval(function() {
        passedTime++;
        render();
    }, 1000);
}

function stop() {
    if (intervalId != null){
      clearInterval(intervalId);
      intervalId = null;  
    }
    clearInterval(intervalId);
}

function reset() {
    stop();
    passedTime = 0;
    render();
}

function render() {
    let minutes = Math.floor(passedTime / 60);
    let seconds = passedTime % 60;
    timer.textContent = zeroFill(minutes) + ":" + zeroFill(seconds);
}

render();

 function zeroFill(num){
     return ("0" + num).slice(-2);
 }

 document.getElementById("start").addEventListener("click", start);
 document.getElementById("stop").addEventListener("click", stop);
 document.getElementById("reset").addEventListener("click", reset);

