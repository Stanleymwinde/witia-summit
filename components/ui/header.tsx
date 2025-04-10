import { Box, Flex, IconButton, Link, Text } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Header = () => {
  return (
    <Box bg="#0b1f63" color="white" py={4} px={8}>
      <Flex
        justify="space-between"
        align="center"
        wrap="wrap"
        gap={4}
        direction={{ base: "column", md: "row" }}
      >
        {/* Logo */}
        <Image src="/witialogo.svg" alt="WITIA Logo" width={120} height={40} />

        {/* Social Icons */}
        <Flex gap={4}>
          <Link href="https://github.com/your-username" isExternal>
            <IconButton
              aria-label="GitHub"
              icon={<FaGithub />}
              variant="ghost"
              colorScheme="whiteAlpha"
            />
          </Link>
          <Link href="https://linkedin.com/in/your-profile" isExternal>
            <IconButton
              aria-label="LinkedIn"
              icon={<FaLinkedin />}
              variant="ghost"
              colorScheme="whiteAlpha"
            />
          </Link>
          <Link href="https://twitter.com/your-handle" isExternal>
            <IconButton
              aria-label="Twitter"
              icon={<FaTwitter />}
              variant="ghost"
              colorScheme="whiteAlpha"
            />
          </Link>
        </Flex>

        {/* Contact Email */}
        <Text fontSize={{ base: "sm", md: "md" }} fontWeight="medium">
          events@witia.africa
        </Text>
      </Flex>
    </Box>
  );
};

export default Header;
