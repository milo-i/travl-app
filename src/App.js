import React, { useState, useEffect } from "react";
import { CssBaseline, Grid } from '@material-ui/core';
import { getPlaces } from "./api/index";

import Header from "./components/Header/Header";
import List from "./components/List/List";
import Map from "./components/Map/Map";


const App = () => {

  const [places, setPlaces] = useState([]);
  const [coordinates, setCoordinates] = useState({});
  const [bounds, setBounds] = useState(null);

  // console.log(coordinates, 'coordinates');
  // console.log(bounds, 'bounds');

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(({ coords: { latitude, longitude } }) => {
      setCoordinates({ lat: latitude, lng: longitude })
    })
  }, []);

  useEffect(() => {
    // console.log(coordinates, 'rad 26');
    // console.log(bounds, 'rad 27');
    if (bounds === null) {
      return;
    }
    getPlaces(bounds)
      .then((data) => {
        console.log(bounds);
        setPlaces(data);
        // console.log(places, 'PLACES');
      });
  }, [coordinates, bounds]);

  return (
    <>
      {/* Lägger till CssBaseline för att "nollställa min css" */}
      <CssBaseline />
      <Header />
      <Grid container spacing={3} style={{ width: '100%' }}>
        <Grid item xs={12} md={4}>
          <List places={places} />
        </Grid>
        <Grid item xs={12} md={8}>
          <Map
            setCoordinates={setCoordinates}
            setBounds={setBounds}
            coordinates={coordinates}
          />
        </Grid>

      </Grid>
    </>
  );
}

export default App;
