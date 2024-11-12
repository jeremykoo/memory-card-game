import '../styles/startpage.css';
import PokemonAPI from '../scripts/pokemonAPI';

function StartPage({ setIsStarting, setPokemonList }) {

  async function initPokemon(size) {
    const pokemonList = await PokemonAPI().loadPokemonSet(size);
    setPokemonList(pokemonList);
  }

  async function handleDifficulty(event) {
    const difficulty = event.target.innerText;
    let size = 0;
    if (difficulty === 'Easy') {
      size = 6;
    } else if (difficulty === 'Medium') {
      size = 9;
    } else {
      size = 12;
    }

    
    initPokemon(size);
    setIsStarting(true);
  }
  
  return (
    <div>
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