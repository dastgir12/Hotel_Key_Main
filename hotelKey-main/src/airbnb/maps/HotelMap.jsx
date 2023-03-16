//cookies
//redux


import React from "react";
import GoogleMapReact from "google-map-react";

const HotelMap = (props) => {
 const renderMarkers = (map, maps) => {
  let marker = new maps.Marker({
   position: { lat: Number(props.lat), lng: Number(props.lon) },
   map,
   title: "Hello World!",
  });
  return marker;
 };
 const defaultProps = {
  center: {
   lat: Number(props.lat) ? Number(props.lat) : null,
   lng: Number(props.lon) ? Number(props.lon) : null,
  },
  zoom: 15,
 };
 return (
  <>
   <div style={{ height: "40vh", width: "90%" }}>
    <GoogleMapReact
     center={defaultProps.center}
     yesIWantToUseGoogleMapApiInternals
     bootstrapURLKeys={{
      key: "AIzaSyDfSrEcn6Y9QliysPsMc3mn4o10uJv9sZU",
     }}
     defaultZoom={defaultProps.zoom}
     onGoogleApiLoaded={({ map, maps }) => renderMarkers(map, maps)}
    ></GoogleMapReact>
   </div>
  </>
 );
};

export default HotelMap;
