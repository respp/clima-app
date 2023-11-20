import React from "react";
import ReactDOM from "react-dom/client";
import {PrimerComponente} from "./components/PrimerComponente.jsx";
import {Props} from "./components/Props.jsx";
import {ButtonApp} from "./components/ButtonApp.jsx"
import {CounterApp} from "./components/CounterApp.jsx"
import { ListApp } from "./components/ListApp.jsx";

import './styles/styles.css'

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <Props
    titulo='Esta seccion es para props'
    subtitulo = 'subtitle'
    // numero
    /> */}
    {/* <ButtonApp /> */}
    {/* <CounterApp value={500}/> */}
    <ListApp />

  </React.StrictMode>
);
