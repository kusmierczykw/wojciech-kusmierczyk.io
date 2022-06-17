import React from 'react';
import './Skills.scss';
import SectionTitle from './SectionTitle';

function Skills() {
  return (
    <div className="skills">
      <SectionTitle title="Skills_" />

      <div className="d-flex">
        <ul className="skills__list">
          <li>Angular</li>
          <li>Nest.js</li>
          <li>Gatsby.js</li>
          <li>TypeScript / JavaScript</li>
          <li>HTML</li>
          <li>SASS/LESS/CSS</li>
          <li>Bootstrap</li>
          <li>Material, PrimeNG</li>
        </ul>

        <ul className="skills__list">
          <li>Programowanie zorientowane obiektowo</li>
          <li>Wzorce projektowe</li>
          <li>DDD / CQRS</li>
          <li>Git, GitLab, BitBucket, AzureGIT</li>
          <li>Scrum, Agile</li>
          <li>Praca zespołowa</li>
          <li>Komunikatywność</li>
          <li>Jira, Confluence, Redmine</li>
          <li>Figma</li>
        </ul>
      </div>
    </div>
  );
}

export default Skills;
