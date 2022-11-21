const startStop = document.querySelector('.startStop');
const reset = document.querySelector('.reset');
const display = document.querySelector('span');


let activate = true;
let miliseconds = 0, seconds = 0, minutes = 0;
let idInterval;


const startStopTask = () => {
    if (activate) {
        activate = !activate;
        startStop.textContent = "Pauza";
        idInterval = setInterval(stopWatch, 10);
    }
    else {
        activate = !activate;
        startStop.textContent = "Start";
        clearInterval(idInterval);
    }
}


const stopWatch = () => {
    miliseconds += 10;

    if (miliseconds == 1000) {
        seconds++;
        miliseconds = 0;
    }
    if (seconds == 60) {
        minutes++;
        seconds = 0;
    }

    let ms = miliseconds < 10 ? "00" + miliseconds : miliseconds < 100 ? "0" + miliseconds : miliseconds;
    let s = seconds < 10 ? "0" + seconds : seconds;
    let m = minutes < 10 ? "0" + minutes : minutes;


    console.log(miliseconds);
    display.textContent = `${m} : ${s} : ${ms}`;
}

const resetTask = () => {
    display.textContent = "---"
    clearInterval(idInterval);
    startStop.textContent = "Start";
    miliseconds = 0, seconds = 0, minutes = 0;
    if (!activate) {
        activate = !activate;
    }
}


reset.addEventListener('click', resetTask);
startStop.addEventListener('click', startStopTask);