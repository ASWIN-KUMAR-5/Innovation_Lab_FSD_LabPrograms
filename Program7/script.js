let seconds = 0;
let intervalId = null;

function updateDisplay() {
    const mins = String(Math.floor(seconds / 60)).padStart(2, '0');
    const secs = String(seconds % 60).padStart(2, '0');
    document.getElementById("display").textContent = `${mins}:${secs}`;
}

function start() {
    if (!intervalId) {
        intervalId = setInterval(() => {
            seconds++;
            updateDisplay();
        }, 1000);
    }
}

function stop() {
    clearInterval(intervalId);
    intervalId = null;
}

function reset() {
    stop();
    seconds = 0;
    updateDisplay();
}
