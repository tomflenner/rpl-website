import {
  Box, Flex,
  Image,
  Stack,
  useBreakpointValue
} from "@chakra-ui/react";
import { DarkModeSwitch } from "./DarkModeSwitch";
import { DesktopMenu } from "./DesktopMenu";
import { MobileMenu } from "./MobileMenu";
import { UserMenu } from "./UserMenu";

export default function Nav() {
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Box id="navbar">
      <Flex
        h="16"
        alignItems="center"
        justifyContent="space-between"
        zIndex="overlay"
      >
        {isMobile ? (
          <>
            <MobileMenu />

            <Image
              h="5vh"
              src="/images/rpl_color_logo.png"
              alt="RPL"
              cursor="pointer"
            />

            <DarkModeSwitch />
          </>
        ) : (
          <>
            <Image
              h="5vh"
              src="/images/rpl_color_logo.png"
              alt="RPL"
              cursor="pointer"
            />
            <Stack direction="row" spacing="5" alignItems="center">
              <DesktopMenu />
              <DarkModeSwitch />
              <UserMenu />
            </Stack>
          </>
        )}
      </Flex>
    </Box>
  );
}
