"use client";
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
import { useEffect, useState } from "react";

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

export default function Home() {
  const { days, hours, minutes, seconds } = useCountdown(targetDate);

  return (
    <Box position="relative" minH="100vh" overflow="hidden">
      {/* Background Image */}
      <Box position="absolute" top={0} left={0} w="full" h="full" zIndex={-1}>
        <Image
          src="/home-image.webp"
          alt="Women in STEM"
          layout="fill"
          objectFit="cover"
        />
        <Box
          bg="rgba(0, 0, 50, 0.6)"
          w="full"
          h="full"
          position="absolute"
          top={0}
          left={0}
        />
      </Box>

      {/* Content */}
      <Flex
        direction={{ base: "column", md: "row" }}
        justify="space-between"
        align={{ base: "start", md: "center" }}
        px={{ base: 4, md: 20 }}
        py={12}
        color="white"
      >
        <VStack align="start" gap={6} maxW={{ base: "full", md: "50%" }}>
          <Heading fontSize={{ base: "3xl", md: "5xl" }}>
            Women in STEM Africa
            <Text as="span" color="white" display="block">
              Summit 2025
            </Text>
          </Heading>

          <Text fontSize="lg">
            <Text as="span" fontWeight="bold">
              THEME:
            </Text>{" "}
            BORDERLESS INNOVATION: PIONEERING GLOBAL TECHNOLOGY SOLUTIONS FOR
            AFRICA’S CHALLENGES
          </Text>

          <Text fontSize="md">
            JULY 8<sup>th</sup> - 10<sup>th</sup> 2025
          </Text>

          <Text fontSize="md">
            Kenyatta International Conference Center, Nairobi
          </Text>

          <Stack direction={{ base: "column", sm: "row" }} gap={4}>
            <Button colorScheme="blue">Register Now</Button>
            <Button colorScheme="blue" variant="outline">
              Sponsor
            </Button>
            <Button colorScheme="blue" variant="ghost">
              Learn more
            </Button>
          </Stack>
        </VStack>

        {/* Countdown */}
        <Flex
          bg="gray.800"
          p={6}
          borderRadius="2xl"
          boxShadow="lg"
          color="white"
          mt={{ base: 10, md: 0 }}
          gap={6}
          wrap="wrap"
          justify="center"
        >
          {[
            { label: "DAYS", value: days },
            { label: "HOURS", value: hours },
            { label: "MINUTES", value: minutes },
            { label: "SECONDS", value: seconds },
          ].map((item, i) => (
            <VStack key={i} minW="60px">
              <Heading size="lg">{String(item.value).padStart(2, "0")}</Heading>
              <Text fontSize="xs">{item.label}</Text>
            </VStack>
          ))}
        </Flex>
      </Flex>
    </Box>
  );
}
