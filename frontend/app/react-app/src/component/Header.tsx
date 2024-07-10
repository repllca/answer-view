/* src/components/Header.tsx */
import {
    Button,
    Box,
    Flex,
    Container,
    Heading,
    Spacer,
    ButtonGroup,
    Menu,
    MenuButton,
    MenuList,
    IconButton,
    MenuItem,
} from '@chakra-ui/react';
import { FC } from 'react';

export const Header: FC = (props) => {    
    
    return (
        <Flex minWidth='max-content' alignItems='center' gap='4' bg="gray.100"px={4}>
        <Box p='2'>
            <Heading size='md'>answer-view</Heading>
        </Box>
        <Spacer />
        <ButtonGroup gap='2'>
            <Menu>
            <MenuButton
                as={IconButton}
                aria-label='Options'
                variant='outline'
            />
            <MenuList>
                <MenuItem as={"a"}href='/login'>
                Login
                </MenuItem>
                <MenuItem as={"a"}href='/login'>
                Sign in
                </MenuItem>
                
            </MenuList>
            </Menu>
            {/* <Button bg='teal.300' as="a"href='/registar'>Sign Up</Button>
            <Button bg='teal.300'as="a" href='/login'>Log in</Button> */}
        </ButtonGroup>
        </Flex>
    );
}