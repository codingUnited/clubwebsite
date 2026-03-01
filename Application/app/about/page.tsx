"use client";
import PageBuilder from "@/components/ui/page-builder";
import { Box, Heading, Text, Separator, Container, VStack, Collapsible, Card, Center, Button, Drawer, Portal, CloseButton } from '@chakra-ui/react';

export default function About() {
  const AboutPage = new PageBuilder();
  AboutPage.setTitle("About Us");
  AboutPage.setDescription(
    "Learn more about our club, our mission, and the amazing people who make it all possible. From our dedicated board members to our passionate members, discover the heart and soul of our community.",
  );
  return (
    <>
      <title>{AboutPage.getTitle()}</title>

      <Container maxW="container.md" py={10} textAlign="center">
        <VStack gap={5} align="stretch">
          <Box>
            <Heading as="h1" size="2xl" fontWeight="bold" letterSpacing="tight" color="gray.800">
              About the Club
            </Heading>
            <Separator borderColor="black" borderBottomWidth="2px" mt={4} opacity={1} />
          </Box>

          <Text
            fontSize={{ base: '2xl', md: '2xl' }} fontFamily="serif" lineHeight="shorter" color="gray.700" fontWeight="medium">
            We are a university club focused on helping members grow their coding skills, learn industry tools, and prepare for careers in their chosen specialization, whether that's Software Engineering, Game Development, Network Engineering, or DevOps.
          </Text>
        </VStack>
      </Container>

      <Container maxW="container.md" py={1} textAlign="center">
        <VStack gap={5} align="stretch">
          <Box>
            <Heading as="h1" size="2xl" fontWeight="bold" letterSpacing="tight" color="gray.800">
              Our Mission
            </Heading>
            <Separator borderColor="black" borderBottomWidth="2px" mt={4} opacity={1} />
          </Box>

          <Text
            fontSize={{ base: 'xl', md: '2xl' }} fontFamily="serif" lineHeight="shorter" color="gray.700" fontWeight="medium">
            To support every member on their journey by providing resources, training materials, hands-on projects, coding challenges, and a strong peer support network.
          </Text>
        </VStack>
      </Container>


      <Card.Root as={Container} py={1} textAlign="center" bg={"white"} unstyled={true}>
        <VStack gap={5} align="stretch">
          <Box>
            <Heading as="h1" size="2xl" fontWeight="bold" letterSpacing="tight" color="gray.800">
              Meet the Board
            </Heading>
            <Separator borderColor="black" borderBottomWidth="1px" mt={4} opacity={1} />
          </Box>
        </VStack>

        <Center className=" flex flex-row text-black text-center text-lg px-4 py-12">
          <Drawer.Root>
            <Drawer.Trigger asChild>
              <Button variant="outline" size="sm" bg="darkblue" color="white">
                Club President
              </Button>
            </Drawer.Trigger>
            <Portal>
              <Drawer.Backdrop />
              <Drawer.Positioner>
                <Drawer.Content>
                  <Drawer.Header>
                    <Drawer.Title>Club President<br />Tony Davis</Drawer.Title>
                  </Drawer.Header>
                  <Drawer.Body>
                    <img
                      className="my-3 w-full h-75 object-contain"
                      src="/images/tony_davis.jpg"
                      alt="Tony Davis Avatar"
                      style={{ maxWidth: "300px", maxHeight: "300px", borderRadius: "10%", marginBottom: "1rem" }}
                    />
                    <ul className="space-y-0.5 text-center px-4">
                      <li>Fraud Analyst Turned Developer</li>
                      <li>Major: Computer Science</li>
                      <li>Concentration: Software Engineering</li>
                      <li className="text-left">
                        <br />
                        <strong>Goals:</strong>
                        <ul className="list-disc list-inside ml-5 space-y-1">
                          <li>-Strengthen leardership and organizational efficiency within the club, improving communication, structur, and resource sharing</li>
                          <li>-Create and lead a recurring "Introduction to Coding United" session each term, helping new members understand tools, collaboration practices, and project pathways</li>
                          <li>-Build a strong portfolio of creative and technical projects to support long-term goals in software engineering and emerging tech</li>
                          <li>-Grow skills in software engineering and web development, focusing on full-stack projects using React, Flask, APIs, and Cloud Services</li>
                          <li>-Explore robotics simulations as an extension of problem-solving and system design, including embedded engineering</li>
                          <li>-Build Python-based automation and AI/ML tools, drawing from fraud-analysis experience and real industry workflows</li>
                        </ul>
                      </li>
                    </ul>
                  </Drawer.Body>
                  <Drawer.Footer>
                    <Drawer.CloseTrigger asChild>
                    <Button>Close</Button>
                    </Drawer.CloseTrigger>
                  </Drawer.Footer>
                </Drawer.Content>
              </Drawer.Positioner>
            </Portal>
          </Drawer.Root>

          <Drawer.Root>
            <Drawer.Trigger asChild>
              <Button variant="outline" size="sm" bg="darkblue" color="white">
                Club Vice President
              </Button>
            </Drawer.Trigger>
            <Portal>
              <Drawer.Backdrop />
              <Drawer.Positioner>
                <Drawer.Content>
                  <Drawer.Header>
                    <Drawer.Title>Club Vice President<br />Devell Robinson</Drawer.Title>
                  </Drawer.Header>
                  <Drawer.Body>
                    <img
                      className="my-3 w-full h-75 object-contain"
                      src="/images/Devell_New.png"
                      alt="Devell Avatar"
                      style={{ maxWidth: "300px", maxHeight: "300px", borderRadius: "10%", marginBottom: "1rem" }}
                    />
                    <ul className="space-y-0.5 text-center px-4">
                      <li>Major: Computer Science</li>
                      <li>Concentration: Software Engineering</li>
                      <li className="text-left">
                        <br />
                        <strong>Goals:</strong>
                        <ul className="list-disc list-inside ml-5 space-y-1">
                          <li>-Create an inclusive social platform designed for developers of all backgrounds, skill levels, and specialties.
                            It will foster collaboration, learning, and community across every area of software development. </li>
                        </ul>
                      </li>
                    </ul>
                  </Drawer.Body>
                 <Drawer.Footer>
                    <Drawer.CloseTrigger asChild>
                    <Button>Close</Button>
                    </Drawer.CloseTrigger>
                  </Drawer.Footer>
                </Drawer.Content>
              </Drawer.Positioner>
            </Portal>
          </Drawer.Root>

          <Drawer.Root>
            <Drawer.Trigger asChild>
              <Button variant="outline" size="sm" bg="darkblue" color="white">
                Club Secretary
              </Button>
            </Drawer.Trigger>
            <Portal>
              <Drawer.Backdrop />
              <Drawer.Positioner>
                <Drawer.Content>
                  <Drawer.Header>
                    <Drawer.Title>Club Secretary<br />Mikayla Gonzalez</Drawer.Title>
                  </Drawer.Header>
                  <Drawer.Body>
                    <img
                      className="my-3 w-full h-75 object-contain"
                      src="/images/Mikayla.png"
                      alt="Mikayla Avatar"
                      style={{ maxWidth: "300px", maxHeight: "300px", borderRadius: "10%", marginBottom: "1rem" }}
                    />
                    <ul className="space-y-0.5 text-center px-4">
                      <li>Major: To Be Determind</li>
                      <li>Concentration: To Be Determind</li>
                      <li className="text-left">
                        <br />
                        <strong>Goals:</strong>
                        <ul className="list-disc list-inside ml-5 space-y-1">
                          <li>-Likes to Read Books</li>
                          <li>-Likes to Play Video Games</li>
                          <li>-Wants to learn about all programming languages</li>
                          <li>-Wants to continue to work on projects</li>
                          <li>-Needs to pick a major and concentration</li>
                        </ul>
                      </li>
                    </ul>
                  </Drawer.Body>
                  <Drawer.Footer>
                    <Drawer.CloseTrigger asChild>
                    <Button>Close</Button>
                    </Drawer.CloseTrigger>
                  </Drawer.Footer>
                </Drawer.Content>
              </Drawer.Positioner>
            </Portal>
          </Drawer.Root>

          <Drawer.Root>
            <Drawer.Trigger asChild>
              <Button variant="outline" size="sm" bg="darkblue" color="white">
                Club Engagement Officer
              </Button>
            </Drawer.Trigger>
            <Portal>
              <Drawer.Backdrop />
              <Drawer.Positioner>
                <Drawer.Content>
                  <Drawer.Header>
                    <Drawer.Title>Club Engagement Officer<br />Dakota Riley</Drawer.Title>
                  </Drawer.Header>
                  <Drawer.Body>
                    <img
                      className="my-3 w-full h-75 object-contain"
                      src="/images/dakota.png"
                      alt="Dakota Avatar"
                      style={{ maxWidth: "300px", maxHeight: "300px", borderRadius: "10%", marginBottom: "1rem" }}
                    />
                    <ul className="space-y-0.5 text-center px-4">
                      <li>Major: Computer Science</li>
                      <li>Concentration: Software Engineering </li>
                      <li className="text-left">
                        <br />
                        <strong>About Me:</strong>
                        <ul className="list-disc list-inside ml-5 space-y-1">
                          <li>-Space Nerd that likes to play Star Citizen (Ask me about my ships)</li>
                          <li>-My favorite Pokemon is Torterra</li>
                        </ul>
                      </li>
                      <li className="text-left">
                        <br />
                        <strong>Goals:</strong>
                        <ul className="list-disc list-inside ml-5 space-y-1">
                          <li>-Learn key front-end and back-end technologies to help solve problems with software in my workplace</li>
                          <li>-Gain an understanding of the technologies that power Artificial Intelligence so I can implement AI into new features that enable more possibilites for our clients</li>
                          <li>-Learn C++ and C# for game and game engine development as a hobby</li>
                          <li>-Participate in group projects that allow me to network with others, enhance my skills in different technologies, and bring me out of my comfort zone to elevate my knowledge</li>
                        </ul>
                      </li>
                    </ul>
                  </Drawer.Body>
                  <Drawer.Footer>
                    <Drawer.CloseTrigger asChild>
                    <Button>Close</Button>
                    </Drawer.CloseTrigger>
                  </Drawer.Footer>
                </Drawer.Content>
              </Drawer.Positioner>
            </Portal>
          </Drawer.Root>

          <Drawer.Root>
            <Drawer.Trigger asChild>
              <Button variant="outline" size="sm" bg="darkblue" color="white">
                Club Event Coordinator
              </Button>
            </Drawer.Trigger>
            <Portal>
              <Drawer.Backdrop />
              <Drawer.Positioner>
                <Drawer.Content>
                  <Drawer.Header>
                    <Drawer.Title>Club Event Coordinator<br />Jacob Garrett</Drawer.Title>
                  </Drawer.Header>
                  <Drawer.Body>
                    <img
                      className="my-3 w-full h-75 object-contain"
                      src="/images/jacob.jpg"
                      alt="Jacob Avatar"
                      style={{ maxWidth: "300px", maxHeight: "300px", borderRadius: "10%", marginBottom: "1rem" }}
                    />
                    <ul className="space-y-0.5 text-center px-4">
                      <li>Major: Computer Science</li>
                      <li>Concentration: Software Engineering</li>
                      <li className="text-left">
                        <br />
                        <strong>About Me:</strong>
                        <ul className="list-disc list-inside ml-5 space-y-1">
                          <li>-I enjoy hand crafting wooden toys, playing the 6-string guitar, and experimenting with unfamialiar technologies.</li>
                          <li>-I have been playing a 6-string guitar since I was a toddler.</li>
                        </ul>
                      </li>
                      <li className="text-left">
                        <br />
                        <strong>Goals:</strong>
                        <ul className="list-disc list-inside ml-5 space-y-1">
                          <li>-To expande my expertise beyond front-end design to include robust back-end development as well as server-side deployment.</li>
                          <li>-To foster my current skills and knowledge in PMI to become a well-rounded project manager.</li>
                          <li>-To collaborate with other developers on projects to gain real-world experiences to better prepare me to enter the workforce.</li>
                        </ul>
                      </li>
                    </ul>
                  </Drawer.Body>
                  <Drawer.Footer>
                    <Drawer.CloseTrigger asChild>
                    <Button>Close</Button>
                    </Drawer.CloseTrigger>
                  </Drawer.Footer>
                </Drawer.Content>
              </Drawer.Positioner>
            </Portal>
          </Drawer.Root>
        </Center>
      </Card.Root>

      <Card.Root as={Container} py={1} textAlign="center" bg={"white"} unstyled={true}>
        <VStack gap={5} align="stretch">
          <Box>
            <Heading as="h1" size="2xl" fontWeight="bold" letterSpacing="tight" color="gray.800">
              Meet the Officers
            </Heading>
            <Separator borderColor="black" borderBottomWidth="1px" mt={4} opacity={1} />
          </Box>
        </VStack>
        <Center className=" flex flex-row text-black text-center text-lg px-4 py-12">
          <Drawer.Root>
            <Drawer.Trigger asChild>
              <Button variant="outline" size="sm" bg="darkblue" color="white">
                Grand PooBah of This and That
              </Button>
            </Drawer.Trigger>
            <Portal>
              <Drawer.Backdrop />
              <Drawer.Positioner>
                <Drawer.Content>
                  <Drawer.Header>
                    <Drawer.Title>Club Officer<br />John Schmidt</Drawer.Title>
                  </Drawer.Header>
                  <Drawer.Body>
                    <img
                      className="my-3 w-full h-75 object-contain"
                      src="/images/John S.jpg"
                      alt="John Schmidt Avatar"
                      style={{ maxWidth: "300px", maxHeight: "300px", borderRadius: "10%", marginBottom: "1rem" }}
                    />
                    <ul className="space-y-0.5 text-center px-4">
                      <li>Major: Computer Science</li>
                      <li>Concentration: Software Engineering</li>
                      <li className="text-left">
                        <br />
                        <strong>Goals:</strong>
                        <ul className="list-disc list-inside ml-5 space-y-1">
                          <li>-Work on various projects in collaboration with other members to get better experience</li>
                          <li>-Learn more about website design including working with React and APIs</li>
                          <li>-Build a homelab setup to learn more skills related to networking and server management</li>
                        </ul>
                      </li>
                    </ul>
                  </Drawer.Body>
                  <Drawer.Footer>
                    <Drawer.CloseTrigger asChild>
                    <Button>Close</Button>
                    </Drawer.CloseTrigger>
                  </Drawer.Footer>
                </Drawer.Content>
              </Drawer.Positioner>
            </Portal>
          </Drawer.Root>
          </Center>
      </Card.Root>

      
    </>
  );
}
