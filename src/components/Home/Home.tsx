import {
  Center, Image,
  Stack,
  Text
} from "@chakra-ui/react";
import { ResponsiveValues } from "../../utils/responsive";

export const Home = () => (
  <Stack
    minH="100vh"
    alignItems="center"
    justifyContent="center"
    verticalAlign="middle"
    direction={ResponsiveValues("column", "row")}
  >
    <Center h="100%" w="50%">
      <Text fontWeight="bold" fontSize="4xl" color="orange" textAlign="center">
        RETAKE PRO LEAGUE
      </Text>
    </Center>
    <Center
      h="100%"
      w="50%"
      paddingRight={ResponsiveValues("", "10vw")}
      justifyContent="center"
    >
      <Image src="/images/home.svg" alt="Image" />
    </Center>
  </Stack>
);
