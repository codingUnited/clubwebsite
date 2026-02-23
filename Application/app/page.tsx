import PageBuilder from "@/components/ui/page-builder";
import PageBuilderFooter from "@/components/ui/page-builder/template-builder/footer-template";
import Image from "next/image";
import { clubFeatures } from "@/app/data";
import FeatureCard from "@/components/cards/feature-card";
import React from "react";
import { Box, Heading, Text, Separator, Container, VStack } from '@chakra-ui/react';

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
            src="/images/newhero.png"
            alt="Default"
            className="absolute inset-0 w-full h-full object-cover object-bottom transition-opacity duration-300"
          />

        </div>
        {/* <!-- Content Container --> */}
        <Box position="absolute" zIndex={10} top={{ base: "2", lg: "8%" }} left={{ base: "0", lg: "10" }} right={{ base: "0", lg: "auto" }} bg="blue.800/80" backdropFilter="blur(8px)" p={{ base: 4, lg: 10 }} rounded={{ base: "none", lg: "2xl" }} maxW={{ base: "4xl", lg: "2xl" }} textAlign="center" shadow="2xl">
          <VStack gap={5} align="stretch">
            <Heading as="h1" fontFamily="mono" color="gray.300" fontSize={{ base: "lg", md: "3xl" }} letterSpacing="wider">
              Welcome to Coding United
            </Heading>

            <Separator borderColor="gray.500/50" />

            <Text color="purple.200" fontSize={{ base: "sm", sm: "lg", md: "xl" }} lineHeight="tall" fontWeight="medium">
              A student-led tech club dedicated to building real-world projects,
              supporting academic success, and growing together through hands-on
              coding, curiosity, and collaboration.
              <Box as="span" display="block" mt={4} fontStyle="italic" color="whiteAlpha.900">
                We are not here to fit in. We are here to build, to learn, and to become.
              </Box>
            </Text>
          </VStack>
        </Box>
        )
      </section>
      <Container maxW="container.md" py={20} textAlign="center">
        <VStack gap={10} align="stretch">
          <Box>
            <Heading as="h1" size="2xl" fontWeight="bold" letterSpacing="tight" color="gray.800">
              Mission Statement
            </Heading>
            <Separator borderColor="black" borderBottomWidth="2px" mt={4} opacity={1} />
          </Box>

          <Text
            fontSize={{ base: '2xl', md: '4xl' }} fontFamily="serif" lineHeight="shorter" color="gray.700" fontWeight="medium">
            Our mission is to foster a vibrant and inclusive community of
            student developers, empowering everyone with the skills and
            experience to succeed in the world of technology.
          </Text>
        </VStack>
      </Container>

      <div className="flex flex-wrap justify-center p-2">
        {clubFeatures.map((row, rowIndex) => (
          <section className="flex flex-row" key={rowIndex}>
            {row.map((feature, index) => (
              <FeatureCard key={index} title={feature.title} bgColor={feature.bgColor} items={feature.items} />
            ))}
          </section>
        ))}
      </div>
    </>
  );
}
