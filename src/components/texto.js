import { useState } from "react";

export function Texto(){
    var Valor = ["Apagado","Encendido al 25%","Encendido al 50%","Encendido al 75%","Encendido al 100%"];
    //const texto = "Encendido";
    var [texto, setTexto] = useState("Apagado");
    const [cont,setCont]= useState(0);

    function Incrementar(){
        if(cont <= 4){
        setCont(cont+1);
        switch (cont){
         case 0 : setTexto(Valor[0]); 
         break;
         case 1 : setTexto(Valor[1]); 
         break;
         case 2 : setTexto(Valor[2]); 
         break;
         case 3 : setTexto(Valor[3]); 
         break;
         case 4 : setTexto(Valor[4]); 
         break;
        }
      }
    }

    function Decrementar(){
        if(cont >= -1){
        setCont(cont-1);
        switch (cont){
         case 0 : setTexto(Valor[0]); 
         break;
         case 1 : setTexto(Valor[1]); 
         break;
         case 2 : setTexto(Valor[2]); 
         break;
         case 3 : setTexto(Valor[3]); 
         break;
         case 4 : setTexto(Valor[4]); 
         break;
        }
      }
      else{
        setCont(0);
      }
    }
    function Resetear(){
        setCont(0);
        setTexto("Apagado");
    }
    function switch2(){
        if(texto === "Apagado"){
            setTexto("Encendido");
            setCont(4)
        }
        else{
            setTexto("Apagado");
            setCont(0);
        }   
    }     

    return(
        <>
            <div>{texto}</div>
            <button onClick={switch2}>Apagar/Encender</button>
            <button onClick={Incrementar}>Incrementar</button>
            <button onClick={Decrementar}>Decrementar</button>
            <button onClick={Resetear}>Resetear</button>
        </>
    )
}