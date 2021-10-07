let canvas = document.querySelector("canvas");

let ctx = canvas.getContext("2d");
let width = (canvas.width = window.innerWidth);
let height = (canvas.height = window.innerHeight);
let str = "ていは｢ﾚﾀｾﾝこリストとくリストのつべて大そされめ1234567890abcdefghijklmnopqrstuvwxyz";
let matrix = str.split("");
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}
let font = 12;
let col = width / font;
let arr = [];

for (i = 0; i < col; i++) {
  arr[i] = 1;
}

const draw = () => {
  // let font = getRandomInt(8, 20);
  ctx.fillStyle = "rgba(0,0,0,0.05)";
  ctx.fillRect(0, 0, width, height);
  ctx.fillStyle = "rgb(1, 250, 1)";
  ctx.font = `${font}px system-ui`;

  for (i = 0; i < arr.length; i++) {
    let txt = matrix[Math.floor(Math.random() * matrix.length)];
    ctx.fillText(txt, i * font, arr[i] * font);

    if (arr[i] * font > height && Math.random() > 0.975) {
      arr[i] = 0;
    }
    arr[i]++;
  }
};

setInterval(draw, 30);

window.addEventListener("resize", () => location.reload());
