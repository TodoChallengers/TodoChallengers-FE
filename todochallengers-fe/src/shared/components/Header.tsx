import React from 'react';

interface HeaderProps {
  text: string;
  // theme: string;
  element?: React.ReactNode;
}

const Header: React.FC<HeaderProps> = ({text, element}) => {
  return (
    <div className='w-large h-[70px] flex items-center justify-center w-large min-w-mid relative'>
      <button className='absolute left-0 top-1/2 transform -translate-y-1/2 focus:outline-none'>
        <svg width="13" height="22" viewBox="0 0 13 22" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 1L2 11L12 21" stroke="black" stroke-width="2"/>
        </svg>
      </button>
      <p className='font-pretendard font-bold text-[17px]'>
        {text}
      </p>
      {element}
    </div>
  );
};

export default Header;