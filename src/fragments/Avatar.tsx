import * as React from 'react';
import AvatarImage from '../images/avatar.jpeg';
import './Avatar.scss';

function Avatar() {
  return (
    <div className="avatar">
      <img
        className="avatar__image"
        src={AvatarImage}
        alt="Zdjęcie Wojciech Kuśmierczyk"
      />
    </div>
  );
}

export default Avatar;
