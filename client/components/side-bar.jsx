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
  const [active, setActive] = useState(true);

  return (
    <div
      style={{ display: 'flex', height: '100vh', overflow: 'scroll initial' }}
    >
      <CDBSidebar textColor="#fff" backgroundColor="#B7D7BF">
        <CDBSidebarHeader
        prefix={<FaIcons.FaBars onClick={() => {
          active === true ? setActive(false) : setActive(true);
          active === true ? setShow('CLASSES') : setShow('');
        }}/>}>
          <a
            href="/"
            className="text-decoration-none"
            style={{ color: 'inherit' }}
          >
            Flash Cards
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
      </CDBSidebar>
    </div>
  );
}
