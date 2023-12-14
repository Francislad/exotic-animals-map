import React from "react";
import {useAppContext} from "../context/AppContext";
import AnimalItem from "./AnimalItem";

const SidePanel = () => {
  const {
    geoDataItemsFixed,
  } = useAppContext();

  return <div style={{
    height: '100%',
    width: '400px',
    background: 'white',
    zIndex: '99',
    display: 'flex',
    flexDirection: 'column',
    borderLeft: '1px solid gray'
  }}>
    <div style={{
      fontSize: '26px',
      fontWeight: '900',
      padding: '16px 8px',
      borderBottom: '1px solid gray',
    }}>Lista de Animais</div>

    {geoDataItemsFixed.map(d => {
      return <AnimalItem item={d}></AnimalItem>
    })}
  </div>
}

export default SidePanel;