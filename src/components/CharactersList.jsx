import { useState, useEffect } from 'react';
import { Character } from './Characters';
import { Grid, GridItem, Button, HStack, Box, Spinner } from '@chakra-ui/react';
import { ArrowBackIcon, ArrowForwardIcon } from '@chakra-ui/icons';
import SearchCharaters from './SearchCharacters';
function NavPage({ page, setPage }) {
  return (
    <HStack
      display='flex'
      alignItems='center'
      justifyContent='space-between'
      margin='10'
    >
      <span>Page: {page}</span>
      <Box>
        <Button onClick={() => setPage(page - 1)}>
          <ArrowBackIcon />
        </Button>
        <Button onClick={() => setPage(page + 1)}>
          <ArrowForwardIcon />
        </Button>
      </Box>
    </HStack>
  );
}
export function CharacterList() {
  const [loading, setLoading] = useState(true);
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState('');

  const api = `https://rickandmortyapi.com/api/character/?page=${page}&name=${query}`;

  useEffect(() => {
    async function fetchData() {
      const data = await fetch(api);
      const { results } = await data.json();
      setCharacters(data);
      setCharacters(results);
      setLoading(false);
    }
    fetchData();
  }, [api]);

  return (
    <Box>
      <SearchCharaters setQuery={setQuery} setPage={setPage} />
      {loading ? (
        <Spinner />
      ) : (
        <Grid
          templateColumns={{
            base: 'repeat(1, 1fr)',
            md: 'repeat(2, 1fr)',
            lg: 'repeat(2, 1fr)',
          }}
          gap={6}
        >
          {characters?.map((character) => (
            <GridItem key={character.id}>
              <Character
                key={character.id}
                name={character.name}
                species={character.species}
                status={character.status}
                image={character.image}
                episode={character.episode.length}
                gender={character.gender}
              />
            </GridItem>
          ))}
        </Grid>
      )}

      <NavPage page={page} setPage={setPage} />
    </Box>
  );
}

export default CharacterList;
