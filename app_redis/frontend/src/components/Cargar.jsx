import axios from "axios";
import { useState } from "react";
import './styles/Cargar.css';

const Cargar = () => {
  const [personajes, setPersonajes] = useState();
  const [episodio, setEpisodio] = useState();
  const [cargaExitosa, setCargaExitosa] = useState();
  const fetchPersonajes = () => {
    if (episodio) {
      console.log(episodio);
      console.log(personajes);
      axios
        .post("http://localhost:3002/create", null, {
          params: {
            episodio,
            personaje: personajes,
          },
        })
        .then((response) => {
          const { data } = response;
          setCargaExitosa(true);
        })
        .catch((error) => {
          setCargaExitosa(false);
        });
    }
  };

  return (
    <div className="carga-personaje">
      <h3>Carga un personaje!</h3>
      <form
        onSubmit={(e, values) => {
          e.preventDefault();
          fetchPersonajes();
        }}
      >
        <input
          onChange={(event) => {
            setEpisodio(event.target.value);
          }}
          placeholder="Ingresar episodio"
          id="episodio"
          name="episodio"
          className="espacios"
        />
        <input
          onChange={(event) => {
            setPersonajes(event.target.value);
          }}
          placeholder="Ingresar personaje"
          id="personaje"
          name="personaje"
          className="espacios"
        />
        <button className="button" type="submit">CARGAR</button>
      </form>
      {cargaExitosa !== undefined ? (
        <>
          {cargaExitosa ? (
            <>
              <p>Se cargó el personaje</p>
            </>
          ) : (
            <>
              <p>No se pudo cargar el personaje</p>
            </>
          )}
        </>
      ) : null}
    </div>
  );
};

export default Cargar;