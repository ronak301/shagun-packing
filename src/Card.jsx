import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";

const Card = ({ image, name }) => {
  return (
    <Flex
      d="flex"
      flexDirection={"column"}
      alignItems={"center"}
      justifyContent={"center"}>
      <Image alignSelf={"center"} borderRadius={999} src={image} boxSize={40} />
      <Text ml={4} fontSize={64} textAlign={"center"}>
        {name}
      </Text>
    </Flex>
  );
};

export default Card;
