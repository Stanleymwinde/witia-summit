"use client";
import { MarginX, SpeakersData } from "@/utils";
import {
  Box,
  Button,
  CloseButton,
  Dialog,
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
      <Box bg={"gray.50"}>
        <Box marginX={MarginX}>
          <Box textAlign={"center"} py={10}>
            <Heading
              fontSize={{ base: "2xl", md: "4xl" }}
              color={"white"}
              bg={"blue.500"}
              padding={5}
              borderRadius={10}
              display="inline-block"
            >
              Speakers
            </Heading>
            <Text fontSize={{ base: "sm", md: "xl" }} color={"#0A192F"} mt={5}>
              The Summit offers a range of Industry focus that provide the
              opportunity to learn and networking
            </Text>
          </Box>

          <Grid
            templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(4, 1fr)" }}
            gap={6}
            mt={5}
          >
            {SpeakersData.map((item, index) => (
              <Box
                pos="relative"
                borderRadius="md"
                boxShadow="md"
                bgImage={`url(${item.imageUrl})`}
                key={index}
                bgSize="cover"
                bgPos="center"
                height="22rem"
              >
                <Stack
                  w="80%"
                  align="center"
                  p={3}
                  pos="absolute"
                  bottom="10%"
                  left="50%"
                  transform="translate(-50%,50%)"
                  bg="white"
                  textAlign="center"
                  borderRadius="md"
                >
                  <Heading fontSize="2xl">{item.name}</Heading>
                  <Text fontSize="md">{item.title}</Text>
                  <Text fontSize="sm" color="blue.500">
                    {item.subtitle}
                  </Text>
                  <Button
                    colorScheme="primary"
                    onClick={() => handleReadMore(item)}
                  >
                    <FaArrowRightLong />
                    Read More
                  </Button>
                </Stack>
              </Box>
            ))}
          </Grid>

          {/* Modal/Dialog */}
          <Dialog.Root
            open={isDialogOpen}
            onOpenChange={({ open }: { open: boolean }) => setDialogOpen(open)}
            scrollBehavior="inside"
            size="sm"
          >
            <Portal>
              <Dialog.Backdrop />
              <Dialog.Positioner>
                <Dialog.Content>
                  <Dialog.Header>
                    <Dialog.Title>{selectedSpeaker?.name}</Dialog.Title>
                  </Dialog.Header>

                  <Dialog.CloseTrigger asChild>
                    <CloseButton size="sm" />
                  </Dialog.CloseTrigger>

                  <Dialog.Body>
                    <Text fontWeight="bold" mb={2}>
                      {selectedSpeaker?.title}
                    </Text>
                    <Text fontSize="sm" color="blue.500" mb={4}>
                      {selectedSpeaker?.subtitle}
                    </Text>
                    <Text>
                      {selectedSpeaker?.description ||
                        "More details about this speaker will appear here."}
                    </Text>
                  </Dialog.Body>
                </Dialog.Content>
              </Dialog.Positioner>
            </Portal>
          </Dialog.Root>
        </Box>
      </Box>
    </>
  );
};

export default Speakers;
