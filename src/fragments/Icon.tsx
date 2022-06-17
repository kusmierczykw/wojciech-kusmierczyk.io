import './Icon.scss';
import React, { PropsWithRef } from 'react';

export type IconDefinition =
  | 'bi bi-telephone'
  | 'bi bi-telephone-fill'
  | 'bi bi-geo-alt-fill'
  | 'bi bi-envelope-fill'
  | 'bi bi-globe';

export interface IconProps {
  icon: IconDefinition;
}

function Icon(props: PropsWithRef<IconProps>) {
  const { icon } = props;

  return <i className={icon} />;
}

export default Icon;
