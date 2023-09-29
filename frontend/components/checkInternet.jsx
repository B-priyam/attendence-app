import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Box,
  useDisclosure,
  Button,
} from "@chakra-ui/react";
import React, { useEffect } from "react";

const CheckInternet = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const close = () => {
    if (navigator.onLine) {
      return onClose();
    }
  };
  useEffect(() => {
    onOpen();
    close();
  });
  return (
    <div>
      <Box>
        {/* <Button onClick={onOpen}>Open Modal</Button> */}

        <Modal isOpen={isOpen} onClose={onClose} isCentered>
          <ModalOverlay
            bg="blackAlpha.300"
            backdropFilter="blur(10px) hue-rotate(90deg)"
          />
          <ModalContent>
            <ModalHeader textAlign={"center"}>NO INTERNET</ModalHeader>
            <ModalCloseButton />
            <ModalBody fontSize={"20px"} textAlign={"center"}>
              Kindly check your internet first and try again
            </ModalBody>
          </ModalContent>
        </Modal>
      </Box>
    </div>
  );
};

export default CheckInternet;
