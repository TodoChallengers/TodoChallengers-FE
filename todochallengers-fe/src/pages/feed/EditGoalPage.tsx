import React, { useState } from 'react';
import Header from "@/shared/components/header/Header";
import logo from '@/assets/todochallengers.png'
import { useNavigate, useLocation } from 'react-router-dom';
import Button from '@/shared/components/button/Button';

interface Goal {
  goal_name: string;
  state: string;
  color: string;
  icon: string;
}

const EditGoalage: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { goal }: { goal: Goal } = location.state;

  const [goalName, setGoalName] = useState(goal.goal_name);
  const [goalState, setGoalState] = useState(goal.state);
  const [goalColor, setGoalColor] = useState(goal.color);

  const handleConfirm = () => {
    console.log('Goal updated:', { goalName, goalState, goalColor });
    navigate(-1); 
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
        <div className="flex items-center space-x-2 mb-4">
          <input
            type="text"
            value={goalName}
            onChange={(e) => setGoalName(e.target.value)}
            className={`w-full border-b-2 border-black py-2 font-pretendard font-semibold ${goalColor} focus:outline-none focus:border-black`}
          />
        </div>

        <ul className="space-y-4 pt-2">
          <li className="flex justify-between items-center">
            <span className="font-pretendard font-normal">공개설정</span>
            <div className="flex items-center space-x-2">
              <img src={logo} alt="Example" className="w-5 h-5" />
              <select
                value={goalState}
                onChange={(e) => setGoalState(e.target.value)}
                className="w-[80px] font-pretendard font-normal focus:outline-none"
              >
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
              <select
                value={goalColor}
                onChange={(e) => setGoalColor(e.target.value)}
                className="w-[80px] font-pretendard font-normal focus:outline-none"
              >
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

          <div className="flex space-x-4">
            <Button 
              text='종료하기'
              disable={false}
              outline={false}
              className='middle'
              onClick={handleConfirm}
            />
            <Button 
              text='삭제'
              disable={false}
              outline={false}
              className='middle'
            />
          </div>
        </ul>
      </div>
    </div>
  );
};

export default EditGoalage;
