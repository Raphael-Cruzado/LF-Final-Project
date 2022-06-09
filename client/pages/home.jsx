import React, { useState } from 'react';
import SideBar from '../components/side-bar';
import HomeHeader from '../components/home-header';
import HomeBody from '../components/home-body';
import ClassModal from '../components/class-modal';

import {
  CDBContainer
} from 'cdbreact';

import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home() {
  const [openClassModal, setOpenClassModal] = useState(false);
  const [inputText, setInputText] = useState('');
  const [classList, setClassList] = useState([]);

  return (
  <div style={{ display: 'flex', height: '100vh', width: '100vw', overflow: 'scroll initial' }}>
      <SideBar
        toggleClassModal={() => setOpenClassModal(!openClassModal) }
        inputText={inputText}
        setInputText={setInputText}
        classList={classList.map}
        setClassList={setClassList}
      />
      <CDBContainer>
        {openClassModal && <ClassModal
        classList={classList}
        inputText={inputText}
        setInputText={setInputText}
        setClassList={setClassList}
        closeClassModal={setOpenClassModal}
      /> }
        <HomeHeader />
        <HomeBody />
      </CDBContainer>
  </div>
  );
}
