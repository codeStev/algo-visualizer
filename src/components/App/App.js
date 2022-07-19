import './App.css';
import React, {useState} from "react";
import {Link, BrowserRouter as Router, Route, Routes} from "react-router-dom";
import PathFinding from "../../pages/PathFinding/PathFinding";
import Navbar from "../Navbar/Navbar";
import {Container} from "@mui/material";
import Main from "../../pages/Main/Main";



function App() {
    const [routes] =useState(
        [
        {path: "/",
            exact: true,
            element: <Main/>},
        {path: "/pathfinding",
            exact: true,
            element: <PathFinding/>}
    ])

  return (
      <Container>
          <Routes>
          {routes.map(route => (
              <Route exact={route.exact||false} path={route.path} element={route.element} />
          ))}
          </Routes>
          <Navbar />
      </Container>
  );
}

export default App;
