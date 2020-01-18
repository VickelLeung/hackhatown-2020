import React, {Component} from "react";
import TextField from '@material-ui/core/TextField';

class LoginCompany extends Component{
    render(){
        return(
            <div>

    <TextField required id="standard-required" label="Username" defaultValue="Hello World" />
    <TextField required id="standard-required" label="Password" defaultValue="Hello World" />

            </div>
        )
    }
}

export {LoginCompany};

