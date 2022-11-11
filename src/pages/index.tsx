import { Center, Container, Divider } from "@chakra-ui/react";
import { Home } from "../components/Home/Home";
import { Nav } from "../components/Navbar/Navbar";
import { ServersInfos } from "../components/Servers/Servers";
import { Stats } from "../components/Stats/Stats";

const Index = () => (
  <Container maxW="conainter.lg">
    <Nav />
    <Home />

    <Center>
      <Divider w="75vw" />
    </Center>

    <ServersInfos />

    <Center>
      <Divider w="75vw" />
    </Center>

    <Stats />
  </Container>
);

export default Index;
