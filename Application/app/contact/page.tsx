"use client";

import { useState } from 'react';

import {
    Box, Container, Button, Field, Fieldset, Input, Stack, Textarea,
    Heading,
    VStack, Text
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
            <Container maxW='3xl'>
                <VStack gap={6} mb={8} align="center">
                    <Heading size="xl">Contact Coding United</Heading>
                    <Text fontSize="lg" color='muted'>
                        Have questions or want to get in touch? Fill out the form below and we'll get back to you as soon as possible.
                    </Text>
                </VStack>

                <Box 
                    bg='bg.panel' 
                    rounded='xl' 
                    shadow='xl' 
                    borderWidth='1px' 
                    overflow="hidden" 
                    p={2}
                >

                    <iframe 
                        width="640px" 
                        height="800px" 
                        src="https://forms.cloud.microsoft/Pages/ResponsePage.aspx?id=W_GuK964P0KdikbzaG2ISMJazIcub_VFrF3wb8MS6u5UNTI3WlNFRjIwWkVaS1lWM1dRUUhSQzdTViQlQCN0PWcu&embed=true" 
                        
                        style={{ border:"none", maxWidth: "100%" }} 
                        
                        /> 
                </Box>
            </Container>
        </Box>
    );
}