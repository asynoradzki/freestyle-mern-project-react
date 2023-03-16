import './Movie.css';
import { Typography, Rating, Box } from '@mui/material'
import StarIcon from '@mui/icons-material/Star';
import StarRateIcon from '@mui/icons-material/StarRate';
import ReviewInput from './ReviewInput.js'
import { useState } from 'react';

const labels = {
    0.5: 'Useless',
    1: 'Useless+',
    1.5: 'Poor',
    2: 'Poor+',
    2.5: 'Ok',
    3: 'Ok+',
    3.5: 'Good',
    4: 'Good+',
    4.5: 'Excellent',
    5: 'Excellent+',
};

function getLabelText(value) {
    return `${value} Star${value !== 1 ? 's' : ''}, ${labels[value]}`;
}


function Movie({ clickedMovie }) {
    const [value, setValue] = useState(0);
    const [hover, setHover] = useState(-1);

    return (

        <div className="movieWeb">
            <div className='poster'></div>
            <div className='allInfo'>
                <div className='movieInfo'>
                    <Typography className="title" variant='overline'>{clickedMovie.title}</Typography>
                    <div className='additionInfo'>
                        <div className="yearContainer">
                            <Typography className="year" variant='overline'>year:</Typography>
                            <Typography className="yearValue" variant='overline'>{clickedMovie.year}</Typography>
                        </div>
                        <div className="runtimeContainer">
                            <Typography className="runtime" variant='overline'>runtime:</Typography>
                            <Typography className="runtimeValue" variant='overline'>{clickedMovie.runtime}</Typography>
                        </div>
                    </div>
                </div>
                <div className="rating">
                    <div className='yourRating'>
                        <Typography className="yourRating">Your rating</Typography>
                        <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                flexDirection: 'column',
                            }}
                        >
                            <Rating
                                name="hover-feedback"
                                value={value}
                                precision={0.5}
                                getLabelText={getLabelText}
                                onChange={(event, newValue) => {
                                    setValue(newValue);
                                }}
                                onChangeActive={(event, newHover) => {
                                    setHover(newHover);
                                }}
                                emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
                            />
                            {value !== null && (
                                <Box sx={{ ml: 2, margin: '5px' }}>{labels[hover !== -1 ? hover : value]}</Box>
                            )}
                        </Box>
                    </div>

                    <div className='webRating'>
                        <Typography className="webRating">MovieApp rating</Typography>
                        <StarRateIcon />
                    </div>
                </div>
            </div>
            <div className='plot'></div>
            <div className='directors'></div>
            <div className='actors'></div>
            <ReviewInput clickedMovie={clickedMovie} />



        </div>
    )
}

export default Movie;