
let milliseconds = 0;
let seconds = 0;
let minutes = 0;
let hours = 0;
let interval = null; // Define the interval globally so it can be accessed by all functions

function formatTime(time) {
    return time < 10 ? `0${time}` : time;  // Adds leading zero to single digits
}

// Function to start the timer
function start() {
    if (interval) {
        return; // Prevent multiple intervals from running at the same time
    }

    interval = setInterval(() => {
        milliseconds += 10;

        if (milliseconds === 1000) {
            milliseconds = 0;
            seconds++;
        }
        if (seconds === 60) {
            seconds = 0;
            minutes++;
        }
        if (minutes === 60) {
            minutes = 0;
            hours++;
        }

        // Update the display
        document.getElementById('milli').innerText = formatTime(Math.floor(milliseconds / 10));
        document.getElementById('sec').innerText = formatTime(seconds);
        document.getElementById('min').innerText = formatTime(minutes);
        document.getElementById('hr').innerText = formatTime(hours);
    }, 10); // Update the time every 10 milliseconds
}

// Function to stop the timer
function stop() {
    clearInterval(interval);
    interval = null;  // Set interval to null so we can start again later
}

// Function to reset the timer
function reset() {
    stop(); // Stop the timer
    milliseconds = 0;
    seconds = 0;
    minutes = 0;
    hours = 0;

    // Reset the display to "00:00:00:00"
    document.getElementById('milli').innerText = "00";
    document.getElementById('sec').innerText = "00";
    document.getElementById('min').innerText = "00";
    document.getElementById('hr').innerText = "00";
}
