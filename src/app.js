const locationBox = document.querySelector('#locationBox')
const arrow = document.querySelector('#arrow')

// Focus event: Rotate the arrow
locationBox.addEventListener('focus', () => {
    arrow.classList.toggle('rotate-180');
});

// Blur event: Reset the rotation
locationBox.addEventListener('blur', () => {
    arrow.classList.toggle('rotate-180');
});