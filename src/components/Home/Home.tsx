import { Box, Center, Image, Stack, Text } from "@chakra-ui/react";
import { ResponsiveValues } from "../../utils/responsive";

export const Home: React.FC = () => (
  <Stack
    id="home"
    minH="100vh"
    alignItems="center"
    justifyContent="center"
    verticalAlign="middle"
    spacing={ResponsiveValues("7.5em", 0)}
    direction={ResponsiveValues("column", "row")}
  >
    <Center
      h={ResponsiveValues("50%", "100%")}
      w={ResponsiveValues("100%", "50%")}
    >
      <Text textAlign="center">
        <Box as="span" fontWeight="bold" fontSize="4xl" color="orange">
          RETAKE PRO LEAGUE
        </Box>
        <br />
        <Box as="span" fontSize="2xl">
          Serveurs compétitifs et communautaires Français !
        </Box>
      </Text>
    </Center>
    <Center
      h={ResponsiveValues("50%", "100%")}
      w={ResponsiveValues("100%", "50%")}
      paddingRight={ResponsiveValues("", "10vw")}
      justifyContent="center"
    >
      <Image src="/images/home.svg" alt="Image" />
    </Center>
  </Stack>
);
