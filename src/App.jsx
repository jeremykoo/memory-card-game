import { useState } from 'react'
import './App.css'
import StartPage from './components/StartPage'
import Game from './components/Game';
import PokemonAPI from './scripts/pokemonAPI';

function App() {
  const [isStarting, setIsStarting] = useState(false);
  const [pokemonList, setPokemonList] = useState(null);
  const [size, setSize] = useState(0);

  function handleReset() {
    setIsStarting(false);
    setPokemonList(null);
    setSize(0);
  }

  async function handleRestart() {
    const pokemonList = await PokemonAPI().loadPokemonSet(size);
    setPokemonList(pokemonList);
    setIsStarting(true);
  }

  return (
    <div className='main-screen'>
      {!isStarting && <StartPage setIsStarting={setIsStarting} setPokemonList={setPokemonList} setSize={setSize} />}
      {isStarting && size !== 0 && <Game pokemonList={pokemonList} setPokemonList={setPokemonList} size={size} handleReset={handleReset} handleRestart={handleRestart} />}
    </div>
  );
}

export default App
