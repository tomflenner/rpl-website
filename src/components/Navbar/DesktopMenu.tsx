import { Link, Stack, useColorModeValue } from "@chakra-ui/react";
import { ReactNode } from "react";

type NavLinkProps = {
  children: ReactNode;
  onClick: () => void;
};

const NavLink = ({ onClick, children }: NavLinkProps) => (
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

export const DesktopMenu: React.FC = () => {
  return (
    <Stack direction="row" fontSize="xl">
      <NavLink onClick={() => {}}>Accueil</NavLink>
      <NavLink onClick={() => {}}>Serveurs</NavLink>
      <NavLink onClick={() => {}}>Stats</NavLink>
      <NavLink onClick={() => {}}>Contact</NavLink>
    </Stack>
  );
};
