import React, { useEffect } from 'react';
import {
  CDBSidebarMenuItem
} from 'cdbreact';
import * as FaIcons from 'react-icons/fa';

function ClassList({ classList, setClassList, classData }) {

  const deleteHandler = e => {
    fetch(`/api/classes/${e}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    });
  };

  // when new data is added, it doesn't append to page immediately, but does it on page refresh
  return (
    classData.map(classItem =>
      <li key={classItem.classId}>
        <CDBSidebarMenuItem icon='sticky-note'>
          {classItem.className}
          <FaIcons.FaTrashAlt
          onClick={() => deleteHandler(classItem.classId)}
          cursor='pointer'
          size={20} className='center-deck-item'
          style={{ position: 'relative', left: '5rem', bottom: '1rem' }}
          />
        </CDBSidebarMenuItem>
      </li>
    )
  );
}

export default ClassList;
