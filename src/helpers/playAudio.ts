export const playAudio = (...urls: string[]) => {
  const audio = new Audio(urls[0]);
  let index = 1;

  const playNext = () => {
    if (index < urls.length) {
      audio.src = urls[index];
      audio.load();
      audio.play();
      index += 1;
    } else {
      audio.removeEventListener('ended', playNext, false);
    }
  };

  audio.addEventListener('ended', playNext);

  audio.play();
};
