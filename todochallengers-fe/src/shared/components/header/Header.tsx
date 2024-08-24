import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ReactComponent as BackIcon} from '@/assets/back.svg';

interface HeaderProps {
  text: string;
  // theme: string;
  element?: React.ReactNode;
}

const Header: React.FC<HeaderProps> = ({text, element}) => {
  const navigate = useNavigate();

  return (
    <div className='w-large h-[70px] flex items-center justify-center w-large min-w-mid relative'>
      <button 
        className='absolute left-0 top-1/2 transform -translate-y-1/2 focus:outline-none'
        onClick={() => navigate(-1)}
      >
        <BackIcon/>
      </button>
      <p className='font-pretendard font-bold text-[17px]'>
        {text}
      </p>
      {element}
    </div>
  );
};

export default Header;