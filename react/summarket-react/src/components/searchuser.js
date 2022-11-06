import React from "react";

import { useState, useRef, useEffect } from "react";
import Users from "./UsersInDb";

function Searchuser() {
  
  const [users, setusers] = useState([]);
  const [keyword, setKeyword] = useState("palabra DEMO");

  // Credenciales de API
  const apiKey = "1d0bf59b"; // Intenta poner cualquier cosa antes para probar
  let input = useRef();

  useEffect(() => {
    setKeyword(input.current.value);
  }, [users]);

  let search = async (e) => {
    try {
      e.preventDefault();
      if (input.current.value === "") {
        setMovies([]);
      } else {
        let response = await fetch(
          `'http://localhost:3030/api/v1/users'?s=${input.current.value}&apikey=${apiKey}`
        );
        let users = await response.json();
        if (Users.Search) {
          setMovies(Users.Search);
        } else {
          setMovies([]);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container-fluid">
      {apiKey !== "" ? (
        <>
          <div className="row my-4">
            <div className="col-12 col-md-6">
              {/* Buscador */}
              <form method="GET" onSubmit={search}>
                <div className="form-group">
                  <label htmlFor="">Buscar por usuario:</label>
                  <input type="text" ref={input} className="form-control" />
                </div>
                <button className="btn btn-info">Search</button>
              </form>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <h2>Películas para la palabra: {keyword}</h2>
            </div>
            {/* Listado de películas */}
            {movies.length > 0 &&
              movies.map((movie, i) => {
                return (
                  <div className="col-sm-6 col-md-3 my-4" key={i}>
                    <div className="card shadow mb-4">
                      <div className="card-header py-3">
                        <h5 className="m-0 font-weight-bold text-gray-800">
                          {movie.Title}
                        </h5>
                      </div>
                      <div className="card-body">
                        <div className="text-center">
                          <img
                            className="img-fluid px-3 px-sm-4 mt-3 mb-4"
                            src={movie.Poster}
                            alt={movie.Title}
                            style={{
                              width: "90%",
                              height: "400px",
                              objectFit: "cover",
                            }}
                          />
                        </div>
                        <p>{movie.Year}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
          {movies.length === 0 && (
            <div className="alert alert-warning text-center">
              No se encontraron películas
            </div>
          )}
        </>
      ) : (
        <div className="alert alert-danger text-center my-4 fs-2">
          ¿Ingresaste la apiKey?
        </div>
      )}
    </div>
  );
}

export default Searchuser;
