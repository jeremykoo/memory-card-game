import Card from "./Card";
import '../styles/game.css';
import { useEffect, useState } from "react";
import Score from "./Score";
import ResultScreen from "./ResultScreen";

function Game({ pokemonList, setPokemonList, size, handleReset, handleRestart }) {
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [selected, setSelected] = useState(new Set());
  const [gameOver, setGameOver] = useState(false);  

  async function handleGameRestart() {
    await handleRestart();
    setScore(0);
    setSelected(new Set());
    setGameOver(false);
  }

  useEffect(() => {
    setScore(selected.size);

    if (selected.size > highScore) {
      setHighScore(selected.size);
    } 
    else if (selected.size === size) {
      setGameOver(true);
    }
  }, [selected, highScore, size]);

  return (
    (pokemonList ? (
      <div>
        {gameOver ? <ResultScreen selectedSize={selected.size} size={size} handleReset={handleReset} handleGameRestart={handleGameRestart} /> : null}
        <div className='game-screen'>
          <h1>Pokemon Memory Game</h1>
          <Score score={score} highScore={highScore}/>
          <p>{score} / {size}</p>
          <div className='deck'>
            {pokemonList.map((pokemon) => (
              <Card key={pokemon.name} name={pokemon.name} imageUrl={pokemon.imageUrl} selected={selected} setSelected={setSelected} pokemonList={pokemonList} setPokemonList={setPokemonList} setGameOver={setGameOver} />
            ))}
          </div>
        </div>
      </div>
    ) : (
      <h1 className="start-page">Loading data...</h1>
    ))
  );
}

export default Game;