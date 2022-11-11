import {
  Center,
  Image,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

const ResponsiveValues = (base, md) => {
  return {
    base: base,
    md: md,
  };
};

export const Home = () => (
  <Stack
    id="home"
    minH="100vh"
    alignItems="center"
    justifyContent="center"
    verticalAlign="middle"
    direction={ResponsiveValues("column", "row")}
  >
    <Center
      h="100%"
      w="50%"
    >
      <Text
        fontWeight="bold"
        fontSize="4xl"
        color={useColorModeValue("orange", "yellow")}
        textAlign="center"
      >
        RETAKE PRO LEAGUE
      </Text>
    </Center>
    <Center
      h="100%"
      w="50%"
      paddingRight={ResponsiveValues("", "10vw")}
      justifyContent="center"
    >
      <Image src="/images/home.svg" alt="Image"/>
    </Center>
  </Stack>
);
