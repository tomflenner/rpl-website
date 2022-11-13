import {
  Avatar,
  Box,
  Button,
  Center,
  Link,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { ResponsiveValues } from "../../utils/responsive";

type UserInfosProps = {
  displayName: string;
  photos: any;
};

const UserInfos: React.FC<UserInfosProps> = ({ displayName, photos }) => {
  return (
    <>
      <Box display={ResponsiveValues("flex", "none")}>
        <MenuItem>
          <Avatar size="sm" src={photos[0].value} />
          <p>{displayName}</p>
        </MenuItem>
      </Box>

      <Box display={ResponsiveValues("none", "block")}>
        <br />
        <Center>
          <Avatar size="2xl" src={photos[2].value} />
        </Center>
        <br />
        <Center>
          <p>{displayName}</p>
        </Center>
        <br />
      </Box>
    </>
  );
};

type UserMenuProps = {
  user: UserInfosProps;
};

export const UserMenuContent: React.FC<UserMenuProps> = ({ user }) => {
  return (
    <>
      <UserInfos displayName={user.displayName} photos={user.photos} />
      <MenuDivider />
      <MenuItem>Mes statistiques</MenuItem>
      <MenuItem>Mes skins</MenuItem>
      <MenuDivider />
      <MenuItem>
        <Link href="/api/auth/logout">Se déconnecter</Link>
      </MenuItem>
    </>
  );
};

export const UserMenu: React.FC<UserMenuProps> = ({ user }) => {
  return (
    <Menu>
      <MenuButton
        as={Button}
        variant="link"
        cursor="pointer"
        rounded="full"
        minW="0"
      >
        <Avatar size="sm" src={user.photos[1].value} />
      </MenuButton>
      <MenuList alignItems="center">
        <UserMenuContent user={user} />
      </MenuList>
    </Menu>
  );
};
