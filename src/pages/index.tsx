import { Center, Container, Divider } from "@chakra-ui/react";
import { Home } from "../components/Home/Home";
import { Rules } from "../components/Rules/Rules";
import { ServersInfos } from "../components/Servers/Servers";
import { Stats } from "../components/Stats/Stats";
import router from "../lib/router";

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

export async function getServerSideProps({ req, res }) {
  await router.run(req, res);
  return { props: { user: req.user || null } };
}

export default Index;
