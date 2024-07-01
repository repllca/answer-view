import React from 'react';
import RegistarForm from '../component/RegistarForm';

const RegistrationView: React.FC = () => {
  return (
    <div>
        <RegistarForm
          username = ""
          password1 =""
          password2 =""
          email =""
          school =""
        />
    </div>
  );
};

export default RegistrationView