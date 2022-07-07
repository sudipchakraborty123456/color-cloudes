
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Component } from "react";

import Home from "./Componts/Home/Home";
import About_Us from "./Componts/About_us/About_Us";
import Header from "./Componts/header/Header";
import Fotter from "./Componts/Fotter/fotter";
class Router extends Component {

    render() {

        return <BrowserRouter>
            <Header />
            <Routes>

                <Route exact path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/aboutUs" element={<About_Us />} />
            </Routes>
            <Fotter/>
        </BrowserRouter>
    }
}
export default Router;