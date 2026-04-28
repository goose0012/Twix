import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  Input,
  Button,
} from "@chakra-ui/react";
import TweetCard from "./components/tweet-card";

const tweets = [
  {
    name: "Jacob Johnson",
    username: "@freshman_lover_jacob",
    time: "2m",
    text: "I do not like freshman.",
    likes: 14,
    replies: 3,
    tag: "Web Dev",
  },
  {
    name: "James Andrews",
    username: "@james_a",
    time: "12m",
    text: "Jacob Johnson likes freshman.",
    likes: 22,
    replies: 5,
    tag: "Chakra",
  },
  {
    name: "Ava Smith",
    username: "@ava_secure",
    time: "25m",
    text: "Hardcoding data first actually makes sense. Get the page looking right, then connect real data later.",
    likes: 31,
    replies: 8,
    tag: "Cyber 301",
  },
];

function App() {
return (
  <Box bg="gray.900" minH="100vh" py={8}>
    <Container maxW="650px">
      <VStack gap={5} align="stretch">
        <Box bg="gray.800" p={6} borderRadius="sm" boxShadow="md">
          <Heading size="lg" color="white">
            Twix
          </Heading>
          <Text color="gray.400" mt={2}>
            A simple Twitter clone built with Vite and Chakra UI.
          </Text>
        </Box>
        <Box bg="gray.800" p={5} borderRadius="2xl" boxShadow="md">
  <VStack gap={3} align="stretch">
    <Text fontWeight="bold" color="white">
      Create a post
    </Text>
    <Input
      placeholder="What's happening?"
      bg="gray.700"
      borderColor="gray.600"
      color="white"
    />
    <Button colorScheme="twitter" alignSelf="flex-end">
      Post
    </Button>
  </VStack>
</Box>
{tweets.map((tweet, index) => (
  TweetCard({ tweet, index })
))}
      </VStack>
    </Container>
  </Box>
);
}

export default App;