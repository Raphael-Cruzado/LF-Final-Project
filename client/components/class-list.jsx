import React from 'react';
import {
  CDBSidebarMenuItem
} from 'cdbreact';

function ClassList({ classList }) {
  return (
    classList.map(classItem =>
      <li key={classItem}>
        <CDBSidebarMenuItem icon='sticky-note'>{classItem.text}</CDBSidebarMenuItem>
      </li>
    )
  );
}

export default ClassList;
