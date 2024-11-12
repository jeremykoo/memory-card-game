
function ResultScreen({ setGameOver, setIsStarting }) {
  function handlePlayAgain() {
    setGameOver(false);
  }

  function handleQuit() {
    setIsStarting(false);
    setGameOver(false);
  }

  return (
    <div>
      <h1>GAME OVER</h1>
      <button onClick={handlePlayAgain}>Play Again</button>
      <button onClick={handleQuit}>Quit</button>
    </div>
  );
}

export default ResultScreen;