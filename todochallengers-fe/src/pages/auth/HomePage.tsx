import React from "react";
import logo from '@/assets/todochallengers.png';
import Button from '../../shared/components/button/Button';
import { useNavigate } from "react-router-dom";

const HomePage: React.FC = () => {
  const navigate = useNavigate()

  return (
    <div className="flex flex-col items-center justify-between min-h-screen">
      <div className="flex flex-col items-center justify-center flex-grow">
        <img src={logo} alt="Example" className="w-img h-img mb-4" />
        <p className="font-pretendard font-extrabold text-[40px]">todo challengers</p>
        <p className="font-pretendard font-light text-[17px]">다같이 챌린지하세요.</p>
      </div>
      <div className="flex flex-col items-center justify-center space-y-3 pb-9">
        <Button 
          text="로그인" 
          className="middle" 
          disable={false} 
          outline={false}
          onClick={() => {navigate('/login')}}
        />
        <button 
          className="font-pretendard font-semibold text-[17px] underline underline-offset-4 decoration-underline"
          onClick={() => {navigate('/join')}}
        >
          가입하기
        </button>
      </div>
    </div>
  );
};

export default HomePage;