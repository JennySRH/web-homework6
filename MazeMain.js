var start_flag = 0;
var end_flag = 0;
var lose_flag = 0;
var cheat_flag = 0;
var start = document.getElementById("start");
var wall_container = document.getElementById("wall-container");
start.addEventListener("mouseenter",startfunction);
function startfunction(){
    start_flag = 1;
    wall_container.style.cssText="cursor:pointer";

}



var wall = document.getElementsByClassName("wall");
for(var i = 0;i < 5;i ++) {
    wall[i].addEventListener("mouseenter",wallfunction);
}

function wallfunction() {
    wall_container.style.cssText="cursor:default";
    if(start_flag == 1 && end_flag == 0 && cheat_flag == 0) {
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
    wall_container.style.cssText="cursor:default";
    if(start_flag == 1 && lose_flag == 0 && cheat_flag == 0) {
        end_flag = 1;
        document.getElementById("Display").innerText = "You Win";
    }
    if(start_flag == 0) {
        cheat_flag = 1;
        document.getElementById("Display").innerText = "Don't cheat, you should start form the 'S' and move to the 'E' inside the maze!";
    }
}


var maze = document.getElementById("wall-container");
maze.addEventListener("mouseleave",leavefunction);
function leavefunction() {
    wall_container.style.cssText="cursor:default";
    if(start_flag == 1 && end_flag == 0) {
        cheat_flag = 1;
    }
    recover();
}


function recover() {
    wall_container.style.cssText="cursor:default";
    document.getElementById("Display").innerText = "";
    var wall = document.getElementsByClassName("wall");
    for(var i = 0;i < 5;i ++) {
        wall[i].style.cssText="background-color:rgb(238, 238,238);";
    }
    start_flag = 0;
    end_flag = 0;
    lose_flag = 0;
    cheat_flag = 0;   
}




