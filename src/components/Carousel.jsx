import { Box, VStack, Heading, Text } from "@chakra-ui/react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function CarouselSlick() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Box w={"full"} h={"450px"} py={"60px"}>
      <Slider {...settings}>
        <Box>
          <VStack
            position={"relative"}
            h="480px"
            w="full"
            justifyContent="center"
            color=""
            backgroundImage={"url('https://media.contentapi.ea.com/content/dam/news/www-ea/common/ea-motive-new-title-teaser-16x9.jpg.adapt.1456w.jpg')"}
            backgroundPosition="top"
            backgroundSize="cover"
          >
            <Box position={"absolute"} w="full" h="full" left={0} top={0} />
            <VStack position={"absolute"} zIndex={9} w="80%" alignItems={"flex-start"} spacing={8}>
              <VStack alignItems={"flex-start"}>
                <Heading
                  fontSize={{
                    sm: 20,
                    lg: 30,
                    "2xl": 40,
                  }}
                  fontWeight={700}
                >
                  November 16's New Marvel
                </Heading>
                <Text
                  fontSize={{
                    sm: 16,
                    lg: 20,
                    "2xl": 24,
                  }}
                  fontWeight={600}
                  mb={10}
                >
                  This week's Marvel comics are filled with new beginnings.
                </Text>
              </VStack>
            </VStack>
          </VStack>
        </Box>
        <Box>
          <VStack
            position={"relative"}
            h="480px"
            w="full"
            justifyContent="center"
            color=""
            backgroundImage={"url('https://cdn.britannica.com/60/182360-050-CD8878D6/Avengers-Age-of-Ultron-Joss-Whedon.jpg')"}
            backgroundPosition="top"
            backgroundSize="cover"
          >
            <Box position={"absolute"} w="full" h="full" left={0} top={0} />
            <VStack position={"absolute"} zIndex={9} w="80%" alignItems={"flex-start"} spacing={8}>
              <VStack alignItems={"flex-start"}>
                <Heading
                  fontSize={{
                    sm: 20,
                    lg: 30,
                    "2xl": 40,
                  }}
                  fontWeight={700}
                >
                  Marvel Studios' Doctor Strange
                </Heading>
                <Text
                  fontSize={{
                    sm: 16,
                    lg: 20,
                    "2xl": 24,
                  }}
                  fontWeight={600}
                  mb={10}
                >
                  Enter a new dimension of Strange. Watch the official trailer for Marvel Studios'
                </Text>
              </VStack>
            </VStack>
          </VStack>
        </Box>
        <Box>
          <VStack
            position={"relative"}
            h="480px"
            w="full"
            justifyContent="center"
            color=""
            backgroundImage={"url('https://cdn.britannica.com/62/182362-050-BD31B42D/Scarlett-Johansson-Black-Widow-Chris-Hemsworth-Thor.jpg')"}
            backgroundPosition="center"
            backgroundSize="cover"
          >
            <Box position={"absolute"} w="full" h="full" left={0} top={0} />
            <VStack position={"absolute"} zIndex={9} w="80%" alignItems={"flex-start"} spacing={8}>
              <VStack alignItems={"flex-start"}>
                <Heading
                  fontSize={{
                    sm: 20,
                    lg: 30,
                    "2xl": 40,
                  }}
                  fontWeight={700}
                >
                  Marvel & Moon Knight (2022)
                </Heading>
                <Text
                  fontSize={{
                    sm: 16,
                    lg: 20,
                    "2xl": 24,
                  }}
                  fontWeight={600}
                  mb={10}
                >
                  THE FIST OF KHONSHU MEETS THE EMBIGGENED FIST OF MS.
                </Text>
              </VStack>
            </VStack>
          </VStack>
        </Box>
      </Slider>
    </Box>
  );
}
