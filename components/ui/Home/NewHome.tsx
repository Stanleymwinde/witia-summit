"use client";

import { Box, Button, Flex, Heading, Text, VStack } from "@chakra-ui/react";
import { useEffect, useState } from "react";

export default function HeroBanner() {
  const targetDate = new Date("2025-07-08T00:00:00Z");

  function useCountdown(targetDate: Date) {
    const [timeLeft, setTimeLeft] = useState(getTimeLeft());

    function getTimeLeft() {
      const totalSeconds = Math.max(
        Math.floor((targetDate.getTime() - new Date().getTime()) / 1000),
        0
      );
      const days = Math.floor(totalSeconds / (60 * 60 * 24));
      const hours = Math.floor((totalSeconds % (60 * 60 * 24)) / (60 * 60));
      const minutes = Math.floor((totalSeconds % (60 * 60)) / 60);
      const seconds = totalSeconds % 60;
      return { days, hours, minutes, seconds };
    }

    useEffect(() => {
      const interval = setInterval(() => {
        setTimeLeft(getTimeLeft());
      }, 1000);
      return () => clearInterval(interval);
    }, []);

    return timeLeft;
  }

  const { days, hours, minutes, seconds } = useCountdown(targetDate);

  return (
    <Box
      position="relative"
      minH="100vh"
      w="100%"
      bgImage="url('/Home-Bg.jpeg')"
      bgSize="cover"
      backgroundPosition="center"
      display="flex"
      alignItems="center"
      justifyContent="center"
      px={4}
      color="white"
      _before={{
        content: '""',
        position: "absolute",
        top: 0,
        left: 0,
        w: "100%",
        h: "100%",
        bg: "rgba(29, 29, 190, 0.51)",
        zIndex: 0,
      }}
    >
      <Box position="relative" zIndex={1} textAlign="center">
        <Box
          p={{ base: 6, md: 10 }}
          borderRadius="xl"
          maxW="4xl"
          mx="auto"
          boxShadow="2xl"
          lineHeight={2.5}
        >
          <Heading
            fontSize={{ base: "xl", md: "7xl" }}
            fontWeight="normal"
            lineHeight={1.5}
          >
            Women in STEM Africa
          </Heading>
          <Heading
            fontSize={{ base: "3xl", md: "5xl" }}
            fontWeight="extrabold"
            mt={1}
          >
            Summit 2025
          </Heading>

          <Text
            fontSize={{ base: "xs", md: "sm" }}
            mt={4}
            textTransform="uppercase"
            letterSpacing={1.5}
          >
            Theme: Borderless Innovation: Pioneering Global Technology Solutions
            for Africa’s Challenges
          </Text>

          <Flex mt={6} justify="center" gap={6} wrap="wrap">
            <Button
              bgGradient={"to-r"}
              gradientFrom={"red.500"}
              gradientTo={"orange.700"}
              size="lg"
              borderRadius="md"
              px={6}
            >
              Register Now
            </Button>
            <Button
              bg="green.400"
              _hover={{ bg: "green.500" }}
              size="lg"
              borderRadius="md"
              px={6}
            >
              Sponsor
            </Button>
          </Flex>

          <Text mt={8} fontSize="lg" fontWeight="medium">
            JULY 8<sup>TH</sup> - 10<sup>TH</sup> 2025
          </Text>
          <Text fontSize="md">
            Kenyatta International Conference Center, Nairobi
          </Text>
        </Box>

        <Box mt={10}>
          <Flex
            bg="gray.700"
            p={{ base: 2, md: 4 }}
            borderRadius="2xl"
            boxShadow="lg"
            color="white"
            gap={6}
            wrap="wrap"
            justify="center"
            direction={{ base: "row", md: "row" }}
            align="center"
            w="fit-content"
            mx="auto"
          >
            {[
              { label: "DAYS", value: days },
              { label: "HOURS", value: hours },
              { label: "MINUTES", value: minutes },
              { label: "SECONDS", value: seconds },
            ].map((item, i) => (
              <VStack
                key={i}
                minW="50px"
                mx={{ base: -1, md: 2 }}
                border={"1px solid white"}
                p={{ base: 1, md: 4 }}
                // px={{ base: 2, md: 4 }}
                borderRadius="md"
                bg={"gray.500"}
              >
                <Heading size={{ base: "sm", md: "3xl" }}>
                  {String(item.value).padStart(2, "0")}
                </Heading>
                <Text fontSize={{ base: "sm" }}>{item.label}</Text>
              </VStack>
            ))}
          </Flex>
        </Box>
      </Box>
    </Box>
  );
}
