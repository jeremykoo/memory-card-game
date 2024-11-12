import { useState } from 'react'
import './App.css'
import StartPage from './components/StartPage'
import Card from './components/Card';

function App() {
  const [isStarting, setIsStarting] = useState(false);
  const [pokemonList, setPokemonList] = useState(null);

  return (
    <div>
      {!isStarting && <StartPage setIsStarting={setIsStarting} setPokemonList={setPokemonList}/>}
      {isStarting && (pokemonList ? (
        <div className='deck'>
          {pokemonList.map((pokemon) => (
            <Card key={pokemon.name} name={pokemon.name} imageUrl={pokemon.imageUrl}/>
          ))}
        </div>
      ) : (
        <h1>Loading data...</h1>
      )) }
    </div>
  )
}

export default App
