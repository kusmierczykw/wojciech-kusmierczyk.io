import React from 'react';
import './Contact.scss';
import SectionTitle from './SectionTitle';
import ContactItem from './ContactItem';

function Contact() {
  return (
    <div className="contact">
      <SectionTitle title="Kontakt_" />

      <ContactItem icon="bi bi-linkedin">
        <a
          href="https://www.linkedin.com/in/wojciech-kusmierczyk/"
          target="_blank"
          rel="noreferrer"
        >
          wojciech-kusmierczyk
        </a>
      </ContactItem>

      <ContactItem icon="bi bi-globe">
        <a
          href="http://wojciech-kusmierczyk.pl"
          target="_blank"
          rel="noreferrer"
        >
          http://wojciech-kusmierczyk.pl
        </a>
      </ContactItem>
    </div>
  );
}

export default Contact;
