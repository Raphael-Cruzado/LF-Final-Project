import React from 'react';
import {
  Container,
  Row,
  Col
} from 'react-bootstrap/';
import {
  CDBBtn
} from 'cdbreact';

import * as FaIcons from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Modal() {
  return (
    <div className='modal-background'>
      <Container>
        <button> X </button>
        <Row className='modal-title'><h1>Create New Deck</h1></Row>
        <Row className='modal-text'>
          A Deck is a subset of Flashcards in a Class, similar to chapters in a book
          </Row>
        <Row className='modal-footer'>
          <CDBBtn className='modal-btn' circle>
            <FaIcons.FaPlay />
          </CDBBtn>
        </Row>
      </Container>
    </div>
  );
}
