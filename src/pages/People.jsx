import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const People = () => {

    const [people, setPeople] = useState([])

    useEffect(() => {
        fetch('https://ghibliapi.herokuapp.com/people')
            .then(res => res.json())
            .then(people => setPeople(people))
    }, [])

    return (
        <div>
            <h1 className="text-center">People</h1>
            {people.map((person, i) => (
                <div className="card" key={person.id}>
                    <div className="card-body d-flex justify-content-between align-items-center">
                        <div className="card-title h5">{person.name}</div>
                        <Link to={`/people/${person.id}`} className="btn-page">Learn More</Link>
                    </div>
                </div>
            ))}
        </div>
    )

    }
    export default People

