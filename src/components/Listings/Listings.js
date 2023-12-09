import React from 'react';
import { Button, BreadcrumbLink,Stack } from '@chakra-ui/react'
import { Link as ChakraLink} from '@chakra-ui/react'
import { Link } from 'react-router-dom';
export default function Listings() {
    return (
        // <>
        // <h2>Listings</h2>
        
        
        //     <nav>
        //         <ul>
        //         <li>
        //             <Link to="/listings/111">111</Link>
        //         </li>
        //         <li>
        //             <Link to="/listings/222">222</Link>
        //         </li>
        //         <li>
        //             <Link to="/listings/333">333</Link>
        //         </li>
        //         </ul>
        //     </nav>
            
            
        // </>
    <Stack direction='row' spacing={4} align='center'>
        <Button colorScheme='teal' variant='solid'>
            <ChakraLink as={Link} to="/listings/111">111</ChakraLink>
        </Button>
        <Button colorScheme='teal' variant='outline'>
            <ChakraLink as={Link} to="/listings/222">222</ChakraLink>
        </Button>
        <Button colorScheme='teal' variant='ghost'>
            <ChakraLink as={Link} to="/listings/333">333</ChakraLink>
        </Button>   
    </Stack>
    )
}