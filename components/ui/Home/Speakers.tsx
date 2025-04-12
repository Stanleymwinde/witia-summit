"use client";
import { MarginX, SpeakersData } from "@/utils";
import {
  Box,
  Button,
  CloseButton,
  Grid,
  Heading,
  Portal,
  Stack,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const Speakers = () => {
  const [selectedSpeaker, setSelectedSpeaker] = useState<any>(null);
  const [isDialogOpen, setDialogOpen] = useState(false);

  const handleReadMore = (speaker: any) => {
    setSelectedSpeaker(speaker);
    setDialogOpen(true);
  };

  const handleClose = () => {
    setDialogOpen(false);
    setSelectedSpeaker(null);
  };

  return (
    <>
      <Box bg={"gray.50"} py={10}>
        <Box marginX={MarginX}>
          <Box textAlign="center" mb={10}>
            <Heading
              fontSize={{ base: "2xl", md: "4xl" }}
              color="blue.600"
              mb={3}
            >
              Meet Our Speakers
            </Heading>
          </Box>

          <Grid
            templateColumns={{ base: "repeat(1, 1fr)", sm: "repeat(2, 1fr)", md: "repeat(4, 1fr)" }}
            gap={8}
          >
            {SpeakersData.map((item, index) => (
              <Box
                key={index}
                bg="white"
                borderRadius="xl"
                boxShadow="md"
                overflow="hidden"
                transition="all 0.3s"
                _hover={{ boxShadow: "xl", transform: "translateY(-4px)" }}
              >
                <Box
                  bgImage={`url(${item.imageUrl})`}
                  bgSize="cover"
                  bgPos="center"
                  height="280px"
                >
                  {/* Optional overlay if needed */}
                  <Box
                    w="full"
                    h="full"
                    bg="blackAlpha.400"
                  />
                </Box>

                <Box p={5} textAlign="center">
                  <Heading fontSize="xl" mb={1}>
                    {item.name}
                  </Heading>
                  <Text fontSize="md" color="gray.600">
                    {item.title}
                  </Text>
                  <Text fontSize="sm" color="blue.500" mb={3}>
                    {item.subtitle}
                  </Text>
                  <Button
                    colorScheme="blue"size="sm"
                    onClick={() => handleReadMore(item)}
>
                   <Box as="span" display="flex" alignItems="center" gap={2}>
                    Read More
                    <FaArrowRightLong />
                  </Box>
                  </Button>

      
                </Box>
              </Box>
            ))}
          </Grid>

          {/* Speaker Modal */}
          {isDialogOpen && selectedSpeaker && (
            <Portal>
              <Box
                pos="fixed"
                top="0"
                left="0"
                width="100vw"
                height="100vh"
                bg="rgba(0, 0, 0, 0.7)"
                display="flex"
                alignItems="center"
                justifyContent="center"
                zIndex="overlay"
              >
                <Box
                  bg="white"
                  p={6}
                  borderRadius="md"
                  maxW="600px"
                  w="90%"
                  maxHeight="90vh"
                  overflowY="auto"
                  boxShadow="2xl"
                  pos="relative"
                >
                  <CloseButton
                    pos="absolute"
                    top={3}
                    right={3}
                    onClick={handleClose}
                  />
                  <Heading mb={2}>{selectedSpeaker.name}</Heading>
                  <Text fontWeight="semibold">{selectedSpeaker.title}</Text>
                  <Text fontStyle="italic" mb={4} color="blue.500">
                    {selectedSpeaker.subtitle}
                  </Text>
                  <Text color="gray.700">{selectedSpeaker.bio}</Text>
                </Box>
              </Box>
            </Portal>
          )}
        </Box>
      </Box>
    </>
  );
};

export default Speakers;




