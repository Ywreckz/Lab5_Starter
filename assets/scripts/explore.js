function init() {
  const img = document.querySelector('#explore img');
  const textarea = document.querySelector('#text-to-speak');
  const voiceSelect = document.querySelector('#voice-select');
  const button = document.querySelector('button');

  function loadVoices() {
    const voices = speechSynthesis.getVoices();
    voices.forEach(voice => {
      const option = document.createElement('option');
      option.value = voice.name;
      option.textContent = `${voice.name} (${voice.lang})`;
      voiceSelect.appendChild(option);
    });
  }

  loadVoices();
  speechSynthesis.addEventListener('voiceschanged', loadVoices);

  button.addEventListener('click', () => {
    const utterance = new SpeechSynthesisUtterance(textarea.value);
    const selectedVoice = speechSynthesis.getVoices().find(v => v.name === voiceSelect.value);
    if (selectedVoice) utterance.voice = selectedVoice;

    utterance.onstart = () => {
      img.src = 'assets/images/smiling-open.png';
    };
    utterance.onend = () => {
      img.src = 'assets/images/smiling.png';
    };

    speechSynthesis.speak(utterance);
  });
}

window.addEventListener('load', init);