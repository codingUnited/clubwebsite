import Link from 'next/link';
import { Box, Flex, Stack, Text } from '@chakra-ui/react';

const Footer = () => {
    return (
        <Box 
            as="footer"
            bg="blue.900" 
            px={8} 
            py={{ base: 10, md: 6 }} 
            color="white" 
            borderTop="1px solid" 
            borderColor="whiteAlpha.200">

            <Flex 
                direction = {{ base: "column-reverse", md: "row" }}
                alignItems="center" 
                justifyContent="space-between"
                maxW = "1200px"
                mx="auto"
                >

                <Text
                    fontSize="sm"
                    color="gray.400"
                    mt={{ base: 6, md: 0 }} > 
                    &copy; 2026 Coding United Club. All Rights Reserved.
                </Text>

                <Stack 
                    direction={{ base: "column", sm: "row"}}
                    gap={{ base: 4, md: 8}}
                    alignItems="center">

                    <Link href="/"  scroll={true} className="hover:text-blue-400 transition-colors">Home</Link>
                    <Link href="/about" scroll={true} className="hover:text-blue-400 transition-colors">About Us</Link>
                    <Link href="/faq" scroll={true} className="hover:text-blue-400 transition-colors">FAQ</Link>
                    <Link href="/contact" scroll={true} className="hover:text-blue-400 transition-colors">Contact</Link>
                </Stack>
            </Flex>
        </Box>
    );
};

export default Footer;