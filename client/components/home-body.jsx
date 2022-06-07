import React, { useState } from 'react';
import {
  CDBBox,
  CDBBtn
} from 'cdbreact';
import { Row, Col } from 'react-bootstrap/';
import * as FaIcons from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import DeckModal from '../components/deck-modal';

export default function HomeBody() {
  const [openDeckModal, setOpenDeckModal] = useState(false);

  return (
    <>
      <CDBBox display='flex' justify-content='flex-start' id='deck-wrapper'>
        <ul id='deck-list'>
          <Row className='deck-row'>
            <li className='flex-row space-content'>
              <Col className='flex-row'>
                <FaIcons.FaBookmark size={39} />
                <h3 className='deck-title'>Dummy Deck</h3>
              </Col>
              <Col className='flex-end'>
                <CDBBtn id='study-deck' circle>
                  <FaIcons.FaPlay />
                </CDBBtn>
                <FaIcons.FaPen size={45} className='center-deck-item' />
                <FaIcons.FaTrashAlt size={45} className='center-deck-item'/>
              </Col>
            </li>
          </Row>
        </ul>
        <hr />
        <Row className='deck-row'>
          <Col className='flex-row'>
            <FaIcons.FaPlusSquare size={50}
            cursor='pointer'
            onClick={() => { setOpenDeckModal(true); }} />
            <h2 className='deck-title' onClick={() => { setOpenDeckModal(true); }}>Create New Deck</h2>
          </Col>
        </Row>
        {openDeckModal && <DeckModal toggleDeckModal={setOpenDeckModal} />}
      </CDBBox>
    </>
  );
}
