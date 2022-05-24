var y = 0;
img1 = document.querySelectorAll(".container > img")[0];
function playPause(){
    if (y == 0){
        img1.src = "icons/play.png";
        document.getElementsByTagName("video")[0].play();
        y++;
        return 1;
    }else if (y == 1) {
        img1.src = "icons/pause.png";
        document.getElementsByTagName("video")[0].pause();
        y--;
        return 0;
    };
}

var j = 0;
img2 = document.querySelectorAll(".container > img")[1];
function volumeOn(){
    if (j==0) {
        img2.src = "icons/volumeOff1.png";
        j++;
        document.getElementsByTagName("video")[0].muted = "true";
    }else if (j==1) {
        img2.src = "icons/volumeOn1.png";
        j--;
        document.getElementsByTagName("video")[0].muted = "";
    };
};