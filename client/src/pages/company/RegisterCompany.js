import React, {Component} from "react";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class RegisterCompany extends Component{
    render(){
        return(
            <div>
            <TextField required id="standard-required" label="Company name" defaultValue="" />
            <TextField required id="standard-required" label="Address" defaultValue="" />
            <Button variant="contained">Submit</Button>
            
            </div>
        )
    }
}

export {RegisterCompany};

