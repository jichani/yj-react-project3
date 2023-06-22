import { Box, Grid, HStack, Image, Text, VStack } from "@chakra-ui/react";
import CarouselSlick from "../components/Carousel";
import Carditems from "../components/Carditems";
import TitleimageSkew from "../components/TitleimageSkew";
import { useQuery } from "react-query";
import Slider from "react-slick";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 7,
  slidesToScroll: 1,
};

export default function Home() {
  const { isLoading, error, data } = useQuery("Comics", () =>
    fetch("https://gateway.marvel.com:443/v1/public/comics?apikey=ca5379f491f01785c87950e214b0c512").then((res) => res.json())
  );

  console.dir(data, isLoading, error);

  const featuresLists = [
    {
      title: "스마트웹3기",
      description: "동해물과 백두산이 마르고 닳도록",
      buttonText: "자세히보기",
    },
    {
      title: "API 요청량 하루 3000번 리미트",
      description: "하루 API요청 횟수가 3,000회로 제한되어 있어 컨텐츠가 보이지 않을 수 있습니다.",
      buttonText: "자세히보기",
    },
    {
      title: "React",
      description: "React + Typescript + Chakra UI를 활용한 마블페이지 제작",
      buttonText: "자세히보기",
    },
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

      {/* 기울어진 이미지 타이틀 */}
      <TitleimageSkew
        title="Comics"
        description="“LONG SHADOW” Concludes! The battle for Wakanda comes to a head! T’Challa has owned the path his secrets paved for the Hatut Zeraze’s takeover"
        imgUrl="https://assets.vogue.in/photos/5ce412599cc0c0b8f5f9b4bf/4:3/w_1440,h_1080,c_limit/Everything-you-need-to-know-before-watching-Marvel-movies-this-year.jpg"
      />

      {/* Comics */}
      <VStack w="full" position={"relative"} h={"400px"}>
        {/* 한박스 위로 올라오게 하는 범위지정 */}
        <Box position={"absolute"} w={"7xl"} h={"full"} top={-16} bg={"white"}>
          {/* 리액트 슬릭 슬라이더 */}
          <Slider {...settings}>
            {data?.data?.results?.map((item, i) => (
              <div key={"i"}>
                <Text>
                  <Box w={"180px"} h="240px">
                    <Image src={`${item.thumbnail.path}.${item.thumbnail.extension}`} alt={`comics ${i}`} w="full" h={"full"} objectFit={"cover"} />
                  </Box>
                  {item.title}
                </Text>
              </div>
            ))}
          </Slider>
        </Box>
      </VStack>
    </>
  );
}
