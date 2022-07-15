import React from 'react';
import {
  CDBBtn,
  CDBInput,
  CDBCard,
  CDBCardBody,
  CDBCardTitle,
  CDBCardText,
  CDBContainer
} from 'cdbreact';
import { Col } from 'react-bootstrap/';
// import * as FaIcons from 'react-icons/fa';

function FcForm({ cardData }) {
  console.log(cardData);
  return (
    cardData.map(card =>
      <>
        <CDBContainer className='card-form-container'>
          <Col className='card-form-card'>
            {/* <CDBBtn id='study-card' style={{ position: 'relative', left: '2.5rem' }} circle>
              <h4>Study Deck</h4>
            </CDBBtn> */}
            <form>
              <CDBInput type='text' placeholder='Front Content' style={{ width: '40rem' }} />
              <CDBInput type='text' placeholder='Back Content' style={{ width: '40rem' }} />
              <CDBBtn id='study-card' style={{ position: 'relative', top: '.5rem', left: '10rem' }} circle>
                <h4>Create Card</h4>
              </CDBBtn>
            </form>
          </Col>
        </CDBContainer>
        <CDBContainer className='card-form-container'>
          <Col id='card-list'>
          <>
            <ul>
              <li className='card-item' key={card.cardId}>
                <CDBCard style={{ width: '25rem' }}>
                  <CDBCardBody className='card-content'>
                    <h5>{card.frontContent}</h5>
                  </CDBCardBody>
                </CDBCard>
              </li>
            </ul>
          </>
          </Col>
        </CDBContainer>
      </>
    )
  );
}

export default FcForm;

// {/* <CDBCard style={{ width: '25rem' }}>
//   <CDBCardBody>
//     <CDBCardTitle>Heading</CDBCardTitle>
//     <CDBCardText>Paragraph</CDBCardText>
//   </CDBCardBody>
// </CDBCard> */}
