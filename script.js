const logDiv = document.getElementById("log");
const stateDiv = document.getElementById("state");
const startBtn = document.getElementById("start-btn");
const stopBtn = document.getElementById("stop-btn");

startBtn.addEventListener("click", () => {
    document.addEventListener("keydown", handleDown);
    document.addEventListener("keyup", handleUp);
    
    startBtn.disabled = true;
    stopBtn.disabled = false;
    if(startBtn.disabled) {
        startBtn.style.background = "green";
        stopBtn.style.background = "#e725e7";
    }
})

stopBtn.addEventListener("click", () => {
    document.addEventListener("keydown", handleDown);
    document.addEventListener("keyup", handleUp);
    logDiv.textContent = "";
    stateDiv.textContent = "";
    startBtn.disabled = false;
    stopBtn.disabled = true;
    if(stopBtn.disabled) {
        stopBtn.style.background = "red";
        startBtn.style.background = "#e725e7";
    }
})

function handleDown(e) {
    logDiv.textContent = `Key ${e.key} is pressed down`;
    stateDiv.textContent = `Key is pressed down`;
}
function handleUp(e) {
    logDiv.textContent = `Key ${e.key} is released`;
    stateDiv.textContent = `Key is released`;
}