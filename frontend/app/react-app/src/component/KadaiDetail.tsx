import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { Kadailist } from "../types";
import { nitani } from "../types";
import { Kadai } from "../types";
import { getKadaiDetail } from "../api/kadai_api";
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
const Kadaiprint: React.FC<nitani> = (props) => {

  const navigate = useNavigate();
  const [formData, setFormData] = useState<nitani>({
    owner:"",
    title:"",
    date:"",
    id:0
  });


  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await getKadaiDetail(formData.id);

      const url = "/myapp/kadai/list/" + String(formData.id)+ "/detail/"
      navigate(url)
      // 成功した場合の処理
    } catch (error) {
      console.error('Error submitting form:', error);
      // エラー処理
    }
  };

  return (
  <div>
<Card
  direction={{ base: 'column', sm: 'row' }}
  overflow='hidden'
  variant='outline'
>
  <Image
    objectFit='cover'
    maxW={{ base: '100%', sm: '200px' }}
    src='https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60'
    alt='Caffe Latte'
  />

  <Stack>
    <CardBody>
      <Heading size='md'>{props.title}</Heading>

      <Text py='2'>
        Caffè latte is a coffee beverage of Italian origin made with espresso
        and steamed milk.
      </Text>
    </CardBody>

    <CardFooter>
      <form onSubmit={handleSubmit}>
      <Button type="submit" variant='solid' colorScheme='blue'>
        詳細
      </Button>
      </form>
    </CardFooter>
  </Stack>
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
