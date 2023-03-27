// importy compomentow do refactoru, niewiem czy destrukturyzacja nie dziala
// import NavBar from "./Pages/Navbar/NavBar.js";
import RightDrawer from "../../components/RightDrawer/RightDrawer";
import MovieThumbnail from "../../components/Moviethumbnail/MovieThumbnail";
// import Create from "./components/create/Create.js";
// import Edit from "./components/edit/Edit.js";
// import Login from "./components/login/Login.js";
// import HomePage from "./Pages/Homepage/HomePage.js";
import "./Movies.css";
import { useState, useEffect } from "react";
// import Movie from "./components/Movie/Movie.js";???

function Movies() {
    // const [display, setDisplay] = useState(true);
    // const [isDrawerOpen, setIsDrawerOpen] = useState(true);
    // const [create, setCreate] = useState(false);
    // const [edit, setEdit] = useState(false);
    // const [login, setLogin] = useState(false);
    // const [disabledButtons, setDisabledButtons] = useState({
    //     display: false,
    //     create: false,
    //     edit: false,
    //     login: false,
    // });
    const [allFilms, setAllFilms] = useState([]);
    const [filteredFilms, setFilteredFilms] = useState([]);
    const [isMovieThumbnailClicked, setMovieThumbnailClicked] = useState(false);
    const [clickedMovie, setClickedMovie] = useState(null);
    const [isHomePage, setHomePage] = useState(true);

    useEffect(() => {
        getFilms().catch((err) => alert(err.message));
    }, []);

    async function getFilms() {
        const data = await fetch("http://127.0.0.1:3001/api/movies");
        const films = await data.json();
        setAllFilms(films);
        setFilteredFilms(films);
    }

    // const handleClick = (button) => {
    //     setDisabledButtons({
    //         display: button === "display",
    //         create: button === "create",
    //         edit: button === "edit",
    //         login: button === "login",
    //     });
    //     setDisplay(button === "display");
    //     setCreate(button === "create");
    //     setEdit(button === "edit");
    //     setLogin(button === "login");
    //     setIsDrawerOpen(false);

    //     if (button === "display") {
    //         setHomePage(false);
    //     }
    // };
    // imageUrl, title, genres, runtime
    return (
        <div className="Movies">
            

                <div className="Main dark">
                    {/* {isMovieThumbnailClicked && <Movie clickedMovie={clickedMovie} />} !!!!!!!!!!!!!!!!!!!!!!!*/}
                    {
                        filteredFilms.map((film, index) => (
                            <MovieThumbnail
                                key={index}
                                film={film}
                                // setMovieThumbnailClicked={setMovieThumbnailClicked}
                                // setClickedMovie={setClickedMovie}
                            />
                        ))}
                    {/* {!isMovieThumbnailClicked && (
                        <RightDrawer
                            isDrawerOpen={isDrawerOpen}
                            setIsDrawerOpen={setIsDrawerOpen}
                            allFilms={allFilms}
                            filteredFilms={filteredFilms}
                            setFilteredFilms={setFilteredFilms}
                        />
                    )} */}
                </div>
                <div className="Drawer">
                <RightDrawer
                       
                            allFilms={allFilms}
                            filteredFilms={filteredFilms}
                            setFilteredFilms={setFilteredFilms}
                        />
                </div>
            {/* {!isMovieThumbnailClicked && create && <Create />}
            {!isMovieThumbnailClicked && edit && <Edit />}
            {login && <Login />} */}
        </div>
    );
}

export default Movies;
