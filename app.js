const ingredients = ['Chicken', 'Broccoli', 'Chicken stock', 'Cream Cheese', 'Shredded Cheese'];
const instructions = ['Cube chicken & sear in pan', 'Mix cream cheese & chicken stock', 'Combine chicken, cream cheese mixture & broccoli', 'Bake @ 375 covered for 30 minutes', 'Top with shredded cheese & bake additional 5 minutes']

function recipe () {

let ulElement = document.createElement('ul')

for (const ingredient of ingredients) {
    
    let liElement = document.createElement('li');
    liElement.innerHTML = ingredient;
    ulElement.appendChild(liElement);
}
let ingredientsE = document.getElementById('ingredients');
ingredientsE.appendChild(ulElement);


let olElement2 = document.createElement('ol');

for (const instruction of instructions) {
    
     let liElement2 = document.createElement('li');
    liElement2.innerHTML = instruction;
    olElement2.appendChild(liElement2);
}
let instructionE = document.getElementById('instructions');
instructionE.appendChild(olElement2);
}