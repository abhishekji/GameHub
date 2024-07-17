import React from 'react';
import { HStack, Image, Text } from '@chakra-ui/react';
import flowers from '../assets/flower-image.jpg';

export const NavBar = () => {
  return (
    <HStack>
        <Image src={flowers} boxSize="60px"></Image>
        <Text> NavBar </Text>
    </HStack>
  )
}
