import React, { useState } from "react";
import { Kadai } from "../types";
import { Login } from "../types";
import { postLogin} from "../api/kadai_api";

const LoginForm: React.FC<Login> = (props) => {
  const [formData, setFormData] = useState<Login>({
    "username": "",
    "password":""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await postLogin(formData);
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
            <input type="text" name="password" value={formData.password} onChange={handleChange} />
            <button type="submit">Submit</button>
        </form>
    </div>
  );

};

export default LoginForm;
// const KadaiForm: React.FC<Kadai> = (props) => {
//   const [formData, setFormData] = useState<Kadai>({
//     title: '',
//     question: '',
//     answer: '',
//     author: ''
//   });

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     setFormData(prevData => ({ ...prevData, [name]: value }));
//   };

//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     try {
//       await postKadai(formData);
//       // 成功した場合の処理
//     } catch (error) {
//       console.error('Error submitting form:', error);
//       // エラー処理
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input type="text" name="title" value={formData.title} onChange={handleChange} />
//       <input type="text" name="question" value={formData.question} onChange={handleChange} />
//       <input type="text" name="answer" value={formData.answer} onChange={handleChange} />
//       <input type="text" name="author" value={formData.author} onChange={handleChange} />
//       <button type="submit">Submit</button>
//     </form>
//   );
// };

// export default KadaiForm;
