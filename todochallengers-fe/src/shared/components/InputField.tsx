import React from 'react';

interface InputProps {
  placehold: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  // theme: string;
  size: string;
}

const InputField: React.FC<InputProps> = ({ placehold, onChange, value, size}) => {
  return (
    <input
      type='text' 
      placeholder={placehold}
      value = {value}
      onChange={onChange}
      className= {`h-[50px] bg-transparent border-b-0.5 border-login w-${size} text-login font-pretendard font-semibold text-[17px] leading-tight focus:outline-none focus:border-black focus:text-black`}
    />
  );
};

export default InputField;