import React from 'react';
import {
} from 'react-bootstrap/';
import {
  CDBBtn,
  CDBInput
} from 'cdbreact';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../components/modal.css';

export default function ClassModal({ closeClassModal }) {
  return (
  // <div className='modal-background'>
      <div className='modal-container'>
        <div>
          <button className='close-btn' onClick={() => { closeClassModal(false); }}> X </button>
        </div>
        <div className='modal-title'><h1>Create New Class</h1></div>
        <div className='modal-text'>
          A Class is a set of Flashcards, grouped into Decks
        </div>
        <CDBInput type="text" placeholder="Text" color="success" />
        <div className='modal-footer'>
          <CDBBtn className='modal-btn' circle>
            <h4>Create</h4>
          </CDBBtn>
        </div>
      </div>
  // </div>
  );
}
