import React from "react";
import Eliminar from '../components/Eliminar';
import Listar from '../components/Listar';
import Cargar from '../components/Cargar';

export const Home =() => {
    return (
    <div className="App">
      <Listar/>
      <Cargar/>
      <Eliminar/>
    </div>
  );
}

export default Home;