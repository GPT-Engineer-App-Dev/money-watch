import { Box, Container, Heading, VStack, Text, SimpleGrid, GridItem, Image } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <VStack spacing={8} align="stretch">
        <Box bg="brand.700" color="white" p={6} borderRadius="md">
          <Heading as="h1" size="xl">Financial News</Heading>
          <Text fontSize="lg">Stay updated with the latest financial news and market trends.</Text>
        </Box>

        <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing={8}>
          <GridItem>
            <Box borderWidth="1px" borderRadius="md" overflow="hidden">
              <Image src="/images/top-news.jpg" alt="Top News" />
              <Box p={6}>
                <Heading as="h2" size="md">Top News</Heading>
                <Text mt={4}>Get the latest top news in the financial world.</Text>
              </Box>
            </Box>
          </GridItem>

          <GridItem>
            <Box borderWidth="1px" borderRadius="md" overflow="hidden">
              <Image src="/images/market-data.jpg" alt="Market Data" />
              <Box p={6}>
                <Heading as="h2" size="md">Market Data</Heading>
                <Text mt={4}>Stay informed with the latest market data and trends.</Text>
              </Box>
            </Box>
          </GridItem>

          <GridItem>
            <Box borderWidth="1px" borderRadius="md" overflow="hidden">
              <Image src="/images/trending-articles.jpg" alt="Trending Articles" />
              <Box p={6}>
                <Heading as="h2" size="md">Trending Articles</Heading>
                <Text mt={4}>Read the most popular articles in the financial sector.</Text>
              </Box>
            </Box>
          </GridItem>
        </SimpleGrid>
      </VStack>
    </Container>
  );
};

export default Index;