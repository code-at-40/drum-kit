window.addEventListener('keydown', (event) => {
  if (document.querySelector(`.component-${event.key}`)) {
    document.querySelector(`.component-${event.key}`).classList.add('play');
    document.querySelector(`.audio-${event.key}`).play();
  }
});

window.addEventListener('keyup', (event) => {
  if (document.querySelector(`.component-${event.key}`)) {
    document.querySelector(`.component-${event.key}`).classList.remove('play');
  }
});
