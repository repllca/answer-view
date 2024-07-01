import React from 'react';
import { Box } from '@chakra-ui/react';
import { Button, ButtonGroup } from '@chakra-ui/react'

const HomeView: React.FC = () => {
  return (
    <div>
      <h1>総合Topです</h1>
      <p>このアプリケーションは...</p>
      <ul>
        <li>あれができます</li>
        <li>これができません</li>
        <Box backgroundColor = "orange">this is the Box</Box>
        <Button colorScheme='blue'>ボタン</Button>
        <Button bgColor="red.500">ボタン</Button>
      </ul>
    </div>
  );
};

export default HomeView