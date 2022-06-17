import React, { PropsWithRef } from 'react';
import './ContactIcon.scss';
import Icon, { IconDefinition } from './Icon';

export interface ContactIconProps {
  icon: IconDefinition;
}

function ContactIcon(props: PropsWithRef<ContactIconProps>) {
  const { icon } = props;

  return (
    <div className="contact-icon">
      <Icon icon={icon} />
    </div>
  );
}

export default ContactIcon;
