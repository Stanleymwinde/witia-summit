import { Box, Flex, Heading, Text, VStack } from "@chakra-ui/react";
import Image from "next/image";
import aboutImage from "@/public/image.png"; // Replace with actual path to your image

export default function About() {
  return (
    <Box position="relative" minH="100vh" overflow="hidden">
      {/* Background Image */}
      <Box position="absolute" top={0} left={0} w="full" h="full" zIndex={-1}>
        <Image
          src="/about-bg.jpg"
          alt="About Event"
          layout="fill"
          objectFit="cover"
        />
        <Box
          bg="rgba(0, 0, 50, 0.8)"
          w="full"
          h="full"
          position="absolute"
          top={0}
          left={0}
        />
      </Box>

      <Flex
        direction={{ base: "column", md: "row" }}
        justify="center"
        align="center"
        px={{ base: 4, md: 20 }}
        py={16}
        color="white"
        gap={12}
      >
        {/* Left Side Heading */}
        <Heading
          fontSize={{ base: "3xl", md: "5xl" }}
          textAlign={{ base: "center", md: "left" }}
        >
          About <br /> the Event
        </Heading>

        {/* Right Side Text Box */}
        <Box
          bg="whiteAlpha.900"
          color="black"
          p={{ base: 4, md: 8 }}
          borderRadius="md"
          maxW="3xl"
          fontSize={{ base: "sm", md: "md" }}
        >
          <Text mb={4}>
            The Women in STEM Africa Summit is not just another conference, it
            is a 3-Day premier movement to nurture women and girls in
            engineering and technological fields across Africa to reach their
            full potential and elevate in these male dominated fields.
          </Text>
          <Text mb={4}>
            The summit hosted by Women in Technology and Innovation Africa
            (WITIA), will serve as a platform for networking, knowledge-sharing,
            and fostering collaborations to bridge the gender gap in STEM
            fields.
          </Text>
          <Text mb={4}>
            With the theme "Borderless Innovation: Pioneering Global Technology
            Solutions for Africa’s Challenges," the summit seeks to foster
            cross-border collaborations, inspire cutting-edge innovations, and
            address pressing challenges facing Africa through technology and
            engineering.
          </Text>
          <Text>
            As part of the prestigious B2B Expo CTW Kenya 10th Edition and
            Africa Technology Show (AFTS), the summit will provide a platform
            for women entrepreneurs, engineers, policy makers, leaders and
            innovators to share their ideas, experiences, and solutions.
          </Text>
        </Box>
      </Flex>
    </Box>
  );
}
