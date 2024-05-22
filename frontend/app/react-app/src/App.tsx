import React from 'react';
import { useState, useEffect } from 'react';
import logo from './logo.svg';
import { Box } from '@chakra-ui/react';
import Kadai from "./component/Kadai";
import { KadaiProps } from './types';
import axios from 'axios';
import{Post} from "./types";
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
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    // HTTP GETリクエストを送信して投稿データを取得
    axios.get<Post[]>('http://localhost:8000/myapp')
      .then(response => {
        // レスポンスのデータを状態に設定
        setPosts(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []); // []を指定することで、マウント時の一度だけ実行される
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
        {posts.map((post, index) => (
          <Box key = {index}>{post.kadai}</Box>
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
