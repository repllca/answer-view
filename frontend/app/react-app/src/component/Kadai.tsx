import React from 'react';
import { Box, Heading, Input } from '@chakra-ui/react';
import { KadaiProps } from '../types';



const Kadai: React.FC<KadaiProps> = ({title,author})=>{
    
    return(
        <Box>
            
            {title}
            <Input placeholder='Basic usage' />
            {author}
        </Box>
    );
};

export default Kadai;