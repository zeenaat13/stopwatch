let min = 0;//minute
let s = 0;//second
let ms = 0;//milliseconds
let timer;
 

function stopwatch() {
    ms++;
    if (ms < 100) {
        if (ms === 99) {
            ms = 0;
            s++;
            if (s === 60)  {
                s = 0;
                min++;
            }
        }
    }
    else{
        ms = 0;
    }
    document.getElementById("timer").innerHTML = min + ":" + s + ":" + ms
}


function start() {
    document.getElementById("start").disabled = true;
    timer = setInterval(stopwatch, 10);
}

function stop() {
    document.getElementById("start").disabled = false;
    clearInterval(timer);
}

function reset() {
    stop();
    min = 0;
    s = 0;
    ms = 0;
    document.getElementById("timer").innerHTML = min + ":" + s + ":" + ms;
}