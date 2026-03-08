
import { Box, Heading, Text, VStack, StackProps } from "@chakra-ui/react";

interface FeatureCard extends StackProps {
    title: string;
    bgColor?: string;
    items: string[];
}

export const FeatureCard = ({ title, bgColor, items, ...props }: FeatureCard) => {
    return (
        <Box
            {...props}
            bg={bgColor || "rgba(58, 100, 230, 0.8)"}
            backdropFilter="blur(10px)"
            borderRadius="2xl"
            p="6"
            border="1px solid"
            borderColor="whiteAlpha.400"
            boxShadow="0 8px 32px 0 rgba(0, 0, 0, 0.37)"

            display="flex"
            flexDirection="column"
            height="100%"
            width="100%"
            transition="transform 0.2s"
            minH="300px"
        >
            <Heading
                size="xl"
                color="white"
                mb="4"
                fontWeight="bold"
                lineHeight="short"
            >
                {title}
            </Heading>

            <Box h="1px" bg="whiteAlpha.300" mb="6" />

            <VStack align="start" flex="1">
                {items.map((item, i) => (
                    <Box key={i} display="flex" alignItems="flex-start">
                        <Text color="white" fontSize="md" mr="2">•</Text>
                        <Text color="whiteAlpha.900" fontSize="md" lineHeight="tall">
                            {item}
                        </Text>
                    </Box>
                ))}
            </VStack>
        </Box>
    );
};