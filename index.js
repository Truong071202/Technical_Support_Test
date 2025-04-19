const circle = document.querySelector('.section-circle');

let clickCount = 0;

let randomColor = Math.floor(Math.random() * 360);
let lightness = 65;

circle.style.backgroundColor = `hsl(${randomColor}, 100%, ${lightness}%)`;

//add event click on circle
circle.addEventListener('click', () => {
  clickCount++;
  console.log(clickCount);

  if (clickCount < 9) {
    lightness -= 5;
    circle.style.backgroundColor = `hsl(${randomColor}, 100%, ${lightness}%)`;
  } else {
    circle.style.backgroundColor = '#000000';
  }
});
