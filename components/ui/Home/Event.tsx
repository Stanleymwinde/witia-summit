import { MarginX } from "@/utils";
import {
  Box,
  Flex,
  Heading,
  Text,
  HStack,
  SimpleGrid,
  Button,
  Image as ChakraImage,
  VStack,
} from "@chakra-ui/react";

export default function Event() {
  return (
    <Box>
      {/* Event Impact Section */}
      <Box
        bgGradient="linear(to-b, #edf2f7, #e2e8f0)"
        py={12}
        px={4}
        textAlign="center"
      >
        <Heading size="lg" mb={8}>
          EVENT IMPACT
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 4 }} gap={8} maxW="6xl" mx="auto">
          <Box bg="white" borderRadius="md" p={6} boxShadow="md">
            <Text fontSize="3xl" fontWeight="bold" color="blue.500">
              59+
            </Text>
            <Text mt={2}>Countries Represented</Text>
          </Box>
          <Box bg="white" borderRadius="md" p={6} boxShadow="md">
            <Text fontSize="3xl" fontWeight="bold" color="orange.500">
              30+
            </Text>
            <Text mt={2}>Ambassadors</Text>
          </Box>
          <Box bg="white" borderRadius="md" p={6} boxShadow="md">
            <Text fontSize="3xl" fontWeight="bold" color="green.500">
              2000+
            </Text>
            <Text mt={2}>Delegates</Text>
          </Box>
          <Box bg="white" borderRadius="md" p={6} boxShadow="md">
            <Text fontSize="3xl" fontWeight="bold" color="red.500">
              50+
            </Text>
            <Text mt={2}>Sponsors and Exhibitor</Text>
          </Box>
        </SimpleGrid>
      </Box>

      {/* Co-located Shows */}
      <Box py={12} textAlign="center" marginX={MarginX}>
        <Flex
          gap={4}
          align={"center"}
          justify="center"
          display={{ base: "block", md: "flex" }}
        >
          <Button
            bg="blue.500"
            size="lg"
            my={{ base: 2 }}
            borderRadius="full"
            px={8}
          >
            Co-located Shows
          </Button>
          <Button bg="blue.500" size="lg" borderRadius="full" px={8}>
            Book an Exhibition booth
          </Button>
        </Flex>

        <HStack justify="center" gap={"5rem"} flexWrap="wrap" py={6}>
          <ChakraImage
            src="/ATS.png"
            alt="Africa Tech Show"
            h="80px"
            fit="contain"
          />
          <ChakraImage src="/CTW.png" alt="CTW Kenya" h="80px" fit="contain" />
        </HStack>
      
      </Box>
    </Box>
  );
}
