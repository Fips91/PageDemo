// video play button

var state = true
const vid = document.querySelector('.myvideo');
const but = document.querySelector('.play');
var text = document.querySelector('.play').getElementsByClassName("text")[0];



vid.addEventListener('ended', ended);
but.addEventListener('click', player);
vid.addEventListener('pause', pause);

function player(){

    if (state == true){
        vid.play();
        text.innerHTML = "Stop";
        state = false;
    }
    else {
        vid.pause();
        text.innerHTML = "Play";
        state = true;
    }  
}

function ended(){
    vid.pause();
    text.innerHTML = "Play";
    state = true;
}

function pause(){
    text.innerHTML = "Play";
    state = true;

}


