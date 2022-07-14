import React from 'react';
import {
  CDBBtn
} from 'cdbreact';
import { Col } from 'react-bootstrap/';
import * as FaIcons from 'react-icons/fa';

function FcForm() {
  return (
    <>
      <Col className='card-form-container'>
        <CDBBtn id='study-card' circle>
          <FaIcons.FaPlay />
        </CDBBtn>
      </Col>
    </>

  );
}

export default FcForm;
