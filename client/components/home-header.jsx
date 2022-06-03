import React from 'react';
import {
  CDBBox,
  CDBContainer
} from 'cdbreact';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function HomeHeader() {
  return (
    <CDBContainer>
      <CDBBox display='flex' justifyContent='center'>
        Hello World
      </CDBBox>
    </CDBContainer>
  );
}
