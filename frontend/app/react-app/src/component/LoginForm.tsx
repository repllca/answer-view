import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { Kadai } from "../types";
import { Login } from "../types";
import { postLogin} from "../api/kadai_api";
import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
  VStack,
} from '@chakra-ui/react'

const LoginForm: React.FC<Login> = (props) => {
  
  const navigate = useNavigate();
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
      const responseData =  await postLogin(formData);
      // 成功した場合の処理
      if(responseData && responseData.access){

        navigate("/kadai_api")
      }else{
        console.log("ページ遷移はできてないよ")
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      // エラー処理
    }
  };
  return(
    <div>
      <Flex
      flexDirection='column'
      width='100%'
      height='100vh'
      justifyContent='center'
      alignItems='center'
    >
      <VStack spacing='5'>
        <Heading>ログイン</Heading>
        <form onSubmit={handleSubmit}>
          <VStack spacing='4' alignItems='left'>
            <FormControl>
              <FormLabel htmlFor='email' textAlign='start'>
                username
              </FormLabel>
              <Input variant='filled'type="text" name="username" value={formData.username} onChange={handleChange} />
            </FormControl>

            <FormControl>
              <FormLabel htmlFor='password'>password</FormLabel>
              <InputGroup size='md'>
              <Input variant="filled" type="text" name="password" value={formData.password} onChange={handleChange} />
                <InputRightElement width='4.5rem'>
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <Button
              marginTop='4'
              color='white'
              // as = "a"
              // href = "kadai_api"
              bg='teal.400'
              type='submit'
              paddingX='auto'
            >
              ログイン
            </Button>
            <Button
              bg='white'
              as = "a"
              href = "registar"
              color='black'
              width='100%'
              
            >
              新規登録はこちらから
            </Button>
          </VStack>
        </form>
      </VStack>
    </Flex>
    </div>
  );

};

export default LoginForm;