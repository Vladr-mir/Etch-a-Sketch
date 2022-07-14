function paintOnClick(color='black') {
  const pixels = document.querySelectorAll('.pixel');
  pixels.forEach(pixel => {
    pixel.addEventListener('mouseover', (e) => {
      if (e.buttons == 1) {
        e.preventDefault();
        pixel.style.backgroundColor = color;
      }
    });
    
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

