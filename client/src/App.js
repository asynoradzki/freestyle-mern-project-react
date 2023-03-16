// importy compomentow do refactoru, niewiem czy destrukturyzacja nie dziala
import NavBar from "./components/navbar/NavBar.js";
import RightDrawer from "./components/rightDrawer/RightDrawer.js";
import MovieThumbnail from "./components/moviethumbnail/MovieThumbnail.js";
import SearchMenu from "./components/searchmenu/SearchMenu.js";
import Create from "./components/create/Create.js";
import Edit from "./components/edit/Edit.js";
import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [display, setDisplay] = useState(true);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
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
    const data = await fetch("http://127.0.0.1:3001/api/movies");
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
  // imageUrl, title, genres, runtime
  return (
    <div className="App" style={{ marginRight: isDrawerOpen ? "270px" : 0 }}>
      <header className="NavBar dark">
        <NavBar disabledButtons={disabledButtons} handleClick={handleClick} />
      </header>
      <div className="MainDisplay dark">
        
        {display && (
          <div className="Main dark">
            {filteredFilms.map((film) => (
              <MovieThumbnail
                key={film._id}
                imageUrl={film.imageUrl}
                title={film.title}
                genres={film.genres}
                runtime={film.runtime}
              />
            ))}
            <RightDrawer
              isDrawerOpen={isDrawerOpen}
              setIsDrawerOpen={setIsDrawerOpen}
              allFilms={allFilms}
              filteredFilms={filteredFilms}
              setFilteredFilms={setFilteredFilms}
            />
          </div>
        )}
      </div>
      {create && <Create />}
      {edit && <Edit />}
    </div>
  );
}

export default App;
