
function Score({ score, highScore }) {
  
  return (
    <div className='scoreboard'>
      <p>SCORE: {score}</p>
      <p>HIGH SCORE: {highScore}</p>
    </div>
  );
}

export default Score;