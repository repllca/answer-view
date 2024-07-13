import React, { useState } from "react";
import { Kadai } from "../types";
import { postKadai } from "../api/kadai_api";
import {
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
} from '@chakra-ui/react'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import { Card, CardHeader, CardBody, CardFooter,Image,Stack,Text,Divider,ButtonGroup} from '@chakra-ui/react'
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
const KadaiDetail: React.FC<Kadai> = (props) => {
  const [formData, setFormData] = useState<Kadai>({
    title: '',
    owner:"",
    date:"",
    answer: '',
    description: "",
  });

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

  return (
    <div>
        <h1>{props.answer}</h1>
        <h1>{props.date}</h1>
        <h1>{props.description}</h1>
        <h1>{props.owner}</h1>
        <h1>{props.title}</h1>
    </div>
  );
};

export default KadaiDetail;

