const draggable_list = document.getElementById('draggable-list');


const largestAnimals = [
  'Blue Whale',
  'African Elephant',
  'Giraffe',
  'Saltwater Crocodile',
  'Polar Bear',
  'Komodo Dragon',
  'Giant Squid',
  'Brown Bear',
  'Hippopotamus',
  'Siberian Tiger'
];

const listItems = [];
let dragStartIndex;
createList();

function createList() {
    [...largestAnimals]
      .map(a => ({ value: a, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(a => a.value)
      .forEach((animal, index) => {
        const listItem = document.createElement('li');
  
        listItem.setAttribute('data-index', index);
  
        listItem.innerHTML = `
          <span class="number">${index + 1}</span>
          <div class="draggable" draggable="true">
            <p class="animal-name">${animal}</p>
            <i class="fas fa-grip-lines"></i>
          </div>
        `;
  
        listItems.push(listItem);
  
        draggable_list.appendChild(listItem);
      });
  
  }