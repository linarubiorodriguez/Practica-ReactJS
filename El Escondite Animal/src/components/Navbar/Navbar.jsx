import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import { makeStyles } from '@mui/styles';
import LinkBehavior from './LinkBehavior';
import logoSena from '../../assets/images/logoSena.png';

const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
  },
  link: {
    color: 'white',
    textDecoration: 'none',
    margin: theme.spacing(2),
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
  },
}));

export default function Navbar() {
  const classes = useStyles();
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const normalizeText = (text) => text.toLowerCase().replace(/ /g, '');

  const drawer = (
    <div className={classes.drawer}>
      <List>
        {['Home', 'Cursos', 'Usuarios', 'Más información'].map((text) => (
          <ListItem button component={LinkBehavior} to={`/${normalizeText(text)}`} key={text}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <>
      <AppBar position="fixed">
        <Toolbar className={classes.toolbar}>
          <img src={logoSena} alt="SENA Logo" style={{ height: 50, marginRight: 16 }} className={classes.logo} />
          <Typography variant="h6" className={classes.title}>
            SERVICIO NACIONAL DE APRENDIZAJE - SENA
          </Typography>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={handleDrawerToggle}
            sx={{ display: { xs: 'block', md: 'none' } }} 
          >
            <MenuIcon />
          </IconButton>
          <Box sx={{ display: { xs: 'none', md: 'block' } }}>
            {['Home', 'Cursos', 'Usuarios', 'Más información'].map((text) => (
              <Button color="inherit" component={LinkBehavior} to={`/${normalizeText(text)}`} key={text}>
                {text}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer anchor="left" open={drawerOpen} onClose={handleDrawerToggle}>
        {drawer}
      </Drawer>
    </>
  );
}
