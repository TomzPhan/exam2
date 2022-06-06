let bkt2 = document.querySelector("#bkt2");
let colorName = document.getElementsByClassName("color");
let a = document.body;


bkt2.onclick = function () {
  let randomColor = generateRandomColor(); 
  a.style.backgroundColor = randomColor;
  alert(randomColor);
  navigator.clipboard.writeText(randomColor);
}


function generateRandomColor() {
  let r = Math.ceil (Math.random() * 255);
  let g = Math.ceil (Math.random() * 255);
  let b = Math.ceil (Math.random() * 255);
  let color = `rgb(${r}, ${g}, ${b})`;
  return color;
} 