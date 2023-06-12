import { Box } from "@chakra-ui/react";
import CarouselSlick from "../components/Carousel";

export default function Home() {
  return (
    <>
      {/* 캐러셀 */}
      <Box h="100vh">
        <CarouselSlick />
      </Box>
      ;
    </>
  );
}
