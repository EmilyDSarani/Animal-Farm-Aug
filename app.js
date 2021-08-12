

const h1El = document.getElementById('animal-quote')


const dogEl = document.getElementById('doggo-button');
const dogSound = document.getElementById('doggo-sound');

dogEl.addEventListener('click', () => {
    dogSound.play();
    h1El.textContent = "No one appreciates the very special genius of your conversation as much as the dog does";
});


const catEl = document.getElementById('kitty-button');
const catSound = document.getElementById('kitty-sound');

catEl.addEventListener('click', () => {
    catSound.play();
    h1El.textContent = 'Cats can work out mathematically the exact place to sit that will cause most inconvenience';
});

const horseEl = document.getElementById('horsey-button');
const horseSound = document.getElementById('horsey-sound');

horseEl.addEventListener('click', () => {
    horseSound.play();
    h1El.textContent = ' Words are as beautiful as wild horses, and sometimes as difficult to corral';
});


