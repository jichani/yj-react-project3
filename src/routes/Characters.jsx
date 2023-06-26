import { Box, Grid, GridItem, HStack, Image, Select, Text, VStack } from "@chakra-ui/react";
import { useQuery } from "react-query";
import { charactersList } from "../api";
import { useState } from "react";
import SkeletonList from "../components/SkeletonList";
import Pagination from "react-js-pagination";
import "./paging.css";
import { Helmet, HelmetProvider } from "react-helmet-async";

export default function Characters() {
  const [numLimit, setNumlimit] = useState(6);
  const [page, setPage] = useState(1);
  // console.log(page);

  const { data, isLoading } = useQuery(["characters", { numLimit, page }], charactersList);

  const handleChange = (e) => {
    setNumlimit(e.target.value);
  };
  const total = data?.data?.total;

  const handlePageChange = (page) => {
    setPage(page);
  };

  return (
    <HelmetProvider>
      <Helmet>
        <title>마블페이지-Characters</title>
      </Helmet>
      <VStack w="full" pb={16}>
        <Box w="full" h="64" overflow={"hidden"}>
          <Image w="full" h="full" objectFit={"cover"} src="http://i.annihil.us/u/prod/marvel/i/mg/1/b0/5269678709fb7.jpg" alt="characters img" />
        </Box>
        <VStack w="7xl">
          {/* 타이틀 */}
          <HStack w="full" py="16" justifyContent={"space-between"}>
            <Box>
              <Text fontSize={32} fontWeight={"bold"} textTransform={"uppercase"}>
                Characters
              </Text>
            </Box>
            <Select w="32" onChange={handleChange}>
              <option value={6}>6</option>
              <option value={12}>12</option>
              <option value={18}>18</option>
              <option value={24}>24</option>
              <option value={30}>30</option>
              <option value={36}>36</option>
            </Select>
          </HStack>
          {isLoading && <SkeletonList />}
          {/* 게시판 */}
          <Grid templateColumns={"repeat(6, 1fr)"} w="full" gap="4">
            {data?.data?.results.map((item, i) => (
              <GridItem w="200px" bg={"red.500"} role="group">
                <VStack w="full">
                  <Box w="full" h="48" overflow={"hidden"}>
                    <Image
                      w="full"
                      h="full"
                      objectFit={"cover"}
                      src={`${item.thumbnail.path}.${item.thumbnail.extension}`}
                      alt="characters content"
                      transition="0.4s"
                      _groupHover={{
                        transform: "scale(1.2)",
                      }}
                    />
                  </Box>
                  {/* 2번째 박스 (타이틀) */}
                  <Box w="full" h="36" position={"relative"} overflow={"hidden"}>
                    {/* 호버시 이동하는 빈 박스 */}
                    <Box
                      position={"absolute"}
                      top="0"
                      left="0"
                      w="full"
                      h="full"
                      bg="gray.800"
                      transition="0.4s"
                      _groupHover={{
                        top: "180px",
                      }}
                    />
                    {/* 오른쪽 밑부분 자르기 위한 빈박스 */}
                    <Box position={"absolute"} bottom="-15px" right="-15px" bg="white" w="30px" h="30px" transform={"rotate(45deg) scale(2)"} />
                    {/* 타이틀을 넣기 위한 부분 */}
                    <Text position={"absolute"} left={2} color="white" fontSize={18}>
                      {item.name}
                    </Text>
                  </Box>
                </VStack>
              </GridItem>
            ))}
          </Grid>
          {/* 페이지 네이션 */}
          <Box>
            <Pagination activePage={page} itemsCountPerPage={numLimit} totalItemsCount={1520} pageRangeDisplayed={5} onChange={handlePageChange} />
          </Box>
        </VStack>
      </VStack>
    </HelmetProvider>
  );
}
