"use client";

import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Image,
} from "@nextui-org/react";
import { LuPlus } from "react-icons/lu";

export default function AddPost() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Button onPress={onOpen} radius="sm" color="primary" size="sm" isIconOnly>
        <LuPlus size={16} />
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} size="3xl">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Add new post
              </ModalHeader>
              <ModalBody>
                <Image
                  width={232}
                  height={232}
                  src = "https://idea410.digital.uic.edu/wp-content/themes/koji/assets/images/default-fallback-image.png"
                  className="w-full h-full object-cover"
                  fallbackSrc="https://idea410.digital.uic.edu/wp-content/themes/koji/assets/images/default-fallback-image.png"
                />
              </ModalBody>
              <ModalFooter>
                <Button color="danger" size="sm" radius="sm" variant="light" onPress={onClose}>
                  Discard
                </Button>
                <Button color="primary" size="sm" radius="sm" onPress={onClose}>
                  Make post
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
