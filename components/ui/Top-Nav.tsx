import { MarginX, socialIcons } from "@/utils/index";
import { Box, Flex, Icon, Text } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

const TopNav = () => {
  return (
    <Box bg={"gray.100"} width="100%">
      <Flex
        flexDirection={{ base: "column", md: "row" }}
        gap={4}
        justify={{ base: "center", md: "space-between" }}
        align="center"
        flexWrap="wrap"
        marginX={MarginX}
        py={3}
        px={4}
      >
        {/* Contact us */}
        <Flex direction="row" align="center" wrap="wrap">
          <Text pr={2} fontSize={{ base: "sm", md: "md" }}>
            Contact Us :
          </Text>
          <Link href="mailto:events@witia.africa">
            <Text
              color="blue.500"
              fontWeight={700}
              fontStyle={"italic"}
              _hover={{
                textDecoration: "underline",
                cursor: "pointer",
                transform: "scale(1.05)",
              }}
              fontSize={{ base: "sm", md: "lg" }}
              whiteSpace="nowrap"
            >
              events@witia.africa
            </Text>
          </Link>
        </Flex>

        {/* Social Icons */}
        <Flex gap={4} flexWrap="wrap" justify="center">
          {socialIcons.map((icon, index) => (
            <Box key={index}>
              <Link href={icon.link} target="_blank">
                <Icon color={icon.color} boxSize={5}>
                  {icon.icon}
                </Icon>
              </Link>
            </Box>
          ))}
        </Flex>
      </Flex>
    </Box>
  );
};

export default TopNav;
