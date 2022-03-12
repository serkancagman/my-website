import React from "react";
import { ScreenWidthProvider } from "./Context/ScreenWidthContext";
import MainRouter from "./MainRouter";

function App() {
  return (
    <ScreenWidthProvider>
      <MainRouter />
    </ScreenWidthProvider>
  );
}

export default App;
