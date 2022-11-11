import {
  Avatar,
  Button,
  Center,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Stack,
  useBreakpointValue,
} from "@chakra-ui/react";

function UserInfos() {
  const isMobile = useBreakpointValue({ base: true, md: false });
  return (
    <>
      {isMobile ? (
        <>
          <MenuItem>
            <Avatar
              size="sm"
              src="https://avatars.dicebear.com/api/male/username.svg"
            />
            <p>Username</p>
          </MenuItem>
        </>
      ) : (
        <>
          {" "}
          <br />
          <Center>
            <Avatar
              size="2xl"
              src="https://avatars.dicebear.com/api/male/username.svg"
            />
          </Center>
          <br />
          <Center>
            <p>Username</p>
          </Center>
          <br />
        </>
      )}
    </>
  );
}

export function UserMenuContent() {
  return (
    <>
      <UserInfos />
      <MenuDivider />
      <MenuItem>Mes statistiques</MenuItem>
      <MenuItem>Mes skins</MenuItem>
      <MenuDivider />
      <MenuItem>Se déconnecter</MenuItem>
    </>
  );
}

export function UserMenu() {
  return (
    <Menu>
      <MenuButton
        as={Button}
        variant="link"
        cursor="pointer"
        rounded="full"
        minW="0"
      >
        <Avatar
          size="sm"
          src="https://avatars.dicebear.com/api/male/username.svg"
        />
      </MenuButton>
      <MenuList alignItems="center">
        <UserMenuContent />
      </MenuList>
    </Menu>
  );
}
