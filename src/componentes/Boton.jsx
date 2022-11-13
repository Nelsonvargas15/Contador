import React from "react";
import "../styles/Boton.css"

function Boton({texto, esBotonCilc,manejarClic}){
   return(
    <button className={esBotonCilc ? "boton-clic" : "boton-reniciar"}
    onClick={manejarClic}>
        
     {texto}
    </button>
   );
}


export default Boton