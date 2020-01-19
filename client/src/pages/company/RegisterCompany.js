import React, {Component} from "react";
import TextField from '@material-ui/core/TextField';
import styled from "styled-components";
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

class RegisterCompany extends Component{

    render(){           
        
        return(
            <Wrapper>

            <form autoComplete="off">
                <TextField required id="standard-required" label="Company name" defaultValue="" />

                <TextField required id="standard-required" label="Address" defaultValue="" />

                <TextField required id="standard-required" label="UserName" defaultValue="" />

                <TextField required id="standard-required" label="PassWord" defaultValue="" />
                
                
                <select id="selectbox" data-selected="">
                    <option value="" selected="selected" disabled="disabled">Select a FoodType</option>
                    <option value="1">Chinese</option>
                    <option value="2">Lebanese</option>
                    <option value="3">Italian</option>
                    <option value="4">Korean</option>
                    <option value="5">Japan</option>
                </select>
                
            </form>
            


            <Button variant="contained">Submit</Button>
            
            </Wrapper>
        )
          
    }
}

export {RegisterCompany};

const Wrapper = styled.div`
position: absolute;
	top:0;
	bottom: 0;
	left: 0;
	right: 0;
	margin: auto;
`;
