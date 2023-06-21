import React, { useState, useEffect } from "react";
import {
  Route,
  Routes,
  useNavigate,
  Navigate,
  useLocation,
} from "react-router-dom";

import CurrentUserContext from "../../contexts/CurrentUserContext";
import * as api from "../utils/MainApi";


import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import Main from "../Main/Main";
import Header from "../Header/Header";
import Movies from "../Movies/Movies";
import Profile from "../Profile/Profile";
import Register from "../Register/Register";
import Login from "../Login/Login";
import MenuPopup from "../MenuPopup/MenuPopup";
import SavedMovies from "../SavedMovies/SavedMovies";
import Footer from "../Footer/Footer";
import NotFound from "../NotFound/NotFound";

function App() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMenuPopupOpen, setIsMenuPopupOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [savedMovies, setSavedMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const path = location.pathname;

  
  function handleIsMenuPopupOpen() {
    setIsMenuPopupOpen(true);
  }

  function closeAllPopups() {
    setIsMenuPopupOpen(false);
  }


  useEffect(() => {
    const jwt = localStorage.getItem("jwt");
    if (jwt) {
      api
        .getContent(jwt)
        .then((res) => {
          if (res) {
            localStorage.removeItem("allMovies");
            setIsLoggedIn(true);
          }
          navigate(path);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, []);

  useEffect(() => {
    console.log("5");
    if (isLoggedIn) {
      console.log("6");
      api
        .getUserInfo()
        .then((profileInfo) => {
          setCurrentUser(profileInfo);
          console.log("7");
        })
        .catch((err) => {
          console.log(err);
        });

      api
        .getCards()
        .then((cardsData) => {
          setSavedMovies(cardsData.reverse());
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [isLoggedIn, navigate]);


  function handleRegister({ name, email, password }) {
    api
      .register(name, email, password)
      .then(() => {
        handleAuthorize({ email, password });
      })
      .catch((err) => {
        console.log(err);
      });
  }


  function handleAuthorize({ email, password }) {
    setIsLoading(true);
    api
      .authorize(email, password)
      .then((res) => {
        if (res) {
          setIsLoggedIn(true);
          localStorage.setItem("jwt", res.token);
          navigate("/movies");
        } else {
          
        }
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  function handleUpdateUser(newUserInfo) {
    setIsLoading(true);
    api
      .setUserInfo(newUserInfo)
      .then((data) => {
        setCurrentUser(data);
      })
      .catch((err) => {
        console.log(err);
        handleUnauthorized(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  function handleCardLike(card) {
    api
      .postCard(card)
      .then((result) => {
        setSavedMovies([result.movie].concat(savedMovies));
      })
      .catch((err) => {
        console.log(err);
        handleUnauthorized(err);
      });
  }

  function handleCardDelete(cardId) {
    api
      .deleteCard(cardId)
      .then(() => {
        setSavedMovies((state) =>
          state.filter((item) => item._id !== cardId)
        );
      })
      .catch((err) => {
        console.log(err);
        handleUnauthorized(err);
      });
  }

  function handleUnauthorized(err) {
    if (err === "Error: 401") {
      handleSignOut();
    }
  }

  const handleSignOut = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("jwt");
    localStorage.removeItem("movies");
    localStorage.removeItem("movieSearch");
    localStorage.removeItem("shortMovies");
    localStorage.removeItem("allMovies");
    navigate("/");
  };


  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header isLoggedIn={isLoggedIn}  onMenuClick={handleIsMenuPopupOpen}/>
                <Main  isLoggedIn={isLoggedIn}  />
                <Footer />
              </>
            }
          />

          <Route
            path="/signin"
            element={
              isLoggedIn ? (
                <Navigate to="/" replace />
              ) : (
                <Login onAuthorize={handleAuthorize} isLoading={isLoading} />
              )
            }
          />

          <Route
            path="/signup"
            element={
              isLoggedIn ? (
                <Navigate to="/" replace />
              ) : (
                <Register
                  onRegister={handleRegister}
                  isSubmitting={isLoading}
                />
              )
            }
          />
          <Route
           
            path="/movies"
            element={
              <ProtectedRoute
                component={Movies}
                savedMovies={savedMovies}
                isLoggedIn={isLoggedIn}
                onCardDelete={handleCardDelete}
                handleLikeClick={handleCardLike}
                onMenuClick={handleIsMenuPopupOpen}

              />
            }
          />

          <Route
            path="/saved-movies"
            element={
              <ProtectedRoute
                component={SavedMovies}
                savedMovies={savedMovies}
                isLoggedIn={isLoggedIn}
                onCardDelete={handleCardDelete}
                onMenuClick={handleIsMenuPopupOpen}
              />
            }
          />

          <Route
            path="/profile"
            element={
              <ProtectedRoute
                component={Profile}
                signOut={handleSignOut}
                onUpdateUser={handleUpdateUser}
                isLoggedIn={isLoggedIn}
                isLoading={isLoading}
                onMenuClick={handleIsMenuPopupOpen}
              />
            }
          />

          <Route path="/*" element={<NotFound />} />
        </Routes>
        <MenuPopup
          isOpen={isMenuPopupOpen}
          onClose={closeAllPopups}
        ></MenuPopup>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
