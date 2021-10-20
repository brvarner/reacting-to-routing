import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import "../stylesheets/HomeButtons.css"


const LocationDetails = () => {

    const { locationid } = useParams();
    const [location, setLocation] = useState(null)
    const [film, setFilm] = useState([])

    useEffect(() => {
        fetch(`https://ghibliapi.herokuapp.com/locations/${locationid}`)
            .then(res => res.json())
            .then(location => setLocation(location))
    }, [])

    useEffect(() => {
        fetch(location?.films[0])
            .then(res => res.json())
            .then(film => setFilm(film))
    }, [location])

    const handleReturn = () => {
        window.history.back()
    }

    return (
        <main className="container d-flex flex-column align-items-center">
            <h1>{location?.name}</h1>
            <div className="text-muted my-2">Climate: {location?.climate}</div>
            <div className="text-muted my-2">Terrain: {location?.terrain}</div>
            <div className="text-muted my-2">Appears in: {film.title}</div>
            <div className="my-2"><span className="fw-bold">Film Description:</span> {film.description}</div>
            <button onClick={handleReturn} className="btn-page mt-3">Back to Locations</button>
        </main>
    )
}

export default LocationDetails