import { Container } from "@chakra-ui/react";
import { Home } from "../components/Home/Home";
import Nav from "../components/Navbar/Navbar";

const Index = () => (
  <Container maxW="conainter.lg">
    <Nav />
    <Home />
  </Container>
);

export default Index;
