import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import { IconButton, useColorMode } from '@chakra-ui/react'

export const DarkModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  const isDark = colorMode === 'dark'
  return (
      <IconButton
        position="sticky"
        size="sm"
        top={4}
        right={4}
        icon={isDark ? <SunIcon /> : <MoonIcon />}
        aria-label="Toggle Theme"
        bgGradient="linear(to-b, yellow, orange)"
        colorScheme="orange"
        onClick={toggleColorMode}
      />
  )
}
