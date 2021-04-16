const components = [
  {
    letter: 'a',
    description: 'clap',
    audioFile: 'clap.wav'
  },
  {
    letter: 's',
    description: 'bass',
    audioFile: 'bass.wav'
  },
  {
    letter: 'd',
    description: 'cow',
    audioFile: 'cow.wav'
  },
  {
    letter: 'f',
    description: 'sd',
    audioFile: 'sd.wav'
  },
  {
    letter: 'g',
    description: 'tom',
    audioFile: 'tom.wav'
  }
];

const createComponent = (letter, description) => {
  const newDiv = document.createElement('div');
  const newPLetter = document.createElement('p');
  const newPDescription = document.createElement('p');
  const letterText = document.createTextNode(letter.toUpperCase());
  const descriptionText = document.createTextNode(description.toUpperCase());

  newDiv.classList.add('drum__component');
  newDiv.classList.add(`component-${letter}`);
  newPLetter.classList.add('drum__component-letter');
  newPDescription.classList.add('drum__component-description');

  newPLetter.appendChild(letterText);
  newPDescription.appendChild(descriptionText);

  newDiv.appendChild(newPLetter);
  newDiv.appendChild(newPDescription);

  document.querySelector('.drum').appendChild(newDiv);
};

createAudioTag = (letter, fileName) => {
  const newAudio = document.createElement('audio');
  newAudio.classList.add(`audio-${letter}`);
  newAudio.src = `../assets/audio/${fileName}`;

  document.querySelector('body').appendChild(newAudio);
};

const newContainer = document.createElement('div');
newContainer.classList.add('drum');
document.querySelector('body').appendChild(newContainer);

components.forEach((component) => {
  createComponent(component.letter, component.description);
  createAudioTag(component.letter, component.audioFile);
});
