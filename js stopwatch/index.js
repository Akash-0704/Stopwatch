window.onload= function() {let ms = 00;

    let s = 00;
    let milliseconds = document.getElementById("ms");
    let seconds = document.getElementById("seconds");
    let startButton = document.getElementById('start');
    let stopButton = document.getElementById('stop');
    let resetButton = document.getElementById('reset');
    let Interval;

    function startTimer(){
        ms++
        if (ms<=9) {
            milliseconds.innerHTML = '0' + ms;
        }

        if (ms>9) {
            milliseconds.innerHTML = ms;
        }

        if (ms>99) {
            s++
            seconds.innerHTML = '0' + s;
            ms = 0;
            milliseconds.innerHTML = '0' + 0;
        }

        if (s>9) {
            seconds.innerHTML = s;
        }
    }; 

    startButton.onclick = function() {
        clearInterval(Interval);
        Interval = setInterval(startTimer, 10);
    };

    stopButton.onclick = function() {
        clearInterval(Interval);
    };


    resetButton.onclick = function() {
        clearInterval(Interval);
        ms = "00";
        s = "00";
        milliseconds.innerHTML = ms;
        seconds.innerHTML = s;
    };

};