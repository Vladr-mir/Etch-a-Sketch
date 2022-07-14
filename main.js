function addPixels(dimension) {
  const sketchArea = document.querySelector('div.sketch-area');

  for (i = 0; i < dimension; i++) {
    const column = document.createElement('div');
    for (j = 0; j < dimension; j++) {
      const row = document.createElement('div');
      column.appendChild(row);
    }
    sketchArea.appendChild(column);
  }
}

