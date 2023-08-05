//Roll the characters and hide the span named 'roll-left' having characters 'Saksham Kumar' and hide them when scrolled down and show when on the top
const rollLeft = document.querySelector('#roll-left');

window.addEventListener('scroll', () => {
  if (window.scrollY == 0) {
    rollLeft.style.display = 'none';
  } else {
    rollLeft.style.display = 'block';
  }
});