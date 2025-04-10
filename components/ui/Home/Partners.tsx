import { MarginX, PartnersData } from "@/utils";
import { Box, Button, Flex, Grid, Heading } from "@chakra-ui/react";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const Partners = () => {
  return (
    <>
      <Box marginX={MarginX} my={10} textAlign={"center"} py={10}>
        <Flex justifyContent="space-between" flexWrap="wrap">
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

        <Grid
          templateColumns={{ base: "repeat(2, 1fr)", md: "repeat(4, 1fr)" }}
          gap={6}
          mt={5}
        >
          {PartnersData.map((item, index) => (
            <Box
              key={index}
              h={{ base: "4rem", md: "5rem", lg: "6rem" }} // 🔽 Further reduced height
              borderRadius="md"
              overflow="hidden"
              position="relative"
              bgImage={`url(${item.Logo})`}
              backgroundPosition="center"
              bgSize="contain"
              bgRepeat="no-repeat"
              boxShadow="sm"
              transition="all 0.3s ease"
              _hover={{
                transform: "scale(1.05)",
                filter: "brightness(110%)",
                boxShadow: "md",
                cursor: "pointer",
              }}
            />
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default Partners;