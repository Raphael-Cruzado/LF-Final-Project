import React from 'react';
import {
} from 'react-bootstrap/';
import {
  CDBBtn,
  CDBInput
} from 'cdbreact';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../components/modal.css';

export default function DeckModal({ toggleDeckModal, inputDeckText, setInputDeckText, deckData }) {
  const inputTextHandler = e => {
    setInputDeckText(e.target.value);
  };

  const submitDeckHandler = e => {
    e.preventDefault();
    const deckItemText = inputDeckText;
    const classId = deckData[0].classId;
    const deckObject = { deckItemText, classId };
    fetch('/api/decks', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(deckObject)
    })
      .then(res => res.json())
      .then(data => deckData.push(data));
  };

  return (
    <form onSubmit={submitDeckHandler}>
      <div className='modal-container'>
        <div>
          <button className='close-btn' onClick={() => { toggleDeckModal(false); }}> X </button>
        </div>
        <div className='modal-title'><h1>Create New Deck</h1></div>
        <div className='modal-text'>
          A Deck is a subset of Flashcards in a Class, similar to chapters in a book
        </div>
        <CDBInput
        onChange={inputTextHandler}
        value={inputDeckText}
        type="text"
        placeholder="Insert new Deck here"
        color="success"
        />
        <div className='modal-footer'>
          <CDBBtn type='submit' className='modal-btn' circle>
            <h4>Create</h4>
          </CDBBtn>
        </div>
      </div>
    </form>
  );
}
