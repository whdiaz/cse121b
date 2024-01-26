/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */

let myName = 'Willian Honorio Diaz Torres';
let currentYear = new Date().getFullYear();
let myPhoto = 'images/willlink.jpeg'

/* Step 3 - Element Variables */

const nameElement =  document.getElementById('name').innerHTML = `<strong> ${myName} <strong>`;
const foodElenment = document.getElementById('food')
const yearElement = document.querySelector('#year')
const imageElement = document.getElementById('image')








/* Step 4 - Adding Content */
yearElement.textContent = currentYear;
imageElement.setAttribute('src', myPhoto)
imageElement.setAttribute('alt', `Profile image of ${myName}`);






/* Step 5 - Array */

const foods = ['Frijoles', 'Feijoada', 'Pizza','Carnero','Pabellon', 'Hamburguesa', 'lasagna', 'Arepas'];
foodElenment.innerHTML = foods

const otherFavoriteFood = 'fish';
foods.push(otherFavoriteFood)

foodElenment.innerHTML += `<br>${foods}` 

foods.shift();

foodElenment.innerHTML += `<br>${foods}`

foods.pop();
foodElenment.innerHTML += `<br>${foods}`










