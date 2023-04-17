import React from 'react';
import { Grid, CircularProgress } from '@mui/material';
import { useSelector } from 'react-redux';

import Movie from './Movie/Movie';
import useStyles from './styles';

const Movies = ({ setCurrentId }) => {
    const movies = useSelector((state) => state.movies);
    const classes = useStyles();

    console.log(movies);
    return (
        !movies.length ? <CircularProgress /> : (
            <Grid className={classes.container} container alignItems="stretch" spacing={3}>
                {movies.map((movie) => (
                    <Grid key={movie._id} item xs={12} sm={6}>
                        <Movie movie={movie} setCurrentId={setCurrentId} />
                    </Grid>
                ))}

            </Grid>
        )
    );
}

export default Movies;

