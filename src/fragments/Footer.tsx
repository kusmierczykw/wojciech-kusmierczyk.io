import React from 'react';
import './Footer.scss';

function Footer() {
  const date = new Date();
  const fullYear = date.getFullYear();

  return <div className="footer">Wojciech Kuśmierczyk &copy; {fullYear}</div>;
}

export default Footer;
