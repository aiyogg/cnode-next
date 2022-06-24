import Image from 'next/image'
import {
  Box,
  Flex,
  FlexProps,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
} from '@chakra-ui/react'
import { DarkModeSwitch } from './DarkModeSwitch'

export const Header = (props: FlexProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
      <Flex
        as="header"
        width="100%"
        lineHeight="3.125rem"
        px={['1rem', '4rem']}
        justifyContent="space-between"
        color="gray.50"
        bgColor="blackAlpha.800"
        {...props}
      >
        <Box height="3.125rem">
          <Image
            src="/cnode.svg"
            alt="cnode-log"
            width={100}
            height={50}
          ></Image>
        </Box>
        <Box>
          <span onClick={onOpen}>关于</span>
          <DarkModeSwitch />
        </Box>
      </Flex>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>关于本项目</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <p>
              作者：
              <a
                href="https://github.com/aiyogg"
                target="_blank"
                rel="nofollow noopener noreferrer"
              >
                Chuck
              </a>
            </p>
            <p>
              源码：
              <a
                href="https://blog.chenteng.me"
                target="_blank"
                rel="nofollow noopener noreferrer"
              >
                cnode-react
              </a>
            </p>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="green" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}
