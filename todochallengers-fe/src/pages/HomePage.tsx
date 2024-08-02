import React from "react";
import logo from '@/assets/todochallengers.png';
import Button from '../shared/components/Button';

const HomePage: React.FC = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center min-h-screen">
        <img src={logo} alt="Example" className="w-img h-img mb-4" />
        <p className="font-pretendard font-extrabold text-[40px]">todo challengers</p>
        <p className="font-pretendard font-light text-[17px]">다같이 챌린지하세요.</p>
      </div>
      <div className="flex flex-col items-center justify-center space-y-3 pb-9">
        <Button text="로그인" className='mid' disable={false} outline={false}/>
        <button className="font-pretendard font-semibold text-[17px] underline underline-offset-4 decoration-underline">가입하기</button>
      </div>
    </div>
  );
};

export default HomePage;