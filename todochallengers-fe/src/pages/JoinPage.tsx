import React from "react";
import Button from "@/shared/components/Button";
import InputField from "@/shared/components/InputField";
import Header from "@/shared/components/Header";

const JoinPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center space-y-3">
      <Header text="가입하기"/>
      <InputField placehold="이메일" size="large"/>
      <InputField placehold="비밀번호" size="large"/>
      <Button text="확인" className='large' disable={true} outline={true}/>
    </div>
  );
};

export default JoinPage;
