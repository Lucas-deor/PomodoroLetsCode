let minutes = 25;
let seconds = "00";

let minutesBreak = 5;
let secondsBreak = "00";

let click = new Audio("click.mp3");
let bell = new Audio("bell.mp3");

let sessionCounter = 0;

function template() {
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

    document.getElementById("minutesBreak").innerHTML = minutesBreak;
    document.getElementById("secondsBreak").innerHTML = secondsBreak;

    document.getElementById("sessionCounter").innerHTML = sessionCounter;
}

function start() {
    click.play();
    //fazer o som apenas quando pegar o evento de click e não quando reiniciar a função.

    document.body.classList.remove("backBreak");
    document.getElementById("start-btn").disabled = true;

    minutes = 24;
    seconds = 59;

    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

    let minutes_interval = setInterval(minutesTimer, 60000);
    let seconds_interval = setInterval(secondsTimer, 1000);

    function minutesTimer() {
        minutes = minutes - 1;
        document.getElementById("minutes").innerHTML = minutes;
    }

    function secondsTimer() {
        seconds = seconds - 1;
        document.getElementById("seconds").innerHTML = seconds;

        if(seconds <= 53) {
            if(minutes <= 24) {
                clearInterval(minutes_interval);
                clearInterval(seconds_interval);

                document.getElementById("done").innerHTML = "Take a Break!";

                document.getElementById("done").classList.add("show-message");

                sessionCounter++;
                document.getElementById("sessionCounter").innerHTML = sessionCounter;

                bell.play();

                startBreak();

            }
            seconds = 60;
        } 
    }
}


function startBreak() {

    document.body.classList.add("backBreak");

    minutesBreak = 4;
    secondsBreak = 59;

    document.getElementById("minutesBreak").innerHTML = minutesBreak;
    document.getElementById("secondsBreak").innerHTML = secondsBreak;

    let minutesBreak_interval = setInterval(minutesTimerBreak, 60000);
    let secondsBreak_interval = setInterval(secondsTimerBreak, 1000);

    function minutesTimerBreak() {
        minutesBreak = minutesBreak - 1;
        document.getElementById("minutesBreak").innerHTML = minutesBreak;
    }

    function secondsTimerBreak() {
        secondsBreak = secondsBreak - 1;
        document.getElementById("secondsBreak").innerHTML = secondsBreak;

        if(secondsBreak <= 53) {
            if(minutesBreak <= 4) {
                clearInterval(minutesBreak_interval);
                clearInterval(secondsBreak_interval);

                document.getElementById("done").classList.remove("show-message");
                document.getElementById("done").innerHTML = "";

                bell.play();

                start();
            }

            secondsBreak = 60;
        }
    }
}