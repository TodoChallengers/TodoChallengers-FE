import React from 'react';

interface ButtonProps {
  text: string;
  className?: string;
  onClick?: () => void;
  disable: boolean;
  outline: boolean;
}

const Button: React.FC<ButtonProps> = ({ text, className, onClick, disable, outline}) => {
  return (
    <button 
      className= {`w-${className} h-[50px] bg-button font-pretendard font-semibold text-[17px] ${disable ? "text-button-disable" : ""} ${outline ? "border-button border-0.5 ": ""} rounded-button`}
      onClick={disable ? ()=>{} : onClick}
    >
      {text}
    </button>
  );
};

export default Button;