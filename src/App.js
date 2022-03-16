import React from "react";
import { ScreenWidthProvider } from "./Context/ScreenWidthContext";
import MainRouter from "./MainRouter";
import { ChakraProvider } from "@chakra-ui/react";
function App() {
  return (
    <ChakraProvider>
      <ScreenWidthProvider>
        <MainRouter />
      </ScreenWidthProvider>
    </ChakraProvider>
  );
}

export default App;
