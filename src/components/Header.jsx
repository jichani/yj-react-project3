import { Box, Button, HStack, Image, Stack, Text, useColorMode } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";
import { Link } from "react-router-dom";

export default function Header() {
  const [scroll, setScroll] = useState(true);
  useEffect(() => {
    document.addEventListener("wheel", (event) => {
      if (event.deltaY < 0) {
        // 스크롤을 올린다.
        setScroll(true);
      } else if (event.deltaY > 0) {
        // 스크롤을 내린다.
        setScroll(false);
      }
    });
  });

  const GNB = [
    { title: "home", href: "/" },
    { title: "characters", href: "/characters" },
    { title: "comics", href: "/comics" },
    { title: "events", href: "/events" },
  ];
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Stack
      transform={scroll ? "translateY(0px)" : "translateY(-60px)"}
      transition={"0.5s"}
      w="full"
      h="60px"
      color="white"
      fontWeight={500}
      fontSize={"20px"}
      alignItems={"center"}
      justifyContent={"center"}
      boxShadow={"sm"}
      position={"fixed"}
      bg={"gray.800"}
    >
      <HStack justifyContent={"space-between"} w="1024px" h={"full"}>
        <HStack spacing={10}>
          <Box w="24">
            <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Marvel_Logo.svg/2560px-Marvel_Logo.svg.png" alt="Main logo" />
          </Box>
          <HStack textTransform={"uppercase"} spacing={6}>
            {GNB.map((item) => (
              <Link to={item.href} key={item.title} aria-label={item.title}>
                <Text>{item.title}</Text>
              </Link>
            ))}
          </HStack>
        </HStack>
        <Button onClick={toggleColorMode}>{colorMode === "light" ? <BsFillSunFill /> : <BsFillMoonFill />}</Button>
      </HStack>
    </Stack>
  );
}
