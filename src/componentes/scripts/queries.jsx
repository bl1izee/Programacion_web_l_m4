// Función que borra pro el nombre
export async function borrarProducto(producto) {
    try {
      const respuesta = await fetch(`http://localhost:3000/productos?nombre=${encodeURIComponent(nombre)}`, {
        method: "DELETE",
      });

      if (!respuesta.ok) {
        throw new Error("Error al borrar el producto");
      }

      console.log("Producto borrado correctamente:", producto);

    } catch (error) {
      console.error("Error:", error);
    }
  }