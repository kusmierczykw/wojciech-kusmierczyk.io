import React, { PropsWithChildren } from 'react';
import './ContactItem.scss';
import { IconDefinition } from './Icon';
import ContactIcon from './ContactIcon';

export interface ContactItemProps {
  icon: IconDefinition;
}

function ContactItem(props: PropsWithChildren<ContactItemProps>) {
  const { icon, children } = props;

  return (
    <div className="contact-item">
      <ContactIcon icon={icon} />
      <div className="contact-item__content">{children}</div>
    </div>
  );
}

export default ContactItem;
