import React from 'react';
import { HStack, Image, Text } from '@chakra-ui/react';
import flowers from '../assets/flower-image.jpg';
import { ColorModeSwitch } from './colormodeswitch';

export const NavBar = () => {
  return (
    <HStack>
        <Image src={flowers} boxSize="60px"></Image>
        <ColorModeSwitch/>
    </HStack>
  )
}
