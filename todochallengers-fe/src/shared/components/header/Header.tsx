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
    <div className='pt-6 w-full max-w-screen-md mx-auto flex justify-between items-center p-2'>
      <button 
        className='focus:outline-none'
        onClick={() => navigate(-1)}
      >
        <BackIcon/>
      </button>
      <p className='font-pretendard font-bold text-[17px]'>
        {text}
      </p>
      <div>
        {element}
      </div>
    </div>
  );
};

export default Header;