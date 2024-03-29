import {
  Box,
  ChakraProvider,
  Flex,
  HStack,
  Image,
  Text,
} from "@chakra-ui/react";
import img1 from "./assets/1.jpeg";
import img2 from "./assets/2.jpeg";
import img3 from "./assets/3.jpeg";
import img5 from "./assets/5.jpeg";
import img6 from "./assets/6.jpeg";
import img7 from "./assets/7.jpeg";
import img9 from "./assets/9.jpeg";
import img10 from "./assets/10.jpeg";
import img11 from "./assets/11.jpeg";
import Card from "./Card";
import prachi from "./assets/prachi.jpeg";
import meghavi from "./assets/meghavi.jpeg";

function App() {
  return (
    <ChakraProvider>
      <Box
        h={"100vh"}
        p={8}
        px={16}
        d="flex"
        justifyContent={"center"}
        backgroundColor={"rgb(247, 207,211)"}
        overflow={"scroll"}>
        <Flex d="flex" flexDirection={"row"} alignItems={"center"} mb={8}>
          <Image borderRadius={999} src={img1} boxSize={40} />
          <Text ml={4} fontSize={64}>
            Shagun packing
          </Text>
        </Flex>

        <HStack gap={4}>
          <Image src={img2} boxSize={80} />
          <Image src={img3} boxSize={80} />
          <Image src={img5} boxSize={80} />
          <Image src={img6} boxSize={80} />
        </HStack>
        <HStack gap={4}>
          <Image src={img7} boxSize={80} />
          <Image src={img9} boxSize={80} />
          <Image src={img10} boxSize={80} />
          <Image src={img11} boxSize={80} />
        </HStack>
        <Box mt={24} pb={100}>
          <Text ml={4} fontSize={64} textAlign={"center"}>
            Founders
          </Text>
          <HStack
            style={{ alignItems: "center", justifyContent: "space-between" }}>
            <Card name={"Prachi Kothari"} image={prachi} />
            <Card name="Meghavi Kothari" image={meghavi} />
          </HStack>
        </Box>

        {/* <Box mt={100}>
          <Text ml={4} fontSize={38} textAlign={"center"}>
            Created By
          </Text>
          <HStack
            style={{ alignItems: "center", justifyContent: "space-between" }}>
            <Text ml={4} fontSize={44} textAlign={"center"}>
              Palak Kothari
            </Text>
            <Text ml={4} fontSize={44} textAlign={"center"}>
              Dhanish Kothari
            </Text>
          </HStack>
        </Box> */}
      </Box>
    </ChakraProvider>
  );
}

export default App;
