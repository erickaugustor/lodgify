import React from 'react';

import {
  Grid,
  LinearProgress,
} from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';

import HouseCard from './components/HouseCard';

import useHouseFetch from './hooks/useHouseFetch';

const App = () => {
  const { status, data: cards } = useHouseFetch();

  return (
    <main>
      <Grid container spacing={2}>
        {
          (status === 'fetching') && (
            <Grid item xs={12}>
              <LinearProgress />
            </Grid>
          )
        }

        {
          (status === 'fetched') && (
            cards.map(card => (
              <Grid item xs={12} md={3}>
                <HouseCard key={card.id} card={card} />
              </Grid>
            ))
          )
        }

        {
          (status === 'error') && (
            <Alert severity="error">
              Somethin went wrong!
            </Alert>
          )
        }
      </Grid>
    </main>
  );
}

export default App;
