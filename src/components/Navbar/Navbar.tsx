import {
  Box,
  Collapse,
  Fade,
  Flex,
  Image,
  Link,
  Stack,
  useDisclosure,
} from "@chakra-ui/react";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";
import { useCallback, useEffect, useState } from "react";
import Scroll from "react-scroll";
import { ResponsiveValues } from "../../utils/responsive";
import { DarkModeSwitch } from "./DarkModeSwitch";
import { DesktopMenu } from "./DesktopMenu";
import { MobileMenu } from "./MobileMenu";
import { UserMenu } from "./UserMenu";
const scroller = Scroll.scroller;

export type NavMenuProps = {
  scrollToId: (id: string) => void;
  user?: any;
};

export type NavbarProps = {
  user: any;
  ready: boolean;
};

export const Navbar: React.FC<NavbarProps> = ({ user, ready }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  useScrollPosition(
    ({ currPos }) => {
      if (currPos.y < -5) {
        setIsScrolled(true);
      } else if (currPos.y >= -5) {
        setIsScrolled(false);
      }
    },
    [],
    undefined,
    false,
    33
  );

  const scrollToId = useCallback((idScrollInto: string) => {
    scroller.scrollTo(idScrollInto, { smooth: true, offset: -100 });
  }, []);

  const { isOpen, onToggle } = useDisclosure();

  useEffect(() => {
    if (ready) onToggle();
  }, [ready]);

  return (
    <Collapse in={isOpen} animateOpacity>
      <Flex
        id="navbar"
        backdropFilter="auto"
        backdropBlur="6px"
        w="100%"
        position="fixed"
        h="16"
        maxH="16"
        padding="1em"
        alignItems="center"
        justifyContent="space-between"
        zIndex="overlay"
        boxShadow={isScrolled ? "md" : undefined}
      >
        <Image
          h="5vh"
          src="/images/rpl_color_logo.png"
          alt="RPL"
          cursor="pointer"
          order={ResponsiveValues(2, 1)}
        />

        <Box order="1" display={ResponsiveValues("flex", "none")}>
          <MobileMenu scrollToId={scrollToId} user={user} />
        </Box>

        <Stack direction="row" spacing="5" alignItems="center" order="3">
          <Box display={ResponsiveValues("none", "flex")}>
            <DesktopMenu scrollToId={scrollToId} />
          </Box>

          <DarkModeSwitch />
          <Box display={ResponsiveValues("none", "flex")}>
            {user ? (
              <UserMenu user={user} />
            ) : (
              <Link href="/api/auth/login">
                <Image
                  h="5vh"
                  src="/images/steam.png"
                  alt="Se connecter avec Steam"
                  cursor="pointer"
                />
              </Link>
            )}
          </Box>
        </Stack>
      </Flex>
    </Collapse>
  );
};
