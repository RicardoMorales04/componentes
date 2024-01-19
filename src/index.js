import React from "react";
import ReactDOM from "react-dom/client";
import { Contador } from "./components/Contador";
import { Texto } from "./components/texto";
import { Puerta } from "./components/puerta";

const root=ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <>
        <Contador/>
        <Texto/>
        <Puerta/>
    </>
)