import { Box, Heading, VStack } from "@chakra-ui/react";
import { RuleElement } from "./RuleElement";

export const Rules = () => {
  return (
    <Box textAlign="center" margin="10" id="rules">
      <Heading color="orange">Règles</Heading>
      <VStack margin="10">
        <RuleElement
          title="Règle n°1"
          description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit, dolor! Placeat, perspiciatis? Sit aliquam consequatur ratione accusamus omnis hic eligendi?
"
        />
        <RuleElement
          title="Règle n°2"
          description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit, dolor! Placeat, perspiciatis? Sit aliquam consequatur ratione accusamus omnis hic eligendi?
"
        />
        <RuleElement
          title="Règle n°3"
          description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit, dolor! Placeat, perspiciatis? Sit aliquam consequatur ratione accusamus omnis hic eligendi?
"
        />
        <RuleElement
          title="Règle n°4"
          description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit, dolor! Placeat, perspiciatis? Sit aliquam consequatur ratione accusamus omnis hic eligendi?
"
        />
      </VStack>
    </Box>
  );
};
