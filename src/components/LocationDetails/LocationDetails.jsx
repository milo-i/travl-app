import React from "react";
import { Box, Typography, Button, Card, CardMedia, CardContent, CardActions, Chip } from "@material-ui/core";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import PhoneIcon from "@material-ui/icons/Phone";
import Rating from "@material-ui/lab/Rating";

import useStyles from "./styles";

const PlaceDetails = ({ place }) => {

 const classes = useStyles();

 console.log(place);

 return (
  <Card elevation={6}>
   <CardMedia
    style={{ height: 350 }}
    image={place.photo ? place.photo.images.large.url : "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"} // Om det finns en bild i objektet så kommer den att visas, annars har jag valt en dummy bild som gäller ifall ternary operatorn blir false
    title={place.name}
   />
   <CardContent>
    <Typography gutterBottom variant="h5">{place.name}</Typography>
    <Box display="flex" justifyContent="space-between">
     <Typography variant="subtitle1">Price</Typography>
     <Typography gutterBottom variant="subtitle1">{place.price_level}</Typography>
    </Box>
    <Box display="flex" justifyContent="space-between">
     <Typography variant="subtitle1">Ranking</Typography>
     <Typography gutterBottom variant="subtitle1">{place.ranking}</Typography>
    </Box>
    {/* Här under kollar jag ifall jag kan lista "Awards" som restaurangen har vunnit och visar detta om det finns i objektet */}
    {place?.awards?.map((award) => (
     <Box display="flex" justifyContent="space-between" alignItems="center">
      <img src={award.images.small} alt={award.display_name} />
      <Typography variant="subtitle2" color="textSecondary">{award.display_name}</Typography>
     </Box>
    ))}
    {/* Här under finns beskrivning av vilken sorts mat restaurangen serverar */}
    {place?.cuisine?.map(({ name }) => (
     <Chip key={name} size="small" label={name} className={classes.chip}></Chip>
    ))}
    {/* Här under listar jag adressen på restaurangen */}
    {place?.address && (
     <Typography gutterBottom variant="subtitle2" color="textSecondary" className={classes.subtitle}>
      <LocationOnIcon /> {place.address}
     </Typography>
    )}
    {/* Här under listar jag telefonnummer på restaurangen */}
    {place?.phone && (
     <Typography gutterBottom variant="subtitle2" color="textSecondary" className={classes.spacing}>
      <PhoneIcon /> {place.phone}
     </Typography>
    )}
    {/* Koden under möjliggör cardactions via knapparna. Man kan besöka TripAdvisor eller restaurangens egna site */}
    <CardActions>
     <Button size="small" color="primary" onClick={() => window.open(place.web_url, "_blank")}>TripAdvisor</Button>
     <Button size="small" color="primary" onClick={() => window.open(place.website, "_blank")}>Website</Button>
    </CardActions>


   </CardContent>

  </Card>
 )
}

export default PlaceDetails;