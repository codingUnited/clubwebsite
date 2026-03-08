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
                          <li>-Strengthen leardership and organizational efficiency within the club, improving communication, structure, and resource sharing</li>
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
                          <li>Create an inclusive social platform designed for developers of all backgrounds, skill levels, and specialties.
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
                        <ul className="list-disc list-inside ml-5 space-y-1">
                          <li>Hello,<br />
                          <br />
                            My name is Jacob, and I serve as the Event Coordinator for Coding United while pursuing my B.S. in Computer Science with a concentration in Software Engineering at SNHU. I am passionate about helping individuals who strive for excellence reach their full potential. Since joining Coding United, I have connected with professionals who have challenged and inspired me to continually elevate my technical and professional development.
                            I have always been driven to understand how things work. Whether by deconstructing physical systems or analyzing software applications. I actively research emerging programming languages to deepen my proficiency and expand my technical versatility. My hands-on projects include systems programming on Single Board Computers, web and embedded system security research, and the development of an enterprise-grade home networking lab. I believe there are no limits when you commit to continuous growth.
                            I regularly participate in Capture-The-Flag (CTF) competitions. While they are competitive and engaging, they also strengthen my understanding of cybersecurity principles, including programming challenges, OSINT methodologies, vulnerability analysis, and penetration testing across virtual and embedded systems.<br />
                            <br />
                            Keep pushing,<br />
                            Jacob
                          </li>
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
                          <li>-I am currently deepening my expertise in React and Tailwind CSS to build responsive, high-performance web applications that bridge the gap between clean UI and robust backends.</li>
                          <li>-I’m fascinated by the intersection of software and the physical world. My goal is to integrate IoT sensors with custom web dashboards to create real-time data visualization tools.</li>
                          <li>-I am actively exploring options for my homelab to master self-hosting, containerization with Docker, and network security. I aim to treat my home network as a sandbox for enterprise-level DevOps practices.</li>
                          <li>-As an Appointed Officer, I am committed to fostering a community where we can build complex, multi-stack projects together and help fellow students bridge the gap between classroom theory and real-world implementation.</li>
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
