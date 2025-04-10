import { Box, Text, Flex, Image } from "@chakra-ui/react";
import React from "react";

const Footer = () => {
  return (
    <Box bg="#0b1f63" color="white" py={4} px={8}>
      <Flex justify="center" align="center" gap={4}>
        <Image src="/witialogo.svg" alt="WITIA Logo" height="30px" />
        <Text fontSize={{ base: "sm", md: "md" }}>
          Contact us: events@witia.africa
        </Text>
      </Flex>
    </Box>
  );
};

export default Footer;