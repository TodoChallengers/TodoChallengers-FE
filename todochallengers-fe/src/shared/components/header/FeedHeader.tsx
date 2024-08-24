import React from 'react'
import { ReactComponent as AlarmIcon } from '@/assets/feed-page/alarm.svg'
import { ReactComponent as MenuIcon } from '@/assets/feed-page/menu.svg'
import logo from '@/assets/todochallengers.png'
import PopupMenu from '@/features/feed/menu/popup-menu/ui/PopupMenu';
import usePopupMenu from '@/features/feed/menu/popup-menu/model/usePopupMenu';

const FeedHeader: React.FC = () => {
  const {isVisible,toggleMenu,containerRef} = usePopupMenu();
  return (
    <header ref={containerRef} className="relative pt-6 w-full max-w-screen-md mx-auto flex justify-between items-center p-2">
      <div className='w-6 h-6 bg-button-border rounded-full flex justify-center items-center'>
        <img src={logo} alt="Example" className="w-4 h-4" />
      </div>
      <div className="flex space-x-4">
        <button className="w-6 h-6" onClick={() => {}}>
          <AlarmIcon/>
        </button>
        <button className="w-6 h-6" onClick={toggleMenu}>
          <MenuIcon/>
        </button>
      </div>
      {isVisible && <PopupMenu/>}
    </header>
  );
};

export default FeedHeader;