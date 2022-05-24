var comp = 0;
var XO = 0;
ifXO();
function ifXO(){
    alldiv = document.querySelectorAll(".container > div");
    for (i=0; i<alldiv.length; i++){
        alldiv[i].onclick = function(){
            if (this.id != 'noneX' && this.id != 'noneO'){
                img = document.createElement('img');
                comp++;
                if (XO == 0){
                    img.src = '../img/X.png';
                    this.appendChild(img);
                    this.id = 'noneX';
                    this.style.backgroundColor = 'blue';
                    XO++;
                    check();
                }else if (XO == 1){
                    img.src = '../img/O.png';
                    this.appendChild(img);
                    this.id = 'noneO';
                    this.style.backgroundColor = 'red';
                    XO--;
                    check();
                };
            };
        };
    };
};

function check(){
    //1//
    if (alldiv[0].id == 'noneX' & alldiv[1].id == 'noneX' && alldiv[2].id == 'noneX'){
        alert("X WIN");
        reload();
    }else if(alldiv[0].id == 'noneO' & alldiv[1].id == 'noneO' && alldiv[2].id == 'noneO'){
        alert("O WIN");
        reload();
    };

    if (alldiv[2].id == 'noneX' & alldiv[5].id == 'noneX' && alldiv[8].id == 'noneX'){
        alert("X WIN");
        reload();
    }else if (alldiv[2].id == 'noneO' & alldiv[5].id == 'noneO' && alldiv[8].id == 'noneO'){
        alert("O WIN");
        reload();
    };
    
    if (alldiv[8].id == 'noneX' & alldiv[7].id == 'noneX' && alldiv[6].id == 'noneX'){
        alert("X WIN");
        reload();
    }else if (alldiv[8].id == 'noneO' & alldiv[7].id == 'noneO' && alldiv[6].id == 'noneO'){
        alert("O WIN");
        reload();
    };

    if (alldiv[6].id == 'noneX' & alldiv[3].id == 'noneX' && alldiv[0].id == 'noneX'){
        alert("X WIN");
        reload();
    }else if (alldiv[6].id == 'noneO' & alldiv[3].id == 'noneO' && alldiv[0].id == 'noneO'){
        alert("O WIN");
        reload();
    };
    //1//
    
    //2//
    if (alldiv[0].id == 'noneX' & alldiv[4].id == 'noneX' && alldiv[8].id == 'noneX'){
        alert("X WIN");
        reload();
    }else if (alldiv[0].id == 'noneO' & alldiv[4].id == 'noneO' && alldiv[8].id == 'noneO'){
        alert("O WIN");
        reload();
    };
    
    if (alldiv[2].id == 'noneX' & alldiv[4].id == 'noneX' && alldiv[6].id == 'noneX'){
        alert("X WIN");
        reload();
    }else if (alldiv[2].id == 'noneO' & alldiv[4].id == 'noneO' && alldiv[6].id == 'noneO'){
        alert("O WIN");
        reload();
    };
    //2//

    //3//
    if (alldiv[1].id == 'noneX' & alldiv[4].id == 'noneX' && alldiv[7].id == 'noneX'){
        alert("X WIN");
        reload();
    }else if (alldiv[1].id == 'noneO' & alldiv[4].id == 'noneO' && alldiv[7].id == 'noneO'){
        alert("O WIN");
        reload();
    };

    if (alldiv[3].id == 'noneX' & alldiv[4].id == 'noneX' && alldiv[5].id == 'noneX'){
        alert("X WIN");
        reload();
    }else if (alldiv[3].id == 'noneO' & alldiv[4].id == 'noneO' && alldiv[5].id == 'noneO'){
        alert("O WIN");
        reload();
    };
    //3//

    if (comp == 9){
        alert('NO ONE WIN');
        reload();
    };
};

function reload(){
    container = document.querySelector(".container");
    for(i=0;i<9;i++){
        container.removeChild(alldiv[i]);
    };
    for(i=0;i<9;i++){
        div = document.createElement("div");
        container.appendChild(div);
    };
    ifXO();
    comp = 0;
    XO = 0;
};


var y = 0;
img1 = document.querySelectorAll(".container2 > img")[0];
function playPause(){
    if (y == 0){
        img1.src = "../icons/play.png";
        document.getElementsByTagName("video")[0].play();
        y++;
        return 1;
    }else if (y == 1) {
        img1.src = "../icons/pause.png";
        document.getElementsByTagName("video")[0].pause();
        y--;
        return 0;
    };
}

var j = 0;
img2 = document.querySelectorAll(".container2 > img")[1];
function volumeOn(){
    if (j==0) {
        img2.src = "../icons/volumeOff1.png";
        j++;
        document.getElementsByTagName("video")[0].muted = "true";
    }else if (j==1) {
        img2.src = "../icons/volumeOn1.png";
        j--;
        document.getElementsByTagName("video")[0].muted = "";
    };
};