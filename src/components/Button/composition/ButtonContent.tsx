import React from 'react';

interface ButtonContentProps {
  text: string;
  type: 'xs' | 'md' | 'lg';
}

export const ButtonContent = ({ text, type }: ButtonContentProps): any => {
  let buttonClass = '';

  switch (type) {
    case 'xs':
      buttonClass = 'text-xs';
      break;
    case 'md':
      buttonClass = 'text-md';
      break;
    case 'lg':
      buttonClass = 'text-lg';
      break;
    default:
      break;
  }
  return <div className={buttonClass}>{text}</div>;
};
