import { useState } from 'react'
import './App.css'
import BoxConsultar from './componentes/BoxConsultar';
import { borrarProducto } from './componentes/scripts/queries';

function App() {
  const [registrarProducto, setRegistrarProducto] = useState(""); // Estado del producto que se registra
  const [buscarProducto, setBuscarProducto] = useState(""); // Estado del producto que se guarda

  return(
    <>
      <BoxConsultar cambiarProductoRegistrar={setRegistrarProducto} cambiarProductoBuscar={setBuscarProducto} functBorrarProducto={borrarProducto}></BoxConsultar>
      <div id='box-mostrar-producto'>
      </div>
    </>
  )
}

export default App
