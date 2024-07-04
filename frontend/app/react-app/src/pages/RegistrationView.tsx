import React from 'react';
import RegistarForm from '../component/RegistarForm';
import { Header } from '../component/Header';

const RegistrationView: React.FC = () => {
  return (
    <div>
      <Header/>
        <RegistarForm
          username = ""
          password1 =""
          password2 =""
          email =""
          school_name =""
        />
    </div>
  );
};

export default RegistrationView