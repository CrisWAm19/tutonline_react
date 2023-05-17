import React from "react";
import ModalClase from "./ModalClase";

const ClaseItem = ({ clase }) => {
    return (
        <div className="col-md-4 mb-4">
            <div className="card card-body">
                <h3 className="card-title">Clase:</h3>
                <p className="card-text">Tarifa: {clase.tarifa}</p>
                <p className="card-text">Fecha: {clase.fecha}</p>
                <p className="card-text">Hora: {clase.hora}</p>
                <p className="card-text">Modalidad: {clase.modalidad}</p>
                <ModalClase key={clase.id} clase={clase}/>
                
            </div>
        </div>
    );
};
export default ClaseItem;