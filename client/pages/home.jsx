import React, { useState } from 'react';
import SideBar from '../components/side-bar';
import HomeHeader from '../components/home-header';
import HomeBody from '../components/home-body';
import ClassModal from '../components/class-modal';
import LandingPage from '../components/landing-page';
import {
  CDBContainer
} from 'cdbreact';

import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home({ user, classData }) {
  const [openClassModal, setOpenClassModal] = useState(false);

  return (
  <div style={{ display: 'flex', height: '100vh', width: '100vw', overflow: 'scroll initial' }}>
      <SideBar
        toggleClassModal={() => setOpenClassModal(!openClassModal) }
        classData={classData}
        user={user}
      />
      <CDBContainer>
        {openClassModal && <ClassModal
        setOpenClassModal={setOpenClassModal}
        user={user}
        classData={classData}
      /> }
        <LandingPage />
        <HomeHeader />
        <HomeBody />
      </CDBContainer>
  </div>
  );
}
