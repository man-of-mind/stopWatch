var millisecond = 0;
var second = 0;
var minute = 0;
var d = 0;
var e = 0;
var z = 0;
var check = true;
var clear = 0;
let screeWidth = screen.width;

console.log(screeWidth);

var stopwatch = document.getElementById("display");

stopwatch.innerHTML = "00:00:00";
stopwatch.style.fontSize = "60px";
stopwatch.style.textAlign = "center";
stopwatch.style.paddingTop = "25px";

var buttons = document.getElementsByTagName("button");
buttons[2].style.marginRight = 0;
for (i = 0; i < buttons.length; i++) {
    buttons[i].style.display = "block";
}

if (screeWidth < 440) {
    buttons[2].style.padding = "8px 36px";
    buttons[2].style.marginBottom = "0px";
    buttons[0].style.padding = "8px 40px";
    buttons[1].style.padding = "8px 40px";
}


function start() {
    millisecond = addZeroMsec(millisecond + 1);
    if (millisecond > 99) {
        second = addZeroSec(second + 1);
        millisecond = 1;
    }
    if (second > 59) {
        second = addZeroSec(0);
        millisecond = 0;
        minute = addZeroMin(minute + 1);
    }
    stopwatch.innerHTML = '' + z + minute + ':' + e + second + ':' + d + millisecond;
}

function initiate() {
    if (check === true) {
        check = false;
        clear = setInterval(start, 10);
    }
}

function stop() {
    check = true;
    clearInterval(clear);
}

function reset() {
    millisecond = 0;
    second = 0;
    minute = 0;
    check = true;
    clearInterval(clear);
    stopwatch.innerHTML = "00:00:00";
}

function addZeroMsec(time) {
    var length = time.toString().length;
    if (length < 2) {
        d = 0;
    } else {
        d = '';
    }
    return time;
}

function addZeroSec(time) {
    var length = time.toString().length;
    if (length < 2) {
        e = 0;
    } else {
        e = '';
    }
    return time;
}

function addZeroMin(time) {
    var length = time.toString().length;
    if (length < 2) {
        z = 0;
    } else {
        z = '';
    }
    return time;
}