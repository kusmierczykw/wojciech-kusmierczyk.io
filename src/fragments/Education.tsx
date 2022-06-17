import * as React from 'react';
import SectionTitle from './SectionTitle';
import './Education.scss';

function Education() {
  return (
    <div className="education">
      <SectionTitle title="Wykształcenie_" />

      <div className="education__item">
        <div className="education__info">
          <div className="education__academy">
            Szkoła Główna Gospodarstwa Wiejskiego w Warszawie
          </div>
          <div className="education__degree">Magister, Informatyka</div>
          <div className="education__period">2018 - 2020</div>
        </div>
      </div>

      <div className="education__item">
        <div className="education__info">
          <div className="education__academy">
            Uniwersytet Marii Curie-Skłodowskiej w Lublinie
          </div>
          <div className="education__degree">Licencjat, Informatyka</div>
          <div className="education__period">2015 - 2018</div>
        </div>
      </div>
    </div>
  );
}

export default Education;
