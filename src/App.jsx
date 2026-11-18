import { useState } from 'react'
import './App.css'
import BoxConsultar from './componentes/BoxConsultar';
import { buscarProductoFunction, borrarProducto, crearProducto } from './componentes/scripts/queries';
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

function App() {
  const [buscarProducto, setBuscarProducto] = useState("");
  const queryClient = useQueryClient(); // Gestor de consultas y caché

  // Consulta GET
  const { data, isPending, isError, error } = useQuery({
    queryKey: ["producto", buscarProducto],     // identificador único en la caché
    queryFn: () => buscarProductoFunction(buscarProducto),   // función que devuelve una promesa
    gcTime: 60 * 1000, // Tras 1 min se borran de la caché los datos
  });

  // Consulta POST 
  const mutationCrear = useMutation({
      mutationFn: (producto) => crearProducto(producto),
      onSuccess: () => {
          queryClient.invalidateQueries({queryKey: ["producto"]});
      }
  });

  // Consulta DELETE
  const mutationBorrar = useMutation({
      mutationFn: (producto) => borrarProducto(producto),
      onSuccess: () => {
        queryClient.invalidateQueries({queryKey: ["producto"]});
      }
  });

  return(
    <>
      <BoxConsultar functRegistrarProducto={mutationCrear} cambiarProductoBuscar={setBuscarProducto} functBorrarProducto={mutationBorrar}></BoxConsultar>
      <div id='box-mostrar-producto'>
        {isPending && <p>Buscando producto...</p>}
        {isError && <p>Error al buscar: {error.message}</p>}
        {data && (
          <div>
            {data.length === 0 ? (<p>No se encontraron productos.</p>) : 
              (<ul>
                {data.map((producto) => (
                  <li key={producto.nombre}>
                    <h3>{producto.nombre}</h3>
                    <p>Categoría: {producto.categoria}</p>
                    <p>Precio: {producto.precio}€</p>
                    <p>Stock: {producto.stock} unidades</p>
                    <p>{producto.descripcion}</p>
                  </li>
                ))}
              </ul>)}
          </div>
        )}
      </div>
    </>
  )
}

export default App
