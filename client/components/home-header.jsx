import React from 'react';
import {
  CDBContainer,
  CDBBox,
  CDBBtn
} from 'cdbreact';
import { Row, Col } from 'react-bootstrap/';
import * as FaIcons from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function HomeHeader() {
  return (
    <CDBContainer>
      <CDBBox id='home-header' display='flex' justifyContent='start'>
        <Row className='header-img'>
            <Col>
              <img src="./img/unisex-avatar.svg" alt="avatar" id='avatar'/>
            </Col>
          <Col>
            <Col id='header-name'>
              <h1>Class Name </h1>
              <span id='pen'><FaIcons.FaPen size={30} /></span>
            </Col>
            <CDBBtn id='study-btn' circle>
              <FaIcons.FaPlay />
              STUDY
            </CDBBtn>
          </Col>
        </Row>
      </CDBBox>
      <hr />
    </CDBContainer>
  );
}
