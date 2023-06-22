import { Box, Grid, HStack } from "@chakra-ui/react";
import CarouselSlick from "../components/Carousel";
import Carditems from "../components/Carditems";

export default function Home() {
  const featuresLists = [
    { title: "스마트웹앱 1기", description: "나는 박준현이다.", buttonText: "자세히보기" },
    { title: "스마트웹앱 2기", description: "나는 서재현이다.", buttonText: "자세히보기" },
    { title: "스마트웹앱 3기", description: "나는 이강은이다.", buttonText: "자세히보기" },
  ];

  return (
    <>
      {/* 캐러셀 */}
      <Box>
        <CarouselSlick />
      </Box>

      {/* 특장점 */}
      <HStack w={"full"} justifyContent={"center"} py={16} bg={"gray.100"}>
        <Grid w="7xl" bg={"blue.100"} templateColumns={"repeat(3, 1fr)"} gap={4}>
          {featuresLists.map((item, i) => (
            <Carditems key={i} item={item} />
          ))}
        </Grid>
      </HStack>
    </>
  );
}
