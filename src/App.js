import React, { useState, useEffect } from "react";
import { CssBaseline, Grid } from '@material-ui/core';
import { getPlaces } from "./api/index";

import Header from "./components/Header/Header";
import List from "./components/List/List";
import Map from "./components/Map/Map";


const App = () => {
  // Alla states som behövs för att appen ska fungera
  const [places, setPlaces] = useState([]);
  const [coordinates, setCoordinates] = useState({});
  const [bounds, setBounds] = useState(null);
  const [type, setType] = useState('restaurants');
  const [rating, setRating] = useState('');
  const [filteredPlaces, setfilteredPlaces] = useState([]);

  // Hook som tar reda på userns nuvarande position
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(({ coords: { latitude, longitude } }) => {
      setCoordinates({ lat: latitude, lng: longitude })
    })
  }, []);

  // här filtreras alla platser i places objektet för att sålla ut de platser beroende på vilken rating man väljer 
  useEffect(() => {
    const filteredPlaces = places.filter((place) => place.rating > rating);
    setfilteredPlaces(filteredPlaces);

  }, [rating]);

  // Nedan finns getPlaces funktionen som hämtar datan från api:et. Den filtrerar ut alla ställen som "finns". Jag upptäckte att det finns "tomma" places därav denna filtrering 
  useEffect(() => {
    if (bounds === null) {
      return;
    }
    getPlaces(type, bounds)
      .then((data) => {
        setPlaces(data?.filter((place) => place.name && place.num_reviews > 0));
        setfilteredPlaces([]);
      });
  }, [type, coordinates, bounds]);

  return (
    <>
      {/* Lägger till CssBaseline för att "nollställa min css" */}
      <CssBaseline />
      <Header />
      <Grid container spacing={3} style={{ width: '100%' }}>
        <Grid item xs={12} md={4}>
          <List
            places={filteredPlaces.length ? filteredPlaces : places}
            type={type}
            setType={setType}
            rating={rating}
            setRating={setRating}
          />
        </Grid>
        <Grid item xs={12} md={8}>
          <Map
            setCoordinates={setCoordinates}
            setBounds={setBounds}
            coordinates={coordinates}
            places={filteredPlaces.length ? filteredPlaces : places}
          />
        </Grid>

      </Grid>
    </>
  );
}

export default App;
