import React from 'react';
import './Interests.scss';
import SectionTitle from './SectionTitle';

function Interests() {
  return (
    <div className="interests">
      <SectionTitle title="Zainteresowania" />

      <div className="row">
        <div className="col-lg">
          <ul className="interests__list">
            <li>Kolarstwo</li>
            <li>Muzyka</li>
            <li>Gry</li>
          </ul>
        </div>

        <div className="col-lg">
          <ul className="interests__list">
            <li>Grafika komputerowa</li>
            <li>UX / UI</li>
            <li>CQRS / DDD</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Interests;
