import React, { useState } from 'react';
import {
} from 'react-bootstrap/';
import {
  CDBBtn,
  CDBInput
} from 'cdbreact';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../components/modal.css';

export default function ClassModal({ setOpenClassModal, classList, setClassList, user }) {
  const [inputClassText, setInputClassText] = useState('');

  const inputTextHandler = e => {
    setInputClassText(e.target.value);
  };

  const submitClassHandler = e => {
    e.preventDefault();
    const classItemText = inputClassText;
    const userId = user[0].userId;
    const userObject = { classItemText, userId };
    fetch('/api/classes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userObject)
    });
  };

  return (
  // <div className='modal-background'>
    <form onSubmit={submitClassHandler}>
      <div className='modal-container'>
        <div>
          <button className='close-btn' onClick={() => { setOpenClassModal(false); }}> X </button>
        </div>
        <div className='modal-title'><h1>Create New Class</h1></div>
        <div className='modal-text'>
          A Class is a set of Flashcards, grouped into Decks
        </div>
        <CDBInput
          value={inputClassText}
          type="text"
          placeholder="Insert new Class here"
          color="success"
          onChange={inputTextHandler}
          />
        <div className='modal-footer'>
          <CDBBtn className='modal-btn' type='submit' circle>
            <h4>Create</h4>
          </CDBBtn>
        </div>
      </div>
    </form>

  // </div>
  );
}
