export const generateShuffledCards = arr => {
  const history = [];

  function RandomIndex() {
    if (history.length === arr.length * 2) return;

    const random = Math.floor(Math.random() * (arr.length * 2 - 0) + 0);

    if (history.includes(random)) return RandomIndex();

    history.push(random);
    return random;
  }

  const shuffledArr = arr.reduce((acc, curr) => {
    let index1 = RandomIndex();
    let index2 = RandomIndex();
    acc[index1] = curr;
    acc[index2] = curr;
    return acc;
  }, []);

  return shuffledArr;
};
