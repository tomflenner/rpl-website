import { SpinnerIcon } from "@chakra-ui/icons";
import { Heading, Icon, Stack, Text, VStack } from "@chakra-ui/react";
import path from "path";
import { ResponsiveValues } from "../../utils/responsive";

type InfoProps = {
  title: string;
  description: string;
  viewBox: string;
  path: React.ReactNode;
};

const Info: React.FC<InfoProps> = ({ title, description, viewBox, path }) => {
  return (
    <VStack h="100%">
      <Icon viewBox={viewBox} boxSize="12">
        {path}
      </Icon>
      <Heading size="md">{title}</Heading>
      <Text textAlign="center" fontSize="sm" w="50%">
        {description}
      </Text>
    </VStack>
  );
};

export const ServersInfos: React.FC = () => {
  return (
    <Stack
      id="serversInfo"
      margin="50"
      spacing="5"
      direction={ResponsiveValues("column", "row")}
    >
      <Info
        viewBox="0 0 24 24"
        title="128 TICKS"
        description="Tous nos serveurs sont en 128 ticks afin de vous offrir une expérience de jeu optimale et fluide."
        path={
          <path
            fill="orange"
            d="M3 1h16a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1m0 8h16a1 1 0 0 1 1 1v.67l-2.5-1.11l-6.5 2.88V15H3a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1m0 8h8c.06 2.25 1 4.4 2.46 6H3a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1M8 5h1V3H8v2m0 8h1v-2H8v2m0 8h1v-2H8v2M4 3v2h2V3H4m0 8v2h2v-2H4m0 8v2h2v-2H4m13.5-7l4.5 2v3c0 2.78-1.92 5.37-4.5 6c-2.58-.63-4.5-3.22-4.5-6v-3l4.5-2m0 1.94L15 15.06v2.66c0 1.54 1.07 2.98 2.5 3.34v-7.12Z"
          />
        }
      />
      <Info
        viewBox="0 0 24 24"
        title="RANK"
        description="Tous nos serveurs sont équipés d'un système de ranking dépendant de vos performances en jeu."
        path={
          <path
            fill="orange"
            d="M12 7a8 8 0 1 1 0 16a8 8 0 0 1 0-16zm0 3.5l-1.323 2.68l-2.957.43l2.14 2.085l-.505 2.946L12 17.25l2.645 1.39l-.505-2.945l2.14-2.086l-2.957-.43L12 10.5zm1-8.501L18 2v3l-1.363 1.138A9.935 9.935 0 0 0 13 5.049V2zm-2 0v3.05a9.935 9.935 0 0 0-3.636 1.088L6 5V2l5-.001z"
          />
        }
      />
      <Info
        viewBox="0 0 24 24"
        title="STATISTIQUES"
        description="Tous nos serveurs enregistrent vos statistiques liées à vos performances en jeu."
        path={
          <path
            fill="orange"
            d="M2 12h2v9H2v-9zm3 2h2v7H5v-7zm11-6h2v13h-2V8zm3 2h2v11h-2V10zM9 2h2v19H9V2zm3 2h2v17h-2V4z"
          />
        }
      />
    </Stack>
  );
};
