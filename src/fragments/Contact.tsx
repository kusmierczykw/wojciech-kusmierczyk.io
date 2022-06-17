import React from 'react';
import './Contact.scss';
import SectionTitle from './SectionTitle';
import ContactItem from './ContactItem';

function Contact() {
  return (
    <div className="contact">
      <SectionTitle title="Kontakt_" />

      <ContactItem icon="bi bi-geo-alt-fill">
        Partyzantów 30,
        <br />
        21-411 Wojcieszków
      </ContactItem>

      <ContactItem icon="bi bi-telephone-fill">
        <a href="tel:798359045">798 359 045</a>
      </ContactItem>

      <ContactItem icon="bi bi-envelope-fill">
        <a href="mailto:wojciech.kusmierczyk@outlook.com">
          wojciech.kusmierczyk@outlook.com
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
