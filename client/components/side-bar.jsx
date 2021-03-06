import React, { useState } from 'react';
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem
} from 'cdbreact';
import 'bootstrap/dist/css/bootstrap.min.css';

import * as FaIcons from 'react-icons/fa';

export default function SideBar() {
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
            username
          </a>
        </CDBSidebarHeader>
        <CDBSidebarContent >
          <CDBSidebarMenu prefix={<FaIcons.FaRegCalendarPlus />}>
            <h4
            id='class-header'>{show}
            <FaIcons.FaRegCalendarPlus />
            </h4>
            <CDBSidebarMenuItem icon='sticky-note'>Dummy Class</CDBSidebarMenuItem>
            <CDBSidebarMenuItem icon='sticky-note'>Dummy Class</CDBSidebarMenuItem>
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

// style = {{ display: 'flex', height: '100vh', overflow: 'scroll initial' }}
