"use client";
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
      {/* Full-Screen Background */}
      <Box position="absolute" top={0} left={0} w="full" h="full" zIndex={-2}>
        <Image
          src="/backgimage.jpeg"
          alt="Background"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
        <Box
          bg="rgba(0, 48, 151, 0.6)"
          w="full"
          h="full"
          position="absolute"
          top={0}
          left={0}
        />
      </Box>

      {/* Centered Africa Map Image */}
      <Box
        position="absolute"
        top="50%"
        left="50%"
        transform="translate(-50%, -50%)"
        zIndex={-1}
        w={"100%"}
        maxW="900px"
        opacity={0.85}
      >
        <Image
          src="/homepage.jpeg"
          alt="Africa Map"
          layout="responsive"
          width={900}
          height={1000}
          objectFit="contain"
        />
      </Box>

      {/* Content */}
      <Flex
        direction="column"
        justify="center"
        align="center"
        marginX={MarginX}
        py={20}
        color="white"
        textAlign="center"
        minH="100vh"
        position="relative"
        zIndex={1}
      >
        <Stack gap={6} maxW="4xl">
          <Heading fontSize={{ base: "4xl", md: "6xl" }} lineHeight="taller">
            Women in STEM Africa
            <Text
              as="span"
              display="block"
              fontWeight="extrabold"
              color="white"
            >
              Summit 2025
            </Text>
          </Heading>

          <Text fontSize={{ base: "lg", md: "2xl" }}>
            <Text as="span" fontWeight="bold">
              THEME:
            </Text>{" "}
            BORDERLESS INNOVATION: PIONEERING GLOBAL TECHNOLOGY SOLUTIONS FOR
            AFRICA’S CHALLENGES
          </Text>

          <Stack
            direction={{ base: "column", sm: "row" }}
            gap={4}
            justify="center"
          >
            <Button
              bgGradient="to-r"
              gradientFrom="red.500"
              gradientTo="orange.300"
              _hover={{
                cursor: "pointer",
                filter: "brightness(110%)",
                transform: "scale(1.05)",
              }}
              color="white"
              bg={"red"}
            >
              Register Now Carol
            </Button>
            <Button
              bgGradient="to-r"
              gradientFrom="green.500"
              gradientTo="yellow.300"
              _hover={{
                cursor: "pointer",
                filter: "brightness(110%)",
                transform: "scale(1.05)",
              }}
              color="white"
            >
              Sponsor
            </Button>
          </Stack>

          <Text fontSize="xl">
            JULY 8<sup>th</sup> - 10<sup>th</sup> 2025
          </Text>

          <Text fontSize="2xl">
            Kenyatta International Conference Center, Nairobi
          </Text>
        </Stack>
      </Flex>
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
        position="absolute"
        bottom={10}
        right={10}
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
      <Box>
        <Image
          src="/Logo.png"
          alt="Witia Logo"
          width={500}
          height={300}
          style={{ borderRadius: "50%" }}
        />
      </Box>
    </Box>
  );
}
