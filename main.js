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
const colorModeBtn = document.querySelectorAll('.color-mode');
const resetBtn = document.querySelector('#reset');
const changeSize = document.querySelector('#reset-size');

addPixels(canvasSize);
pickColor();

slider.addEventListener('input', () => {
  sliderLabel.textContent = slider.value;
  canvasSize = parseInt(slider.value);
});

colorModeBtn.forEach(btn => {
  btn.addEventListener('click', () => {
    removePressedClass();
    btn.classList.add('pressed');
    colorMode = btn.dataset.mode;
  });
});

resetBtn.addEventListener('click', () => {
  resetCanvas();
});

changeSize.addEventListener('click', () => {
  resetCanvas(canvasSize);
})

function removePressedClass() {
  colorModeBtn.forEach(btn => btn.classList.remove('pressed'));
}

function paintOnClick() {
  const pixels = document.querySelectorAll('.pixel');
  pixels.forEach(pixel => {
    pixel.addEventListener('mouseover', (e) => {
      switch (colorMode) {
        case 'c':
          if (e.buttons > 0) pixel.style.backgroundColor = color; 
          break;
        case 'i':
          if (e.buttons > 0) pixel.style.backgroundColor = 'black';
          break;
        case 'e':
          if (e.buttons > 0) pixel.style.backgroundColor = '';
          break;
        case 'r':
          if (e.buttons > 0) pixel.style.backgroundColor = getRandomColor();
          break;
      }
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
  preventDrag();
  paintOnClick();
}

function getRandomColor() {
  return '#' + Math.floor(Math.random()*16777215).toString(16);
}

function preventDrag() {
  const divs = document.querySelectorAll('div');
  divs.forEach(div => {
    div.addEventListener('dragstart', (e) => e.preventDefault());
    div.addEventListener('drop', (e) => e.preventDefault());
  });
}

function resetCanvas(dimensions=64) {
  const sketchArea = document.querySelector('div.sketch-area');
  while (sketchArea.firstChild) {
    sketchArea.removeChild(sketchArea.firstChild);
  }
  addPixels(dimensions);
}
