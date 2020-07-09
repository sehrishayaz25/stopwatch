let starts = document.querySelector('#start');
let stops = document.querySelector('#stop');
let resets = document.querySelector('#reset');
let min = 0;
let sec = 0;
let msec = 0;
let min_head = document.querySelector('#min');
let sec_head = document.querySelector('#sec');
let mili_head = document.querySelector('#msec');
let interval;

function timer() {
    msec++;
    mili_head.innerHTML = msec;
    if (msec >= 100) {
        sec++;
        sec_head.innerHTML = sec;
        msec = 0;
    } else if (sec >= 60) {
        min++;
        min_head.innerHTML = min;
        sec = 0;
    }
};


starts.addEventListener('click', function() {
    interval = setInterval(timer, 10);
    starts.style.pointerEvents = 'none';
    starts.style.opacity = '.4';
});

stops.addEventListener('click', function() {
    clearInterval(interval);
    starts.style.pointerEvents = 'auto';
    starts.style.opacity = '1';
});

resets.addEventListener('click', function() {
    min = 0;
    sec = 0;
    msec = 0;
    mili_head.innerHTML = msec;
    sec_head.innerHTML = sec;
    min_head.innerHTML = min;
    clearInterval(interval);
    starts.style.pointerEvents = 'auto';
    starts.style.opacity = '1';
});