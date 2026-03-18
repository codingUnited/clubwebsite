"use client";
import PageBuilder from "@/components/ui/page-builder";
import {
  Box, Heading, Text, Separator, Container, VStack,
  Card, Center, Button, Drawer, Portal, Flex, List, Strong
} from '@chakra-ui/react';
import boardMembers from "@/data/board-members.json";



const OfficerDrawer = ({ member }: { member: typeof boardMembers[0] }) => (
  <Drawer.Root>
    <Drawer.Trigger asChild>
      <Button variant="outline" size="sm" bg="darkblue" color="white" _hover={{ bg: "blue.700" }}>
        {member.title}
      </Button>
    </Drawer.Trigger>
    <Portal>
      <Drawer.Backdrop />
      <Drawer.Positioner>
        <Drawer.Content bg="bg.panel" color="fg">
          <Drawer.Header borderBottomWidth="1px" borderColor="border.muted">
            <Drawer.Title>{member.title}<br />{member.name}</Drawer.Title>
          </Drawer.Header>
          <Drawer.Body>
            <VStack gap={4} py={4}>
              <img
                className="rounded-lg object-contain w-full h-auto"
                src={member.image}
                alt={member.name}
                style={{ maxWidth: "250px" }}
              />
              <Box textAlign="left" w="full">
                <Text fontSize="sm"><Strong>Major:</Strong> {member.major}</Text>
                <Text fontSize="sm"><Strong>Concentration:</Strong> {member.concentration}</Text>
                {member.bio && <Text fontSize="sm" mt={2} fontStyle="italic">{member.bio}</Text>}

                <Separator my={4} />

                <Text fontWeight="bold" mb={2}>Goals:</Text>
                {member.goals.length > 1 ? (
                  <List.Root variant="marker">
                    {member.goals.map((goal, i) => (
                      <List.Item key={i} fontSize="sm">{goal}</List.Item>
                    ))}
                  </List.Root>
                ) : (
                  <>{member.goals.map((goal) => (
                    <Text key={goal} fontSize="sm" whiteSpace={"pre-line"}>{goal}</Text>
                  ))}</>


                )}
              </Box>
            </VStack>
          </Drawer.Body>
          <Drawer.Footer>
          </Drawer.Footer>
        </Drawer.Content>
      </Drawer.Positioner>
    </Portal>
  </Drawer.Root>
);

export default function About() {
  const AboutPage = new PageBuilder();
  AboutPage.setTitle("About Us");

  return (
    <>
      <title>{AboutPage.getTitle()}</title>

      <Container maxW="container.md" py={10} textAlign="center">
        <VStack gap={10} align="stretch">
          <Box>
            <Heading as="h1" size="2xl" fontWeight="bold" color="fg">About the Club</Heading>
            <Separator borderColor="border" borderBottomWidth="2px" mt={4} />
            <Text mt={6} fontSize="xl" fontFamily="serif" color="fg.muted">
              We are a university club focused on helping members grow their coding skills, learn industry tools, and prepare for careers in Software Engineering, Game Development, Network Engineering, or DevOps.
            </Text>
          </Box>

          <Box>
            <Heading as="h1" size="2xl" fontWeight="bold" color="fg">Our Mission</Heading>
            <Separator borderColor="border" borderBottomWidth="2px" mt={4} />
            <Text mt={6} fontSize="xl" fontFamily="serif" color="fg.muted">
              To support every member on their journey by providing resources, training materials, hands-on projects, coding challenges, and a strong peer support network.
            </Text>
          </Box>
        </VStack>
      </Container>

      {/* Board Section */}
      <Container maxW="container.lg" py={5} textAlign="center">
        <Heading size="xl" mb={4} color="fg">Meet the Board</Heading>
        <Separator borderColor="border" mb={8} />
        <Flex wrap="wrap" justify="center" gap={4}>
          {boardMembers.filter(member => member.role === "board").map((member, index) => (
            <OfficerDrawer key={index} member={member} />
          ))}
        </Flex>
      </Container>

      {/* Council of Project and Courses Section */}
      <Container maxW="container.lg" py={5} textAlign="center">
        <Heading size="xl" mb={4} color="fg">Meet the Council of Projects and Courses</Heading>
        <Separator borderColor="border" mb={8} />
        <Flex wrap="wrap" justify="center" gap={4}>
          {boardMembers.filter(member => member.role === "projects").map((member, index) => (
            <OfficerDrawer key={index} member={member} />
          ))}
        </Flex>
      </Container>
      {/* Council of Membership Section */}
      <Container maxW="container.lg" py={5} textAlign="center">
        <Heading size="xl" mb={4} color="fg">Meet the Council of Membership</Heading>
        <Separator borderColor="border" mb={8} />
        <Flex wrap="wrap" justify="center" gap={4}>
          {boardMembers
            .filter(member => member.role === "membership")
            .map((member, index) => (
              <OfficerDrawer key={index} member={member} />
            ))}
        </Flex>
      </Container>

      
      {/* Council of Mentorship Section */}
      <Container maxW="container.lg" py={5} textAlign="center">
        <Heading size="xl" mb={4} color="fg">Meet the Council of Mentorship</Heading>
        <Separator borderColor="border" mb={8} />
        <Flex wrap="wrap" justify="center" gap={4}>
          {boardMembers
            .filter(member => member.role === "mentor")
            .map((member, index) => (
              <OfficerDrawer key={index} member={member} />
            ))}
        </Flex>
      </Container>

      {/* Council of Engagement Section */}
      <Container maxW="container.lg" py={5} textAlign="center">
        <Heading size="xl" mb={4} color="fg">Meet the Council of Engagement</Heading>
        <Separator borderColor="border" mb={8} />
        <Flex wrap="wrap" justify="center" gap={4}>
          {boardMembers
            .filter(member => member.role === "engagement")
            .map((member, index) => (
              <OfficerDrawer key={index} member={member} />
            ))}
        </Flex>
      </Container>
    </>
  );
}