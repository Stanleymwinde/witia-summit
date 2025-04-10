import { MarginX, socialIcons } from "@/utils/index";
import { Box, Flex, Icon, Image, Text } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

const TopNav = () => {
  return (
    <Box bg="#070E47" width="100%" py={3}>
      <Flex
        marginX={MarginX}
        align="center"
        justify="space-between"
        flexWrap="wrap"
        gap={4}
      >
        {/* Logo - now takes more space */}
        <Flex align="center" flex="1">
          <Link href="/">
            <Image
              src="/witialogo.svg"
              alt="Witia Logo"
              height="60px"
              width="auto"
              maxH="60px"
              objectFit="contain"
            />
          </Link>
        </Flex>

        {/* Contact Center */}
        <Flex
          align="center"
          justify="center"
          flex="1"
          minW={{ base: "100%", md: "auto" }}
          textAlign={{ base: "center", md: "left" }}
        >
          <Text
            fontSize={{ base: "sm", md: "md" }}
            color="white"
            mr={2}
            fontWeight="normal"
          >
            Contact Us:
          </Text>
          <Link href="mailto:events@witia.africa">
            <Text
              color="white"
              fontWeight="bold"
              fontStyle="italic"
              fontSize={{ base: "sm", md: "lg" }}
              _hover={{
                textDecoration: "underline",
                transform: "scale(1.05)",
              }}
              whiteSpace="nowrap"
            >
              events@witia.africa
            </Text>
          </Link>
        </Flex>

        {/* Social Icons Right */}
        <Flex gap={4} align="center" justify="flex-end" flex="1">
          {socialIcons.map((icon, index) => (
            <Link key={index} href={icon.link} target="_blank">
              <Icon
                color="white"
                boxSize={5}
                _hover={{ color: "gray.300", transform: "scale(1.15)" }}
                transition="all 0.2s ease-in-out"
              >
                {icon.icon}
              </Icon>
            </Link>
          ))}
        </Flex>
      </Flex>
    </Box>
  );
};

export default TopNav;
