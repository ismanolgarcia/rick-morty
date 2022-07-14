import React from 'react';
import { useColorMode, Button } from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';

function ButtonModeColor() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Button
      onClick={toggleColorMode}
      bgColor='transparent'
      width='25px'
      variant='unstyled'
    >
      {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
    </Button>
  );
}

export default ButtonModeColor;
