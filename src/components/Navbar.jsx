import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {

    return (
            <nav className="d-flex navbar navbar-expand-sm navbar-light" style={{backgroundColor: "#1b9dcf"}}>
                <NavLink exact to={'./'} className="navbar-brand mb-0 ms-2 pull-left text-light">Ghibli Site</NavLink>
                <div className="navbar-nav ms-auto pe-2 justify-content-end">
                    <NavLink exact to="/" className="nav-link" activeClassName="text-light">Go Home</NavLink>
                    <NavLink exact to="/films" className="nav-link" activeClassName="text-light">Films</NavLink>
                    <NavLink exact to="/people" className="nav-link" activeClassName="text-light">People</NavLink>
                    <NavLink exact to="/locations" className="nav-link" activeClassName="text-light">Locations</NavLink>
                </div>
            </nav>
    )
}

export default Navbar

