import FormularioRegistrar from "./FormularioRegistrar"
import FormularioBuscar from "./FormularioBuscar"
import FormularioBorrar from "./FormularioBorrar"

export default function BoxConsultar({functRegistrarProducto, cambiarProductoBuscar, functBorrarProducto}){
    return(
        <div id="box-consultar">
            <FormularioRegistrar functRegistrarProducto={functRegistrarProducto}></FormularioRegistrar>
            <FormularioBuscar cambiarProducto={cambiarProductoBuscar}></FormularioBuscar>
            <FormularioBorrar functBorrarProducto={functBorrarProducto}></FormularioBorrar>
        </div>
    )
}