import MaplibreGeocoder from "@maplibre/maplibre-gl-geocoder";
import "@maplibre/maplibre-gl-geocoder/dist/maplibre-gl-geocoder.css";
import maplibregl from "maplibre-gl";
import { useEffect } from "react";
import { useControl } from "react-map-gl";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { setCoords } from "../redux/mapCoordSlice";

const Controls: React.FC = () => {
  const search = useSelector((state: any) => state.mapSearch);
  const dispatch = useDispatch();
  const geocoder_api: any = {
    forwardGeocode: async (config: any) => {
      const features = [];
      try {
        let request =
          "https://nominatim.openstreetmap.org/search?q=" +
          search.value +
          "&format=geojson&polygon_geojson=1&addressdetails=1";
        const response = await fetch(request);
        const geojson = await response.json();
        for (let feature of geojson.features) {
          let center = [
            feature.bbox[0] + (feature.bbox[2] - feature.bbox[0]) / 2,
            feature.bbox[1] + (feature.bbox[3] - feature.bbox[1]) / 2,
          ];
          let point = {
            type: "Feature",
            geometry: {
              type: "Point",
              coordinates: center,
            },
            place_name: feature.properties.display_name,
            properties: feature.properties,
            text: feature.properties.display_name,
            place_type: ["place"],
            center: center,
          };
          features.push(point);
        }
      } catch (e) {
        console.error(`Failed to forwardGeocode with error: ${e}`);
      }

      return {
        features: features,
      };
    },
  };

  useEffect(() => {
    if (search.value !== undefined) {
      const fetchGeocode = async () => {
        const response = await geocoder_api.forwardGeocode({
          query: search.value,
        });
        if (response.features.length > 0) {
          const { center } = response.features[0];
          dispatch(
            setCoords({
              value: center,
            })
          );
        }
      };
      fetchGeocode();
    }
  }, [search.value]);

  function LoadGeocoder(): any {
    useControl(
      (): any => {
        const ctrl = new MaplibreGeocoder(geocoder_api, {
          maplibregl: maplibregl,
          collapsed: true,
          showResultsWhileTyping: true,
          minLength: 5,
        });
        return ctrl;
      },
      {
        position: "top-right",
      }
    );
  }

  function LoadNavigator(): any {
    useControl(
      () => {
        const ctrl2 = new maplibregl.NavigationControl();
        return ctrl2;
      },
      {
        position: "top-right",
      }
    );
  }

  return LoadGeocoder(), LoadNavigator();
};

export default Controls;
