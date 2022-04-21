import React from "react";
import { Grid, Typography, InputLabel, MenuItem, FormControl, Select } from "@material-ui/core";
import LocationDetails from "../LocationDetails/LocationDetails";
import useStyles from "./styles";

const List = ({ places, type, setType, rating, setRating }) => {
 // Importerar min styles fil och assignar den till variabeln classes
 const classes = useStyles();


 return (
  <div className={classes.container}>
   <Typography variant="h4">Restaurants, Hotels & Attractions</Typography>
   {/* Logik för att skriva ut listan på vad man vill leta efter. Står mellan hotell, restaurang eller övriga nöjen */}
   <FormControl className={classes.formControl}>
    <InputLabel>Type</InputLabel>
    <Select value={type} onChange={(e) => setType(e.target.value)}>
     <MenuItem value="restaurants">Restaurant</MenuItem>
     <MenuItem value="hotels">Hotel</MenuItem>
     <MenuItem value="attractions">Attractions</MenuItem>
    </Select>
   </FormControl>
   {/* Copypastear logiken ovan för att använda till till rating. Man ska alltså kunna välja rating på respektive kategori */}
   <FormControl className={classes.formControl}>
    <InputLabel>Rating</InputLabel>
    <Select value={rating} onChange={(e) => setRating(e.target.value)}>
     <MenuItem value={0}>All</MenuItem>
     <MenuItem value={3}>Above 3.0</MenuItem>
     <MenuItem value={4}>Above 4.0</MenuItem>
     <MenuItem value={4.5}>Above 4.5</MenuItem>
    </Select>
   </FormControl>
   <Grid container spacing={3} className={classes.list}>
    {/* Om det finns platser (det är vad frågetecknet efter places betyder) i places objektet, då kör map metoden genom alla platser och "skriver" ut dom i LocationDetails komponenten */}
    {places?.map((place, i) => (
     <Grid item key={i} xs={12}>
      <LocationDetails place={place} />
     </Grid>
    ))}
   </Grid>

  </div>
 )

}

export default List;