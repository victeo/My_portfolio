import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { Box, Container } from "@chakra-ui/react";
import {
  extendTheme,
  ChakraProvider,
  Fade,
  ScaleFade,
  Slide,
  SlideFade,
  Button,
} from "@chakra-ui/react";

import { theme } from "../styles/Home.module.css";

import { MotionFlex } from "../components/animation/animation";

const colors = {
  brand: {
    900: "#1a365d",
    800: "#153e75",
    700: "#2a69ac",
  },
};

export default function Home() {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <ChakraProvider theme={theme}>
      <Container>
        <Button onClick={onToggle}>Click Me</Button>
        <SlideFade in={isOpen} offsetY="20px">
          <Box
            p="40px"
            color="white"
            mt="4"
            bg="teal.500"
            rounded="md"
            shadow="md"
          >
            <Lorem count={1} />
          </Box>
        </SlideFade>
      </Container>
    </ChakraProvider>
  );
}
