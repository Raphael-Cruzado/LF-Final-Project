import React, { useState } from 'react';
import {
  CDBBox
} from 'cdbreact';
import { Row, Col } from 'react-bootstrap/';
import * as FaIcons from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import DeckModal from '../components/deck-modal';
import DeckList from './deck-list';

export default function HomeBody({ deckData }) {
  const [openDeckModal, setOpenDeckModal] = useState(false);
  const [inputDeckText, setInputDeckText] = useState('');

  return (
    <>
      <CDBBox display='flex' justify-content='flex-start' id='deck-wrapper'>
        <ul id='deck-list'>
          <DeckList
          deckData={deckData}
          />
        </ul>
        <Row className='deck-row'>
          <Col className='flex-row'>
            <FaIcons.FaPlusSquare size={50}
            cursor='pointer'
            onClick={() => { setOpenDeckModal(true); }} />
            <h2 className='deck-title' onClick={() => { setOpenDeckModal(true); }}>Create New Deck</h2>
          </Col>
        </Row>
        {openDeckModal &&
        <DeckModal
        toggleDeckModal={setOpenDeckModal}
        inputDeckText={inputDeckText}
        setInputDeckText={setInputDeckText}
        deckList={deckList}
        setDeckList={setDeckList}
        />}
      </CDBBox>
    </>
  );
}
