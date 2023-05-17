import React, { useEffect, useState } from "react";

// Components:
import ClaseItem from './ClaseItem';
import * as ClaseServer from './ClassServer';

const ClasesList = () => {
  const [clases, setClases] = useState([]);

  const listClases = async () => {
    try {
      const res = await ClaseServer.listClases();
      //convertimos la respuesta "res" a json
      const data = await res.json();
      setClases(data.clases);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    listClases();
  }, []);

  return (
    <div className="row">
      {clases.map((clase) => (
        <ClaseItem key={clase.id} clase={clase} />
      ))}
    </div>
  );
};


export default ClasesList;
