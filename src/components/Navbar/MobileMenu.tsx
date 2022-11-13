import { HamburgerIcon } from "@chakra-ui/icons";
import {
  IconButton,
  Image,
  Link,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { NavMenuProps } from "./Navbar";
import { UserMenuContent } from "./UserMenu";

export const MobileMenu: React.FC<NavMenuProps> = ({ scrollToId, user }) => {
  return (
    <Menu>
      <MenuButton
        as={IconButton}
        aria-label="Options"
        icon={<HamburgerIcon />}
        variant="outline"
      />
      <MenuList>
        <MenuItem
          onClick={() => {
            scrollToId("home");
          }}
        >
          Accueil
        </MenuItem>
        <MenuItem
          onClick={() => {
            scrollToId("serversInfo");
          }}
        >
          Serveurs
        </MenuItem>
        <MenuItem
          onClick={() => {
            scrollToId("sats");
          }}
        >
          Stats
        </MenuItem>
        <MenuItem onClick={() => {}}>Contact</MenuItem>
        <MenuDivider />
        {user ? (
          <>
            <UserMenuContent user={user} />
          </>
        ) : (
          <MenuItem justifyContent="center">
            <Link href="/api/auth/login">
              <Image
                h="4vh"
                src="/images/steam_mobile.png"
                alt="Se connecter avec Steam"
                cursor="pointer"
              />
            </Link>
          </MenuItem>
        )}
      </MenuList>
    </Menu>
  );
};
