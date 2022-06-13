import React, { useState } from 'react';
import ClassList from './class-list';
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu
} from 'cdbreact';
import 'bootstrap/dist/css/bootstrap.min.css';

import * as FaIcons from 'react-icons/fa';

export default function SideBar({ toggleClassModal, user, classData }) {
  const [show, setShow] = useState('');
  const [log, setLog] = useState('');
  const [active, setActive] = useState(true);

  return (
    <>
      <CDBSidebar textColor="#fff" backgroundColor="#B7D7BF">
        <CDBSidebarHeader
        prefix={<FaIcons.FaBars onClick={() => {
          active ? setActive(false) : setActive(true);
          active ? setShow('CLASSES') : setShow('');
          active ? setLog('log-out') : setLog('');
        }}/>}>
          <a
            href="/"
            className="text-decoration-none"
            style={{ color: 'inherit' }}
          >
            {/* // cannot read props of firstName */}
            {/* {user[0].firstName + ' ' + user[0].lastName } */}
            username
          </a>
        </CDBSidebarHeader>
        <CDBSidebarContent>
          <CDBSidebarMenu>
            <h4
            id='class-header'>{show}
            <FaIcons.FaRegCalendarPlus size={29}
              cursor='pointer'
              onClick={() => toggleClassModal(true)} />
            </h4>
            <ul className='class-list'>
              <ClassList
              classData={classData}
              />
            </ul>
          </CDBSidebarMenu>
        </CDBSidebarContent>
          <CDBSidebarFooter style={{ textAlign: 'center' }}>
            <div
              className="sidebar-btn-wrapper"
              style={{ padding: '20px 5px' }}
            >
              <h3>{log}</h3>
              <FaIcons.FaDoorOpen size={25} cursor='pointer'/>
            </div>
          </CDBSidebarFooter>
      </CDBSidebar>
    </>
  );
}
