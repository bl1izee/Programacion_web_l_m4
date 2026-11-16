import FormularioRegistrar from "./FormularioRegistrar"
import FormularioBuscar from "./FormularioBuscar"
import FormularioBorrar from "./FormularioBorrar"

export default function BoxConsultar({cambiarProductoRegistrar, cambiarProductoBuscar, functBorrarProducto}){
    return(
        <div id="box-consultar">
            <FormularioRegistrar cambiarProducto={cambiarProductoRegistrar}></FormularioRegistrar>
            <FormularioBuscar cambiarProducto={cambiarProductoBuscar}></FormularioBuscar>
            <FormularioBorrar functBorrarProducto={functBorrarProducto}></FormularioBorrar>
        </div>
    )
}