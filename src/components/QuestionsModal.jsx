import React from "react";
import {
  Text,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  CircularProgress,
} from "@chakra-ui/react";

const QuestionsModal = ({ questions, isOpen, loading, closeModal }) => {
  return (
    <>
      <Modal size='xl' isOpen={isOpen} onClose={closeModal}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Kemungkinan Pertanyaan Interview</ModalHeader>

          <ModalBody display="flex" alignItems="center" justifyContent="center">
            {loading ? (
              <CircularProgress isIndeterminate color="gray.300" />
            ) : (
              <div>
                {questions.map((question, index) => {
                  return <Text key={index}>{question}</Text>;
                })}
              </div>
            )}
          </ModalBody>

          <ModalFooter>
            <Button bg='#0258F8' color='white' mr={3} onClick={closeModal} _hover={{ bg: "gray.300" }}>
              Tutup
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default QuestionsModal;
