import React from "react";
import Button from "@/shared/components/button/Button";
import InputField from "@/shared/components/InputField";
import Header from "@/shared/components/header/Header";
import { useAuthStore } from "@/features/auth/store";
// import { useUserStore } from "@/features/user/store";

const LoginPage: React.FC = () => {
  const email = useAuthStore((state) => state.email)
  const password = useAuthStore((state) => state.password)
  const setEmail = useAuthStore((state) => state.setEmail)
  const setPassword = useAuthStore((state) => state.setPassword)
  const isButtonDisabled = useAuthStore((state) => state.isButtonDisabled)

  return (
    <div className="flex flex-col items-center justify-center space-y-3">
      <Header text="로그인"/>
      <InputField placehold="이메일" value={email} onChange={(e) => setEmail(e.target.value)} size="large"/>
      <InputField placehold="비밀번호" value={password} onChange={(e) => setPassword(e.target.value)} size="large"/>
      <Button text="확인" className='large' disable={isButtonDisabled} outline={true}/>
      <button className="font-pretendard font-regular text-[12px] text-password-miss underline underline-offset-4 decoration-black decoration-0.7">비밀번호를 잊었다면?</button>
    </div>
  );
};

export default LoginPage;

