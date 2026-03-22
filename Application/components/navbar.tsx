"use client";

import {
  Box,
  Flex,
  Text,
  IconButton,
  Stack,
  HStack,

} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import Link from "next/link";
import { HiMenu, HiX, HiMoon, HiSun } from "react-icons/hi";
import { useColorMode } from "@/components/ui/color-mode";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { colorMode, toggleColorMode } = useColorMode();
  const [mounted, setMounted] = useState(false);

  // Prevent hydration mismatch by waiting for mount
  useEffect(() => setMounted(true), []);

  return (
    <Box
      as="nav"
      // Using semantic bg for light/dark support, fallback to blue.900
      bg="blue.900"
      color="white"
      borderBottom="1px solid"
      borderColor="whiteAlpha.200"
      position="sticky"
      top={0}
      zIndex="docked"
    >
      <Flex h={16} px={8} alignItems="center" justifyContent="space-between">
        <Text fontSize="xl" fontWeight="bold">Coding United</Text>

        <HStack gap={4}>
          {/* Desktop Links */}
          <HStack gap={8} display={{ base: "none", md: "flex" }}>
            <NavLink href="/">Home</NavLink>
            <NavLink href="/about">About Us</NavLink>
            <NavLink href="/faq">FAQ</NavLink>
            <NavLink href="/contact">Contact</NavLink>
          </HStack>

          {/* Theme Toggle Button */}
          {mounted && (
            <IconButton
              variant="ghost"
              aria-label="Toggle color mode"
              onClick={toggleColorMode}
              color="current"
            >
              {colorMode === "light" ? <HiMoon /> : <HiSun />}
            </IconButton>
          )}

          {/* Hamburger Icon */}
          <IconButton
            display={{ base: "flex", md: "none" }}
            onClick={() => setIsOpen(!isOpen)}
            variant="outline"
            aria-label="Toggle Menu"
          >
            {isOpen ? <HiX /> : <HiMenu />}
          </IconButton>
        </HStack>
      </Flex>

      {/* Mobile Menu */}
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

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <Link href={href} passHref legacyBehavior>
    <Text
      as="a"
      cursor="pointer"
      _hover={{ color: "blue.400" }}
      fontWeight="medium"
      py={2}
    >
      {children}
    </Text>
  </Link>
);