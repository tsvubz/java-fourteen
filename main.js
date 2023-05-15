function addText() {
  const paragraph = document.querySelector('p');
  paragraph.textContent = 'Terene Svubure JavaScript Programmer!'
}


function deleteText() {
  const paragraph = document.querySelector('p');
  paragraph.textContent = '';
}

const addButton = document.querySelector('#Add');
addButton.addEventListener('click', addText);

const deleteButton = document.querySelector('#Delete');
deleteButton.addEventListener('click', deleteText);