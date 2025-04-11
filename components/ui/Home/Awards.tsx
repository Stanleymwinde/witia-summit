import { AwardsData, buttonTexts, MarginX } from "@/utils";
import { Box, Grid, Heading, Text } from "@chakra-ui/react";

const Awards = () => {
  return (
    <Box bg={"gray.50"} py={10}>
      <Box marginX={MarginX} textAlign={"center"} py={10}>
        <Heading
          fontSize={{ base: "2xl", md: "4xl" }}
          color={"white"}
          bg={"blue.500"}
          padding={4}
          my={10}
          borderRadius={10}
          display="inline-block"
          fontWeight={"bold"}
        >
          Top Women Innovators Awards
        </Heading>

        <Text
          fontSize={{ base: "sm", md: "xl" }}
          color={"#0A192F"}
          marginTop={5}
          textAlign={"center"}
          maxW={{ base: "100%", md: "50%" }}
          marginX={"auto"}
        >
          Awards Gala to highlight the innovative spirit and leadership of
          women in Africa, acknowledging their significant roles in driving
          sustainable development and economic growth across the continent.
        </Text>

        <Heading
          fontSize={{ base: "2xl", md: "4xl" }}
          color={"blue.500"}
          p={2}
          my={5}
          borderRadius={10}
          display="inline-block"
        >
          Awards Categories
        </Heading>

        {/* 3 column grid */}
        <Grid
          templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(3, 1fr)" }}
          gap={6}
          mt={5}
        >
          {AwardsData.map((item, index) => (
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
                bottom={0}
                left="50%"
                transform="translateX(-50%)"
                color="white"
                bg="blue.500"
                px={4}
                py={2}
                borderRadius="xl"
                fontSize={{ base: "sm", md: "lg" }}
                textAlign="center"
                whiteSpace="nowrap"
                overflow="hidden"
                textOverflow="ellipsis"
                maxWidth="90%"
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

export default Awards;



