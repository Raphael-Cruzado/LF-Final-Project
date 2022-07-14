import React from 'react';
import {
  CDBBtn,
  CDBInput,
  CDBCard
} from 'cdbreact';
import { Col } from 'react-bootstrap/';
// import * as FaIcons from 'react-icons/fa';

function FcForm({ cardData }) {
  console.log(cardData);
  return (
    cardData.map(card =>
      <>
        <Col className='card-form-container'>
          <Col className='card-form-card'>
            <CDBBtn id='study-card' style={{ position: 'relative', left: '2.5rem' }} circle>
              <h4>Study Deck</h4>
            </CDBBtn>
            <form>
              <CDBInput type='text' placeholder='Front Content' style={{ width: '40rem' }} />
              <CDBInput type='text' placeholder='Back Content' style={{ width: '40rem' }} />
              <CDBBtn id='study-card' style={{ position: 'relative', top: '.5rem', left: '2.5rem' }} circle>
                <h4>Create Card</h4>
              </CDBBtn>
            </form>
          </Col>
        </Col>
      </>
    )

  );
}

export default FcForm;
