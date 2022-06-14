import React, { PropsWithRef } from 'react';
import './CompanyAvatar.scss';

export interface CompanyAvatarProps {
  src: string;
  alt: string;
}

function CompanyAvatar(props: PropsWithRef<CompanyAvatarProps>) {
  const { src, alt } = props;

  return (
    <div className="company-avatar">
      <img
        className="company-avatar__image"
        src={src}
        alt={alt}
      />
    </div>
  );
}

export default CompanyAvatar;
