import React, { useState, useEffect } from 'react';
import { getKadaiList } from '../api/kadai_api';
import { Kadai } from '../types';
import KadaiProps from '../component/KadaiProps';
import KadaiForm from '../component/KadaiForm';
import { ScaleFade,Button,Box} from '@chakra-ui/react'

const KadaiBordView = () => {
    const [kadailist, setKadai] = useState<Kadai[]>([]);
    
    const [isOpen, setIsOpen] = useState(false);
    const onToggle = () => {
        setIsOpen(!isOpen);
      };
    useEffect(() => {
        getKadaiList()
            .then((values: Kadai[]) => {
                setKadai(values);
            })
    }, []);

    return (
        <div>
            {kadailist.map((kadai ,index) => (
                <KadaiProps 
                    key={index}
                    title={kadai.title}
                    question={kadai.question}
                    answer={kadai.answer}
                    author={kadai.author}
                    question_id={kadai.question_id}
                />
            ))}

            <Button onClick={onToggle}>Click Me</Button>
            <ScaleFade initialScale={0.9} in={isOpen}>
                <Box
                p='40px'
                color='white'
                mt='4'
                bg='teal.500'
                rounded='md'
                shadow='md'
                >
                <KadaiForm
                    title=''
                    question=''
                    answer=''
                    author=''    
                />
                </Box>
            </ScaleFade>

        </div>
    );
};

export default KadaiBordView;
