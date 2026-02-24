import faqs from "@/data/faqs/testSessions.json";
import { Accordion, Span, Container, Box, Heading, } from "@chakra-ui/react/";

export default function Faqs() {
  return (
    <>

    <Box bg="gray.50" py="10">
      <Container maxW="700px" textAlign="center">
        <Heading color='black' size='lg' mb='10'>
          Frequently Asked Questions
        </Heading>
    
      <Accordion.Root collapsible defaultValue={["b"]} spaceY="4">
        {faqs.map((faq) => (
          <Accordion.Item 
          key={faq.title} 
          value={faq.title}
          bg='white'
          borderRadius='xl'
          boxShadow='md'
          overflow='hidden'
          >
            <Accordion.ItemTrigger
            display='flex'
            alignItems='center'
            px='5'
            py='4'
            cursor='pointer'
            _hover={{bg: 'gray.100'}}
            >


              <Span flex="1" color='black' fontWeight="black" textAlign='left'>
                 {faq.title}
              </Span>
              <Accordion.ItemIndicator 
              transition='transform 0.2s'
              _open={{transform: 'rotate(180deg)'}}
              />

            </Accordion.ItemTrigger>
            <Accordion.ItemContent>
              <Accordion.ItemBody px='5' pb='5' color="gray.600" textAlign='left'>
                 {faq.response}
              </Accordion.ItemBody>
            </Accordion.ItemContent>
          </Accordion.Item>
        ))}
      </Accordion.Root>

        </Container>
      </Box>

    </>
  );
}
