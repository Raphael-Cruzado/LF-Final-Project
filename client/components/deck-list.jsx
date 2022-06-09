import React from 'react';
import { Row, Col } from 'react-bootstrap/';
import {
  CDBBtn
} from 'cdbreact';
import * as FaIcons from 'react-icons/fa';

function DeckList({ deckList }) {
  return (
    deckList.map(deckItem =>
      <>
      <Row className='deck-row'>
        <li className='flex-row space-content'>
          <Col className='flex-row'>
            <FaIcons.FaBookmark cursor='pointer' size={39} />
            <h3 className='deck-title'>{deckItem.text}</h3>
          </Col>
          <Col className='flex-end'>
            <CDBBtn id='study-deck' circle>
              <FaIcons.FaPlay />
            </CDBBtn>
            <FaIcons.FaPen cursor='pointer' size={45} className='center-deck-item' />
            <FaIcons.FaTrashAlt cursor='pointer' size={45} className='center-deck-item' />
          </Col>
        </li>
      </Row>
      </>

    )
  );
}

export default DeckList;
