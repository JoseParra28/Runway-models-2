let innerCursor = document.querySelector(".inner-cursor");
let outerCursor = document.querySelector(".outer-cursor");

document.addEventListener('mousemove', moveCursor);

function moveCursor(e){
    let x = e.ClientX;
    let y = e.ClientY;

    console.log(x, y)
}

