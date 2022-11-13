import './App.css';
import Boton from './componentes/Boton';
import Contador from './componentes/Contador';
import logito from "./imagen/logo.png"
import{ useState} from "react";

function App() {

const [numClics,setNumClics] = useState(0);

   const manejarClic = () =>{
      setNumClics(numClics + 1) ;
   };

   const reiniciarContador = () =>{
     setNumClics(0);

   };

  return (
    <div className="App">
      <div className='logo-Contenedor'>
      <img  className='logo' src={logito}/>
      </div>

      <div className='contenedor-contador'>
        <Contador numClics={numClics} />
         <Boton
         texto="Clic"
         esBotonCilc={true}
         manejarClic={manejarClic} />
         <Boton
         texto="Reiniciar"
         esBotonCilc={false}
         manejarClic ={reiniciarContador}/>

      </div>

    </div>
    
  );
}

export default App;
