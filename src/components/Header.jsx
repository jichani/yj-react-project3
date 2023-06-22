import { Box, Button, HStack, Image, Stack, Text, useColorMode } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";
import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const [scroll, setScroll] = useState(true);
  const [setWinScroll] = useState(true);

  const location = useLocation();
  console.log(location.pathname);

  useEffect(() => {
    document.addEventListener("wheel", (event) => {
      if (event.deltaY < 0) {
        // 스크롤을 올린다.
        setScroll(true);
      } else if (event.deltaY > 0) {
        // 스크롤을 내린다.
        setScroll(false);
      }
      if (window.scrollY < 80) {
        setWinScroll(true);
      } else if (window.scrollY > 80) {
        setWinScroll(false);
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
      //   bg={winScroll && location.pathname === "/" ? "transparent" : "gray.800"}
      bg="gray.800"
      zIndex={99}
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
    >
      <HStack justifyContent={"space-between"} w="1400px" h={"full"}>
        <HStack spacing={10}>
          <Box w="24">
            <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Marvel_Logo.svg/2560px-Marvel_Logo.svg.png" alt="Main logo" />
          </Box>
          <HStack textTransform={"uppercase"} spacing={6}>
            {GNB.map((item) => (
              <Link to={item.href} key={item.title} aria-label={item.title}>
                <Text color={location.pathname === item.href ? "red.600" : "white"}>{item.title}</Text>
              </Link>
            ))}
          </HStack>
        </HStack>
        <Button onClick={toggleColorMode}>{colorMode === "light" ? <BsFillSunFill /> : <BsFillMoonFill />}</Button>
      </HStack>
    </Stack>
  );
}
