import { useState } from 'react'
import './App.css'
import StartPage from './components/StartPage'
import Game from './components/Game';
import ResultScreen from './components/ResultScreen';

function App() {
  const [isStarting, setIsStarting] = useState(false);
  const [pokemonList, setPokemonList] = useState(null);
  const [size, setSize] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  return (
    <div>
      {gameOver && <ResultScreen setGameOver={setGameOver} setIsStarting={setIsStarting} />}
      {!gameOver && 
        (<div className='main-screen'>
          {!isStarting && <StartPage setIsStarting={setIsStarting} setPokemonList={setPokemonList} setSize={setSize} />}
          {isStarting && size !== 0 && <Game pokemonList={pokemonList} setPokemonList={setPokemonList} size={size} setGameOver={setGameOver} />}
        </div>)}
    </div>
  )
}

export default App
