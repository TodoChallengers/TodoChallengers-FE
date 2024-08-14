import React from 'react'
import { NavLink } from 'react-router-dom'
import { ReactComponent as FeedActiveIcon } from '@/assets/tab/feed-active.svg'
import { ReactComponent as FeedInactiveIcon } from '@/assets/tab/feed-inactive.svg'
import { ReactComponent as SearchActiveIcon } from '@/assets/tab/search-active.svg'
import { ReactComponent as SearchInactiveIcon } from '@/assets/tab/search-inactive.svg'
import { ReactComponent as MyPageActiveIcon } from '@/assets/tab/mypage-active.svg'
import { ReactComponent as MyPageInactiveIcon } from '@/assets/tab/mypage-inactive.svg'


const MainTab: React.FC = () => {
  const getNavLinkClass = ({ isActive }: { isActive: boolean }) =>
    isActive ? 
  'flex flex-col items-center text-black text-[8px] font-pretendard font-semibold space-y-[5px]' : 
  'flex flex-col items-center text-tab-inactive text-[8px] font-pretendard font-medium space-y-[5px]'

  return (
    <div className='flex flex-row item-center justify-center h-[70px] bg-white fixed bottom-0 w-full'>
      <nav className="flex items-center w-middle justify-around">
        <NavLink to="/feed" className={getNavLinkClass}>
          {({ isActive }) => (
            <>
              {isActive ? <FeedActiveIcon /> : <FeedInactiveIcon />}
              <span>피드</span>
            </>
          )}
        </NavLink>
        <NavLink to="/search" className={getNavLinkClass}>
          {({ isActive }) => (
            <>
              {isActive ? <SearchActiveIcon/> : <SearchInactiveIcon/>}
              <span>검색</span>
            </>
          )}
        </NavLink>
        <NavLink to="/mypage" className={getNavLinkClass}>
          {({ isActive }) => (
            <>
              {isActive ? <MyPageActiveIcon/> : <MyPageInactiveIcon/>}
              <span>My</span>
            </>
          )}
        </NavLink>
      </nav>
    </div>
  );
};

export default MainTab;