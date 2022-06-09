import React, { useState } from 'react';
import {
} from 'react-bootstrap/';
import {
  CDBBtn,
  CDBInput
} from 'cdbreact';

import ClassList from './class-list';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../components/modal.css';

export default function ClassModal({ closeClassModal, inputText, setInputText, classList, setClassList }) {

  const inputTextHandler = e => {
    setInputText(e.target.value);
    console.log(e.target.value);
  };

  const submitClassHandler = e => {
    e.preventDefault();
    setClassList([
      // set an id at the end of the object when using the db, but for now, 1
      ...classList, { text: inputText }
    ]);
    console.log(classList[1].text);
  };

  return (
  // <div className='modal-background'>
    <form>
      <div className='modal-container'>
        <div>
          <button className='close-btn' onClick={() => { closeClassModal(false); }}> X </button>
        </div>
        <div className='modal-title'><h1>Create New Class</h1></div>
        <div className='modal-text'>
          A Class is a set of Flashcards, grouped into Decks
        </div>
        <CDBInput
          value={inputText}
          type="text"
          placeholder="Text"
          color="success"
          onChange={inputTextHandler} />
        <div className='modal-footer'>
          <CDBBtn onClick={submitClassHandler} className='modal-btn' type='submit' circle>
            <h4>Create</h4>
          </CDBBtn>
        </div>
      </div>
    </form>

  // </div>
  );
}
