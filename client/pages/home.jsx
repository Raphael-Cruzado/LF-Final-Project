import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SideBar from '../components/side-bar';
import HomeHeader from '../components/home-header';
import HomeBody from '../components/home-body';
import ClassModal from '../components/class-modal';
import LandingPage from '../components/landing-page';
import FlashCardCarousel from '../components/fc-carousel';
import {
  CDBContainer
} from 'cdbreact';

import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home({ user, classData, deckData, cardData }) {
  const [openClassModal, setOpenClassModal] = useState(false);

  return (
  <Router>
    <div style={{ display: 'flex', height: '100vh', width: '100vw', overflow: 'scroll initial' }}>
      <SideBar
        toggleClassModal={() => setOpenClassModal(!openClassModal)}
        classData={classData}
        user={user}
      />
      <CDBContainer>
        {openClassModal && <ClassModal
        setOpenClassModal={setOpenClassModal}
        user={user}
        classData={classData}
      /> }
      <Routes>
        <Route path="/landing-page" element={<LandingPage />} />
        <Route
          path="/"
          element={
          <>
          <FlashCardCarousel cardData={cardData} />
          {/* <HomeHeader classData={classData} />
          <HomeBody deckData={deckData} /> */}
          </>}
        />
      </Routes>

      </CDBContainer >
    </div>
  </Router>
  );
}
