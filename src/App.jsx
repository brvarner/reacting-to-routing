import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Films from "./pages/Films";
import People from "./pages/People";
import Error from "./pages/Error";
import PeopleDetails from "./pages/PeopleDetails";
import FilmDetails from "./pages/FilmDetails";
import Locations from "./pages/Locations";
import LocationDetails from "./pages/LocationDetails";
import "./stylesheets/PageButtons.css"
import "./stylesheets/HomeButtons.css"

const App = () => {

    return(
        <BrowserRouter>
            <div className="container">
            <Navbar />
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route exact path="/films">
                    <Films />
                </Route>
                <Route exact path="/films/:filmid">
                    <FilmDetails />
                </Route>
                <Route exact path="/people">
                    <People />
                </Route>
                <Route exact path="/people/:personid">
                    <PeopleDetails />
                </Route>
                <Route exact path="/locations">
                    <Locations />
                </Route>
                <Route exact path="/locations/:locationid">
                    <LocationDetails />
                </Route>
                <Route path="*">
                    <Error />
                </Route>
            </Switch>
            </div>
        </BrowserRouter>
    )
}

export default App