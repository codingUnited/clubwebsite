import Link from 'next/link';
import { Box, Flex, HStack } from '@chakra-ui/react';

const Footer = () => {
    return (
        <Box bg="blue.900" px={8} py={4} color="white" borderBottom="1px solid" borderColor="whiteAlpha.200">
            <Flex h={16} alignItems="center" justifyContent="center">
                <p className="text-sm text-gray-400">&copy; 2026 Coding United Club. All rights reserved.</p>

                <HStack gap={8} alignItems="center" mx="auto">
                    <Link href="/" className="hover:text-blue-400 transition-colors">Home</Link>
                    <Link href="/about" className="hover:text-blue-400 transition-colors">About Us</Link>
                    <Link href="/faq" className="hover:text-blue-400 transition-colors">FAQ</Link>
                    <Link href="/session" className="hover:text-blue-400 transition-colors">Recordings</Link>
                </HStack>
            </Flex>
        </Box>
    );
};

export default Footer;