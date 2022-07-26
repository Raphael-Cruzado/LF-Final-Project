import React, { useState } from 'react';

export default function FlashCardCarousel({ cardData }) {
  const [flip, setFlip] = useState(false);
  console.log(cardData);
  return (
    <div
    className={`card ${flip ? 'flip' : ''}`}
    onClick={() => setFlip(!flip)}
    >

    </div>
  );
}
