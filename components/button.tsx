import { MouseEventHandler, ReactNode } from 'react';

interface ButtonI {
  cb: MouseEventHandler<HTMLButtonElement>;
  children: ReactNode 
}

const Button = ({ cb, children }: ButtonI) => {
  return <button onClick={cb}>{children}</button>;
};

export default Button;
