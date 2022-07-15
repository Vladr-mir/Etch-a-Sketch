// colorModes: 
// 'e' = erase
// 'i' = ink/black
// 'c' = color Picker
// 'r' = rainbow
let color = document.querySelector('#colorpicker').value;
let colorMode = 'c';
let canvasSize = 64;
const sliderLabel = document.querySelector('#range-value');
const slider = document.querySelector('#canvas-size');
slider.addEventListener('input', () => {
  sliderLabel.textContent = slider.value;
})
addPixels(canvasSize);
preventDrag();
pickColor();
paintOnClick();

function paintOnClick() {
  const pixels = document.querySelectorAll('.pixel');
  pixels.forEach(pixel => {
    pixel.addEventListener('mouseover', (e) => {
      if (e.buttons > 0) pixel.style.backgroundColor = color; 
    });
  });
}

function pickColor() {
  const colorPicker = document.querySelector('#colorpicker');

  colorPicker.addEventListener('change', (e) => {
    color = e.target.value;
  });
}

function addPixels(dimensions) {
  const sketchArea = document.querySelector('div.sketch-area');
  let column;
  let pixel;

  for (i = 0; i < dimensions; i++) {
    column = document.createElement('div');
    for (j = 0; j < dimensions; j++) {
      pixel = document.createElement('div');
      pixel.classList.add('pixel');
      column.appendChild(pixel);
    }
    sketchArea.appendChild(column);
  }
}

function preventDrag() {
  const divs = document.querySelectorAll('div');
  divs.forEach(div => {
    div.addEventListener('dragstart', (e) => e.preventDefault());
    div.addEventListener('drop', (e) => e.preventDefault());
  });
}
