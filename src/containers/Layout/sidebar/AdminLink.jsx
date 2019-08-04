import React from 'react';
import LockIcon from 'mdi-react/LockIcon';
import {Link} from 'react-router-dom';
import SidebarCategory from './SidebarCategory';

export default function AdminLink () {
  return (
    <div>
      <SidebarCategory title="Admin" icon={<LockIcon />}>
        <Link className="sidebar__link" to="/questions/add">
          <p className="sidebar__link-title">Add Questions</p>
        </Link>
        <Link className="sidebar__link" to="/notes/add">
          <p className="sidebar__link-title">Add Notes</p>
        </Link>
        <Link className="sidebar__link" to="/topic/add">
          <p className="sidebar__link-title">Add Topic</p>
        </Link>
        <Link className="sidebar__link" to="/stats">
          <p className="sidebar__link-title">Statistics</p>
        </Link>
      </SidebarCategory>
    </div>
  );
}
