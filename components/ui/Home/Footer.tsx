import { Box, Text, Flex, Image } from "@chakra-ui/react";
import React from "react";

const Footer = () => {
  return (
    <Box bg="#0b1f63" color="white" py={4} px={8}>
      <Flex
        justify="space-between"
        align="center"
        flexWrap="wrap"
        gap={4}
      >
        {/* Logo on the left, bigger */}
        <Image
          src="/witialogo.svg"
          alt="WITIA Logo"
          height="60px"
          width="auto"
          objectFit="contain"
        />

        {/* Contact text on the right */}
        <Text fontSize={{ base: "sm", md: "md" }}>
          Contact us: events@witia.africa
        </Text>
      </Flex>
    </Box>
  );
};

export default Footer;
