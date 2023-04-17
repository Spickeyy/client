import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Paper } from '@mui/material';
import FileBase from 'react-file-base64';
import { useDispatch, useSelector } from 'react-redux';

import { createMovie, updateMovie } from '../../actions/movies';
import useStyles from './styles';



const Form = ({currentId, setCurrentId}) => {
    const [movieData, setMovieData] = useState({
        creator: '',
        title: '',
        year: '',
        message: '',
        tags: '',
        selectedFile: '',
    });
    const movie = useSelector((state) => currentId ? state.movies.find((p) => p._id === currentId): null);
    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(() => {
        if(movie) setMovieData(movie);
    }, [movie])

    const handleSubmit = (e) => {
        e.preventDefault();

        if(currentId) {
            dispatch(updateMovie(currentId, movieData));
        } else {
            dispatch(createMovie(movieData));
        }

        clear();
    }

    const clear = () => {
        setCurrentId(null);
        setMovieData({ creator: '', title: '', year: '', message: '', tags: '', selectedFile: '' })
    }

    return (
        <Paper className={classes.paper}>
            <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
                <Typography variant="h6">{ currentId  ? 'Editing' : 'Add' } a movie!</Typography>

                <TextField 
                    name="creator" 
                    variant="outlined" 
                    label="Creator" 
                    fullWidth
                    required
                    value={movieData.creator}
                    onChange={(e) => setMovieData({ ...movieData, creator: e.target.value })}
                />

                <TextField 
                    name="title" 
                    variant="outlined" 
                    label="Title" 
                    fullWidth
                    required
                    value={movieData.title}
                    onChange={(e) => setMovieData({ ...movieData, title: e.target.value })}
                />
                
                <TextField 
                    name="Year" 
                    variant="outlined" 
                    label="Year" 
                    fullWidth
                    required
                    value={movieData.year}
                    onChange={(e) => setMovieData({ ...movieData, year: e.target.value })}
                />

                <TextField 
                    name="message" 
                    variant="outlined" 
                    label="Message" 
                    fullWidth
                    value={movieData.message}
                    onChange={(e) => setMovieData({ ...movieData, message: e.target.value })}
                />

                <TextField 
                    name="tags" 
                    variant="outlined" 
                    label="Tags" 
                    fullWidth
                    value={movieData.tags}
                    onChange={(e) => setMovieData({ ...movieData, tags: e.target.value.split(',') })}
                />
        
                <div className={classes.fileInput}>
                    <FileBase
                        type="file"
                        multiple={false}
                        onDone={({base64}) => setMovieData({ ...movieData, selectedFile: base64 })}
                        />
                </div>

                <Button 
                    className={classes.buttonSubmit} 
                    variant="contained" 
                    color="primary" 
                    size="large" 
                    type="submit"
                    fullWidth
                    required
                    >Submit
                </Button>

                <Button
                    className={classes.buttonClear}
                    variant="contained" 
                    color="secondary" 
                    size="small" 
                    onClick={clear}
                    fullWidth
                    >Clear
                </Button>
            </form>
        </Paper>
    );
}

export default Form;