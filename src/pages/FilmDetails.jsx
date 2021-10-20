import React, { useState, useEffect } from "react";
import { useParams } from "react-router";

const FilmDetails = () => {

    const { filmid } = useParams();
    const [film, setFilm] = useState(null)

    useEffect(() => {
        fetch(`https://ghibliapi.herokuapp.com/films/${filmid}`)
            .then(res => res.json())
            .then(film => setFilm(film))
    }, [])

    const handleReturn = () => {
        window.history.back()
    }

    return (
        <main className="container d-flex flex-column align-items-center">
            <h1>{film?.title}</h1>
            <h5>Original Title: {film?.original_title}</h5>
            <div className="text-muted">Released in: {film?.release_date}</div>
            <div className="text-muted">Runtime: {film?.running_time} minutes</div>
            <div className="">{film?.description}</div>
            <div className="text-muted mt-2">Rotten Tomatoes Score: {film?.rt_score}</div>
            <button onClick={handleReturn} className="btn-page mt-3">Back to Films</button>
        </main>
    )
}

export default FilmDetails