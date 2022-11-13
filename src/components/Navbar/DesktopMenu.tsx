import { Link, Stack, useColorModeValue } from "@chakra-ui/react";
import { ReactNode } from "react";
import { NavMenuProps } from "./Navbar";

type NavLinkProps = {
  children: ReactNode;
  onClick: () => void;
};

const NavLink: React.FC<NavLinkProps> = ({ onClick, children }) => (
  <Link
    px={2}
    py={1}
    rounded="md"
    textTransform="uppercase"
    _hover={{
      textDecoration: "none",
      color: "orange",
    }}
    href="#"
    onClick={onClick}
  >
    {children}
  </Link>
);

export const DesktopMenu: React.FC<NavMenuProps> = ({ scrollToId }) => {
  return (
    <Stack direction="row" fontSize="xl">
      <NavLink
        onClick={() => {
          scrollToId("home");
        }}
      >
        Accueil
      </NavLink>
      <NavLink
        onClick={() => {
          scrollToId("serversInfo");
        }}
      >
        Serveurs
      </NavLink>
      <NavLink
        onClick={() => {
          scrollToId("stats");
        }}
      >
        Stats
      </NavLink>
      <NavLink onClick={() => {}}>Contact</NavLink>
    </Stack>
  );
};
