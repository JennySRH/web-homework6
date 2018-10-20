var button = document.getElementById("startButton");
var count = 0;
var x = 30;
var y = 0;
var time = document.getElementById("time-input");
var start_input =  document.getElementById("start-input");
var score = document.getElementById("record-input");
var radio = document.getElementsByTagName("input");
start_input.value = "         Game Over";
time.value = x;
score.value = y;
var temp = 3;


button.addEventListener('click',startFunction);
function startFunction() {
    if (count % 2 == 0) {
        radio[temp].style.cssText="backgroud:white";
        y = 0;
        score.value = y;
        start_input.value = "             Playing";
        count++;
        x=30;
        recordFunction();
        displayTime();
    }
    else {
        start_input.value = "         Game Over";
        count++;
        alert("Game over, \nYour score is: "+y);
    }
}

function displayTime() {
    time.value = x;
    x--;
    if(x == -2) {
        startFunction();
    } 
    if(x>=-1 && count%2 == 1){
        setTimeout("displayTime()",1000);
    }
    else {
        time.value = 0;
    }
}        




for(var i = 3; i < 63;i ++) {
    radio[i].addEventListener("click",scoreFunction);
}

function recordFunction() {
    if(count%2 == 1) {
        temp = Math.random();
        temp = temp*100%60;
        temp = parseInt(temp);
        if(temp == 0 || temp == 1|| temp == 2) {
            temp = 3;
        }
        radio[temp].style.cssText="background:rgb(71, 79, 184);";

    }
}


function scoreFunction() {
    if(event.currentTarget == radio[temp]) {
        radio[temp].style.cssText="backgroud:white";
        y++;
        score.value = y;
        recordFunction();
    }
    else {
        y--;
        score.value = y;
    }

}