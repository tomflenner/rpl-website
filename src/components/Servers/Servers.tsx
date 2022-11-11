import { SpinnerIcon } from "@chakra-ui/icons";
import {
  Heading,
  Icon,
  Stack,
  Text,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import { ResponsiveValues } from "../../utils/responsive";

type InfoProps = {
  icon: any;
  title: string;
  description: string;
};

const Info = ({ icon, title, description }: InfoProps) => {
  return (
    <VStack
    h="100%">
      <Icon as={icon} color={useColorModeValue("orange", "yellow")} boxSize="12"/>
      <Heading size="md">{title}</Heading>
      <Text textAlign="center" fontSize="sm" w="50%">
        {description}
      </Text>
    </VStack>
  );
};

export const ServersInfos = () => {
  return (
    <Stack
      id="serversInfo"
      margin="50"
      spacing="5"
      direction={ResponsiveValues("column", "row")}
    >
      <Info
        icon={SpinnerIcon}
        title="128 TICKS"
        description="Tous nos serveurs sont en 128 ticks afin de vous offrir une expérience de jeu optimale et fluide."
      />
      <Info
        icon={SpinnerIcon}
        title="RANK"
        description="Tous nos serveurs sont équipés d'un système de ranking dépendant de vos performances en jeu."
      />
      <Info
        icon={SpinnerIcon}
        title="STATISTIQUES"
        description="Tous nos serveurs enregistrent vos statistiques liées à vos performances en jeu."
      />
    </Stack>
  );
};
