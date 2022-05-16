import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ImageCard from './ImageCard';
import places from '../static/Equipment';
import useWindowPosition from '../hook/useWindowPosition';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
    },
  },
}));

export default function () {
  const classes = useStyles();
  const checked = useWindowPosition('header');
  return (
    <div className={classes.root} id="equipment">
      <ImageCard place={places[1]} checked={checked} />
      <ImageCard place={places[0]} checked={checked} /> 
    </div>
  );
}
