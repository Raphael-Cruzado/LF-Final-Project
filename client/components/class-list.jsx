import React from 'react';
import {
  CDBSidebarMenuItem
} from 'cdbreact';
import * as FaIcons from 'react-icons/fa';

function ClassList({ classData }) {

  const deleteHandler = e => {
    fetch(`/api/classes/${e}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    });
  };

  // when new data is added, it doesn't append to page immediately, only on page refresh
  return (
    classData.map(classItem =>
      <CDBSidebarMenuItem icon='sticky-note' key={classItem.classId}>
        <h5 className='class-title'>{classItem.className}</h5>
        <FaIcons.FaTrashAlt
        onClick={() => deleteHandler(classItem.classId)}
        cursor='pointer'
        size={20} className='center-deck-item'
        style={{ position: 'relative', left: '5rem', bottom: '1rem' }}
        />
      </CDBSidebarMenuItem>
    )
  );
}

export default ClassList;
