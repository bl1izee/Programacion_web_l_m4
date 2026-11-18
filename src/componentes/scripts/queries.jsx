// Función que crea un producto
export async function crearProducto(producto) {
    const respuesta = await fetch("http://localhost:3000/productos", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(producto)
    });

    if (!respuesta.ok) {
        throw new Error("Error al crear el producto");
    }

    return await respuesta.json();
}

// Función que borra un producto por nombre
export async function borrarProducto(nombre) {

    // Buscamos el producto por su nombre
    const productos = await buscarProductoFunction(nombre);

    // Comprobamos si existe
    if (productos.length === 0) {
        throw new Error("No se encontró el producto");
    }

    // Eliminamos el producto utilizando su ID
    const respuesta = await fetch(
        `http://localhost:3000/productos/${productos[0].id}`,
        {
            method: "DELETE"
        }
    );

    if (!respuesta.ok) {
        throw new Error("Error al borrar el producto");
    }

    return true;
}

// Función que busca un producto por su nombre
export async function buscarProductoFunction(nombre) {
  let respuesta;

  if(nombre === ""){
    respuesta = await fetch(
      `http://localhost:3000/productos`
    );
  }
  else{
    {
    respuesta = await fetch(
      `http://localhost:3000/productos?nombre=${encodeURIComponent(nombre)}`
    );
  }
  }

  if (!respuesta.ok) {
    throw new Error("Error al buscar el producto");
  }

  const datos = await respuesta.json();

  return datos;
}