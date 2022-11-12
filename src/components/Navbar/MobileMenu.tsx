import { HamburgerIcon } from "@chakra-ui/icons";
import {
  IconButton,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { NavMenuProps } from "./Navbar";
import { UserMenuContent } from "./UserMenu";

export const MobileMenu: React.FC<NavMenuProps> = ({ scrollToId }) => {
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
        <UserMenuContent />
      </MenuList>
    </Menu>
  );
};
