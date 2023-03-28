import RightDrawer from "../../components/RightDrawer/RightDrawer";
import MovieThumbnail from "../../components/Moviethumbnail/MovieThumbnail";
import "./Movies.css";
import { useState, useEffect } from "react";

function Movies() {
    const [allFilms, setAllFilms] = useState([]);
    const [filteredFilms, setFilteredFilms] = useState([]);

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
        <div className="Movies">
                <div className="Main dark">
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
                        />
                </div>
        </div>
    );
}

export default Movies;
