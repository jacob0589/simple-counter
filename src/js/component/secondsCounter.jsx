import React from "react";

const SecondsCounter = (props) => {
    
    return (<>
        Soy el componente SecondsCounter
        <div className="container d-block bg-dark p-3">
            <div className="row d-flex justify-content-between">
            <h1 className="col-1 display-2 bg-dark  text-white border border-light border-opacity-10 rounded text-center"><i class="fa-regular fa-clock"></i></h1>
            <div className="col-1 display-2 bg-dark  text-white border border-light border-opacity-10 rounded text-center">{props.sixthCounter}</div>
            <div className="col-1 display-2 bg-dark  text-white border border-light border-opacity-10 rounded text-center">{props.fifthCounter}</div>
            <div className="col-1 display-2 bg-dark text-white border border-light border-opacity-10 rounded text-center">{props.forthCounter}</div>
            <div className="col-1 display-2 bg-dark  text-white border border-light border-opacity-10 rounded text-center">{props.centenaSeconds}</div>
                <div className="col-1 display-2 bg-dark  text-white border border-light border-opacity-10 rounded text-center">{props.decenaSeconds}</div>
                <div className="col-1 display-2 bg-dark  text-white border border-light border-opacity-10 rounded text-center"> {props.seconds}</div>
            </div>

        </div>
    </>)
}

export default SecondsCounter;