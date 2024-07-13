import React from "react";
import { useNavigate } from 'react-router-dom';
import { nitani } from "../types";
import { getKadaiDetail } from "../api/kadai_api";
import { Card, CardBody, CardFooter, Image, Stack, Text, Heading, Button } from '@chakra-ui/react'

interface KadaiprintProps {
  id: number;
  title: string;
  owner: string;
  date: string;
  onClick: (id: number, title: string) => void; // onClickのプロパティを定義
}

const Kadaiprint: React.FC<KadaiprintProps> = ({ id, title, owner, date, onClick }) => {

  // const handleDetailClick = async () => {
  //   try {
  //     await getKadaiDetail(id);
  //     // 成功した場合の処理
  //   } catch (error) {
  //     console.error('Error fetching kadai detail:', error);
  //     throw error; // エラーを再スローして親コンポーネントで処理できるようにする
  //   }
  // };

  return (
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
          <Heading size='md'>{title}</Heading>
          <Text py='2'>
            {owner} - {date}
          </Text>
        </CardBody>

        <CardFooter>
          <Button onClick={() => onClick(id, title)} variant='solid' colorScheme='blue'>
            詳細
          </Button>
        </CardFooter>
      </Stack>
    </Card>
  );
};

export default Kadaiprint;

