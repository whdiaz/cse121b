/* LESSON 3 - Programming Tasks */

/* Profile Object */
let myProfile = {
  name: "Willian Diaz",
  photo: 'images/willlink.jpeg',
  favoriteFoods: [
    'burger',
    'caraotas',
    'lasagna',
    'sheese',
    'torta'
  ],
  hobbies: ['rock singing', 'study', 'furniture'],
  placesLived: [
    { place: 'Venezuela', length: '25 years' },
  ]
};

// Add an item to the placesLived array
let newPlace = {
  place: 'Brasil',
  length: '9 years'
};

myProfile.placesLived.push(newPlace);

/* DOM Manipulation - Output */
document.addEventListener('DOMContentLoaded', function () {
  document.querySelector('#name').textContent = myProfile.name;

  let photoElement = document.querySelector('#photo');
  photoElement.src = myProfile.photo;

  photoElement.alt = myProfile.name;

  myProfile.favoriteFoods.forEach(food => {
    let li = document.createElement('li');
    li.textContent = food;
    document.querySelector('#favorite-foods').appendChild(li);
  });

  myProfile.hobbies.forEach(hobby => {
    let li = document.createElement('li');
    li.textContent = hobby;
    document.querySelector('#hobbies').appendChild(li);
  });

  myProfile.placesLived.forEach(place => {
    let dt = document.createElement('dt');
    dt.textContent = place.place;

    let dd = document.createElement('dd');
    dd.textContent = place.length;

    document.querySelector('#places-lived').appendChild(dt);
    document.querySelector('#places-lived').appendChild(dd);
  });
});
