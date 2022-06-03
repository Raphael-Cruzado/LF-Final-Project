import React from 'react';
import SideBar from '../components/side-bar';
import HomeHeader from '../components/home-header';
import HomeBody from '../components/home-body';

import {
  CDBContainer
} from 'cdbreact';

import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home(props) {
  return (
    <div style={{ display: 'flex', height: '100vh', overflow: 'scroll initial' }}>
      <SideBar />
      <CDBContainer>
        <HomeHeader />
        <HomeBody />
      </CDBContainer>
    </div>

  );
}
