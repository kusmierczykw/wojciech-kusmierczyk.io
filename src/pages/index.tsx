import * as React from 'react';
import Avatar from '../fragments/Avatar';
import Personals from '../fragments/Personals';
import HorizontalLine from '../fragments/HorizontalLine';
import Experience from '../fragments/Experience';
import SidebarContent from '../fragments/SidebarContent';
import Agreements from '../fragments/Agreements';
import Skills from '../fragments/Skills';
import Interests from '../fragments/Interests';

function IndexPage() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-4 px-4">
          <div className="position-sticky top-0">
            <Avatar />
            <SidebarContent />
          </div>
        </div>

        <div className="col-lg-8 px-4">
          <Personals />
          <HorizontalLine />
          <Experience />
          <Skills />
          <Interests />

          <HorizontalLine />

          <Agreements />
        </div>
      </div>
    </div>
  );
}

export default IndexPage;
