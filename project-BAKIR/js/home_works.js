document.addEventListener('DOMContentLoaded', () => {
    const gmailInput = document.getElementById('gmail_input');
    const gmailButton = document.getElementById('gmail_button');
    const gmailResult = document.getElementById('gmail_result');

    const gmailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;


    function checkGmail() {
        const inputValue = gmailInput.value.trim();
        if (gmailRegex.test(inputValue)) {
            gmailResult.textContent = 'Valid Gmail address!';
            gmailResult.style.color = 'green';
        } else {
            gmailResult.textContent = 'Invalid Gmail address!';
            gmailResult.style.color = 'red';
        }
    }

    gmailButton.addEventListener('click', checkGmail);
});

const childBlock = document.querySelector('.child_block')
let positionX = 0, positionY = 0


const moveBlock = () => {
    if (positionX <= 440 && positionY === 0){
        positionX++
        childBlock.style.left = `${positionX}px`
        setTimeout(moveBlock, 0)
    } else if(positionY <= 440 && positionX > 440){
        positionY++
        childBlock.style.top = `${positionY}px`
        setTimeout(moveBlock, 0)
    }else if (positionX >= 0){
        positionX--
        childBlock.style.left = `${positionX}px`
        setTimeout(moveBlock, 0)
    }else if (positionY >= 0){
        positionY--
        childBlock.style.top = `${positionY}px`
        setTimeout(moveBlock, 0)
    }
}

moveBlock()






document.addEventListener('DOMContentLoaded', () => {
    const secondsDisplay = document.getElementById('seconds');
    const startButton = document.getElementById('start');
    const stopButton = document.getElementById('stop');
    const resetButton = document.getElementById('reset');

    let timer;
    let seconds = 0;

    function updateDisplay() {
        secondsDisplay.textContent = seconds;
    }

    function startTimer() {
        if (timer) return;

        timer = setInterval(() => {
            seconds++;
            updateDisplay();
        }, 1000);
    }

    function stopTimer() {
        clearInterval(timer);
        timer = null;
    }

    function resetTimer() {
        stopTimer();
        seconds = 0;
        updateDisplay();
    }

    startButton.addEventListener('click', startTimer);
    stopButton.addEventListener('click', stopTimer);
    resetButton.addEventListener('click', resetTimer);
});







