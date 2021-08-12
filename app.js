const h1El = document.getElementById('animal-quote')


const dogEl = document.getElementById('doggo-button');
const dogSound = document.getElementById('doggo-sound');

dogEl.addEventListener('click', () => {
    dogSound.play();
    h1El.textContent = 'Outside of a dog, a book is man\'s best friend. Inside of a dog it\'s too dark to read';
});

const catEl = document.getElementById('kitty-button');
const catSound = document.getElementById('kitty-sound');

catEl.addEventListener('click', () => {
    catSound.play();
    h1El.textContent = 'Cats have it all – admiration, endless sleep, and company only when they want it';
});

const horseEl = document.getElementById('horsey-button');
const horseSound = document.getElementById('horsey-sound');

horseEl.addEventListener('click', () => {
    horseSound.play();
    h1El.textContent = 'It\'s hard to lead a cavalry charge if you think you look funny on a horse';
});


