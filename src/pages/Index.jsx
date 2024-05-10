import { Box, Button, Container, Flex, Heading, IconButton, Input, Link, Stack, Text, VStack } from "@chakra-ui/react";
import { FaSearch, FaUserCircle } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      <Flex bg="white" color="gray.800" align="center" p={4} borderBottom="1px" borderColor="gray.200">
        <Heading as="h1" size="lg" letterSpacing={"tighter"}>
          Hacker News
        </Heading>
        <Flex marginLeft="auto" gap="2">
          <Button colorScheme="orange" variant="ghost">
            New
          </Button>
          <Button colorScheme="orange" variant="ghost">
            Threads
          </Button>
          <Button colorScheme="orange" variant="ghost">
            Comments
          </Button>
          <Button colorScheme="orange" variant="ghost">
            Show
          </Button>
          <Button colorScheme="orange" variant="ghost">
            Ask
          </Button>
          <Button colorScheme="orange" variant="ghost">
            Jobs
          </Button>
          <Button colorScheme="orange" variant="ghost">
            Submit
          </Button>
          <IconButton aria-label="Search database" icon={<FaSearch />} />
          <IconButton aria-label="User profile" icon={<FaUserCircle />} />
        </Flex>
      </Flex>
      <VStack spacing={4} align="stretch" p={4}>
        <Box p={5} shadow="md" borderWidth="1px" flex="1" borderRadius="md">
          <Heading fontSize="xl">Introducing the New Hacker News Clone</Heading>
          <Text mt={4}>This is a simple clone of Hacker News created with modern UI design principles. It features a clean and accessible interface with vibrant accents.</Text>
        </Box>
        <Box p={5} shadow="md" borderWidth="1px" flex="1" borderRadius="md">
          <Heading fontSize="xl">Why React is the Future of Web Development</Heading>
          <Text mt={4}>Explore the reasons why React has become the most popular JavaScript library for building user interfaces.</Text>
        </Box>
        <Box p={5} shadow="md" borderWidth="1px" flex="1" borderRadius="md">
          <Heading fontSize="xl">Understanding Async/Await in JavaScript</Heading>
          <Text mt={4}>Dive into asynchronous programming in JavaScript with async/await syntax to write cleaner and more readable code.</Text>
        </Box>
      </VStack>
      <Flex align="center" justify="center" p={4}>
        <Button colorScheme="orange" size="lg">
          Load More
        </Button>
      </Flex>
    </Container>
  );
};

export default Index;
