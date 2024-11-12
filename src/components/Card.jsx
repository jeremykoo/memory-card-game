import '../styles/card.css';

function Card({ name, imageUrl }) {

  return (
    <div className='card'>
      <img className='card-image' src={imageUrl} />
      <p className='card-name'>{name}</p>
    </div>
  );
}

export default Card;