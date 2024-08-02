import React from 'react';

interface ButtonProps {
  text: string;
  // className?: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ text, onClick }) => {
  return (
    <button
      className= "bg-gray-500"
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;