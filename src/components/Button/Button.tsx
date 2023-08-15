import React, { ReactNode, MouseEvent } from 'react';

interface ButtonProps {
  label: ReactNode;
  onClick: (event: MouseEvent<HTMLButtonElement>) => void;
}

function Button({ label, onClick }: ButtonProps) {
  return (
    <button data-testid='btn' onClick={onClick}>
      {label}
    </button>
  );
}

export default Button;
