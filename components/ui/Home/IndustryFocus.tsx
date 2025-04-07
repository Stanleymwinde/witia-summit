import { IndustryFocusData, MarginX } from "@/utils";
import { Box, Grid, Heading, Text } from "@chakra-ui/react";
import { url } from "inspector";
import React from "react";

const IndustryFocus = () => {
  return (
    <Box bg={"gray.50"} minH={"100vh"} paddingY={10}>
      <Box marginX={MarginX} textAlign={"center"} py={10}>
        <Heading
          fontSize={{ base: "2xl", md: "4xl" }}
          color={"white"}
          bg={"blue.500"}
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
          The Summit offers a range of Industry focus that provide the
          opportunity to learn and networking
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
              bgImage={`url(${item.imageUrl})`}
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
              <Heading
                position="absolute"
                bottom="10%"
                left="50%"
                transform="translateX(-50%)"
                color="white"
                bg="blue.500"
                px={4}
                py={2}
                borderRadius="xl"
                fontSize={{ base: "lg", md: "2xl" }}
                textAlign="center"
              >
                {item.title}
              </Heading>
            </Box>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default IndustryFocus;
