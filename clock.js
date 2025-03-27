function pearClock() {
    // retrieving current time
    let time = new Date();
    let hour = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();
    let ampm = (time.getHours()) < 12 ? ' am' : ' pm';

    // converting time format
    hour = hour < 10 ? "0" + hour : hour;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;

    let currentTime =
        hour + ":" + min + ":" + sec + ampm;

    document.getElementById(
        "clock"
    ).innerHTML = currentTime;

    
    const alarmTimes = [1, 16, 31, 46];
    const alarmSound = new Audio('./notification.mp3');

    if (alarmTimes.includes(min)) {
        if (sec == 55) {
            alarmSound.play();
        }
    }
}

// updating clock every second
setInterval(pearClock, 1000);


// call function when page loads
window.onload = function () {
    pearClock();
  };