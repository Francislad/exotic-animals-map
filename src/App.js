import React from "react";
import Map from "./mapbox/Map";
import {AppContextProvider} from "./context/AppContext";

function App() {
  return <AppContextProvider>
    <Map/>
  </AppContextProvider>;
}

export default App;
