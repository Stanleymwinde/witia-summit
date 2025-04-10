import { Box, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <Box bg="#0b1f63" color="white" py={4} px={8}>
      <Flex justify="space-between" align="center">
        <Image
          src="/witialogo.svg"
          alt="WITIA Logo"
          width={120}
          height={40}
        />
        <Text fontSize={{ base: "sm", md: "md" }} fontWeight="medium">
          events@witia.africa
        </Text>
      </Flex>
    </Box>
  );
};

export default Header;