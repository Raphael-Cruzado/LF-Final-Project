import React from 'react';
import {
} from 'react-bootstrap/';
import {
  CDBBtn,
  CDBInput
} from 'cdbreact';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../components/modal.css';

export default function ClassModal({ setOpenClassModal, inputClassText, setInputClassText, classList, setClassList, userId }) {

  const inputTextHandler = e => {
    setInputClassText(e.target.value);
  };

  const submitClassHandler = e => {
    e.preventDefault();
    setClassList([
      // set an id at the end of the object when using the db, but for now, 1
      ...classList, { text: inputClassText, id: Math.random() }
    ]);
    const classItemText = inputClassText;
    const user = userId[0];
    const userObject = { classItemText, user };
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
          onChange={inputTextHandler} />
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
