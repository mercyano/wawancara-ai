import React from "react";
import { Flex, Box, Image, Text } from "@chakra-ui/react";
import logo from "../assets/openai-icon.svg";

const Footer = () => {
  return (
    <Box mt={400}>
      <Flex justifyContent="center" alignItems="center">
        <Text mr={2}>Powered by</Text>
        <Image src={logo} width='15%'></Image>
      </Flex>
    </Box>
  );
};

export default Footer;
