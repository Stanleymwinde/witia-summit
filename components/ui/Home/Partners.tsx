import { MarginX, PartnersData } from "@/utils";
import { Box, Button, Flex, Grid, Heading } from "@chakra-ui/react";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const Partners = () => {
  return (
    <>
      <Box marginX={MarginX} my={10} textAlign={"center"} py={10}>
        <Flex justifyContent="space-between">
          <Heading
            fontSize={{ base: "2xl", md: "4xl" }}
            color={"white"}
            bg={"blue.500"}
            p={2}
            my={5}
            borderRadius={10}
            display="inline-block"
          >
            Our Partners and Sponsors
          </Heading>

          <Button bg="blue.500" color={"white"} variant="outline" size="md">
            Become a Sponsor
            <FaArrowRightLong />
          </Button>
        </Flex>

        {/*map 3 column grid to list the logos of the partners  */}

        <Grid
          templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(3, 1fr)" }}
          gap={6}
          mt={5}
        >
          {/* {Array.from({ length: 6 }, (_, index) => ( */}
          {/* {[...Array(6)].map((_, index) => ( */}
          {PartnersData.map((item, index) => (
            <Box
              key={index}
              h="15rem"
              borderRadius="md"
              overflow="hidden"
              position="relative"
              bgImage={`url(${item.Logo})`}
              backgroundPosition="center"
              bgSize="contain"
              bgRepeat="no-repeat"
              boxShadow="md"
              transition="all 0.3s ease"
              _hover={{
                transform: "scale(1.05)",
                filter: "brightness(110%)",
                boxShadow: "2xl",
                cursor: "pointer",
              }}
            ></Box>
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default Partners;
