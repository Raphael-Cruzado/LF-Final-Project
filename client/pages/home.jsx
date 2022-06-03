import React from 'react';
import SideBar from '../components/side-bar';
import HomeHeader from '../components/home-header';

import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home(props) {
  return (
    <div style={{ display: 'flex', height: '100vh', overflow: 'scroll initial' }}>
      <SideBar />
      <HomeHeader />
    </div>

  );
}
