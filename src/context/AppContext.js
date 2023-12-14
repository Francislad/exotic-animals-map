import React, {createContext, useContext, useState} from "react";
import geoJson from "../data/animals.json";
import {useInterval} from "usehooks-ts";

const AppContext = createContext({});
export const useAppContext = () => useContext(AppContext);

export function AppContextProvider({children}) {
  const appService = useAppService();
  return (<AppContext.Provider value={appService}>
    {children}
    </AppContext.Provider>);
}

const useAppService = () => {
  const [map, setMap] = useState();
  const [markers, setMarkers] = useState([]);
  const [lng, setLng] = useState(-65.25);
  const [lat, setLat] = useState(-4);
  const [zoom, setZoom] = useState(9);
  const [geoDataItems, setGeoDataItems] = useState(geoJson.features);
  const [geoDataItemsFixed, setGeoDataItemsFixed] = useState(geoJson.features);

  useInterval(() => {
      // Your custom logic here
      setGeoDataItems(geoDataItems.map(d => {
        d.geometry.coordinates = [
          -65.5 + (Math.random() * .5),
          -4.1 + (Math.random() * .2)
        ]
        return d;
      }))
    },
    // Delay in milliseconds or null to stop it
    5000
  )

  return {
    map, setMap,
    markers, setMarkers,
    lng, setLng,
    lat, setLat,
    zoom, setZoom,
    geoDataItems, setGeoDataItems,
    geoDataItemsFixed, setGeoDataItemsFixed,
  }
}

