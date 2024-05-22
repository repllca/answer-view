import React from 'react';
import { Box, Heading, Text, Image, Stack } from '@chakra-ui/react';
import { KadaiProps } from '../types';

const Kadai: React.FC<KadaiProps> = ({title,author})=>{
    return(
        <Box>
            {title}
            {author}
        </Box>
    );
};

export default Kadai;