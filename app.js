var height = document.documentElement.clientHeight;

var totalSeconds = 0;

function pad ( val ) { return val > 9 ? val : "0" + val; }

function getTime(seconds){
    var minutes = Math.floor(seconds / 60);
    var seconds = seconds % 60;
    return minutes + ":" + pad(seconds);
}

function vib(){
    if ("vibrate" in navigator){
        navigator.vibrate([333,333,333,333,333,333]);
    }
}

function setTime(time){
    document.getElementById("time").innerHTML = getTime(time);
}

setInterval(function(){
    ++totalSeconds;
    setTime(totalSeconds);

    if (totalSeconds != 0 && totalSeconds % 60 == 0){
        vib();
    }
}, 1000);

$(document).ready(function(){
    $("body").css("background-color", "#000");
    $("body").css("height", height);
    $("#time").fitText(.5);

    var hammertime = Hammer(document.getElementsByTagName("body")[0]).on("tap", function(event) {
        totalSeconds = 0;
        setTime(0);
        vib();
    });
});
