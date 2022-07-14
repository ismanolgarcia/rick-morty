import { Container, Heading, Box } from '@chakra-ui/react';
import { CharacterList } from './components/CharactersList';
import ButtonModeColor from './components/ButtonModeColor';

function App() {
  return (
    <Container maxW='container.lg' display='flex' flexDirection='column'>
      <Box
        justifyContent='flex-end'
        mt='10px'
        mr={{ base: '-10px', lg: '10px' }}
        ml='auto'
      >
        <ButtonModeColor />
      </Box>
      <Heading as='h1' textAlign='center' margin='25'>
        Rick And Morty
      </Heading>
      <CharacterList />
    </Container>
  );
}

export default App;
