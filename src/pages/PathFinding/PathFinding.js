import React, {useState} from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import './PathFinding.css'
import PathGrid from "../../components/Grid/PathGrid";

function PathFinding() {

    const [gridConfig] = useState({
        width: 12,
        height :12
    })

    return (
        <div className="Path-finding-grid-container">
            <PathGrid width={gridConfig.width} height={gridConfig.height}/>
        </div>
    );
}
export default PathFinding