import React, { useState, useEffect } from 'react';
import { nitani } from '../types';
import { Header } from '../component/Header';
import Kadaiprint from '../component/Kadaiprint';
import { getKadaiList, getTestList } from '../api/kadai_api';
import { Kadai } from '../types';
import KadaiForm from '../component/KadaiForm';
import { Kadailist } from '../types';
import { ScaleFade,Button,Box} from '@chakra-ui/react'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import { Card, CardHeader, CardBody, CardFooter,Image,Stack,Heading,Text,Divider,ButtonGroup} from '@chakra-ui/react'
const KadaiBordView = () => {
    const [kadailists, setKadais] = useState<Kadai[]>([]);    
    const [kadailist, setKadai] = useState<Kadailist>();    
    const [isOpen, setIsOpen] = useState(false);
    let nitanilist  : nitani[];
    const onToggle = () => {
        setIsOpen(!isOpen);
      };
    // useEffect(() => {
    //     getKadaiList()
    //         .then((values: Kadai[]) => {
    //             setKadai(values);
    //         })
    // }, []);
    useEffect(() => {
        getTestList()
            .then((values: Kadailist) => {
                setKadai(values);
                console.log(values.results)
                nitanilist = values.results
                console.log(nitanilist)
            })
    }, []);

    
    return (
        <div>

      <Header/>
        <Tabs size='md' variant='enclosed'>
            <TabList>
            <Tab>課題一覧</Tab>
            <Tab>課題投稿</Tab>
        </TabList>
        <TabPanels>
            <TabPanel>
            {kadailist?.results.map((kadai ,index) => (  

                    <Kadaiprint
                    title={kadai.title}
                    owner ={kadai.date}
                    date = {kadai.date}
                    id = {kadai.id}
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
