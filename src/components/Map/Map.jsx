import React from "react";
import GoogleMapReact from "google-map-react";
import { Paper, Typography, useMediaQuery } from "@material-ui/core";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import Rating from "@material-ui/lab/Rating";

import useStyles from "./styles";

const Map = ({ setCoordinates, setBounds, coordinates, places }) => {

 const classes = useStyles();
 const isDesktop = useMediaQuery('(min-width:600px)');

 return (
  <div className={classes.mapContainer}>
   <GoogleMapReact
    bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY }}
    defaultCenter={coordinates}
    center={coordinates}
    defaultZoom={14}
    margin={[50, 50, 50, 50]}
    onChange={(e) => {
     // console.log(e, 'EVENT');
     setCoordinates({ lat: e.center.lat, lng: e.center.lng })
     setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw })
    }}
   >
    {/* Koden nedan: Om places objektet som tas emot som en props är populerad, då mappas objektet och placeras de små korten direkt in i Google Maps kartan */}
    {places?.map((place, i) => (
     <div
      className={classes.markerContainer}
      lat={Number(place.latitude)}
      lng={Number(place.longitude)}
      key={i}>

      {/* Kollar ifall det är desktop eller mobile. Beroende på vilket kommer in pin visas eller info såsom bilder och namn visas  */}
      {
       !isDesktop ? (
        <LocationOnOutlinedIcon color="primary" fontSize="large" />
       ) : (
        <Paper elevation={3} className={classes.paper}>
         <Typography className={classes.typography} variant="subtitle2" gutterBottom>{place.name}</Typography>
         <img src={place.photo ? place.photo.images.large.url : "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"} alt={place.name} className={classes.pointer} />
         <Rating size="small" value={Number(place.rating)} readOnly />
        </Paper>
       )
      }
     </div>
    ))}
   </GoogleMapReact>
  </div>
 )
}

export default Map;