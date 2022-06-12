import React, { PropsWithChildren } from 'react';
import './scaffold.scss';

function Scaffold(props: PropsWithChildren) {
  const { children } = props;

  return <div className="container">{children}</div>;
}

export default Scaffold;
