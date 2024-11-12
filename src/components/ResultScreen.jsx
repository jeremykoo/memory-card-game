
function ResultScreen({ selectedSize, size, handleReset, handleGameRestart }) {
  const win = selectedSize === size;

  return (
    <div className='overlay'>
      <div className='modal'>
        {win && <h1>You Win!</h1>}
        {!win && <h1>GAME OVER</h1>}
        <button onClick={handleGameRestart}>Play Again</button>
        <button onClick={handleReset}>Quit</button>
      </div>
    </div>
  );
}

export default ResultScreen;