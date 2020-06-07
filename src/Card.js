import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Card, CardContent, Typography } from '@material-ui/core';
import CountUp from 'react-countup';

const useStyles = makeStyles((theme) => ({
  main: {
    margin: '50px 0',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    margin: '0 2%',
    [theme.breakpoints.down('sm')]: {
      margin: '2% 0',
    },
    [theme.breakpoints.down('md')]: {
      margin: '2% 0',
    },
  },
  infected: {
    borderBottom: '10px solid rgba(0, 0, 255, 0.5)',
  },
}));

const Cards = ({ data: { confirmed, deaths, recovered, lastUpdate } }) => {
  const classes = useStyles();

  if (!confirmed) {
    return 'loading...';
  }

  return (
    <div className={classes.main}>
      <Grid container spacing={3} justify='center'>
        <Grid
          style={{ borderBottom: '10px solid rgba(0, 0, 255, 0.5)' }}
          className={classes.card}
          item
          component={Card}
          xs={12}
          md={3}>
          <CardContent>
            <Typography color='textSecondary'>Infected</Typography>
            <Typography variant='h5'>
              <CountUp
                start={0}
                end={confirmed.value}
                duration={2.5}
                separator=','
              />
            </Typography>
            <Typography color='textSecondary'>
              {new Date(lastUpdate).toDateString()}
            </Typography>
            <Typography variant='body2' color='textSecondary'>
              Number of Infected from Covid-19
            </Typography>
          </CardContent>
        </Grid>
        <Grid
          style={{ borderBottom: '10px solid rgba(0, 255, 0, 0.5)' }}
          className={classes.card}
          item
          component={Card}
          xs={12}
          md={3}>
          <CardContent>
            <Typography color='textSecondary'>Deaths</Typography>
            <Typography variant='h5'>
              <CountUp
                start={0}
                end={deaths.value}
                duration={2.5}
                separator=','
              />
            </Typography>
            <Typography color='textSecondary'>
              {new Date(lastUpdate).toDateString()}
            </Typography>{' '}
            <Typography variant='body2' color='textSecondary'>
              Number of deaths from Covid-19
            </Typography>
          </CardContent>
        </Grid>
        <Grid
          style={{ borderBottom: '10px solid rgba(255, 0, 0, 0.5)' }}
          className={classes.card}
          item
          component={Card}
          xs={12}
          md={3}>
          <CardContent>
            <Typography color='textSecondary'>Recovered</Typography>
            <Typography variant='h5'>
              <CountUp
                start={0}
                end={recovered.value}
                duration={2.5}
                separator=','
              />
            </Typography>
            <Typography color='textSecondary'>
              {new Date(lastUpdate).toDateString()}
            </Typography>{' '}
            <Typography variant='body2' color='textSecondary'>
              Number of recovered from Covid-19
            </Typography>
          </CardContent>
        </Grid>
      </Grid>
    </div>
  );
};
export default Cards;
