import React from "react";

import Main from "../Main/Main";
import Header from "../Header/Header";
import Movies from "../Movies/Movies";
import Profile from "../Profile/Profile";
import NotFound from "../NotFound/NotFound";
import Register from "../Register/Register"
import Login from "../Login/Login"
import MenuPopup from "../MenuPopup/MenuPopup";
import SavedMovies from "../SavedMovies/SavedMovies"

import { useState } from "react";
import { Routes, Route} from "react-router-dom";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function App() {

  const [isMenuPopupOpen, setIsMenuPopupOpen] = useState(false);
  function handleIsMenuPopupOpen() {
    setIsMenuPopupOpen(true);
  }

  function closeAllPopups() {
    setIsMenuPopupOpen(false);
  }

  return (
    <CurrentUserContext.Provider>
      <div className="page">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/profile" element={<><Header onMenuClick={handleIsMenuPopupOpen}/><Profile /></>} />
          <Route
            path="/movies"
            element={
                <Movies  onMenuClick={handleIsMenuPopupOpen} />
            }
          />
           <Route
            path="/saved-movies"
            element={
                <SavedMovies  onMenuClick={handleIsMenuPopupOpen} />
            }
          />
           <Route path="/signup" element={<Register />} />
           <Route path="/signin" element={<Login />} />
          <Route path="*" element={<NotFound />} />{" "}
        </Routes>
        <MenuPopup
          isOpen={isMenuPopupOpen}
          onClose={closeAllPopups}
        ></MenuPopup>
      </div>{" "}
    </CurrentUserContext.Provider>
  );
}

export default App;
