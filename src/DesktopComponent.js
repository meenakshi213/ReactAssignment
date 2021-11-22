import React, { useState } from "react";
import "./App.css";
import logo from "./logo.svg";
import dollar from "./dollar.svg";
import { Box, Text, HStack, VStack } from "@chakra-ui/layout";
import { Image, useMediaQuery } from "@chakra-ui/react";
import {
  Input,
  InputGroup,
  InputLeftElement,
  Button,
} from "@chakra-ui/react";

function DesktopComponent() {
  const [bill, setBill] = useState(0);
  const [person, setPerson] = useState(0);
  const [tip, setTip] = useState(0);
  const [isMobile] = useMediaQuery("(max-width: 600px)");
  const [custom, setCustom] = useState(false);

  function handleChangeBill(e) {
    setBill(e.target.value);
  }
  function handlePerson(e) {
    setPerson(e.target.value);
  }
  function handleTip(e) {
    setTip(e.target.value);
  }
  function handleTip5(e) {
    setTip(5);
  }
  function handleTip10(e) {
    setTip(10);
  }
  function handleTip15(e) {
    setTip(15);
  }
  function handleTip25(e) {
    setTip(25);
  }
  function handleTip50(e) {
    setTip(50);
  }
  function handleReset(e) {
    setTip(0);
    setPerson(0);
    setBill(0);
  }
  return (
    <Box fill>
         <div className="App">
          <Box w="100%" h="100%" backgroundColor="hsl(172, 67%, 45%)" pb="5%">
            {/* <Text ml="45%" pt="3%" pb="2%" fontSize="24px" fontFamily ="Space Mono">
          SPLITTER
        </Text> */}
            <Image src={logo} alt="logo" pt="3%" pl="45%" pb="2%" />
            <Box
              w="60%"
              h="10%"
              backgroundColor="white"
              mb="5%"
              ml="20%"
              pb="3%"
              pt="2%"
              pr="3%"
              pll="2%"
              borderRadius="14px"
            >
              <HStack spacing="4%">
                <Box>
                  <Text pl="5%" fontFamily="Space Mono">
                    Bill
                  </Text>
                  <form>
                    <InputGroup>
                      <InputLeftElement>
                        <span></span>
                      </InputLeftElement>
                      <Input
                        style={{
                          width: "343px",
                          color: "black",
                          fontSize: "14px",
                          paddingTop: "3%",
                          paddingBottom: "3%",
                          fontWeight: "normal",
                        }}
                        borderRadius="7"
                        borderColor=" #D0D0D0"
                        placeholder={bill}
                        onChange={handleChangeBill}
                        marginLeft="5%"
                      />
                    </InputGroup>
                    <Text pl="5%" fontFamily="Space Mono">
                      Select Tip %
                    </Text>

                    <HStack pl="5%">
                      <Button
                        backgroundColor="hsl(183, 100%, 15%)"
                        cursor="pointer"
                        _hover={{
                          bg: "hsl(184, 14%, 56%)",
                          color: "hsl(183, 100%, 15%)",
                        }}
                        padding="8px 33px"
                        color="white"
                        fontSize="16px"
                        w="120px"
                        fontWeight="700"
                        borderRadius="7px"
                        borderColor="hsl(183, 100%, 15%)"
                        fontFamily="Space Mono"
                        fontSize="20px"
                        onClick={handleTip5}
                      >
                        5%
                      </Button>
                      <Button
                        backgroundColor="hsl(183, 100%, 15%)"
                        cursor="pointer"
                        _hover={{
                          bg: "hsl(184, 14%, 56%)",
                          color: "hsl(183, 100%, 15%)",
                        }}
                        padding="8px 33px"
                        color="white"
                        fontSize="16px"
                        w="120px"
                        fontWeight="700"
                        borderRadius="7px"
                        borderColor="hsl(183, 100%, 15%)"
                        fontFamily="Space Mono"
                        fontSize="20px"
                        onClick={handleTip10}
                      >
                        10%
                      </Button>
                      <Button
                        backgroundColor="hsl(183, 100%, 15%)"
                        cursor="pointer"
                        _hover={{
                          bg: "hsl(184, 14%, 56%)",
                          color: "hsl(183, 100%, 15%)",
                        }}
                        padding="8px 33px"
                        color="white"
                        fontSize="16px"
                        w="120px"
                        fontWeight="700"
                        borderRadius="7px"
                        borderColor="hsl(183, 100%, 15%)"
                        fontFamily="Space Mono"
                        fontSize="20px"
                        onClick={handleTip15}
                      >
                        15%
                      </Button>
                    </HStack>
                    <br />
                    <HStack pl="5%">
                      <Button
                        backgroundColor="hsl(183, 100%, 15%)"
                        cursor="pointer"
                        _hover={{
                          bg: "hsl(184, 14%, 56%)",
                          color: "hsl(183, 100%, 15%)",
                        }}
                        padding="8px 33px"
                        color="white"
                        fontSize="16px"
                        w="120px"
                        fontWeight="700"
                        borderRadius="7px"
                        borderColor="hsl(183, 100%, 15%)"
                        fontFamily="Space Mono"
                        fontSize="20px"
                        onClick={handleTip25}
                      >
                        25%
                      </Button>
                      <Button
                        backgroundColor="hsl(183, 100%, 15%)"
                        cursor="pointer"
                        _hover={{
                          bg: "hsl(184, 14%, 56%)",
                          color: "hsl(183, 100%, 15%)",
                        }}
                        padding="8px 33px"
                        color="white"
                        fontSize="16px"
                        w="120px"
                        fontWeight="700"
                        borderRadius="7px"
                        borderColor="hsl(183, 100%, 15%)"
                        fontFamily="Space Mono"
                        fontSize="20px"
                        onClick={handleTip50}
                      >
                        50%
                      </Button>
                      {custom === false ? (
                        <Button
                          backgroundColor="hsl(184, 14%, 56%)"
                          cursor="pointer"
                          _hover={{
                            bg: "hsl(184, 14%, 56%)",
                            color: "hsl(183, 100%, 15%)",
                          }}
                          padding="8px 33px"
                          color="white"
                          fontSize="16px"
                          w="120px"
                          fontWeight="700"
                          borderRadius="7px"
                          borderColor="hsl(184, 14%, 56%)"
                          fontFamily="Space Mono"
                          fontSize="20px"
                          onClick={() => {
                            setCustom(true);
                          }}
                        >
                          Custom
                        </Button>
                      ) : (
                        <Input
                          style={{
                            width: "109px",
                            color: "black",
                            fontSize: "14px",
                            paddingTop: "4%",
                            paddingBottom: "4%",
                            fontWeight: "normal",
                          }}
                          borderRadius="7"
                          borderColor=" #D0D0D0"
                          placeholder="Enter tip"
                          onChange={handleTip}
                        />
                      )}
                    </HStack>

                    <Text pl="5%" fontFamily="Space Mono">
                      Number of People
                    </Text>
                    <Input
                      style={{
                        width: "343px",
                        color: "black",
                        fontSize: "14px",
                        paddingTop: "3%",
                        paddingBottom: "3%",
                        fontWeight: "normal",
                      }}
                      borderRadius="7"
                      borderColor=" #D0D0D0"
                      placeholder={person}
                      onChange={handlePerson}
                      marginLeft="5%"
                    />
                  </form>
                </Box>

                <Box
                  w="51%"
                  h="70%"
                  pt="5%"
                  pl="2%"
                  pb="5%"
                  borderRadius="12px"
                  backgroundColor="hsl(183, 100%, 15%)"
                >
                  <HStack spacing="44%">
                    <Text color="white" pl="2%" fontFamily="Space Mono">
                      Tip Amount
                      <br /> /person
                    </Text>
                    <Text
                      fontFamily="Space Mono"
                      fontWeight="800"
                      color="hsl(184, 14%, 56%)"
                      fontSize="32px"
                    >
                      <Image src={dollar} alt="logo" />{" "}
                      {((bill * tip) / 100 / person).toFixed(2)}
                    </Text>
                  </HStack>
                  <HStack spacing="50%">
                    <Text color="white" pl="2%" mt="4%" fontFamily="Space Mono">
                      Total
                      <br /> /person
                    </Text>
                    <Text
                      fontFamily="Space Mono"
                      fontWeight="800"
                      color="hsl(184, 14%, 56%)"
                      fontSize="32px"
                    >
                      <Image src={dollar} alt="logo" />{" "}
                      {bill / person + ((bill * tip) / 100).toFixed(2) / person}
                    </Text>
                  </HStack>
                  <Button
                    cursor="pointer"
                    backgroundColor="hsl(184, 14%, 56%)"
                    cursor="pointer"
                    ml="4%"
                    mt="10%"
                    mb="1%"
                    padding="8px 148px"
                    color="hsl(183, 100%, 15%)"
                    fontSize="16px"
                    fontWeight="700"
                    borderRadius="7px"
                    borderColor="hsl(184, 14%, 56%)"
                    fontFamily="Space Mono"
                    fontSize="24px"
                    onClick={() => {
                      handleReset();
                    }}
                  >
                    Reset
                  </Button>
                </Box>
              </HStack>
            </Box>
          </Box>
        </div>
    </Box>
     );
    }
    export default DesktopComponent