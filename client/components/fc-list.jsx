import React from 'react';
import {
  CDBContainer
} from 'cdbreact';
import { Col, Card } from 'react-bootstrap/';

function FCList({ cardData }) {
  return (
    cardData.map(card =>
    <>
      <CDBContainer className='list-container'>
        <Col>
          <>
            <ul className='card-list'>
              <li className='card-item' key={card.cardId}>
                <Card>
                  <Card.Body className='card-content'>
                    <h5>{card.frontContent}</h5>
                  </Card.Body>
                </Card>
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
