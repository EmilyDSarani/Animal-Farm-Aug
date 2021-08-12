
const button = document.getElementById('dog-image');
const dogSound = document.getElementById('dog-sound');

button.addEventListener('click', () => {
    dogSound.play();
});

const button = document.getElementById('cat-image');
const catSound = document.getElementById('cat-sound');

button.addEventListener('click', () => {
    catSound.play();
});

const button = document.getElementById('horse-image');
const horseSound = document.getElementById('horse-sound');

button.addEventListener('click', () => {
    horseSound.play();
});