import React from 'react';
import {
} from 'react-bootstrap/';
import {
  CDBBtn,
  CDBInput
} from 'cdbreact';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../components/modal.css';

export default function ClassModal({ closeClassModal, inputClassText, setInputClassText, classList, setClassList }) {

  const inputTextHandler = e => {
    setInputClassText(e.target.value);
  };

  const submitClassHandler = e => {
    e.preventDefault();
    setClassList([
      // set an id at the end of the object when using the db, but for now, 1
      ...classList, { text: inputClassText }
    ]);
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
          value={inputClassText}
          type="text"
          placeholder="Insert new Class here"
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
