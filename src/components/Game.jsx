import Card from "./Card";
import '../styles/game.css';
import { useEffect, useState } from "react";
import Score from "./Score";

function Game({ pokemonList, setPokemonList, size, setGameOver }) {
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [selected, setSelected] = useState(new Set());  

  useEffect(() => {
    setScore(selected.size);

    if (selected.size > highScore) {
      setHighScore(selected.size);
    }
  }, [selected, highScore]);

  return (
    (pokemonList ? (
      <div className='game-screen'>
        <h1>Card Game</h1>
        <Score score={score} highScore={highScore}/>
        <p>{score} / {size}</p>
        <div className='deck'>
          {pokemonList.map((pokemon) => (
            <Card key={pokemon.name} name={pokemon.name} imageUrl={pokemon.imageUrl} selected={selected} setSelected={setSelected} pokemonList={pokemonList} setPokemonList={setPokemonList} setGameOver={setGameOver} />
          ))}
        </div>
      </div>
    ) : (
      <h1>Loading data...</h1>
    ))
  );
}

export default Game;