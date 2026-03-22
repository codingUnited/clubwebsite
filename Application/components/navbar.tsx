"use client";

import { Box, Flex, Text, IconButton, Stack, HStack } from "@chakra-ui/react";
import { useState } from "react"; // Use standard React state
import Link from "next/link";
import { HiMenu, HiX } from "react-icons/hi";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Box as="nav" bg="blue.900" color="white" borderBottom="1px solid" borderColor="whiteAlpha.200">
      <Flex h={16} px={8} alignItems="center" justifyContent="space-between">
        <Text fontSize="xl" fontWeight="bold">Coding United</Text>

        {/* Hamburger Icon */}
        <IconButton 
          display={{ base: "flex", md: "none" }} 
          onClick={() => setIsOpen(!isOpen)}
          variant="solid"
          aria-label="Toggle Menu"
        >
          {isOpen ? <HiX /> : <HiMenu />}
        </IconButton>

        {/* Desktop Links */}
        <HStack gap={8} display={{ base: "none", md: "flex" }}>
          <NavLink href="/">Home</NavLink>
          <NavLink href="/about">About Us</NavLink>
          <NavLink href="/faq">FAQ</NavLink>
          <NavLink href="/contact">Contact</NavLink>
        </HStack>
      </Flex>

      {/* Manual Mobile Menu (No snippets required) */}
      {isOpen && (
        <Box display={{ md: "none" }} pb={4} px={8}>
          <Stack gap={4}>
            <NavLink href="/">Home</NavLink>
            <NavLink href="/about">About Us</NavLink>
            <NavLink href="/faq">FAQ</NavLink>
            <NavLink href="/contact">Contact</NavLink>
          </Stack>
        </Box>
      )}
    </Box>
  );
}

// Simple NavLink to avoid scope errors
const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <Link href={href} passHref>
    <Text _hover={{ color: "blue.400" }} py={2}>{children}</Text>
  </Link>
);