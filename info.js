// video play button


const vid = document.querySelector('.myvideo');
const but = document.querySelector('.play');



but.addEventListener('click', player);

function player(){
    console.log('lala');
    vid.play();
   
}

exports.default = series(scssTask, jsTask, browserSyncServe, watchTask);

exports.build = series(scssTask, jsTask);