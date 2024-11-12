import '../styles/startpage.css';
import PokemonAPI from '../scripts/pokemonAPI';

function StartPage({ setIsStarting, setPokemonList, setSize }) {
  const sizeMap = {
    'Easy': 6,
    'Medium': 12,
    'Hard': 18,
  };

  async function initPokemon(size) {
    const pokemonList = await PokemonAPI().loadPokemonSet(size);
    setPokemonList(pokemonList);
  }

  async function handleDifficulty(event) {
    const difficulty = event.target.innerText;
    const size = sizeMap[difficulty];
    setSize(size);
    initPokemon(size);
    setIsStarting(true);
  }
  
  return (
    <div className='start-page'>
      <h1>Select a difficulty level!</h1>
      <div className='difficulty-settings'>
        <button onClick={handleDifficulty}>Easy</button>
        <button onClick={handleDifficulty}>Medium</button>
        <button onClick={handleDifficulty}>Hard</button>
      </div>
    </div>
  );
}

export default StartPage;