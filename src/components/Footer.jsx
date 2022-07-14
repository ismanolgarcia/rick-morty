import React from 'react';
import { Box, Icon, Link } from '@chakra-ui/react';
import { SiGithub } from 'react-icons/si';
import { TbApi } from 'react-icons/tb';
function Footer() {
  return (
    <Box display='flex' justifyContent='flex-end'>
      <Link
        href='https://github.com/ismanolgarcia/rick-morty'
        isExternal
        margin='0 20px '
      >
        <Icon as={SiGithub} />
      </Link>
      <Link href='https://rickandmortyapi.com/' isExternal margin='0 10px'>
        <Icon as={TbApi} />
      </Link>
    </Box>
  );
  Code;
}

export default Footer;
