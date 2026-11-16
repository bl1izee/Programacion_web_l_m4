import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const esquema = z.object({
  nombre: z.string().min(4, "El nombre es demasiado corto"),
});

export default function FormularioBorrar({functBorrarProducto}){
    const { reset, register, handleSubmit, formState: { errors, isSubmitting } } = useForm({
        resolver: zodResolver(esquema),           // 👈 validamos con Zod
        defaultValues: { nombre: "" },
    });

    async function onSubmit(producto){
        try {
          await functBorrarProducto(producto);
        } catch (error) {
          console.error('Ocurrió un error:', error);
        }

        reset();
    }

    return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      <label>Nombre <input {...register("nombre")} /></label>
      {errors.nombre && <p className="error">{errors.nombre.message}</p>}

      <button disabled={isSubmitting}>{isSubmitting ? "Registrando…" : "Borrar producto"}</button>
    </form>
  )
}