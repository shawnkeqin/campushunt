export const generateSecretCode = () => {
    const words = ['COIN', 'TREASURE', 'HUNT', 'GOLD', 'MAP', 'UNI', 'QUEST', 'ADVENTURE', 'EXPLORE', 'DISCOVER'];
    const randomWord = words[Math.floor(Math.random() * words.length)];
    const randomNumber = Math.floor(Math.random() * 100);
    return `${randomWord}${randomNumber}`;
  };