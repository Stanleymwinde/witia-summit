"use client";
import React, { useState } from 'react';
import { Box, Button, Heading, Text, VStack, HStack, Tabs } from '@chakra-ui/react';
import { LuFolder, LuSquareCheck, LuUser } from 'react-icons/lu';

const agendaData: Record<string, { time: string; title: string }[]> = {
  'July 8th': [
    { time: '8:00 AM - 9:00 AM', title: 'Welcome and Registration' },
    { time: '9:00 AM - 10:00 AM', title: 'Opening Ceremony' },
    { time: '10:00 AM - 11:00 AM', title: 'Innovation Showcase Tour, Networking Break' },
    { time: '11:00 AM - 11:30 AM', title: 'Keynote: Harnessing AI and Machine Learning for Africa’s Development' },
    { time: '11:30 AM - 12:30 PM', title: 'Panel Discussion: How AI can address challenges in healthcare, agriculture, and education' },
    { time: '12:30 PM - 1:30 PM', title: 'Lunch Break' },
    { time: '1:30 PM - 2:00 PM', title: 'Keynote: Green Engineering – Sustainable Innovations for Climate Challenges' },
    { time: '2:00 PM - 3:00 PM', title: 'Panel Discussion: Leveraging technology and engineering solutions to combat climate change and promote sustainability' },
    { time: '3:00 PM - 3:30 PM', title: 'Coffee Break' },
    { time: '3:30 PM - 4:30 PM', title: 'Startups Without Borders: Global Collaboration for Local Impact' },
    { time: '7:00 PM - 9:00 PM', title: 'VIP Networking Dinner' },
  ],
  'July 9th': [
    { time: '8:00 AM - 9:00 AM', title: 'Morning Coffee and Networking' },
    { time: '9:00 AM - 9:30 AM', title: 'Keynote: Women Driving Fintech Innovations in Africa' },
    { time: '9:30 AM - 10:30 AM', title: 'Panel Discussion: Success stories and opportunities for women in reshaping financial inclusion' },
    { time: '10:30 AM - 11:00 AM', title: 'Networking Break' },
    { time: '11:00 AM - 11:30 AM', title: 'Keynote: Tech for Good – Social Impact Innovations by Women' },
    { time: '11:30 AM - 12:30 PM', title: 'Panel Discussion: Women-led initiatives transforming communities through technology' },
    { time: '12:30 PM - 1:30 PM', title: 'Lunch' },
    { time: '1:30 PM - 2:00 PM', title: 'Keynote: Cybersecurity and Data Protection in Africa’s Digital Future' },
    { time: '2:00 PM - 3:00 PM', title: 'Panel Discussion: Addressing security threats and building robust data policies' },
    { time: '3:00 PM - 3:30 PM', title: 'Coffee Break' },
    { time: '3:30 PM - 5:00 PM', title: 'Networking and Mentorship Session' },
  ],
  'July 10th': [
    { time: '8:00 AM - 9:00 AM', title: 'Breakfast and Informal Networking' },
    { time: '9:00 AM - 10:30 AM', title: 'Panel Discussion: The Future of Work – Upskilling Women for Emerging Technologies' },
    { time: '10:30 AM - 11:00 AM', title: 'Coffee Break' },
    { time: '11:00 AM - 12:30 PM', title: 'Innovation Showcase Pitch Session (Women-Led Startup Presentations)' },
    { time: '12:30 PM - 2:00 PM', title: 'Lunch and Innovation Networking' },
    { time: '2:00 PM - 3:30 PM', title: 'Policy and Advocacy Dialogue: Shaping Inclusive Technology Policies in Africa' },
    { time: '3:30 PM - 4:00 PM', title: 'Closing Remarks and Appreciation Note' },
    { time: '4:00 PM - 5:00 PM', title: 'Farewell Networking Party' },
  ],
};

const Agenda = () => {
  const [selectedDate, setSelectedDate] = useState('July 8th');

  return (
    <Box py={12} px={4} maxW="5xl" mx="auto">
      <Heading as="h2" size="2xl" fontWeight="bold" textAlign="center" mb={8} color="blue.700">
        Event Agenda
      </Heading>

      <HStack gap={4} justify="center" mb={8} flexWrap="wrap">
        {Object.keys(agendaData).map((date) => (
          <Button
            key={date}
            onClick={() => setSelectedDate(date)}
            variant={selectedDate === date ? 'solid' : 'outline'}
            colorScheme="blue"
            size="lg"
            fontWeight="semibold"
            mx={2} // This ensures there's some space between the buttons
          >
            {date}
          </Button>
        ))}
      </HStack>

      <VStack gap={6}>
        {agendaData[selectedDate].map((session, index) => (
          <Box
            key={index}
            borderLeft="4px solid"
            borderColor="blue.600"
            bg="white"
            shadow="sm"
            p={4}
            rounded="lg"
            w="full"
          >
            <Text fontSize="sm" fontWeight="medium" color="blue.600">
              {session.time}
            </Text>
            <Text fontSize="lg" color="gray.800">
              {session.title}
            </Text>
            {/* Optional: Divider between sessions */}
            {index < agendaData[selectedDate].length - 1 }
          </Box>
        ))}
      </VStack>
    </Box>
  );
};

export default Agenda;
