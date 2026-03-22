"use client";
import PageBuilder from "@/components/ui/page-builder";
import PageBuilderFooter from "@/components/ui/page-builder/template-builder/footer-template";
import Image from "next/image";
import { clubFeatures } from "@/app/data";
import { FeatureCard } from "@/components/cards/feature-card";
import React, { useEffect, useState } from "react";
import { Box, Heading, Text, Separator, Container, VStack, Carousel, IconButton, SimpleGrid  } from '@chakra-ui/react';
import { LuChevronLeft, LuChevronRight } from "react-icons/lu";



export default function Home() {
  const HomePage = new PageBuilderFooter();
  HomePage.setTitle("Coding United");
  HomePage.setDescription("Coding United");
  HomePage.setFooter(
    <footer className="bg-gray-800 text-white py-4 text-center">
      <p>&copy; 2024 Coding United. All rights reserved.</p>
    </footer>,
  );

  return (
    <>
      <title>{HomePage.getTitle()}</title>
      <section className="relative h-[70vh] overflow-hidden">
        <div className="relative w-full h-full group">
          {/* <!-- Background Image --> */}
          <img
            src="/images/HeroV2.jpg"
            alt="Default"
            className="absolute inset-0 w-full h-full object-cover object-bottom transition-opacity duration-300"
          />

        </div>
      </section>
      <Container maxW="container.md" py={20} textAlign="center" bg="bg">
        <VStack gap={10} align="stretch">
          <Box>
            <Heading as="h1" size="2xl" fontWeight="bold" letterSpacing="tight" color="fg">
              Welcome to Coding United
            </Heading>
            <Separator borderColor="border" borderBottomWidth="2px" mt={4} opacity={1} />
          </Box>

          <Text
            fontSize={{ base: '2xl', md: '4xl' }} fontFamily="serif" lineHeight="shorter" color="fg.muted" fontWeight="medium">
            A student-led tech club dedicated to building real-world projects,
              supporting academic success, and growing together through hands-on
              coding, curiosity, and collaboration.
          </Text>
        </VStack>
      </Container>
      <Container maxW="container.md" py={20} textAlign="center" bg="bg">
        <VStack gap={10} align="stretch">
          <Box>
            <Heading as="h1" size="2xl" fontWeight="bold" letterSpacing="tight" color="fg">
              Mission Statement
            </Heading>
            <Separator borderColor="border" borderBottomWidth="2px" mt={4} opacity={1} />
          </Box>

          <Text
            fontSize={{ base: '2xl', md: '4xl' }} fontFamily="serif" lineHeight="shorter" color="fg.muted" fontWeight="medium">
            Our mission is to foster a vibrant and inclusive community of
            student developers, empowering everyone with the skills and
            experience to succeed in the world of technology.
          </Text>
        </VStack>
      </Container>


      <FeatureCarousel />

    </>
  );
}

const allFeatures = clubFeatures.flat();


const FeatureCarousel = () => {

  return (
    <Box py={10} bg="bg.subtle">
      <Container maxW="7xl">
        <VStack gap={8}>
          <SimpleGrid 
            columns={{ base: 1, md: 2, lg: 3 }} 
            gap={6} 
            width="full"
          >
            {allFeatures.map((feature, index) => (
              <FeatureCard 
                key={`${feature.title}-${index}`}
                title={feature.title} 
                bgColor={feature.bgColor} 
                items={feature.items}
                height="full" 
              />
            ))}
          </SimpleGrid>
        </VStack>
      </Container>
    </Box>
  );
};
