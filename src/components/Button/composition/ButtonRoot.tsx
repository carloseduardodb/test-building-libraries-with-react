import React, { ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  styleType?: 'xs' | 'md' | 'lg';
}

export const ButtonRoot = ({
  children,
  styleType = 'md',
  ...props
}: ButtonProps) => {
  let buttonClass = '';

  switch (styleType) {
    case 'xs':
      buttonClass =
        'max-w-48 bg-blue-400 hover:bg-blue-600 text-white font-bold py-1 px-2 rounded';
      break;
    case 'md':
      buttonClass =
        'max-w-96 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded';
      break;
    case 'lg':
      buttonClass =
        'max-w-120 bg-blue-600 hover:bg-blue-800 text-white font-bold py-3 px-6 rounded';
      break;
    default:
      break;
  }

  return (
    <button className={buttonClass} type="button" {...props}>
      {children}
    </button>
  );
};
