import { Modal } from "bootstrap";
import React, { useState } from "react";
import '../../index.css';
const ModalClase = ({ clase }) => {
    return (
        <>
            <button type="button" class="btn btn-dark" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                Solicitar clase
            </button>
            <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="staticBackdropLabel">Solicitar clase</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            Se le enviará una solicitud al tutor para agendar esta clase. <br />
                            detalles de la clase: <br />
                            Fecha: {clase.hora} <br />
                            Hora: {clase.hora} <br />
                            Modalida: {clase.modalidad} <br />
                            tarifa: {clase.tarifa}
                        </div>
                        <div class="modal-footer" >
                            <p className="col-12" style={{textAlign: "center"}}>¿Desea continuar con la solicitud?</p>                            
                            <div className="center">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                            <button type="button" class="btn btn-primary">Enviar solicitud</button>                            
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>

    );
};
export default ModalClase;