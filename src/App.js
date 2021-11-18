import React, { useState} from "react";
import "./App.css";
import { Box, Text, HStack } from "@chakra-ui/layout";
import {
  FormControl,
  FormLabel,
  Input,
  Stack,
  theme,
  ThemeProvider,
  InputGroup,
  InputRightElement,
  Button,
} from "@chakra-ui/react";

function App() {
  const [bill, setBill] = useState(0);
  const [person, setPerson] = useState(0);
  const [tip, setTip] = useState(0);



function handleChangeBill(e) {
  setBill(e.target.value);
}
function handlePerson(e) {
  setPerson(e.target.value);
}
function handleTip(e) {
  setTip(e.target.value);
}

  return (
    <div className="App">
     
      <Box w="100%" h="100%" backgroundColor="hsl(172, 67%, 45%)" pb="5%">
        <Text ml="45%" pt="5%" pb="2%" fontSize="24px" fontFamily ="Space Mono">
          SPLITTER
        </Text>
        <Box
          w="60%"
          h="10%"
          backgroundColor="white"
          mb="5%"
          ml="20%"
          pb="3%"
          pt="1%"
          borderRadius="14px"
        >
          <HStack spacing="4%">
            <Box>
              <Text pl="5%"   fontFamily ="Space Mono">Bill</Text>
              <form >
                <Input
                  style={{
                    width: "343px",
                    color: "black",
                    fontSize: "14px",
                    paddingTop: "1%",
                    paddingBottom: "1%",
                    fontWeight: "normal",
                  }}
                  borderRadius="7"
                  borderColor=" #D0D0D0"
                  placeholder={bill}
                  onChange={handleChangeBill}
                  marginLeft="5%"
                />
                <Text pl="5%"   fontFamily ="Space Mono">Select Tip %</Text>

               
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
                    fontFamily ="Space Mono"
                    fontSize="20px"
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
                    fontFamily ="Space Mono"
                    fontSize="20px"
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
                      fontFamily ="Space Mono"
                      fontSize="20px"
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
                      fontFamily ="Space Mono"
                      fontSize="20px"
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
                      fontFamily ="Space Mono"
                      fontSize="20px"
                  >
                    50%
                  </Button>
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
                    fontFamily ="Space Mono"
                    fontSize="20px"
                  >
                    Custom
                  </Button>
                </HStack>

                <Text pl="5%"   fontFamily ="Space Mono">Number of People</Text>
                <Input
                  style={{
                    width: "343px",
                    color: "black",
                    fontSize: "14px",
                    paddingTop: "1%",
                    paddingBottom: "1%",
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
              pt="2%"
              pl="2%"
              pb="2%"
              borderRadius="12px"
              backgroundColor="hsl(183, 100%, 15%)"
            ><HStack>
              <Text color="white" pl="2%"  fontFamily ="Space Mono">
                Tip Amount
              </Text>
              <Input
                  style={{
                    width: "243px",
                    color: "black",
                    fontSize: "14px",
                    paddingTop: "1%",
                    paddingBottom: "1%",
                    fontWeight: "normal",
                  }}
                  borderRadius="7"
                  borderColor=" #D0D0D0"
                  placeholder={(bill*tip/100)/person}
                 
                  marginLeft="2%"
                />
              </HStack>
              <Text color="hsl(184, 14%, 56%)" pl="2%"  fontFamily ="Space Mono">
                /person
              </Text>
              <Text color="white" pl="2%"   fontFamily ="Space Mono">
                Total
              </Text>
              <Text color="hsl(184, 14%, 56%)" pl="2%"   fontFamily ="Space Mono">
                /person
              </Text>
              <Button
                cursor="pointer"
                backgroundColor="hsl(184, 14%, 56%)"
                cursor="pointer"
                ml="5%"
                mt="5%"
                mb="3%"
                padding="10px 38px"
                color="hsl(183, 100%, 15%)"
                fontSize="16px"
                w="410px"
                fontWeight="700"
                borderRadius="7px"
                borderColor="hsl(184, 14%, 56%)"
                fontFamily ="Space Mono"
                onClick={()=>{{setBill(0);setPerson(0)}}}
              >
                Reset
              </Button>
            </Box>
          </HStack>
        </Box>
      </Box>
    </div>
  );
}

export default App;
