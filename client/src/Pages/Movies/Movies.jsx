import RightDrawer from "../../components/RightDrawer/RightDrawer";
import MovieThumbnail from "../../components/Moviethumbnail/MovieThumbnail";
import "./Movies.css";
import MenuIcon from '@mui/icons-material/Menu';
import { useState, useEffect, useContext } from "react";
import UserContext from '../../authHelpers/UserContext'
import {Typography} from '@mui/material'

function Movies() {
    const [allFilms, setAllFilms] = useState([]);
    const [filteredFilms, setFilteredFilms] = useState([]);
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);


    useEffect(() => {
        getFilms().catch((err) => alert(err.message));
    }, []);

    async function getFilms() {
        const data = await fetch("http://127.0.0.1:3001/api/movies");
        const films = await data.json();
        setAllFilms(films);
        setFilteredFilms(films);
    }

    return (
        <div className="Movies" style={{ marginRight: isDrawerOpen ? '270px' : '0px' }}>
            <div className='menuMoviesList'>
            <MenuIcon
                fontSize="large"
                edge="start"
                    aria-label="logo"
                onClick={() => setIsDrawerOpen(true)}
            >
                </MenuIcon>
                <Typography
                    variant='h3'
                    className="moviesTitle"
                    sx={{
                        fontFamily: 'poppins',
                        opacity: "0.75",
                        textShadow: "2px 6px 5px rgb(66 68 90)"
                    }}
                >MOVIES</Typography>
            </div>
            <div className="moviesList ">
                    {   filteredFilms.map((film, index) => (
                            <MovieThumbnail
                                key={index}
                                film={film}
                            />
                        ))}
                </div>
                <div className="Drawer">
                <RightDrawer
                            allFilms={allFilms}
                            filteredFilms={filteredFilms}
                    setFilteredFilms={setFilteredFilms}
                    drawerState={{ isDrawerOpen, setIsDrawerOpen }}
                        />
                </div>
        </div>
    );
}

export default Movies;
