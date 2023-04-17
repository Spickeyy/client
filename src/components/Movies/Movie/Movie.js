import React from 'react';
import useStyles from './styles';
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import DeleteIcon from '@mui/icons-material/Delete';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import moment from 'moment';
import { useDispatch } from 'react-redux';
import { deleteMovie, likeMovie } from '../../../actions/movies';


const Movie = ({ movie, setCurrentId }) => {
    const classes = useStyles();
    const dispatch = useDispatch();

    return (
        <Card className={classes.card}>
            <CardMedia className={classes.media} image={movie.selectedFile} title={movie.title} />
            <div className={classes.overlay}>
                <Typography variant="h6">{movie.creator}</Typography>
                <Typography variant="body2">{moment(movie.createdAt).fromNow()}</Typography>
            </div>
            <div className={classes.overlay2}>
                <Button style={{color: 'white'}} size="small" onClick={() => setCurrentId(movie._id)}>
                    <MoreHorizIcon fontSize="medium" />
                </Button>
            </div>
            <div className={classes.details}>
                <Typography variant="body2" color="textSecondary">{movie.tags.map((tag) => `#${tag} `)}</Typography>
            </div>
            <div className={classes.details}>
                <Typography variant="body2" color="textPrimary">Movie release date({movie.year})</Typography>
            </div>
                <Typography className={classes.title} variant="h5" gutterBottom>{movie.title}</Typography>
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">{movie.message}</Typography>
            </CardContent>
            <CardActions className={classes.cardActions}>
                <Button size="medium" color="secondary" onClick={() => dispatch(likeMovie(movie._id))}>
                    <FavoriteIcon fontSize="small" />
                    &nbsp; Favorite &nbsp;
                    {movie.likeCount}
                </Button>
                <Button size="medium" color="primary" onClick={() => dispatch(deleteMovie(movie._id))}>
                    <DeleteIcon fontSize="small" />
                    Delete
                </Button>
            </CardActions>
        </Card>
    );
}

export default Movie;

