import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const esquema = z.object({
  nombre: z.string(),
});

export default function FormularioBuscar({cambiarProducto}){
    const { reset, register, handleSubmit, formState: { errors, isSubmitting } } = useForm({
        resolver: zodResolver(esquema),           // 👈 validamos con Zod
        defaultValues: { nombre: "" },
    });

    function onSubmit(data){ 
        cambiarProducto(data.nombre);
        reset();
    }

    return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      <label>Nombre <input {...register("nombre")} /></label>
      {errors.nombre && <p className="error">{errors.nombre.message}</p>}

      <button disabled={isSubmitting}>{isSubmitting ? "Registrando…" : "Buscar producto"}</button>
    </form>
  )
}