import React, { useState } from 'react';
import { Input, Button, Box } from '@chakra-ui/react';

function SearchCharacters({ setQuery, setPage }) {
  let searchBtn = (e) => {
    e.preventDefault();
  };
  return (
    <Box display='flex' margin='25px 0'>
      <Input
        placeholder='Search for Characters'
        onChange={(e) => {
          setPage(1);
          setQuery(e.target.value);
        }}
        htmlSize={95}
        marginRight='15px'
        width='auto'
      />
      <Button width='160px' onClick={searchBtn}>
        Search
      </Button>
    </Box>
  );
}

export default SearchCharacters;
