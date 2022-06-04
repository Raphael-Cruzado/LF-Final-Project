import React from 'react';
import {
  Container,
  Row,
  Col
} from 'react-bootstrap/';
import {
  CDBBtn,
  CDBInput
} from 'cdbreact';

import * as FaIcons from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../components/modal.css';

export default function Modal({ closeModal }) {
  return (
      <div className='modal-container'>
        <div>
          <button className='close-btn' onClick={() => { closeModal(false); }}> X </button>
        </div>
        <div className='modal-title'><h1>Create New Deck</h1></div>
        <div className='modal-text'>
          A Deck is a subset of Flashcards in a Class, similar to chapters in a book
        </div>
        <CDBInput type="text" placeholder="Text" color="success" />
        <div className='modal-footer'>
          <CDBBtn className='modal-btn' circle>
            <h4>Create</h4>
          </CDBBtn>
        </div>
      </div>
  );
}
