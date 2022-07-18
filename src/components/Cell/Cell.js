import * as React from "react";
import {Grid,Button} from "@mui/material";
import './Cell.css'
import {useEffect, useState} from "react";

function Cell(props) {

    const [isActive, setIsActive] = useState(false);
    const INACTIVE_CLASS = "Cell-inactive";
    const [activeClass, setActiveClass] = useState(INACTIVE_CLASS);
    const ACTIVE_CLASS = "Cell-active";

    function toggleState() {
        console.log(isActive)
        setIsActive(current => !current)
    }

    useEffect(() => setClassname())
    function setClassname() {
        isActive ? setActiveClass(ACTIVE_CLASS) : setActiveClass(INACTIVE_CLASS)
    }

    return (
        <Grid item xs={1} sm={1} md={1} key={props.index + ':' + props.colIndex + "-griditem"}>
            <div onClick={toggleState}  className={activeClass} key={props.index + ':' + props.colIndex + "-gridcontent"}>
            </div>
        </Grid>
    )
}

export default Cell