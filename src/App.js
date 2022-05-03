import React, { useState, useEffect } from "react";
import {
  HashRouter as Router,
  Routes,
  Route,
  Outlet,
  Navigate,
} from "react-router-dom";
import { ThemeProvider } from "styled-components";
import Navbar from "./components/Navbar";
import { darkTheme, lightTheme } from "./components/theme";
import Home from "./components/Home";
import { helpHttp } from "./helper/helpHttp";
import GameInfo from "./components/GameInfo";
import { Loader } from "./components/Loader";
import { Footer } from "./components/Footer";

const initialData = [];

function App() {
  const [theme, setTheme] = useState(darkTheme);
  const [data, setData] = useState(initialData);
  const [dataFiltered, setDataFiltered] = useState(data);
  const [filters, setFilters] = useState({
    platform: "All Platforms",
    genre: "All Genrers",
  });
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const toggleTheme = () => {
    setTheme(theme === darkTheme ? lightTheme : darkTheme);
  };

  useEffect(() => {
    setLoading(true);
    const getData = async () => {
      try {
        const data = await helpHttp().get(
          "https://free-to-play-games-database.p.rapidapi.com/api/games",
          {
            headers: {
              "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
              "X-RapidAPI-Key":
                "6882e33334msh53c3bc45159d97cp11d227jsn1c82c247cd0a",
            },
          }
        );

        if (data.err) {
          setError(true);

          throw new Error(data.err, data.statusText, data.status);
        }
        setData(data);
        setDataFiltered(data);
      } catch (error) {
        setError(true);
        return error;
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, []);

  const filterData = (e) => {
    let newData = [...data];

    let newFilters;

    if (e.target.name) {
      newFilters = {
        ...filters,
        [e.target.name.toLowerCase()]: e.target.value,
      };
    } else {
      newFilters = {
        ...filters,
      };
    }

    for (let filter in newFilters) {
      console.log(newFilters[filter]);
      if (!newFilters[filter].toLowerCase().includes("all")) {
        newData = newData.filter((el) => {
          return el[filter].toLowerCase() === newFilters[filter].toLowerCase();
        });
      }
    }

    setDataFiltered(newData);
  };

  const handleChange = (e) => {
    setFilters({
      ...filters,
      [e.target.name.toLowerCase()]: e.target.value,
    });
    filterData(e);
  };

  const handleSearch = (e) => {
    if (e.target.value !== "") {
      setDataFiltered(
        dataFiltered.filter((el) =>
          el.title.toLowerCase().includes(e.target.value.toLowerCase())
        )
      );
    } else {
      filterData(e);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Router>
          <Navbar toggleTheme={toggleTheme} handleSearch={handleSearch} />

          <Routes>
            <Route path="/">
              <Route path="/" element={<Navigate to="/1" />} />
              <Route
                path=":page"
                element={
                  loading ? (
                    <Loader />
                  ) : (
                    <Home
                      handleChange={handleChange}
                      data={dataFiltered}
                      error={error}
                      loading={loading}
                      selectPlatform={filters.platform}
                      selectGenre={filters.genre}
                    />
                  )
                }
              />
            </Route>

            <Route path="/game">
              <Route path=":id" element={<GameInfo />} />
            </Route>
            <Route path="*" element={<h2>Pagina no encontrada</h2>} />
          </Routes>
          <Outlet />
          <Footer>
            {" "}
            Site developed with{"  "}
            <i className="em em-hearts" aria-label="BLACK HEART SUIT"></i> by
            Juan Diaz
          </Footer>
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;
