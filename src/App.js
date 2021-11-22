import React from "react";
import "./App.css";
import { Box } from "@chakra-ui/layout";
import MobileComponent from "./MobileComponent";
import DesktopComponent from "./DesktopComponent";
import { useMediaQuery } from "@chakra-ui/react";

function App() {
  const [isMobile] = useMediaQuery("(max-width: 600px)");
  return (
    <Box fill>
      {isMobile ? (
      <MobileComponent />
      ) : (
      <DesktopComponent />
      )}
    </Box>
  );
}

export default App;
