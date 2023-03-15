// importy compomentow do refactoru, niewiem czy destrukturyzacja nie dziala
import NavBar from "./components/navbar/NavBar.js";
import MovieList from "./components/movieList/MovieList.js";
import SearchMenu from "./components/searchmenu/SearchMenu.js";
import Create from "./components/create/Create.js";
import Edit from "./components/edit/Edit.js";
import "./App.css";
import { useState, useEffect } from "react";

function App() {
    const [display, setDisplay] = useState(true);
    const [create, setCreate] = useState(false);
    const [edit, setEdit] = useState(false);
    const [disabledButtons, setDisabledButtons] = useState({
        display: true,
        create: false,
        edit: false,
    });
    const [allFilms, setAllFilms] = useState([]);
    const [filteredFilms, setFilteredFilms] = useState([]);

    useEffect(() => {
        getFilms().catch((err) => alert(err.message));
    }, []);

    async function getFilms() {
        const data = await fetch('http://127.0.0.1:3001/api/movies');
        const films = await data.json();
        setAllFilms(films);
        // setFilteredFilms(films);
    }

    const handleClick = (button) => {
        setDisabledButtons({
            display: button === "display",
            create: button === "create",
            edit: button === "edit",
        });
        setDisplay(button === "display");
        setCreate(button === "create");
        setEdit(button === "edit");
    };

    return (
        <div className="App">
            <header className="NavBar">
                <NavBar disabledButtons={disabledButtons} handleClick={handleClick} />
            </header>
            {display && (
                <div className="Main">
                    <MovieList />
                    <SearchMenu allFilms={allFilms} filteredFilms={filteredFilms} setFilteredFilms={setFilteredFilms} />
                </div>
            )}
            {create && <Create />}
            {edit && <Edit />}
        </div>
    );
}

export default App;
