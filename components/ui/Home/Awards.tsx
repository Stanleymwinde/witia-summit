import { Box, Button, Flex, Heading, Image, Link, Text } from "@chakra-ui/react";

const Awards = () => {
  return (
    <Box bg="blue.600" py={{ base: 10, md: 20 }} px={{ base: 5, md: 20 }}>
      <Flex
        direction={{ base: "column", md: "row" }}
        align="center"
        justify="space-between"
        gap={10}
      >
        {/* LEFT - TEXT CONTENT */}
        <Box flex="1" color="white">
          <Box mb={8}>
            <Heading
              fontSize={{ base: "3xl", md: "5xl" }}
              color="white"
              fontWeight="bold"
              textTransform="uppercase"
              lineHeight="1.2"
              textAlign="center"
            >
              VIP
            </Heading>
            <Heading
              fontSize={{ base: "3xl", md: "5xl" }}
              color="white"
              fontWeight="bold"
              textTransform="uppercase"
              lineHeight="1.2"
              textAlign="center"
              transform="translateX(-20px)"
            >
              Networking
            </Heading>
            <Heading
              fontSize={{ base: "3xl", md: "5xl" }}
              color="white"
              fontWeight="bold"
              textTransform="uppercase"
              lineHeight="1.2"
              textAlign="center"
            >
              Dinner
            </Heading>
          </Box>

          <Text
            fontSize={{ base: "sm", md: "lg" }}
            mb={8}
            lineHeight="1.8"
            maxW="600px"
            ml={{ base: "0", md: "50px" }}
          >
            An exclusive VIP networking dinner on the opening day of the Women
            in STEM Africa Summit. This elegant evening brings together
            distinguished leaders, innovators, and change-makers from across the
            continent to connect, share ideas, and foster meaningful
            collaborations in an intimate setting. Celebrate the start of the
            summit with inspiring conversations, fine dining, and a shared
            commitment to advancing women who are breaking barriers in science,
            engineering and innovation.
          </Text>
<Link
  href="https://ticketskenya.com/all-events/women-in-stem-africa-summit-2025"
  target="_blank"
  rel="noopener noreferrer"
  ml={{ base: "0", md: "50px" }}
  style={{ display: "inline-block" }}
>
  <Button
    bgGradient="linear(to-r, #e53e3e, #c05621)"
    color="white"
    size="lg"
    borderRadius="md"
    px={6}
    _hover={{ opacity: 0.9 }}
  >
    RESERVE YOUR SEAT
  </Button>
</Link>

        </Box>

        {/* RIGHT - IMAGE */}
        <Box flex="1" position="relative" left={{ base: "0", md: "70px" }}>
          <Image
            src="/vipnetworkingdinner.jpeg"
            alt="VIP Networking Dinner"
            borderTopLeftRadius="80px"
            width="100%"
            height={{ base: "500px", md: "500px" }}
            objectFit="cover"
          />
        </Box>
      </Flex>
    </Box>
  );
};

export default Awards;





