import React, { useState } from 'react';
import { CDBContainer } from 'cdbreact';

export default function FlashCardCarousel({ cardData }) {
  const [flip, setFlip] = useState(false);
  console.log(cardData);
  return (
    cardData.map(card =>
      <>
      <div className='card-container'>
          <div
            className={`card ${flip ? 'flip' : ''}`}
            onClick={() => setFlip(!flip)}
          >
            <div className='front'>{card.frontContent}</div>
            <div className='back'>{card.backContent}</div>
            {flip ? card.backContent : card.frontContent}
          </div>
      </div>

      </>
    )

  );
}
