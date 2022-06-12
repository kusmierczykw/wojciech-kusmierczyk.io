import React, { PropsWithoutRef } from 'react';

export interface SeparatorProps {
  size: string;
}

function Separator(props: PropsWithoutRef<SeparatorProps>) {
  const { size } = props;

  return <div style={{ paddingTop: size }} />;
}

export default Separator;
