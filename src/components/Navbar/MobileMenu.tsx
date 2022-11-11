import { HamburgerIcon } from "@chakra-ui/icons";
import {
  IconButton,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { UserMenuContent } from "./UserMenu";

export const MobileMenu: React.FC = () => {
  return (
    <Menu>
      <MenuButton
        as={IconButton}
        aria-label="Options"
        icon={<HamburgerIcon />}
        variant="outline"
      />
      <MenuList>
        <MenuItem onClick={() => {}}>Accueil</MenuItem>
        <MenuItem onClick={() => {}}>Serveurs</MenuItem>
        <MenuItem onClick={() => {}}>Stats</MenuItem>
        <MenuItem onClick={() => {}}>Contact</MenuItem>
        <MenuDivider />
        <UserMenuContent />
      </MenuList>
    </Menu>
  );
};
