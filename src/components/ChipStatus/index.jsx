import React from 'react';

import {
  Chip,
} from '@material-ui/core';

import useStyles from './styles';

const TEXT_STATUS = {
  available: 'available',
  booked: 'booked',
  unavailable: 'unavailable',
};

const ChipStatus = ({ status, styles }) => {
  const classes = useStyles();

  return (
    <Chip
      label={TEXT_STATUS[status]}
      className={[classes.chip, classes[status], styles]}
    />
  )
};

export default ChipStatus;