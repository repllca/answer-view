import React, { useState } from "react";

import { Kadai } from "../types";
import { postKadai } from "../api/kadai_api";

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
const KadaiForm: React.FC<Kadai> = (props) => {
  const [formData, setFormData] = useState<Kadai>({
    title: '',
    answer: '',
    owner: '',
    date:"",
    description:""

  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await postKadai(formData);
      // 成功した場合の処理
    } catch (error) {
      console.error('Error submitting form:', error);
      // エラー処理
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input type="text" name="title" value={formData.title} onChange={handleChange} />
      <Input type="text" name="description" value={formData.description} onChange={handleChange} />
      <Input type="text" name="answer" value={formData.answer} onChange={handleChange} />
      <Input type="text" name="owner" value={formData.owner} onChange={handleChange} />
      <Input type="text" name="date" value={formData.date} onChange={handleChange} />
      {/* <Input type="text" name="author" value={formData.author} onChange={handleChange} /> */}
      <Button type="submit">Submit</Button>
    </form>
  );
};

export default KadaiForm;
