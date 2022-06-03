import React from 'react';
import {
  CDBBox
} from 'cdbreact';
import { Row, Col } from 'react-bootstrap/';
import * as FaIcons from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function HomeBody() {
  return (
    <>
      <CDBBox display='flex' justufy-content='flex-start' id='deck-wrapper'>
        <ul id='deck-list'>
          <Row className='deck-row'>
            <li>
              <Col><FaIcons.FaBookmark size={39} /></Col>
              <Col><h3>Dummy Deck</h3></Col>
            </li>
          </Row>
        </ul>
        <hr />
        <Row className='deck-row'>
          <Col><FaIcons.FaPlusSquare size={50}/></Col>
          <Col><h2>Create New Deck</h2></Col>
        </Row>
      </CDBBox>
    </>
  );
}
