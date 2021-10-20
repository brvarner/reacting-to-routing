import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const Locations = () => {

    const [locations, setLocations] = useState([])

    useEffect(() => {
        fetch('https://ghibliapi.herokuapp.com/locations')
            .then(res => res.json())
            .then(locations => setLocations(locations))
    }, [])

    return (
        <div>
            <h1 className="text-center">Locations</h1>
            {locations.map((location) => (
                <div className="card" key={location.id}>
                    <div className="card-body d-flex justify-content-between align-items-center">
                    <div className="d-inline-flex p-2 flex-column">
                        <div className="card-title h5">{location.name}</div>
                        <div className="card-subtitle text-muted">{location.release_date}</div>
                    </div>
                    <Link to={`/locations/${location.id}`} className="btn-page">Learn More</Link>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Locations