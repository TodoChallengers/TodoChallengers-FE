import React from 'react';
import { ReactComponent as PlusIcon } from '@/assets/feed-page/popup-menu-plus.svg'
import { useNavigate } from "react-router-dom";

const PopupMenu: React.FC = () => {
  const navigate = useNavigate();
  const handleNavigation = (route: string) => {
    navigate(route);
  };

  return (
    <div className="absolute right-3 top-14 w-36 bg-white rounded-2xl shadow-popup-menu z-50">
      <div className="p-3 cursor-pointer hover:bg-gray-100 flex justify-between items-center" onClick={()=>{console.log("목표 추가")}}>
        <span className="font-pretendard font-medium text-[14px]" onClick={()=>{handleNavigation('/feed/add-goal');}}>목표 등록</span>
        <PlusIcon className="w-3.5 h-3.5 "/>
      </div>
      <div className="border-t border-popup-divider"></div>
      <div className="p-3 cursor-pointer font-pretendard font-medium text-[14px] hover:bg-gray-100" onClick={()=>{handleNavigation('/feed/manage-goal');}}>목표 관리</div>
      <div className="border-t border-popup-divider"></div>
      <div className="p-3 cursor-pointer font-pretendard font-medium text-[14px] hover:bg-gray-100">루틴 관리</div>
    </div>
  );
};

export default PopupMenu;