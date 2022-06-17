import './SidebarContent.scss';
import * as React from 'react';
import Contact from './Contact';
import Education from './Education';

function SidebarContent() {
  return (
    <div className="sidebar-content">
      <Contact />
      <Education />
    </div>
  );
}

export default SidebarContent;
