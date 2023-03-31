import "./Movie.css";
import { Typography, Rating, Box } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import StarRateIcon from "@mui/icons-material/StarRate";
import ReviewInput from "../../components/ReviewInput/ReviewInput";
import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import UserContext from "../../authHelpers/UserContext";

const labels = {
    0.5: "Useless",
    1: "Useless+",
    1.5: "Poor",
    2: "Poor+",
    2.5: "Ok",
    3: "Ok+",
    3.5: "Good",
    4: "Good+",
    4.5: "Excellent",
    5: "Excellent+",
};

function getLabelText(value) {
    return `${value} Star${value !== 1 ? "s" : ""}, ${labels[value]}`;
}

async function fetchMovie(_id) {
    const movie = await fetch(`http://127.0.0.1:3001/api/movies/${_id}`);
    return await movie.json();
}

async function getUserRatings(loggedUser) {
    const data = await fetch(`http://127.0.0.1:3001/api/users/rating/${loggedUser._id}`);
    return await data.json();
}

export async function addOrDeleteInWatchlist(_id, userName, addOrDelString) {
    const data = { _id: _id };
    try {
        await fetch(`http://127.0.0.1:3001/api/users/${addOrDelString}/${userName}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });
    } catch (error) {
        alert(error.message);
    }
}

async function setMovieRating(loggedUser, filmId, rating) {
    const data = {
        filmId: filmId,
        rating: rating,
    };
    try {
        await fetch(`http://127.0.0.1:3001/api/users/rating/add/${loggedUser._id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });
    } catch (error) {
        alert(error.message);
    }
}

function Movie() {
    const [value, setValue] = useState(0);
    const [hover, setHover] = useState(-1);
    const [clickedMovie, setClickedMovie] = useState({});
    const { id } = useParams();
    const { loggedUser } = useContext(UserContext);

    useEffect(() => {
        fetchMovie(id)
            .then((movie) => {
                setClickedMovie(movie);
                if (loggedUser) {
                    getUserRatings(loggedUser)
                        .then((userData) => {
                            const movieId = userData[0].ratings.find((rating) => rating.filmId === movie[0]._id);
                            if (movieId) {
                                setValue(movieId.rating);
                            }
                        })
                        .catch((error) => console.error(error));
                }
            })
            .catch((error) => console.error(error));
    }, [id]);

    function handleAddOnclick() {
        if (loggedUser) {
            addOrDeleteInWatchlist(clickedMovie._id, loggedUser.username, "add");
            alert("Movie has been added to watchlist");
        } else {
            alert("Log in to be able to add movies to watchlist");
        }
    }

    function handleRemoveOnclick() {
        if (loggedUser) {
            addOrDeleteInWatchlist(clickedMovie._id, loggedUser.username, "del");
            alert("Movie has been removed from watch list");
        } else {
            alert("Log in to be able to add movies to watch list");
        }
    }

    function handleRatingChange(event, newValue) {
        setValue(newValue);
        setMovieRating(loggedUser, clickedMovie._id, newValue);
    }

    return (
        <div className="movieWeb">
            <div className="poster">
                <div className="big-poster">
                    <img src={clickedMovie.url} alt={clickedMovie.title} />
                </div>
                <div className="small-poster">
                    <img src={clickedMovie.url} alt={clickedMovie.title} />
                </div>
                <div className="allInfo">
                    <div className="movieInfo">
                        <div className="Buttons">
                            <button onClick={handleAddOnclick}>Add to watchlist</button>
                            <button onClick={handleRemoveOnclick}>Remove from watchlist</button>
                        </div>
                        <Typography className="title" variant="overline">
                            {clickedMovie.title}
                        </Typography>
                        <div className="rating">
                            <div className="yourRating">
                                <Typography className="yourRating">Your rating</Typography>
                                <Box
                                    sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        flexDirection: "column",
                                    }}
                                >
                                    <Rating
                                        name="hover-feedback"
                                        value={value}
                                        precision={0.5}
                                        getLabelText={getLabelText}
                                        onChange={(event, newValue) => handleRatingChange(event, newValue)}
                                        onChangeActive={(event, newHover) => {
                                            setHover(newHover);
                                        }}
                                        emptyIcon={
                                            <StarIcon className="rating" style={{ opacity: 0.55 }} fontSize="inherit" />
                                        }
                                    />
                                    {value !== null && (
                                        <Box sx={{ ml: 2, margin: "5px" }}>{labels[hover !== -1 ? hover : value]}</Box>
                                    )}
                                </Box>
                            </div>

                            <div className="webRating">
                                <Typography className="webRating">MovieApp rating</Typography>
                                <StarRateIcon className="rating" />
                            </div>
                        </div>
                        <div className="additionInfo">
                            <div className="yearContainer">
                                <Typography className="year" variant="overline">
                                    year:
                                </Typography>
                                <Typography className="yearValue" variant="overline">
                                    {clickedMovie.year}
                                </Typography>
                            </div>
                            <div className="runtimeContainer">
                                <Typography className="runtime" variant="overline">
                                    runtime:
                                </Typography>
                                <Typography className="runtimeValue" variant="overline">
                                    {clickedMovie.runtime}
                                </Typography>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ReviewInput clickedMovie={clickedMovie} />
        </div>
    );
}

export default Movie;
