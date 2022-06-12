import React, { PropsWithRef } from 'react';
import './section-title.scss';

export interface SectionTitleProps {
  title: string;
}

function SectionTitle(props: PropsWithRef<SectionTitleProps>) {
  const { title } = props;

  return <div className="section-title">{title}</div>;
}

export default SectionTitle;
