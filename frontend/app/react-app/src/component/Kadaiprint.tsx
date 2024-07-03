import React, { useState } from "react";
import { Kadailist } from "../types";
import { Kadai } from "../types";
import { postKadai } from "../api/kadai_api";
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
const Kadaiprint: React.FC<Kadai> = (props) => {
  const [formData, setFormData] = useState<Kadailist>({
    
    title:"",
    answer:"",
    owner?:"",
    description:"",
    date:""
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
  <div>
   <Card maxW='sm'>
                <CardBody>
                    <Image
                    src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
                    alt='Green double couch with wooden legs'
                    borderRadius='lg'
                    />
                    <Stack mt='6' spacing='3'>
                    <Heading size='md'>Living room Sofa</Heading>
                    <Text>
                    
                        key={index}
                        results = {kadai.owner}
                    </Text>
                    <Text color='blue.600' fontSize='2xl'>
                        $450
                    </Text>
                    </Stack>
                </CardBody>
                <Divider />
                <CardFooter>
                    <ButtonGroup spacing='2'>
                    <Button variant='solid' colorScheme='blue'>
                        Buy now
                    </Button>
                    <Button variant='ghost' colorScheme='blue'>
                        Add to cart
                    </Button>
                    </ButtonGroup>
                </CardFooter>
                </Card>
                </div>
    // <form onSubmit={handleSubmit}>
    //   <Input type="text" name="title" value={formData.title} onChange={handleChange} />
    //   <Input type="text" name="description" value={formData.description} onChange={handleChange} />
    //   <Input type="text" name="answer" value={formData.answer} onChange={handleChange} />
    //   <Input type="text" name="owner" value={formData.owner} onChange={handleChange} />
    //   <Input type="text" name="date" value={formData.date} onChange={handleChange} />
    //   {/* <Input type="text" name="author" value={formData.author} onChange={handleChange} /> */}
    //   <Button type="submit">Submit</Button>
    // </form>
  );
};

export default Kadaiprint;
