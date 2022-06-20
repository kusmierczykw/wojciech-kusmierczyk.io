import React from 'react';
import './Interests.scss';
import SectionTitle from './SectionTitle';

function Interests() {
  return (
    <div className="interests">
      <SectionTitle title="Interests_" />

      <div className="row">
        <div className="col-lg">
          <ul className="interests__list">
            <li>Muzyka</li>
            <li>Gry</li>
            <li>Grafika komputerowa</li>
          </ul>
        </div>

        <div className="col-lg">
          <ul className="interests__list">
            <li>UX / UI</li>
            <li>CQRS / DDD</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Interests;
