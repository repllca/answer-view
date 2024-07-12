import React, { useState, useEffect } from 'react';
import { Header } from '../component/Header';
import { useNavigate } from 'react-router-dom';
import Kadaiprint from '../component/Kadaiprint';
import KadaiForm from '../component/KadaiForm';
import { getKadaiList} from '../api/kadai_api';
import { Kadailist, Kadai } from '../types';
import { isGetKadaiDetail } from '../api/kadai_api';
import { getKadaiDetail } from '../api/kadai_api';
import { Tabs, TabList, TabPanels, Tab, TabPanel, Box } from '@chakra-ui/react';

import {
  useDisclosure,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from '@chakra-ui/react';
const KadaiBordView = () => {
  
  const {
    isOpen: isVisible,
    onClose,
    onOpen,
  } = useDisclosure({ defaultIsOpen: false });
  const [kadailist, setKadailist] = useState<Kadailist | null>(null);
  const navigate = useNavigate();
  useEffect(() => {
    getKadaiList()
      .then((values: Kadailist) => {
        setKadailist(values);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const handleKadaiDetail = async (id: number,title: string) => {
    console.log(id)
    const url = "/detail/"+id
    try {
      const response = await isGetKadaiDetail(id);
      console.log("responseのstatus",response.status) 
      // 成功した場合の処理
      if(response.status == 200){
        navigate(url)
      };

        onOpen();
    } catch (error) {
      
        onOpen();
      console.error('Error submitting form:', error);
      // エラー処理
    }
  };

  return (
    <div>
      <Header />
              {isVisible && (
                <Alert status='error'>
                  <AlertIcon />
                  <AlertTitle>見るためにはログインする必要があります。</AlertTitle>
                  <AlertDescription color={'blue'}as="a"href='/login'>ログイン</AlertDescription>
                </Alert>
              )}
        
      <Tabs size='md' variant='enclosed'>
        <TabList>
          <Tab>課題一覧</Tab>
          <Tab>課題投稿</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            {kadailist?.results.map((kadai, index) => (
              <Kadaiprint
                key={kadai.id}
                id={kadai.id}
                title={kadai.title}
                owner={kadai.owner}
                date={kadai.date}
                onClick={handleKadaiDetail} // onClickプロパティに関数を渡す
              />
            ))}
          </TabPanel>
          <TabPanel>
            <KadaiForm
              title=''
              description=''
              answer=''
              owner=''
              date=''
            />
            <p>two!</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  );
};

export default KadaiBordView;


