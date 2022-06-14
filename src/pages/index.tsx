import * as React from 'react';
import Avatar from '../fragments/Avatar';
import Personals from '../fragments/Personals';
import HorizontalLine from '../fragments/HorizontalLine';
import SectionTitle from '../fragments/SectionTitle';
import Experience from '../fragments/Experience';
import Education from '../fragments/Education';

function IndexPage() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-4">
          <Avatar />

          <SectionTitle title="Kontakt_" />
          <Education />
        </div>

        <div className="col-lg-8">
          <Personals />
          <HorizontalLine />

          <Experience />

          <SectionTitle title="Skills_" />
          <SectionTitle title="Interests_" />
        </div>
      </div>
    </div>
  );
}

export default IndexPage;
