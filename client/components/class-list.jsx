import React from 'react';
import {
  CDBSidebarMenuItem
} from 'cdbreact';

function ClassList({ classList }) {
  return (
    classList.map(classItem =>
      // set the id here for wen u do db stuff classItem.Id
      <li key={classItem}>
        <CDBSidebarMenuItem icon='sticky-note'>{classItem.text}</CDBSidebarMenuItem>
      </li>
    )
  );
}

export default ClassList;
