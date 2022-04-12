import React from "react";
import { AppBar, Toolbar, Typography, InputBase, Box } from "@material-ui/core";
import SearchIcon from '@mui/icons-material/Search';
import { Autocomplete, } from "@react-google-maps/api";
import useStyles from './styles';

const Header = () => {
 // Importerar min css fil styles.js och sparar den i en variabel för att använda den längre ner i koden, se nedan. 
 const classes = useStyles();

 return (
  // Använder "primary" som min primära färg på hela Appbar taggen som dessutom är default choice
  <AppBar position='static'>
   <Toolbar className={classes.toolbar}>
    <Typography variant="h5" className={classes.title}>
     Travel Helper
    </Typography>
    <Box display='flex'>
     <Typography variant="h6" className={classes.title}>
      Find New Places
     </Typography>
     {/* <Autocomplete> */}
     <div className={classes.search}>
      <div className={classes.searchIcon}>
       <SearchIcon />
      </div>
      <InputBase placeholder='Search...' classes={{ root: classes.inputRoot, input: classes.inputInput }} />
     </div>
     {/* </Autocomplete> */}
    </Box>
   </Toolbar>
  </AppBar>
 )
}

export default Header;