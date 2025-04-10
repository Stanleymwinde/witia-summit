import { buttonTexts, IndustryFocusData, MarginX } from "@/utils"; // Import data
import { Box, Grid, Heading, Text, Button } from "@chakra-ui/react"; // Chakra UI components
import React from "react";

const IndustryFocus = () => {
  return (
    <Box bg={"gray.50"} minH={"100vh"} py={10}>
      <Box marginX={MarginX} textAlign={"center"} py={10}>
        <Heading
          fontSize={{ base: "2xl", md: "4xl" }}
          color={"blue.500"}
          p={4}
          borderRadius={10}
          display="inline-block"
        >
          Industry Focus
        </Heading>
        <Text
          fontSize={{ base: "sm", md: "xl" }}
          color={"#0A192F"}
          marginTop={5}
        >
          The Summit offers a range of Industry focus that provides the
          opportunity to learn and network.
        </Text>

        {/* 3 column grid */}
        <Grid
          templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(3, 1fr)" }}
          gap={6}
          mt={5}
        >
          {IndustryFocusData.map((item, index) => (
            <Box
              key={index}
              h="15rem"
              borderRadius="md"
              overflow="hidden"
              position="relative"
              bgImage={`url(${item.imageUrl})`} // Fix for the background image URL
              backgroundPosition="center"
              bgSize="cover"
              boxShadow="md"
              transition="all 0.3s ease"
              _hover={{
                transform: "scale(1.05)",
                filter: "brightness(110%)",
                boxShadow: "2xl",
                cursor: "pointer",
              }}
            >
              <Button
                position="absolute"
                bottom={0}
                left="50%"
                transform="translateX(-50%)"
                color="white"
                bg="blue.500"
                px={3}  // Adjusted padding for better fit
                py={2}  // Adjusted padding for better fit
                borderRadius="xl"

                fontSize={{ base: "sm", md: "md" }}

                textAlign="center"
                size="sm"  // Reduced size to fit the text
              >
                {buttonTexts[index]}  {/* Dynamically display the button text */}
              </Button>
            </Box>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default IndustryFocus;