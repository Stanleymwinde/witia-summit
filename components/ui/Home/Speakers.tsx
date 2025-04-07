import { MarginX, SpeakersData } from "@/utils";
import { Box, Button, Grid, Heading, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const Speakers = () => {
  return (
    <>
      <Box bg={"gray.50"}>
        <Box marginX={MarginX}>
          <Box textAlign={"center"} py={10}>
            <Heading
              fontSize={{ base: "2xl", md: "4xl" }}
              color={"white"}
              bg={"blue.500"}
              padding={5}
              borderRadius={10}
              display="inline-block"
            >
              Speakers
            </Heading>
            <Text fontSize={{ base: "sm", md: "xl" }} color={"#0A192F"} mt={5}>
              The Summit offers a range of Industry focus that provide the
              opportunity to learn and networking
            </Text>
          </Box>
          <Grid
            templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(4, 1fr)" }}
            gap={6}
            mt={5}
          >
            {SpeakersData.map((item, index) => (
              <Box
                pos="relative"
                borderRadius="md"
                boxShadow="md"
                bgImage={`url(${item.imageUrl})`}
                key={index}
                bgSize="cover"
                height="22rem"
              >
                <Stack
                  w="80%"
                  align="center"
                  p={3}
                  pos="absolute"
                  bottom="10%"
                  left="50%"
                  transform="translate(-50%,50%)"
                  bg="white"
                  textAlign="center"
                >
                  <Heading fontSize="2xl">{item.name}</Heading>
                  <Text fontSize="md">{item.title}</Text>
                  <Text fontSize="sm" color={"blue.500"}>
                    {item.subtitle}
                  </Text>
                  <Button colorScheme="primary">
                    Read More <FaArrowRightLong />
                  </Button>
                </Stack>
              </Box>
            ))}
          </Grid>
        </Box>
      </Box>

      {/* 3 column grid */}
    </>
  );
};

export default Speakers;
