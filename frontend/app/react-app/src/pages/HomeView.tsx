import React from 'react';
import { Box } from '@chakra-ui/react';
import { Button, ButtonGroup } from '@chakra-ui/react'
import { Header } from '../component/Header';
const HomeView: React.FC = () => {
  return (
    <div>
        <Header/>
        <Box backgroundColor = "orange">this is the Box</Box>
        <Button colorScheme='blue'>ボタン</Button>
        <Button bgColor="red.500">ボタン</Button>
    </div>
  );
};

export default HomeView