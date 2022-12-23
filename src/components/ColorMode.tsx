import { useColorMode } from '@chakra-ui/color-mode'
import { Button } from '@chakra-ui/react'
import React from 'react'

export const ColorMode = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <header>
      <Button onClick={toggleColorMode}>
        Toggle {colorMode === 'light' ? 'Dark' : 'Light'}
      </Button>
    </header>
  )
}
