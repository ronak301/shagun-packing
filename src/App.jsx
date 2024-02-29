import { Box, ChakraProvider, Image, Text } from "@chakra-ui/react";

function App() {
  return (
    <ChakraProvider>
      <Box
        d="flex"
        flex={1}
        width={"100%"}
        height={"100vh"}
        backgroundColor={"rgb(247, 207, 211)"}
        alignItems={"center"}
        justifyContent={"center"}>
        <Text flex={1} fontSize="6xl">
          Shagun Packing
        </Text>
        {/* <Image boxSize="100px" objectFit="cover" src="./logo.png" /> */}
      </Box>
    </ChakraProvider>
  );
}

export default App;
