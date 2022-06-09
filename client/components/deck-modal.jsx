import React from 'react';
import {
} from 'react-bootstrap/';
import {
  CDBBtn,
  CDBInput
} from 'cdbreact';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../components/modal.css';

export default function DeckModal({ toggleDeckModal, inputDeckText, setInputDeckText, deckList, setDeckList }) {
  const inputTextHandler = e => {
    setInputDeckText(e.target.value);
  };

  const submitDeckHandler = e => {
    e.preventDefault();
    setDeckList([
      ...deckList, { text: inputDeckText }
    ]);
  };

  return (
    <form>
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
        color="success" />
        <div className='modal-footer'>
          <CDBBtn onClick={submitDeckHandler} type='submit' className='modal-btn' circle>
            <h4>Create</h4>
          </CDBBtn>
        </div>
      </div>
    </form>
  );
}
