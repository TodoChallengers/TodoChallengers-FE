import React from 'react';
import Header from "@/shared/components/header/Header";
import logo from '@/assets/todochallengers.png'

const AddGoalPage: React.FC = () => {
  const handleConfirm = () => {
    console.log('확인 버튼 클릭');
  };

  return (
    <div className="w-full min-h-screen flex flex-col">
      <Header
        text="목표"
        element={
          <button
            onClick={handleConfirm}
            className="font-pretendard font-bold text-[17px] focus:outline-none"
          >
            확인
          </button>
        }
      />
      <div className="pt-6 w-full max-w-screen-md mx-auto p-2">
        <div className="mb-4">
          <input
            id="goal"
            type="text"
            placeholder="목표 입력"
            className="w-full border-b-2 border-black py-2 font-pretendard font-semibold text-daily-menu focus:outline-none focus:border-black"
          />
        </div>

        <ul className="space-y-4 pt-2">
          <li className="flex justify-between items-center">
            <span className="font-pretendard font-normal">공개설정</span>
            <div className="flex items-center space-x-2">
              <img src={logo} alt="Example" className="w-5 h-5" />
              <select className="font-pretendard font-normal focus:outline-none">
                <option value="PUBLIC">전체 공개</option>
                <option value="PRIVATE">비공개</option>
                <option value="FRIENDS">친구 공개</option>
              </select>
            </div>
          </li>

          <div className="border-t border-popup-divider"></div>

          <li className="flex justify-between items-center">
            <span className="font-pretendard font-normal">색상</span>
            <div className="flex items-center space-x-2">
              <div className="w-5 h-5 bg-black rounded-full"></div>
              <select className="font-pretendard font-normal focus:outline-none">
                <option value="text-soft-peach">피치</option>
                <option value="text-mint-green">민트</option>
                <option value="text-lavender">라벤더</option>
                <option value="text-baby-blue">베이비 블루</option>
                <option value="text-pale-yellow">페일 옐로우</option>
                <option value="text-blush-pink">핑크</option>
                <option value="text-pistachio">피스타치오</option>
                <option value="text-powder-blue">파우더 블루</option>
              </select>
            </div>
          </li>
          <div className="border-t border-popup-divider"></div>

        </ul>
      </div>
    </div>
  );
};

export default AddGoalPage;
