import React, { useState, useEffect } from "react";
import { useParams } from "react-router";


const PeopleDetails = () => {

    const { personid } = useParams();
    const [person, setPerson] = useState(null)
    const [film, setFilm] = useState([])

    useEffect(() => {
        fetch(`https://ghibliapi.herokuapp.com/people/${personid}`)
            .then(res => res.json())
            .then(person => setPerson(person))
    }, [])

    useEffect(() => {
        fetch(person?.films[0])
            .then(res => res.json())
            .then(film => setFilm(film))
    }, [person])

    const handleReturn = () => {
        window.history.back()
    }

    return (
        <main className="container d-flex flex-column align-items-center">
            <h1>{person?.name}</h1>
            <div className="text-muted my-2">Age: {person?.age}</div>
            <div className="text-muted my-2">Appears in: {film.title}</div>
            <div className="my-2"><span className="fw-bold">Film Description:</span> {film.description}</div>
            <button onClick={handleReturn} className="btn-page mt-3">Back to People</button>
        </main>
    )
}

export default PeopleDetails