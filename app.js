
const button = document.getElementById('doggo-button');
const dogSound = document.getElementById('doggo-sound');

button.addEventListener('click', () => {
    dogSound.play();
});