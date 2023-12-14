import React, {useRef, useEffect} from "react";
import mapboxgl from "mapbox-gl";
import "./Map.css";
import {createRoot} from "react-dom/client";
import {useAppContext} from "../context/AppContext";
import SidePanel from "../components/SidePanel";

mapboxgl.accessToken =
  "pk.eyJ1IjoiZnJhbmNvaXMtYnJ1bm8iLCJhIjoiY2p3Z3BqamtuMjU1ODRibzYybThtMmJtYyJ9.tIXS0vA9lULbcMotznJ6DA";

const Marker = ({onClick, children, feature}) => {
  const {
    markers, setMarkers,
  } = useAppContext()
  const _onClick = () => {
    onClick(feature.properties.title);
  };

  return (
    <button onClick={_onClick} className="marker" style={{backgroundImage: `url(${feature.properties.imageUrl})`}}>
      {children}
    </button>
  );
};

const Map = () => {
  const {
    map, setMap,
    markers, setMarkers,
    lng, setLng,
    lat, setLat,
    zoom, setZoom,
    geoDataItems,
  } = useAppContext()
  const mapContainerRef = useRef(null);

  const markerClicked = (title) => {
    window.alert(title);
  };

  useEffect(() => {
    const m = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [lng, lat],
      zoom: zoom,
    });

    m.addControl(new mapboxgl.NavigationControl(), "bottom-left");

    m.on('move', () => {
      setLng(m.getCenter().lng.toFixed(4));
      setLat(m.getCenter().lat.toFixed(4));
      setZoom(m.getZoom().toFixed(2));
    });

    setMap(m);

    return () => m.remove();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    markers.forEach(marker => {
      marker.remove();
    })
    const features = geoDataItems.map((feature) => {
      const ref = React.createRef();
      ref.current = document.createElement('div');
      createRoot(ref.current).render(
        <Marker onClick={markerClicked} feature={feature}/>
      );

      return new mapboxgl.Marker(ref.current).setLngLat(feature.geometry.coordinates).addTo(map);
    });
    setMarkers(features);
  }, [geoDataItems]);

  return <div style={{
    height: '100vh',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'end',
  }}>
    <div className='sidebarStyle'>
      <div>
        Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
      </div>
    </div>
    <div className='map-container' ref={mapContainerRef}/>
    <SidePanel></SidePanel>
  </div>;
};

export default Map;
