import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { IconButton, useColorMode } from "@chakra-ui/react";

export const DarkModeSwitch: React.FC = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";
  return (
    <IconButton
      position="sticky"
      size="sm"
      top={4}
      right={4}
      icon={isDark ? <SunIcon color="orange" /> : <MoonIcon color="grey" />}
      aria-label="Toggle Theme"
      onClick={toggleColorMode}
    />
  );
};
