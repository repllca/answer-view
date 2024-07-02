import React, { useState, useEffect } from 'react';
import { getKadaiList, getTestList } from '../api/kadai_api';
import { Kadai } from '../types';
import KadaiProps from '../component/KadaiProps';
import KadaiForm from '../component/KadaiForm';
import { Test } from '../types';
import { ScaleFade,Button,Box} from '@chakra-ui/react'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import { Card, CardHeader, CardBody, CardFooter,Image,Stack,Heading,Text,Divider,ButtonGroup} from '@chakra-ui/react'
const KadaiBordView = () => {
    const [kadailist, setKadai] = useState<Kadai[]>([]);    
    const [testlist, setTest] = useState<Test[]>([]);    
    const [isOpen, setIsOpen] = useState(false);
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
            .then((values: Test[]) => {
                setTest(values);
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
                        This sofa is perfect for modern tropical spaces, baroque inspired
                        spaces, earthy toned spaces and for people who love a chic design with a
                        sprinkle of vintage design.
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

            {/* {testlist.map((test ,index) => (  
            
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
                        owner = {test.owner}
                        title = {test.title}
                        description = {test.description}
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
            ))} */}
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
