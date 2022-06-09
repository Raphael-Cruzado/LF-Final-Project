import React from 'react';
import {
  CDBBox,
  CDBBtn
} from 'cdbreact';
import { Row, Col } from 'react-bootstrap/';
import * as FaIcons from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function HomeHeader() {
  return (
    <>
      <CDBBox id='home-header' display='flex' justifyContent='start'>
        <Row className='header-img'>
            <Col>
              <img src="./img/unisex-avatar.svg" alt="avatar" id='avatar'/>
            </Col>
          <Col>
            <Col id='header-name'>
              <h1>Class Name </h1>
              <span id='pen'>
                <FaIcons.FaPen size={30} style={{ position: 'relative', left: '7px' }} />
                <FaIcons.FaTrashAlt
                cursor='pointer' size={36}
                className='center-deck-item'
                style={{ position: 'relative', bottom: '35px', left: '19px' }}
                />
                </span>
            </Col>
            <CDBBtn id='study-btn' circle>
              <FaIcons.FaPlay />
              STUDY
            </CDBBtn>
          </Col>
        </Row>
      </CDBBox>
      <hr />
      <h3>Decks</h3>
      <hr />
    </>
  );
}
