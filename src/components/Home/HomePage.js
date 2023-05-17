import React from "react";
import defaultImg from '../../img/default.svg'
const HomePage = () => {
    return (
        <>

            <div className="row align-items-center">
            <div className="col">
            <h1>Bienvenidos a TutOnline</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo aliquid sed commodi rem, pariatur ea quos sunt sapiente praesentium maiores, adipisci consequuntur placeat atque iure possimus labore. Voluptates, soluta quaerat!</p>
            </div>
            <div className="col">               
            <img src= {defaultImg} alt="" />
            <img src= {defaultImg} alt="" />
            <img src= {defaultImg} alt="" />
            </div>        
            </div>
        </>
    )
};

export default HomePage;
