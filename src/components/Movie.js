import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardActionArea, CardContent,Typography, Grid } from '@material-ui/core';
// import { CardActions, IconButton } from '@material-ui/core';
// import { Favorite } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'space-evenly',
  },

  gridItem: {
    margin: '0 auto',

    "&:last-child": {
      marginBottom: '8rem',
    },
  },

  card: {
    display: 'flex',
    alignItems: 'flex-end',
    flexDirection: 'column',
    margin: '8rem auto 0',
    width: '70%',
  },

  title: {
    fontSize: '2rem',
    fontWeight: '600',
  },

  description: {
    textAlign: 'justify',
    fontWeight: '600',
  },

  image: {
    width: 'inherit',
  },
}));

const Movie = (props) => {
  const classes = useStyles();
  const [movies, setMovies] = useState([]);
  
  useEffect(() => {
    const MOVIES_ENDPOINT = process.env.REACT_APP_MOVIES_ENDPOINT;
    const headers = {
      'access-token': localStorage.getItem('access-token'),
      'client': localStorage.getItem('client'),
      'uid': localStorage.getItem('uid'),
    };

    axios.get(MOVIES_ENDPOINT, { headers: headers })
    .then((response) => setMovies(response.data));
  }, []);

  return (
    <div className={classes.root}>
      <Grid container>
        {movies.map(movie => (
          <Grid item xs={12} sm={10} md={6} lg={4} key={movie.id} className={classes.gridItem}>
            <Card className={classes.card}>
              <CardActionArea>
                <img src={movie.image} alt={movie.title} className={classes.image} />
              </CardActionArea>
              <CardContent>
                <Typography gutterBottom variant="h5" component="h1" className={classes.title}>{movie.title} - {movie.year}</Typography>
                <Typography gutterBottom variant="h6">{movie.director}</Typography>
                <Typography variant="body2" color="textSecondary" component="p" className={classes.description}>{movie.description}</Typography>
              </CardContent>
              {/* <CardActions>
                <IconButton aria-label="add to favorites">
                  <Favorite />
                </IconButton>
              </CardActions> */}
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  )
}

export default Movie;
