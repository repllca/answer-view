import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { Login } from "../types";
import { postLogin } from "../api/kadai_api";
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
} from '@chakra-ui/react';
import {
  useDisclosure,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from '@chakra-ui/react';

const LoginForm: React.FC<Login> = (props) => {
  const {
    isOpen: isVisible,
    onClose,
    onOpen,
  } = useDisclosure({ defaultIsOpen: false });

  const navigate = useNavigate();
  const [formData, setFormData] = useState<Login>({
    "username": "",
    "password": ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const responseData = await postLogin(formData);
      // 成功した場合の処理
      if (responseData && responseData.access) {
        navigate("/kadai_api");
      } else {
        onOpen();
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      onOpen();
    }
  };

  return (
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
                <FormLabel htmlFor='username' textAlign='start'>
                  username
                </FormLabel>
                <Input variant='filled' type="text" name="username" value={formData.username} onChange={handleChange} />
              </FormControl>

              <FormControl>
                <FormLabel htmlFor='password'>password</FormLabel>
                <InputGroup size='md'>
                  <Input variant="filled" type="password" name="password" value={formData.password} onChange={handleChange} />
                  <InputRightElement width='4.5rem'>
                  </InputRightElement>
                </InputGroup>
              </FormControl>

              {isVisible && (
                <Alert status='error'>
                  <AlertIcon />
                  <AlertTitle>パスワードかIDが間違っています</AlertTitle>
                  <AlertDescription>入力情報を確認してください。</AlertDescription>
                </Alert>
              )}

              <Button
                marginTop='4'
                color='white'
                bg='teal.400'
                type='submit'
                paddingX='auto'
              >
                ログイン
              </Button>
              <Button
                bg='white'
                as="a"
                href="/registar"
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
