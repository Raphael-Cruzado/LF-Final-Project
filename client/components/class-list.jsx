import React from 'react';
import {
  CDBSidebarMenuItem
} from 'cdbreact';
import * as FaIcons from 'react-icons/fa';

function ClassList({ classList, setClassList }) {

  const deleteHandler = e => {
    setClassList(classList.filter(classItem => classItem.id !== e.id));
  };

  return (
    classList.map(classItem =>
      // set the id here for wen u do db stuff classItem.Id
      <li key={classItem.id}>
        <CDBSidebarMenuItem icon='sticky-note'>
          {classItem.text}
          <FaIcons.FaTrashAlt
          onClick={() => deleteHandler(classItem)}
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
