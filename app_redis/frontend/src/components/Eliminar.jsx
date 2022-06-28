import axios from "axios";
import { useState } from "react";
import "./styles/Eliminar.css";

const Eliminar = () => {
  const [personajes, setPersonajes] = useState();
  const [episodio, setEpisodio] = useState();
  const [cargaExitosa, setCargaExitosa] = useState();
  const fetchPersonajes = () => {
    if (episodio) {
      axios
        .post("http://localhost:3002/delete", null, {
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
    <div className="eliminar-personaje">
      <h3>Elimine un personaje!</h3>
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
        <button className="button" type="submit">ELIMINAR</button>
      </form>
      {cargaExitosa !== undefined ? (
        <>
          {cargaExitosa ? (
            <>
              <p>El personaje fue eliminado</p>
            </>
          ) : (
            <>
              <p>No se pudo eliminar el personaje</p>
            </>
          )}
        </>
      ) : null}
    </div>
  );
};

export default Eliminar;