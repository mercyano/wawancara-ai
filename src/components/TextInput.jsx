import React, { useState } from "react";
import { useToast } from "@chakra-ui/react";
import {
  Input,
  InputGroup,
  Stack,
  InputLeftAddon,
  Textarea,
  Button,
} from "@chakra-ui/react";

const TextInput = ({ generateQuestion }) => {
  const [job, setJob] = useState({
    title: "",
    description: "",
  });

  const toast = useToast();

  const handleChange = (event) => {
    const { name, value } = event.target;

    setJob((prevJob) => {
      return {
        ...prevJob,
        [name]: value,
      };
    });
  };

  const submitText = () => {
    const { title, description } = job;
    if (title === "" || description === "") {
      toast({
        title: "Terdapat kesalahan.",
        description: "Mohon isi jabatan dan deskripsi pekerjaan.",
        status: "error",
        duration: 3000,
        variant: "left-accent",
        isClosable: false,
      });
      return;
    }
    generateQuestion(job);
  };

  return (
    <>
      <Stack width="100%" mt="2rem" spacing={4}>
        <InputGroup boxShadow="md">
          <InputLeftAddon mb={8} my="auto" fontWeight={500} bg="#F2F2F6">
            Jabatan
          </InputLeftAddon>
          <Input
            name="title"
            value={job.title}
            bg="white"
            variant="outline"
            placeholder="Contoh: Front-End Developer"
            _placeholder={{ opacity: 0.5, color: "gray.500" }}
            onChange={handleChange}
          />
        </InputGroup>
        <Textarea
          name="description"
          value={job.description}
          bg="white"
          rows={10}
          placeholder="Masukkan deskripsi atau persyaratan pekerjaan"
          _placeholder={{ opacity: 0.5, color: "gray.500" }}
          boxShadow="md"
          onChange={handleChange}
        />
        <Button
          ml="auto"
          bg="#0258F8"
          color="white"
          _hover={{ bg: "gray.300" }}
          onClick={submitText}
        >
          Generate
        </Button>
      </Stack>
    </>
  );
};

export default TextInput;
