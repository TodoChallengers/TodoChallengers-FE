import React from 'react'
import { ReactComponent as AlarmIcon } from '@/assets/feed-page/alarm.svg'
import { ReactComponent as MenuIcon } from '@/assets/feed-page/menu.svg'
import logo from '@/assets/todochallengers.png'

const MainHeader: React.FC = () => {
  return (
    <header className="w-full max-w-screen-md mx-auto flex justify-between items-center p-2">
      <div className='w-6 h-6 bg-button-border rounded-full flex justify-center items-center'>
        <img src={logo} alt="Example" className="w-4 h-4" />
      </div>
      <div className="flex space-x-4">
        <button className="w-6 h-6" onClick={() => {}}>
          <AlarmIcon/>
        </button>
        <button className="w-6 h-6" onClick={() => {}}>
          <MenuIcon/>
        </button>
      </div>
    </header>
  );
};

export default MainHeader;