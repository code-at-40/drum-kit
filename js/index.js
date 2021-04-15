window.addEventListener('keydown', (event) => {
  document.querySelector(`.component-${event.key}`).classList.add('play');
  document.querySelector(`.audio-${event.key}`).play();
});

window.addEventListener('keyup', (event) => {
  document.querySelector(`.component-${event.key}`).classList.remove('play');
});
