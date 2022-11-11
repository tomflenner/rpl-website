import { ArrowDownIcon, ArrowUpIcon } from "@chakra-ui/icons";
import {
  Box,
  Collapse,
  Flex,
  Icon,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";

type RuleElementProps = {
  title: string;
  description: string;
};

export const RuleElement = ({ title, description }: RuleElementProps) => {
  const [show, setShow] = useState(false);
  const handleToggle = () => setShow(!show);

  return (
    <VStack border="1px" borderRadius="5" _hover={{
        borderColor: "orange",
        color: "orange"
    }}>
      <Stack
        direction="row"
        w="65vw"
        h="5vh"
        cursor="pointer"
        onClick={handleToggle}
      >
        <Flex alignItems="center" justify="flex-start" flex="1">
          <Text marginLeft="5">{title}</Text>
          <Icon
            as={show ? ArrowUpIcon : ArrowDownIcon}
            marginLeft="auto"
            marginRight="5"
          />
        </Flex>
      </Stack>
      <Collapse in={show}>
        <Box w="65vw" padding="5">
          <Text>{description}</Text>
        </Box>
      </Collapse>
    </VStack>
  );
};
