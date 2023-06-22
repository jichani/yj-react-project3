import { Box, Button, HStack, Image, Text, VStack } from "@chakra-ui/react";

export default function TitleimageSkew({ title, description, imgUrl }) {
  return (
    <HStack w="full" h="400px" bg="gray.800" position={"relative"} overflow={"hidden"}>
      {/* 첫 번째 자식(왼쪽) */}
      <Box w={"45%"} h={"full"}>
        {/* 빈 박스 기울어진 */}
        <Box bg={"gray.800"} w="650px" h="800px" transform={"rotate(-10deg) scale(1.4)"} translateY={"30px"} />
      </Box>
      {/* 두 번째 자식 (오른쪽) */}
      <Box w={"55%"} h={"full"} bg={"blue.100"}>
        <Image w={"full"} h={"full"} objectFit={"cover"} objectPosition={"center"} src={imgUrl} alt="Marvel Img1" />
      </Box>
      {/* 세번째 자식이지만 절대값 지정 */}
      <VStack position={"absolute"} top={0} left={0} w={"full"} h={"full"} alignItems={"center"}>
        <VStack w="7xl" h="full" alignItems={"flex-start"} justifyContent={"center"}>
          <Text color="white" fontWeight={700} fontSize={"32"} textTransform={"uppercase"}>
            {title}
          </Text>
          <Text color={"white"} w={"2xl"}>
            {description}
          </Text>
          <Button mt="6" textTransform={"uppercase"} variant={"outline"} colorScheme={"red"}>
            List more
          </Button>
        </VStack>
      </VStack>
    </HStack>
  );
}
