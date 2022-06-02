import React from 'react';
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem
} from 'cdbreact';
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import * as FaIcons from 'react-icons/fa';

export default function SideBar() {
  return (
    <div
      style={{ display: 'flex', height: '100vh', overflow: 'scroll initial' }}
    >
      <CDBSidebar textColor="#fff" backgroundColor="#B7D7BF">
        <CDBSidebarHeader prefix={<FaIcons.FaBars />}>
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
            <h4 id='class-header'>CLASSES <FaIcons.FaRegCalendarPlus /></h4>
            <CDBSidebarMenuItem icon='sticky-note'>Dummy Class</CDBSidebarMenuItem>
            <CDBSidebarMenuItem icon='sticky-note'>Dummy Class</CDBSidebarMenuItem>
          </CDBSidebarMenu>
        </CDBSidebarContent>
      </CDBSidebar>
    </div>
  );
}

// { /* <Container fluid="xxl xl lg md sm None">
//   <Row>
//     <Col id='navbar' xs="4" md="3">
//       <img src="./img/unisex-avatar.svg" alt="avatar" id='avatar' />
//       <Col id='class-header' md="3">
//         <h3>Classes </h3>
//         <span id='plus'><FaIcons.FaRegPlusSquare /></span>
//       </Col>
//       <hr />

//       <Col id='class-list'>
//         <ul>
//           <li><h5>Dummy Class</h5></li>
//         </ul>
//       </Col>
//     </Col>
//     <Col id='homepage' />
//   </Row>
// </Container> */ }
