import React, { useState, useEffect } from 'react'

import {
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  Grid,
} from '@material-ui/core';

import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';

import ChipStatus from '../ChipStatus';

import { getStatus } from '../../service/status';

import useStyles from './styles';

const NOT_BOOKABLE = 'Not Bookable';
const BOOK = 'Book';
const BOOKED = (numberOfDays) => `Booked for ${numberOfDays} days`;

const HouseCard = ({ card }) => {
  const classes = useStyles();

  const { id, name, image } = card;

  const [isBooked, setIsBooked] = useState(false);
  const [booked, setBooked] = useState(0);

  useEffect(() => {
    setIsBooked(card.bookable);
  }, [card.bookable])

  useEffect(() => {
    setBooked(card.booked);
  }, [card.booked]);

  const status = getStatus(isBooked, booked);

  const action = (status) => {
    switch (status) {
      case 'booked':
        return (
          <div className={classes.bookedContainer}>
            <CheckCircleOutlineIcon className={classes.bookedIcon} />
            <Typography className={classes.bookedText}>
              {BOOKED(booked)}
            </Typography>
          </div>
        )
      case 'available':
        return (
          <Button fullWidth className={classes.button} onClick={() => setBooked(booked + 1)}>
            {BOOK}
          </Button>
        )
      case 'unavailable':
        return (
          <Button fullWidth className={classes.button} disabled>
            {NOT_BOOKABLE}
          </Button>
        )
      default:
        return <></>
    }
  };

  return (
    <Card className={classes.container}>
      <ChipStatus
        status={status}
        styles={classes.chip}
      />

      <CardMedia
        image={image}
        className={classes.media}
        title={name}
      />

      <CardContent>
        <Grid container spacing={2} className={classes.bottomContainer}>
          <Grid item xs={12}>
            <Typography variant="body2" className={classes.description}>
              Id: {id}
            </Typography>
          </Grid>

          <Grid item xs={12} className={classes.titleContainer}>
            <Typography className={classes.title}>
              {name}
            </Typography>
          </Grid>

          <Grid item xs={12}>
            {
              action(status)
            }
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  )
};

export default HouseCard;