import '../styles/card.css';

function Card({ name, imageUrl, selected, setSelected, pokemonList, setPokemonList, setGameOver }) {

  function shuffleArray(array) {
    const shuffledArray = [...array];

    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray;
  }

  function handleClick() {
    if (!selected.has(name)) {
      setSelected( new Set([
        ...selected,
        name
      ]));

      const shuffled = shuffleArray(pokemonList);
      setPokemonList(shuffled);
    } else {
      setGameOver(true);
    }
  }

  return (
    <div className='card' onClick={handleClick}>
      <img className='card-image' src={imageUrl} />
      <p className='card-name'>{name}</p>
    </div>
  );
}

export default Card;