import { useState, useEffect } from 'react';
import { Character } from './Characters';
import { Grid, GridItem, Button, HStack, Box, Input } from '@chakra-ui/react';
import { ArrowBackIcon, ArrowForwardIcon } from '@chakra-ui/icons';

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

function SearchApi({ query, setQuery }) {
  return (
    <Box display='flex' margin='25px 0'>
      <Input
        placeholder='Search for Characters'
        onChange={(event) => setQuery(event.target.value)}
        value={query}
        htmlSize={95}
        marginRight='15px'
        width='auto'
      />
      <Button
        width='160px'
        onClick={() => console.log('soy el mmg boton')}
        // value={query}
      >
        Search
      </Button>
    </Box>
  );
}

export function CharacterList() {
  const [loading, setLoading] = useState(true);
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState('');

  useEffect(() => {
    async function fetchDataSearch() {
      const dataSearch = await fetch(
        `https://rickandmortyapi.com/api/character/?name=${query}`
      );
      const { results } = await dataSearch.json();
      setCharacters(results);
      setLoading(false);
    }
    fetchDataSearch();
  }, [query]);

  useEffect(() => {
    async function fetchData() {
      const data = await fetch(
        `https://rickandmortyapi.com/api/character?page=${page}`
      );
      const { results } = await data.json();
      setCharacters(results);
      setLoading(false);
    }
    fetchData();
  }, [page]);

  return (
    <div>
      <SearchApi />
      {loading ? (
        <div>Loading...</div>
      ) : (
        <Grid
          templateColumns={{ base: 'repeat(1, 1fr)', lg: 'repeat(2, 1fr)' }}
          gap={6}
        >
          {characters.map((character) => (
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
    </div>
  );
}

export default CharacterList;
