import axios from "axios";
import { useState } from "react";
import "./styles/Listar.css";

const Listar = () => {
  const [personajes, setPersonajes] = useState();
  const [episodio, setEpisodio] = useState();
  const fetchPersonajes = () => {
    if (episodio) {
      axios
        .get("http://localhost:3002/list", {
          params: { episodio },
        })
        .then((response) => {
          const { data } = response;
          setPersonajes(data);
        })
        .catch((error) => {});
    }
  };

  return (
    <div className="listar-personaje">
      <h3>Busque un personaje por su episodio!</h3>
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
        <button className="button" type="submit">BUSCAR</button>
      </form>
      {personajes ? (
        <>
          {personajes.length ? (
            <>
              {personajes.map((personaje) => (
                <>
                  <p style={{ fontWeight: "bold" }}>{personaje}</p>
                  <br />
                </>
              ))}
            </>
          ) : (
            <>
              <p>No se encontro ningún personaje con ese episodio</p>
            </>
          )}
        </>
      ) : null}
    </div>
  );
};

export default Listar; 