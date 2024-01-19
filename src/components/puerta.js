import { useState } from "react"

const Puertas =['puertacerrada.jpeg','puertaabierta.jpeg'];

export function Puerta(){
        var [texto,setTexto] = useState("Puerta cerrada");
        var [estado,setEstado] = useState(0);

        function Accion(){
            if(texto === "Puerta cerrada"){
                setTexto("Puerta abierta");
                setEstado(estado + 1)
            }
            else{
                setTexto("Puerta cerrada");
                setEstado(estado - 1);
            }
        }
    return(
        <>
        <div>{texto}</div>
        <p><img src={process.env.PUBLIC_URL + "/imagenes/" + Puertas[estado]} alt="puerta"/></p>
        <button onClick={Accion}>Accion</button>
        </>
    )
}