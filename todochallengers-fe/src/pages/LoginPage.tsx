import React from "react";
import Button from "@/shared/components/Button";
import InputField from "@/shared/components/InputField";
import Header from "@/shared/components/Header";

const LoginPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center space-y-3">
      <Header text="로그인"/>
      <InputField placehold="이메일" size="large"/>
      <InputField placehold="비밀번호" size="large"/>
      <Button text="확인" className='large' disable={true} outline={true}/>
      <button className="font-pretendard font-regular text-[12px] text-password-miss underline underline-offset-4 decoration-black decoration-0.7">비밀번호를 잊었다면?</button>
    </div>
  );
};

export default LoginPage;

