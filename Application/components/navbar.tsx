import {Box, Flex, HStack, Text} from "@chakra-ui/react";
import Link from "next/link";

export default function Navbar() {

    return (
        <Box bg="blue.900" px={8} py={4} color="white" borderBottom="1px solid" borderColor="whiteAlpha.200">
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <Link href="/">
          <Text fontSize="xl" fontWeight="bold" cursor="pointer" _hover={{ color: "blue.400" }}>Coding United</Text>
        </Link>
        <HStack gap={8}>
            <Link href="/" className="hover:text-blue-400 transition-colors">Home</Link>
            <Link href="/about" className="hover:text-blue-400 transition-colors">About Us</Link>
            <Link href="/faq" className="hover:text-blue-400 transition-colors">FAQ</Link>
            <Link href="/session" className="hover:text-blue-400 transition-colors">Recordings</Link>
        </HStack>
      </Flex>
    </Box>
  );
}