import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

// Esquema del formulario con zod
const esquema = z.object({
  nombre: z.string().min(4, "El nombre es demasiado corto"),
  categoria: z.string().min(1, "Ingresa una categoría"),
  precio: z.coerce.number(),
  stock: z.coerce.number().int().min(0, "Stock no válido"),
  descripcion: z.string(),
});

export default function FormularioRegistrar({functRegistrarProducto}){
    const { reset, register, handleSubmit, formState: { errors, isSubmitting } } = useForm({
        resolver: zodResolver(esquema), // validamos con Zod
        defaultValues: { nombre: "", categoria: "" , precio: "", stock: "", descripcion: "" },
    });

    function onSubmit(producto){ 
        functRegistrarProducto.mutate(producto);
        reset();
    }

    return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      <label>Nombre <input {...register("nombre")} /></label>
      {errors.nombre && <p className="error">{errors.nombre.message}</p>}

      <label>Categoria <input {...register("categoria")} /></label>
      {errors.categoria && <p className="error">{errors.categoria.message}</p>}
      
      <label>Precio <input {...register("precio")} /></label>
      {errors.precio && <p className="error">{errors.precio.message}</p>}
      
      <label>Stock <input {...register("stock")} /></label>
      {errors.stock && <p className="error">{errors.stock.message}</p>}
      
      <label>Descripción <input {...register("descripcion")} /></label>
      {errors.descripcion && <p className="error">{errors.descripcion.message}</p>}

      <button disabled={isSubmitting}>Crear producto</button>
    </form>
  )
}