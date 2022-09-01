const snake = document.querySelector('.snake')
const area = document.querySelector('.area')
const prey = document.querySelector('.prey')
let pointsBoard = document.querySelector('p')

let x = 0;
let y = 0;
let randomPositionTop;
let randomPositionLeft;
let record = 0;
window.addEventListener('keydown', (event, e) => {
  // making the snake move according to certain commands
     switch (event.key) {
       case "ArrowDown":
            x+= 10;
            snake.style.top = x + "px";
            break;
         case "ArrowUp":
            x-= 10;
            snake.style.top = x + "px";
            break;
         case "ArrowLeft":
            y-= 10;
            snake.style.left = y + "px";
            break;
        case "ArrowRight":
            y+= 10;
            snake.style.left = y + "px";
            break;
      }
      // kepping the snake from escaping the area
      if (x === 320) {
         snake.style.top = 0 - 10 +"px";
         x= 0;
      } else if(x === -20) {
        snake.style.top = 300 - 10 +"px";
        x= 300;
      } else if(y === 320) {
        snake.style.left = 0 - 10 +"px";
        y =0;
      } else if (y === -20) {
        snake.style.left = 300 - 10 +"px";
        y = 300;
      }
      randomPositionTop;
      randomPositionLeft;
      let width = 0;
   if (randomPositionTop === x && randomPositionLeft === y) {
      record += 10;

      pointsBoard.textContent = `Points: ${record}`;
      width += 5;
      reply()
   }
})
function reply() {
  setTimeout( function() {
  randomPositionTop = Math.floor(Math.random()*30) * 10;
  randomPositionLeft = Math.floor(Math.random()*30) * 10;
  prey.style.top = randomPositionTop + "px";
  prey.style.left = randomPositionLeft + "px";
}, 200)
}
reply()
