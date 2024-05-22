import React from 'react';
import logo from './logo.svg';
import { Box } from '@chakra-ui/react';
import Kadai from "./component/Kadai";
import { KadaiProps } from './types';
import './App.css';

const kadais: KadaiProps[] =[
  {
    title: "今日の事",
    author: "aaa"
  },
  {
    title: "明日の事",
    author: "aaa"
  }
];

function App() {
  const count = 10

  return (
    <div className="App">
      
      <header className="App-header">
        <Box bgColor="twitter.500" w="200px" h="50px" color="white">This is the Box</Box>
        <LikeButton/>
        {kadais.map((tmp,index) =>(
          <Kadai
            key = {index}
            title = {tmp.title}
            author = {tmp.author}
          />
        ))}
      </header>
    </div>
  );
}

function LikeButton(){
  const count = 999;
  return <span className='likeButton'>♡{count}</span>
}

export default App;
