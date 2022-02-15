export const formatTime = (seconds: number) => {
  const h = Math.floor(seconds / (60 * 60)) || null;
  const m = (Math.floor(seconds / (60)) % 60) || 0;
  const s = (Math.floor(seconds) % 60) || 0;

  const arr = [h, m, s].filter((val) => val !== null);

  return arr.map((chunk, idx) => {
    if (idx === 0) {
      return String(chunk);
    }
    return String(chunk).padStart(2, '0');
  }).join(':');
};
