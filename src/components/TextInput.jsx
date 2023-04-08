import React from "react";
import {
  Input,
  Text,
  Box,
  InputGroup,
  Stack,
  InputLeftAddon,
  Textarea,
  Button,
} from "@chakra-ui/react";

const TextInput = () => {
  return (
    <>
      <Stack width="100%" mt="2rem" spacing={4}>
        <InputGroup boxShadow='md'>
          <InputLeftAddon mb={8} my="auto" fontWeight={500} bg='#F2F2F6'>
            Jabatan
          </InputLeftAddon>
          <Input
            variant="outline"
            placeholder="Contoh: Front-End Developer"
            _placeholder={{ opacity: 0.5, color: "gray.500" }}
          />
        </InputGroup>
        <Textarea
          rows={10}
          placeholder="Masukkan deskripsi atau persyaratan pekerjaan"
          _placeholder={{ opacity: 0.5, color: "gray.500" }}
          boxShadow='xl'
        />
        <Button ml="auto" bg="#0258F8" color="white" _hover={{ bg: '#003db0' }}>
          Generate
        </Button>
      </Stack>
    </>
  );
};

export default TextInput;
