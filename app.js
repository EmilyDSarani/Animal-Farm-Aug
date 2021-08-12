
const dogEl = document.getElementById('doggo-button');
const dogSound = document.getElementById('doggo-sound');

dogEl.addEventListener('click', () => {
    dogSound.play();
});

const catEl = document.getElementById('kitty-button');
const catSound = document.getElementById('kitty-sound');

catEl.addEventListener('click', () => {
    catSound.play();
});
