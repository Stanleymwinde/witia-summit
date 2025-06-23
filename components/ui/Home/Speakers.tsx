"use client";
import { MarginX, SpeakersData } from "@/utils";
import {
  Box,
  Button,
  CloseButton,
  Grid,
  Heading,
  Image,
  Portal,
  Text,
  Stack,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const ITEMS_PER_PAGE = 12;

const Speakers = () => {
  const [selectedSpeaker, setSelectedSpeaker] = useState<any>(null);
  const [isDialogOpen, setDialogOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(SpeakersData.length / ITEMS_PER_PAGE);

  const paginatedSpeakers = SpeakersData.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const handleReadMore = (speaker: any) => {
    setSelectedSpeaker(speaker);
    setDialogOpen(true);
  };

  const handleClose = () => {
    setDialogOpen(false);
    setSelectedSpeaker(null);
  };

  return (
    <Box bg="gray.50" py={10}>
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
          templateColumns={{
            base: "repeat(1, 1fr)",
            sm: "repeat(2, 1fr)",
            md: "repeat(4, 1fr)",
          }}
          justifyContent="center"
          gap={8}
        >
          {paginatedSpeakers.map((item, index) => (
            <Box
              key={index}
              bg="white"
              borderRadius="xl"
              boxShadow="md"
              overflow="hidden"
              transition="all 0.3s"
              _hover={{ boxShadow: "xl", transform: "translateY(-4px)" }}
              maxW="260px"
              mx="auto"
            >
              <Box
                width="100%"
                height="280px"
                bg="gray.100"
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <Image
                  src={item.imageUrl}
                  alt={item.name}
                  objectFit="cover"
                  width="100%"
                  height="100%"
                />
              </Box>

              <Box p={4} textAlign="center">
                <Heading fontSize="lg" mb={1}>
                  {item.name}
                </Heading>
                <Text fontSize="sm" color="gray.600">
                  {item.title}
                </Text>

                {/* 🔁 ADDED: organization */}
                {item.organization && (
                  <Text fontSize="sm" color="gray.500">
                    {item.organization}
                  </Text>
                )}

                <Text fontSize="sm" color="blue.500" mb={3}>
                  {item.subtitle}
                </Text>
                <Button
                  colorScheme="blue"
                  size="sm"
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

        {/* Pagination Controls */}
        <Stack direction="row" justify="center" mt={10} gap={4}>
          <Button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
          >
            Previous
          </Button>
          {Array.from({ length: totalPages }, (_, i) => (
            <Button
              key={i}
              onClick={() => setCurrentPage(i + 1)}
              variant={currentPage === i + 1 ? "solid" : "outline"}
              colorScheme="blue"
            >
              {i + 1}
            </Button>
          ))}
          <Button
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            disabled={currentPage === totalPages}
          >
            Next
          </Button>
        </Stack>

        {/* Modal */}
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

                {/* 🔁 ADDED: organization */}
                {selectedSpeaker.organization && (
                  <Text color="gray.500" fontSize="sm">
                    {selectedSpeaker.organization}
                  </Text>
                )}

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
  );
};

export default Speakers;











