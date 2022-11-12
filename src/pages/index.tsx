import { Center, Container, Divider } from "@chakra-ui/react";
import { Footer } from "../components/Footer/Footer";
import { Home } from "../components/Home/Home";
import { Navbar } from "../components/Navbar/Navbar";
import { Rules } from "../components/Rules/Rules";
import { ServersInfos } from "../components/Servers/Servers";
import { Stats } from "../components/Stats/Stats";

const Index = () => (
  <Container maxW="conainter.lg">
    <Home />

    <Center>
      <Divider w="75vw" />
    </Center>

    <ServersInfos />

    <Center>
      <Divider w="75vw" />
    </Center>

    <Stats />

    <Center>
      <Divider w="75vw" />
    </Center>

    <Rules />
  </Container>
);

export default Index;
