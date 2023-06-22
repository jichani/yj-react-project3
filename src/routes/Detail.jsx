import { Avatar, Box, Grid, GridItem, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";

export default function Detail() {
  const { id } = useParams();

  const { isLoading, error, data } = useQuery("ComicsDetail", () =>
    fetch(`https://gateway.marvel.com:443/v1/public/comics/${id}?apikey=ca5379f491f01785c87950e214b0c512`).then((res) => res.json())
  );

  console.dir(data, isLoading, error);

  return (
    <>
      <Box>
        <VStack
          w="full"
          h={"650px"}
          backgroundImage={`${data?.data?.results[0].thumbnail.path}.${data?.data?.results[0].thumbnail.extension}`}
          backgroundSize={"cover"}
          backgroundPosition={"center"}
          alignItems={"center"}
          backgroundRepeat={"no-repeat"}
          position={"relative"}
        >
          <Box position={"absolute"} top={0} left={0} w={"full"} h={"full"} bg={"rgba(0,0,0,0.5)"} />

          <HStack w="7xl" h={"full"} zIndex={50} alignItems={"center"}>
            <Grid templateColumns={"350px 1fr"} gap={16}>
              <GridItem>
                <Box w="full" h={"500px"} transform={"translateY(20px)"}>
                  <Image src={`${data?.data?.results[0].thumbnail.path}.${data?.data?.results[0].thumbnail.extension}`} alr="Detail Image"></Image>
                </Box>
              </GridItem>
              <GridItem>
                <VStack h="full" justifyContent={"flex-start"} alignItems={"flex-start"} spacing={8}>
                  <Text color={"white"} fontWeight={"semibold"} py={16} fontSize={"xl"}>
                    {data?.data?.results[0].title}
                  </Text>
                  {/* <Text color={"gray.700"} font={"lg"}>
                    {data?.data?.results[0].variantDescription}
                  </Text> */}
                  <VStack alignItems={"flex-start"}>
                    <Text color={"white"} fontSize={"xl"} fontWeight={600}>
                      Creator
                    </Text>
                    <HStack w="full" justifyContent={"flex-start"}>
                      {data?.data?.results[0]?.creators?.items?.map((item, i) => (
                        <VStack>
                          <Avatar name={item.name} />
                          <Text color="white" key={i}>
                            {item.name}
                          </Text>
                        </VStack>
                      ))}
                    </HStack>
                  </VStack>
                </VStack>
              </GridItem>
            </Grid>
          </HStack>
        </VStack>
      </Box>
    </>
  );
}
