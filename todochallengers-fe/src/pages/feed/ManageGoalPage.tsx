import React from 'react';
import Header from "@/shared/components/header/Header";
import { ReactComponent as PlusIcon } from '@/assets/feed-page/add-goal.svg'
import { useNavigate } from "react-router-dom";


interface Goal {
  goal_name: string;
  state: string;
  color: string;
}

const goals: Goal[] = [
  { goal_name: '학교', state: 'PUBLIC', color: 'text-soft-peach'},
  { goal_name: '회의', state: 'PUBLIC', color: 'text-mint-green'},
  { goal_name: '할일', state: 'PUBLIC', color: 'text-lavender'},
  { goal_name: '식단', state: 'PUBLIC', color: 'text-baby-blue'},
  { goal_name: '운동', state: 'PUBLIC', color: 'text-pale-yellow'},
  { goal_name: '핑키프라이미스', state: 'PUBLIC', color: 'text-blush-pink'},
  { goal_name: '윗 시크릿', state: 'PUBLIC', color: 'text-pistachio'},
  { goal_name: '생일', state: 'PUBLIC', color: 'text-powder-blue'},
];

const GoalItem: React.FC<{ goal: Goal; onClick: () => void }> = ({ goal, onClick }) => (
  <div 
    className="flex justify-center items-center bg-button-border rounded-full px-3.5 py-1.5 space-x-2 w-fit"
    onClick={onClick}
  >
    <div className={`font-pretendard font-medium text-[16px] ${goal.color}`}>
      {goal.goal_name}
    </div>
  </div>
);

const GoalList: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="space-y-4 mt-4">
      {goals.map((goal, index) => (
        <GoalItem 
          key={index} 
          goal={goal} 
          onClick={() => navigate(`/feed/edit-goal`, { state: { goal } })}
        />
      ))}
    </div>
  );
}

const ManageGoalPage: React.FC = () => {
  const navigate = useNavigate();
  const handleNavigation = (route: string) => {
    navigate(route);
  };

  return (
    <div className="w-full min-h-screen flex flex-col">
      <Header
        text="목표"
        element={
          <button
            onClick={()=>{handleNavigation('/feed/add-goal');}}
            className="font-pretendard font-bold text-[24px] focus:outline-none"
          >
              <PlusIcon className="w-4 h-4 "/>
          </button>
        }
      />

      <div className="pt-6 w-full max-w-screen-md mx-auto p-2">
        <div className="font-pretendard font-medium text-login text-[14px]">일반</div>
        <GoalList />
      </div>
    </div>
  );
};

export default ManageGoalPage;
