import React, {useState} from "react";
import Button from "@/shared/components/button/Button";
import InputField from "@/shared/components/InputField";
import Header from "@/shared/components/header/Header";
// import { useAuthStore } from "@/features/auth/store";

const JoinPage: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const isButtonDisabled = !(email && password);

  return (
    <div className="flex flex-col items-center justify-center space-y-3">
      <Header text="가입하기"/>
      <InputField placehold="이메일" value={email} onChange={(e) => {setEmail(e.target.value); setName(e.target.value);}} size="large"/>
      <InputField placehold="비밀번호" value={password} onChange={(e) => setPassword(e.target.value)} size="large"/>
      <Button text="확인" className='large' disable={isButtonDisabled} outline={true}/>
    </div>
  );
};

export default JoinPage;
