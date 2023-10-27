import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './screens/Home'; //import Home.js like this

const App=()=>{
    return(
        <Router>
            <Routes>
            <Route path="/" Component={Home}/>
            </Routes>
        </Router>
    )
}

export default App;

