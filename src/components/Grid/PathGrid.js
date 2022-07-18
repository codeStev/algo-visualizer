import * as React from 'react';
import './PathGrid.css'
import {Grid} from "@mui/material";
import Cell from "../Cell/Cell";

function toggleCellActive(){

}

function FormRow(props) {
    return (
        <React.Fragment>
            {Array.from(Array(props.colSum)).map((_,index)=>
                (

                    <Cell index={index}></Cell>

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
            <FormRow colSum={props.width} colIndex={index} key={index + "-gridrow"}></FormRow>


                ))}
            </Grid>
        </div>
    )
}
export default PathGrid;