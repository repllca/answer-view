
import React, { useState } from "react";
import { postRegistar } from "../api/kadai_api";
import { Registar } from "../types";
const RegistarForm : React.FC<Registar> = (props) => {
  const [formData, setFormData] = useState<Registar>({
    username : "",
    password1 : "",
    password2 : "",
    email : "",
    school : ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await postRegistar(formData);
      // 成功した場合の処理
    } catch (error) {
      console.error('Error submitting form:', error);
      // エラー処理
    }
  };
  return(
    <div>

        <form onSubmit={handleSubmit}>
            <input type="text" name="username" value={formData.username} onChange={handleChange} />
            <input type="text" name="password1" value={formData.password1} onChange={handleChange} />
            <input type="text" name="password2" value={formData.password2} onChange={handleChange} />
            <input type="text" name="email" value={formData.email} onChange={handleChange} />
            <input type="text" name="school" value={formData.school} onChange={handleChange} />
            <button type="submit">Submit</button>
        </form>
    </div>
  );

};

export default RegistarForm ;