import { MarginX } from "@/utils";
import {
  Box,
  Button,
  Flex,
  Heading,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <>
      <Box position="relative" minH="75vh" overflow="hidden">
        {/* Background Image */}
        <Box
          position="absolute"
          top={0}
          left={0}
          w="full"
          h="full"
          zIndex={-1}
          display={{ base: "none", md: "block" }}
        >
          <Image
            src="/home-image.webp"
            alt="Women in STEM"
            layout="fill"
            objectFit="cover"
          />
          <Box
            bg="rgba(0, 108, 231, 0.6)"
            w="full"
            h="full"
            position="absolute"
            top={0}
            left={0}
          />
        </Box>

        {/* Contact Info at Bottom Left */}
        <Box
          position="absolute"
          bottom={0}
          left={0}
          p={4}
          color="white"
          bg="blue.500"
          fontSize={{ base: "lg", md: "6xl" }}
          fontWeight={700}
        >
          Contact Information
        </Box>
      </Box>

      <Box marginX={MarginX} py={8}>
        <Flex
          justifyContent={{ base: "center", md: "space-between" }}
          direction={{ base: "column", md: "row" }}
          alignItems={{ base: "center", md: "flex-start" }}
          p={4}
        >
          <Box textAlign={{ base: "center", md: "left" }}>
            <Text fontSize={{ base: "2xl", md: "4xl" }}>EMAIL ADDRESS </Text>
            <Text fontSize="2xl">events@witia.africa</Text>
          </Box>
          <Button
            bg={"blue.500"}
            variant="outline"
            size="2xl"
            borderRadius="full"
            px={6}
            // py={{ base: 4, md: 6 }}
            fontSize="2xl"
            _hover={{
              bg: "blue.600",
              color: "white",
              transform: "scale(1.05)",
            }}
          >
            Register Now
          </Button>
        </Flex>
      </Box>
    </>
  );
};

export default Footer;
