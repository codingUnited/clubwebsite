import Link from 'next/link';
import { Box, Flex, Stack } from '@chakra-ui/react';

const Footer = () => {
    return (
        <Box 
            as="footer"
            bg="blue.900" 
            px={8} 
            py={{ base: 8, md: 4 }} 
            color="white" 
            borderTop="1px solid" 
            borderColor="whiteAlpha.200">

            <Flex h={16} alignItems="center" justifyContent="center">
                <p className="text-sm text-gray-400">&copy; 2026 Coding United Club. All rights reserved.</p>

                <Stack 
                    direction={{ base: "column", sm: "row"}}
                    gap={{ base: 4, md: 8}}
                    alignItems="center" 
                    mx="auto">

                    <Link href="/" className="hover:text-blue-400 transition-colors">Home</Link>
                    <Link href="/about" className="hover:text-blue-400 transition-colors">About Us</Link>
                    <Link href="/faq" className="hover:text-blue-400 transition-colors">FAQ</Link>
                    <Link href="/contact" className="hover:text-blue-400 transition-colors">Contact</Link>
                </Stack>
            </Flex>
        </Box>
    );
};

export default Footer;