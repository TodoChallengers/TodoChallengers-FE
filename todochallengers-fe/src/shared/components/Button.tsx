import React from 'react';

interface ButtonProps {
  text: string;
  className?: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ text, className, onClick }) => {
  return (
    <button 
      className= {`w-${className} h-[50px] bg-button font-pretendard font-semibold text-[17px] rounded-button`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;