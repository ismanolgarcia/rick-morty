import {
  Box,
  Heading,
  Icon,
  Text,
  Image,
  HStack,
  color,
} from '@chakra-ui/react';

export function Character(character) {
  return (
    <Box display='flex' bg='#2D3748' borderRadius='20px' overflow='hidden'>
      <Image
        src={character.image}
        alt={character.name}
        boxSize='160px'
        objectFit='cover'
        loading='lazy'
      />
      <HStack
        borderTopLeftRadius='20px'
        position='absolute'
        w='160px'
        bg={
          character.status === 'Alive'
            ? '#38A169'
            : character.status === 'Dead'
            ? '#9B2C2C'
            : 'gray'
        }
      >
        <Text textAlign='center' m='auto' color='#ffffff'>
          {character.status}
        </Text>
      </HStack>

      <Box marginLeft='15px' marginTop='10px'>
        <Heading as='h2' size={{ base: 'md', lg: 'lg' }} color='#ffffff'>
          {character.name}
        </Heading>
        <Text color='#ffffff'>Gender: {character.gender}</Text>
        <Text color='#ffffff'>Species: {character.species}</Text>
        <Text color='#ffffff'>Episode: {character.episode}</Text>
      </Box>
    </Box>
  );
}
export default Character;
