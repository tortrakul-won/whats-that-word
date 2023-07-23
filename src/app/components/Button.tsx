import * as React from 'react';

interface ButtonProps {
  onClick?: Function;
  children: any;
}

export const Button: React.FC<ButtonProps> = ({ onClick, children }): JSX.Element => (
  <button
    onClick={onClick ? onClick() : null}
    className="px-4 py-2 text-4xl font-[600] italic border-[3px] border-black rounded-2xl pd-4 bg-orange-400
    hover:scale-[1.10] ease-in-out duration-100 active:hover:scale-90"
  >
    {children}
  </button>
);
