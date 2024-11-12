import { useEffect, useRef } from 'react';
import '../styles/card.css';

function Card({ name, imageUrl, selected, setSelected, pokemonList, setPokemonList, setGameOver }) {

  // card tilt + shine effect
  const cardRef = useRef(null);
  const shineRef = useRef(null);

  useEffect(() => {
    const card = cardRef.current;
    const shine = shineRef.current;
    
    // effects at a diagonal distance away
    // const handleMouseMove = (e) => {
    //   const rect = card.getBoundingClientRect();
    //   const x = e.clientX - rect.left - rect.width / 2;
    //   const y = e.clientY - rect.top - rect.height / 2;

    //   // tilt effect
    //   const rotateX = (y / rect.height) * 50;
    //   const rotateY = (x / rect.width) * -50;
    //   card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

    //   // shine effect
    //   const shineX = (x / rect.width) * 100;
    //   const shineY = (y / rect.height) * 100;
    //   shine.style.background = `radial-gradient(circle at ${shineX}% ${shineY}%, rgba(255, 255, 255, 0.6), transparent 60%)`;
    // };

    // effects directly on top of cursor
    const handleMouseMove = (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      // tilt effect
      const rotateX = ((y - rect.height / 2) / rect.height) * 50;
      const rotateY = ((x - rect.width / 2) / rect.width) * -50;
      card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

      // shine effect positioned directly on cursor
      shine.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(255, 255, 255, 0.5), transparent 100%)`;
    };

    const handleMouseLeave = () => {
      card.style.transform = 'rotateX(0) rotateY(0)';
      shine.style.background = 'none';
    };

    card.addEventListener('mousemove', handleMouseMove);
    card.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      card.removeEventListener('mousemove', handleMouseMove);
      card.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  function shuffleArray(array) {
    const shuffledArray = [...array];

    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray;
  }

  function handleClick() {
    if (!selected.has(name)) {
      setSelected( new Set([
        ...selected,
        name
      ]));

      const shuffled = shuffleArray(pokemonList);
      setPokemonList(shuffled);
    } else {
      setGameOver(true);
    }
  }

  return (
    <div className='card' ref={cardRef} onClick={handleClick}>
      <div className='shine' ref={shineRef}></div>
      <div className='card-content'>
        <img className='card-image' src={imageUrl} />
        <p className='card-name'>{name}</p>
      </div>
    </div>
  );
}

export default Card;