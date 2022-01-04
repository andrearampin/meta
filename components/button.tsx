import { MouseEventHandler } from 'react';

interface ButtonI {
  cb: MouseEventHandler<HTMLButtonElement>;
}

const Button = ({ cb }: ButtonI) => {
  return <button onClick={cb}>Disconnect Wallet</button>;
};

export default Button;
