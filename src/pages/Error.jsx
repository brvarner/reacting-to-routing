import React from "react";
import { useHistory } from "react-router";

const Error = () => {

    const history = useHistory()
    
    const handleReturn = () => {
        history.push('/')
    }

    return(
        <div className="container d-flex flex-column align-items-center">
        <h1 className="">Whoops!</h1>
        <img className="img-fluid" src="https://media.giphy.com/media/qfF4Q1q6g4QRW/giphy.gif" alt="" />
        <p className="mt-2">You might be lost! Wanna go home?</p>
        <button onClick={handleReturn} className="btn-page mt-3">Go Home</button>
        </div>
    )
};

export default Error