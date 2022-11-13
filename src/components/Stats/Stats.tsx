import {
  Heading,
  Stack,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Tfoot,
  Th,
  Thead,
  Tr,
  VStack,
} from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Player } from "../../types/Player";
import { getPlayers } from "../../utils/players/getPlayers";
import { getTop } from "../../utils/players/getTop";
import { ResponsiveValues } from "../../utils/responsive";

enum TopTenType {
  HS = "hs",
  KD = "kd",
  RANK = "rank",
}

type TopTenTableProps = {
  title: string;
  type: TopTenType;
};

export const TopTenTable: React.FC<TopTenTableProps> = ({ title, type }) => {
  const [players, setPlayers] = useState<Player[]>([]);

  useEffect(() => {
    getTop(type, 3).then(setPlayers);
  }, []);

  return (
    <TableContainer>
      <Table variant="simple">
        <TableCaption placement="top">Classement Top 3 - {title}</TableCaption>
        <Thead>
          <Tr>
            <Th>N°</Th>
            <Th>Joueur</Th>
          </Tr>
        </Thead>
        <Tbody>
          {players.map((p, i) => {
            return (
              <Tr>
                <Td>{i + 1}</Td>
                <Td>{p.name}</Td>
              </Tr>
            );
          })}
        </Tbody>
        <Tfoot>
          <Tr>
            <Th>N°</Th>
            <Th>Joueur</Th>
          </Tr>
        </Tfoot>
      </Table>
    </TableContainer>
  );
};

export const Stats: React.FC = () => {
  return (
    <VStack id="stats" marginTop="10" marginBottom="10">
      <Heading color="orange" marginBottom="10">
        Statistiques
      </Heading>
      <Stack
        w="100%"
        alignItems="center"
        justifyContent="space-evenly"
        direction={ResponsiveValues("column", "row")}
      >
        <TopTenTable title="Rang" type={TopTenType.RANK} />
        <TopTenTable title="Headshot" type={TopTenType.HS} />
        <TopTenTable title="KD" type={TopTenType.KD} />
      </Stack>
    </VStack>
  );
};
