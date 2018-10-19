var start_flag = 0;
var end_flag = 0;
var lose_flag = 0;
var cheat_flag = 0;
var start = document.getElementById("start");
start.addEventListener("mouseenter",startfunction);
function startfunction(){
    start_flag = 1;
}



var wall = document.getElementsByClassName("wall");
for(var i = 0;i < 5;i ++) {
    wall[i].addEventListener("mouseenter",wallfunction);
}

function wallfunction() {
    if(start_flag == 1 && end_flag == 0) {
        lose_flag = 1;
        var wall_temp = document.getElementsByClassName("wall");
        for(var i = 0;i < 5;i ++) {
            wall[i].style.cssText="background-color:red";
        }
        document.getElementById("Display").innerText = "You Lose";
    }   
}

var end = document.getElementById("end");
end.addEventListener("mouseenter",endfunction);
    
function endfunction() {
    if(start_flag == 1 && lose_flag == 0 && cheat_flag == 0) {
        end_flag = 1;
        document.getElementById("Display").innerText = "You Win";
    }
}




