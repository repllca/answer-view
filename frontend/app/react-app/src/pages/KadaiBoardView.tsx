import React, { useState, useEffect } from 'react';
import { nitani } from '../types';
import { getKadaiList, getTestList } from '../api/kadai_api';
import { Kadai } from '../types';
import KadaiProps from '../component/KadaiProps';
import KadaiForm from '../component/KadaiForm';
import { Kadailist } from '../types';
import { ScaleFade,Button,Box} from '@chakra-ui/react'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import { Card, CardHeader, CardBody, CardFooter,Image,Stack,Heading,Text,Divider,ButtonGroup} from '@chakra-ui/react'
import { title } from 'process';
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

        <Tabs size='md' variant='enclosed'>
            <TabList>
            <Tab>課題一覧</Tab>
            <Tab>課題投稿</Tab>
        </TabList>
        <TabPanels>
            <TabPanel>
            {kadailist?.results.map((kadai ,index) => (  
            
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
            ))}
            </TabPanel>
            {/* <TabPanel>

            {kadailist.map((kadai ,index) => (  
            
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
                        title={kadai.title}
                        question={kadai.question}
                        answer={kadai.answer}
                        author={kadai.author}
                        question_id={kadai.question_id}
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
            ))}
            <p>two!</p>
            </TabPanel> */}
            
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
        // <div>
        //     {kadailist.map((kadai ,index) => (
        //         <KadaiProps 
        //             key={index}
        //             title={kadai.title}
        //             question={kadai.question}
        //             answer={kadai.answer}
        //             author={kadai.author}
        //             question_id={kadai.question_id}
        //         />
        //     ))}

        //     <Button onClick={onToggle}>Click Me</Button>
        //     <ScaleFade initialScale={0.9} in={isOpen}>
        //         <Box
        //         p='40px'
        //         color='white'
        //         mt='4'
        //         bg='teal.500'
        //         rounded='md'
        //         shadow='md'
        //         >
        //         <KadaiForm
        //             title=''
        //             question=''
        //             answer=''
        //             author=''    
        //         />
        //         </Box>
        //     </ScaleFade>

        // </div>
    );
};

export default KadaiBordView;
