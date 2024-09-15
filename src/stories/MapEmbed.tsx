import "maplibre-gl/dist/maplibre-gl.css";
import Map from "react-map-gl";
import maplibregl from "maplibre-gl";
import Controls from "../components/Controls";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

interface MapProps {
  styles?: React.CSSProperties;
}

const MapEmbed: React.FC<MapProps> = ({ styles = {} }) => {
  const coords = useSelector((state: any) => state.mapCoord);

  const [viewState, setViewState] = useState({
    latitude: 12.9716,
    longitude: 77.5946,
    zoom: 12,
  });

  useEffect(() => {
    if (
      coords.value[0] < 90 &&
      coords.value[1] < 90 &&
      coords.value[0] > -90 &&
      coords.value[1] > -90
    ) {
      console.log(coords.value[1]);
      setViewState({
        latitude: coords.value[0],
        longitude: coords.value[1],
        zoom: 12,
      });
    }
  }, [coords]);

  return (
    <Map
      {...viewState}
      mapLib={maplibregl as any}
      style={{ width: "400px", height: "400px", ...styles }}
      mapStyle={
        "https://api.maptiler.com/maps/streets/style.json?key=YbCPLULzWdf1NplssEIc"
      }
    >
      <Controls />
    </Map>
  );
};

export default MapEmbed;
