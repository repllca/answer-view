import React from 'react';
import LoginForm from '../component/LoginForm';

const LoginView: React.FC = () => {
  return (
    <div>
      <h1>総合Topです</h1>
      <p>このアプリケーションは...</p>
                 <LoginForm
                    username=''
                    password=''
                />
      <ul>
        <li>あれができます</li>
        <li>これができません</li>
      </ul>
    </div>
  );
};

export default LoginView