var button = document.getElementById("startButton");
var count = 0;
var x = 30;
var y = 0;
var time = document.getElementById("time-input");
var start_input =  document.getElementById("start-input");
var score = document.getElementById("record-input");
var radio = document.getElementsByClassName("r");
start_input.value = "            Game Over";
time.value = x;
score.value = y;

button.addEventListener('click',startFunction);
function startFunction() {
    if (count % 2 == 0) {
        start_input.value = "                 playing";
        count++;
        x=30;
        recordFunction();
        displayTime();
    }
    else {
        start_input.value = "            Game Over";
        count++;
    }
}

function displayTime() {
    time.value = x;
    x--;
    if(x>=0 && count%2 == 1)
        setTimeout("displayTime()",1000);
    else {
        time.value = 0;
    }
}

function recordFunction() {
    while(count%2 == 1) {
        var temp = Math.random();
        temp = temp*100%60;
        radio[0].style.cssText="backgroud:blue";
    }
}