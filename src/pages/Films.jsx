import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const Films = () => {

    const [films, setFilms] = useState([])

    useEffect(() => {
        fetch('https://ghibliapi.herokuapp.com/films')
            .then(res => res.json())
            .then(films => setFilms(films))
    }, [])

    return (
        <div>
            <h1 className="text-center">Films</h1>
            {films.map((film) => (
                <div className="card" key={film.id}>
                    <div className="card-body d-flex justify-content-between align-items-center">
                    <div className="d-inline-flex p-2 flex-column">
                        <div className="card-title h5">{film.title}</div>
                        <div className="card-subtitle text-muted">{film.release_date}</div>
                    </div>
                    <Link to={`/films/${film.id}`} className="btn-page">Learn More</Link>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Films