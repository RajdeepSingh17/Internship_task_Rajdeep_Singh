let isRunning = false;
let elapsedTime = 0;
let timerInterval;
let startTime = 0;

const display = document.getElementById("display");
const startbtn = document.getElementById("startbtn");
const stopbtn = document.getElementById("stopbtn");
const resetbtn = document.getElementById("resetbtn");

function formatTime(ms) {
    const milliseconds = ms % 1000;
    const seconds = Math.floor(ms/1000) % 60;
    const minutes = Math.floor(ms / (1000 * 60)) % 60;
    const hours = Math.floor(ms / (1000 * 60 * 60));
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2,'0')}:${seconds.toString().padStart(2,"0")}:${milliseconds.toString().padStart(3,"000")}`;
}
function updateDisplay(){
    display.textContent = formatTime(elapsedTime);
}
function startTimer(){
    if(!isRunning){
        isRunning = true;
        const startTime = Date.now() -elapsedTime;
        timerInterval = setInterval(() => {
            elapsedTime = Date.now() - startTime;
            updateDisplay();
        }, 100);
        startbtn.disabled = true;
        stopbtn.disabled = false;
        document.getElementById("stop-time").textContent = "";
    }
}
function stopTimer() {
    if(isRunning){
        isRunning = false;
        clearInterval(timerInterval);
        startbtn.disabled = false;
        stopbtn.disabled = true;
        const stopTimeDisplay = document.getElementById("stop-time");
        stopTimeDisplay.textContent = `Stopped Time: ${formatTime(elapsedTime)}`;
    }
}
function resetTimer(){
    stopTimer();
    elapsedTime =0;
    updateDisplay();
    document.getElementById("stop-time").textContent = "";
}

updateDisplay();
