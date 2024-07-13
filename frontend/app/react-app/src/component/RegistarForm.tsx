
import React, { useState } from "react";
import { postRegistar } from "../api/kadai_api";
import { Input ,Button} from '@chakra-ui/react'
import { Stack, HStack, VStack } from '@chakra-ui/react'
import { Registar } from "../types";
const RegistarForm : React.FC<Registar> = (props) => {
  const [formData, setFormData] = useState<Registar>({
    username : "",
    password1 : "",
    password2 : "",
    email : "",
    school_name : ""
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
            <Stack spacing={19}>
            <Input placeholder='ユーザーネーム' variant='Outline'type="text" name="username" value={formData.username} onChange={handleChange} />
            <Input placeholder='設定したいパスワードを入力してください' variant='Outline'type="text" name="password1" value={formData.password1} onChange={handleChange} />
            <Input placeholder='確認のためもう一度パスワードを入力してください' variant='Outline'type="text" name="password2" value={formData.password2} onChange={handleChange} />
            <Input placeholder='メールアドレス' variant='Outline'type="text" name="email" value={formData.email} onChange={handleChange} />
            <Input placeholder='所属している学校名' variant='Outline'type="text" name="school_name" value={formData.school_name} onChange={handleChange} />
            <Button type="submit">登録</Button>
  </Stack>
        </form>
    </div>
  );

};

export default RegistarForm ;