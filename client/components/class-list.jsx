import React from 'react';
import {
  CDBSidebarMenuItem
} from 'cdbreact';

function ClassList({ inputText, classList }) {

  return (
    <li>
      <CDBSidebarMenuItem icon='sticky-note'>{inputText}</CDBSidebarMenuItem>
    </li>
  );
}

export default ClassList;
