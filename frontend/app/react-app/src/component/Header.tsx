/* src/components/Header.tsx */
import {
    Box,
    Flex,
    Container,
    Heading,
} from '@chakra-ui/react';
import { FC } from 'react';

export const Header: FC = (props) => {    
    
    return (
        <Box px={4} bgColor="gray.100">
            <Container maxW="container.lg">
                <Flex as="header" py="4" justifyContent="space-between" alignItems="center">
                        <Heading as='h1' fontSize="2xl" cursor="pointer">
                              Answer-view
                        </Heading>
                </Flex>
            </Container>
        </Box>
    );
}