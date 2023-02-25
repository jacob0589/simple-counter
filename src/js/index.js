//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";
import SecondsCounter from "./component/secondsCounter.jsx"
//render your react application

let tiempoSegundos = 0
let decenaSeconds=0
let centenaSeconds =0 
let forthCounter=0
let fifthCounter=0
let sixthCounter=0
setInterval(() => {
    tiempoSegundos = tiempoSegundos + 1
    switch(true){
        case tiempoSegundos>9:
            tiempoSegundos=0
            decenaSeconds++
            break;
        case decenaSeconds>8:
            decenaSeconds=0
            centenaSeconds++
            break;
            case centenaSeconds>8:
            centenaSeconds=0
            forthCounter++
            break;
            case forthCounter>8:
            forthCounter=0
            fifthCounter++
            break;
            case fifthCounter>8:
            fifthCounter=0
            sixthCounter++
            break;
        default:
            break

}





ReactDOM.render(<SecondsCounter sixthCounter={sixthCounter} fifthCounter={fifthCounter} forthCounter={forthCounter} centenaSeconds={centenaSeconds} decenaSeconds={decenaSeconds} seconds={tiempoSegundos} />, document.querySelector("#app"));
}, 100)