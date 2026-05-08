import { Box, Heading, Text, VStack } from "@chakra-ui/react";

export default function AboutPage() {
  return (
    <Box bg="gray.800" p={6} borderRadius="2xl" boxShadow="md">
      <VStack gap={4} align="stretch">
        <Heading size="lg" color="white">
          About Yapper
        </Heading>
        <Text color="gray.400">
          Welcome to Yapper, a forced fun excercise by Mr. Speak to teach us about react and superbase. It was fun to make.
        </Text>
      </VStack>
    </Box>
  );
}