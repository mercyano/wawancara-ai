import React from "react";
import { Flex, Heading, Image, Text, Icon, Box } from "@chakra-ui/react";
import logo from "../assets/how-to-icon.svg";

const Header = () => {
  return (
    <>
      <Flex alignItems="center" mb="1rem">
        <Image src={logo} alt="logo" width={70} fill="red" mr="1rem"></Image>
        <Heading color="blackAlpha.900" size="xl">
          WawancaraAI
        </Heading>
      </Flex>
      <Text fontSize="lg" textAlign="center">
        Situs web bertenaga AI yang membantu pencari kerja dalam mempersiapkan
        diri untuk wawancara kerja
      </Text>
    </>
  );
};

export default Header;
