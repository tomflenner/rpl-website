import { Flex, Image, Link, Stack, useBreakpointValue } from "@chakra-ui/react";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";
import { useCallback, useState } from "react";
import Scroll from "react-scroll";
import { DarkModeSwitch } from "./DarkModeSwitch";
import { DesktopMenu } from "./DesktopMenu";
import { MobileMenu } from "./MobileMenu";
import { UserMenu } from "./UserMenu";
const scroller = Scroll.scroller;

export type NavMenuProps = {
  scrollToId: (id: string) => void;
  user?: any;
};

export const Navbar = ({ user }) => {
  const isMobile = useBreakpointValue({ base: true, md: false });

  const [isScrolled, setIsScrolled] = useState(false);
  useScrollPosition(
    ({ currPos }) => {
      if (currPos.y < -5) {
        setIsScrolled(true);
      } else if (currPos.y >= -5) {
        setIsScrolled(false);
      }
    },
    [isMobile],
    undefined,
    false,
    33
  );

  const scrollToId = useCallback((idScrollInto: string) => {
    scroller.scrollTo(idScrollInto, { smooth: true, offset: -100 });
  }, []);

  return (
    <Flex
      id="navbar"
      backdropFilter="auto"
      backdropBlur="6px"
      w="100%"
      position="fixed"
      h="16"
      alignItems="center"
      justifyContent="space-between"
      zIndex="overlay"
      boxShadow={isScrolled ? "md" : undefined}
    >
      {isMobile ? (
        <>
          <MobileMenu scrollToId={scrollToId} user={user} />

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
            <DesktopMenu scrollToId={scrollToId} />
            <DarkModeSwitch />
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
          </Stack>
        </>
      )}
    </Flex>
  );
};
