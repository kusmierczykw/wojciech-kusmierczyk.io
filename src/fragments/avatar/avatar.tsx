import * as React from 'react';
import { CSSProperties, PropsWithoutRef } from 'react';
import AvatarImage from '../../images/avatar.jpeg';

export interface AvatarProps {
  size: string;
}

function Avatar(props: PropsWithoutRef<AvatarProps>) {
  const { size } = props;

  const imageStyles: CSSProperties = {
    borderRadius: size,
    width: size,
    height: size,
  };

  return (
    <img
      className="img-fluid"
      style={imageStyles}
      src={AvatarImage}
      alt="Zdjęcie"
    />
  );
}

export default Avatar;
