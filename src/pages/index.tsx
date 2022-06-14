import * as React from 'react';
import Avatar from '../fragments/Avatar';
import Personals from '../fragments/Personals';
import HorizontalLine from '../fragments/HorizontalLine';
import SectionTitle from '../fragments/SectionTitle';
import Experience from '../fragments/Experience';

function IndexPage() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-4">
          <Avatar />
        </div>

        <div className="col-lg-8">
          <Personals />
          <HorizontalLine />

          <Experience />

          <SectionTitle title="Skills_" />
          <SectionTitle title="Interests_" />
          <SectionTitle title="Contact_" />
          <SectionTitle title="Education_" />
        </div>
      </div>
    </div>
  );
}

export default IndexPage;
