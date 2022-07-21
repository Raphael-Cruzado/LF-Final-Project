import React, { useState } from 'react';
import {
  CDBBtn,
  CDBInput,
  CDBContainer
} from 'cdbreact';
import { Col } from 'react-bootstrap/';
import FCList from './fc-list';
// import * as FaIcons from 'react-icons/fa';

function FcForm({ cardData }) {
  const [inputFrontText, setInputFrontText] = useState('');
  const [inputBackText, setInputBackText] = useState('');

  const inputHandlerFront = e => {
    setInputFrontText(e.target.value);
  };
  const inputHandlerBack = e => {
    setInputBackText(e.target.value);
  };

  const submitDeckHandler = e => {
    // see if post method works first
  };

  return (
      <>
        <CDBContainer className='card-form-container'>
          <Col className='card-form-card'>
            {/* <CDBBtn id='study-card' style={{ position: 'relative', left: '2.5rem' }} circle>
              <h4>Study Deck</h4>
            </CDBBtn> */}
            <form onSubmit={submitDeckHandler}>
              <CDBInput
              value={inputFrontText}
              type='text'
              placeholder='Front Content'
              style={{ width: '40rem' }}
              onChange={inputHandlerFront}
              />
              <CDBInput
              value={inputBackText}
              type='text'
              placeholder='Back Content'
              style={{ width: '40rem' }}
              onChange={inputHandlerBack}
              />
              <CDBBtn id='study-card' style={{ position: 'relative', top: '.5rem', left: '10rem' }} circle>
                <h4>Create Card</h4>
              </CDBBtn>
            </form>
            <FCList cardData={cardData}/>
          </Col>
        </CDBContainer>
      </>
  );
}

export default FcForm;
