import { useState, useEffect, useCallback } from "react";
import { GoogleMap, useJsApiLoader, Marker, InfoWindow, MarkerF } from "@react-google-maps/api";
import Dialog from "./Dialog";

const Map = ( { locations } ) => {
  const [currentLocation, setCurrentLocation] = useState();
  const [selectedLocation, setSelectedLocation] = useState();

  useEffect( () => {
    navigator.geolocation.getCurrentPosition((pos) => {
      setCurrentLocation( {
        lat: pos.coords.latitude,
        lng: pos.coords.longitude,
      } );
    });
  }, []);

  const handleSelectedLocation = (marker) => {
    if ( marker === selectedLocation ) {
      return;
    }

    setSelectedLocation(marker);
  }

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: import.meta.env.VITE_GMAPSAPI,
  });

  return isLoaded ? (
    <div className="h-screen">
      <GoogleMap
        mapContainerClassName="map"
        mapContainerStyle={{
          width: "100%",
          height: "100%",
        }}
        center={currentLocation}
        zoom={4}
      >
        {locations.map( ({ properties, geometry, id }) => (
          <MarkerF
            key={id}
            position={{lat: geometry.coordinates[0], lng: geometry.coordinates[1]}}
            onClick={ () => handleSelectedLocation(id) }
          >
            {selectedLocation === id ? (
              <Dialog title={properties.place} detail={{lat: geometry.coordinates[0], lng: geometry.coordinates[1]}} closeFn={() => setSelectedLocation(null)}/>
            ) : null}
          </MarkerF>
        ) )}
      </GoogleMap>
    </div>
  ) : <div>Loading ...</div>;
}

export default Map;
