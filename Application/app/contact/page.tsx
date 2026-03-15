"use client";

import { useState } from 'react';

import {
    Box, Container, Button, Field, Fieldset, Input, Stack, Textarea
} from '@chakra-ui/react';

export default function Contact() {
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async () => {
        setIsLoading(true);

        // Replace this delay with your real submit logic (API call, form action, etc.).
        await new Promise((resolve) => setTimeout(resolve, 1500));

        setIsLoading(false);
    };

    return (

        <Box py={{ base: 10, md: 16 }} bg='bg.muted' minH='100vh'>

            <Container maxW='lg'>

                <Box bg='bg.panel' rounded='xl' shadow='md' borderWidth='1px' borderColor='border' p={{ base: 6, md: 8 }}>

                    <Fieldset.Root size="lg" mx='auto' maxW="md" color='fg' textAlign="center">

                        <Stack gap={2} textAlign='center' mb={6}>

                            <Fieldset.Legend fontSize='xl' color='fg' fontWeight='bold'>
                                Contact details
                            </Fieldset.Legend>

                            <Fieldset.HelperText color='fg.muted'>
                                Please provide your contact details below and we will reach out to you soon!
                            </Fieldset.HelperText>
                        </Stack>

                        <Fieldset.Content>
                            <Stack gap={4}>
                                <Field.Root>
                                    <Field.Label fontWeight='semibold'>Name</Field.Label>
                                    <Input name="name" placeholder='Name' />
                                </Field.Root>

                                <Field.Root>
                                    <Field.Label fontWeight='semibold'>Email address</Field.Label>
                                    <Input name="email" type="email" placeholder='Email' />
                                </Field.Root>

                                <Field.Root>
                                    <Field.Label fontWeight='semibold'>Major and Concentration</Field.Label>
                                    <Input name="major" placeholder='Major' />
                                </Field.Root>

                                <Field.Root>
                                    <Field.Label fontWeight='semibold'>What are some of your interests?</Field.Label>
                                    <Input name="interests" placeholder='Front-end, Back-end, learning Python' />
                                </Field.Root>

                                <Field.Root>
                                    <Field.Label fontWeight='semibold'>Any questions for the club?</Field.Label>
                                    <Textarea h='110px' name="questions" placeholder='Type here your questions here' />
                                </Field.Root>



                                <Button bg="blue.900" _hover={{ bg: 'green' }} loading={isLoading} loadingText="Sending..."
                                onClick={handleSubmit}
                                color='white' type="submit" size='lg' w='full' mt={2} >
                                    Submit
                                </Button>
                            </Stack>
                        </Fieldset.Content>
                    </Fieldset.Root>
                </Box>
            </Container>
        </Box>
    );
}