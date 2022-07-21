import React from 'react';
import {
  CDBCard,
  CDBCardBody,
  CDBContainer
} from 'cdbreact';
import { Col } from 'react-bootstrap/';

function FCList({ cardData }) {
  return (
    cardData.map(card =>
    <>
      <CDBContainer className='card-form-container'>
        <Col>
          <>
            <ul className='card-list'>
              <li className='card-item' key={card.cardId}>
                <CDBCard>
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

export default FCList;
