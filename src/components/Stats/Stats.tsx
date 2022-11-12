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
  VStack
} from "@chakra-ui/react";
import { ResponsiveValues } from "../../utils/responsive";

export const TopTenTable = () => {
  return (
    <TableContainer>
      <Table variant="simple">
        <TableCaption placement="top">Classement Top 10</TableCaption>
        <Thead>
          <Tr>
            <Th>N°</Th>
            <Th>Joueur</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>1</Td>
            <Td>skyz</Td>
          </Tr>
          <Tr>
            <Td>2</Td>
            <Td>Radia</Td>
          </Tr>
          <Tr>
            <Td>3</Td>
            <Td>Scaffus</Td>
          </Tr>
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

export const Stats = () => {
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
        <TopTenTable />
        <TopTenTable />
        <TopTenTable />
      </Stack>
    </VStack>
  );
};
