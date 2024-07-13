import React from 'react';
import LoginForm from '../component/LoginForm';
import { Header } from '../component/Header';
const LoginView: React.FC = () => {
  return (
    <div>
      <Header/>
                 <LoginForm
                    username=''
                    password=''
                />
    </div>
  );
};

export default LoginView