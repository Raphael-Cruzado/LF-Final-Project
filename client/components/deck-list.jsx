import React from 'react';
import { Row, Col } from 'react-bootstrap/';
import {
  CDBBtn
} from 'cdbreact';
import * as FaIcons from 'react-icons/fa';

function DeckList({ deckData }) {
  console.log(deckData);
  const deleteHandler = e => {
    deckData.filter(deckItem => deckItem.id !== e.id);
  };

  return (
    deckData.map(deckItem =>
      <>
      <Row className='deck-row'>
          {/* // set the id here for wen u do db stuff deckItem.id */}
        <li key={deckData} className='flex-row space-content'>
          <Col className='flex-row'>
            <FaIcons.FaBookmark cursor='pointer' size={39} />
            <h3 className='deck-title'>{deckItem.deckName}</h3>
          </Col>
          <Col className='flex-end'>
            <CDBBtn id='study-deck' circle>
              <FaIcons.FaPlay />
            </CDBBtn>
            <FaIcons.FaPen cursor='pointer' size={45} className='center-deck-item' />
            <FaIcons.FaTrashAlt value={deckData} onClick={() => deleteHandler(deckItem)} cursor='pointer' size={45} className='center-deck-item' />
          </Col>
        </li>
      </Row>
      </>

    )
  );
}

export default DeckList;
