import * as React from 'react';
import './PathGrid.css'
import {Grid} from "@mui/material";

function FormRow(props) {
    return (
        <React.Fragment>
            {Array.from(Array(props.colSum)).map((_,index)=>
                (
                    <Grid item xs={1} sm={1} md={1} key={index + ':' + props.colIndex}>
                        <div className="PathGrid-cell"></div>
                    </Grid>
                ))}
        </React.Fragment>
    );
}
function PathGrid(props) {
    return (
        <div>
            <Grid className="PathGrid" container spacing={{ xs: 0, md: 0 }} columns={props.width}>
            {Array.from(Array(props.height)).map((_,index)=>
                (
            <FormRow colSum={props.width} colIndex={index}></FormRow>
                ))}
            </Grid>
        </div>
    )
}
export default PathGrid;