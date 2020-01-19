import React, {Component} from "react";
import TextField from '@material-ui/core/TextField';
import styled from "styled-components";
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import axios from "axios";

class RegisterCompany extends Component{
state={
    companyName:"",
    address:"",
    email:"",
    password:"",
    foodType:"",
    isModal:false,
}

    submit =()=>{
        const register = {companyName:this.state.companyName, address:this.state.address, foodType: this.state.foodType, email: this.state.email, password: this.state.password, date: new Date().toDateString()}
        console.log("submit...");
        // if(this.state.companyName && this.state.address && this.state.password && this.state.foodType){
            
            console.log("inside submit")
            axios.post("http://localhost:3001/company/register",register )
            .then(response => { 
                console.log(response.data);  
                console.log("id:" + response.data.id)
                //set link
                // this.setState({linkID: response.data});
            })
            .catch(err => console.log(err));
            this.resetContent();
            this.displayModal();
        // }
    }

    displayModal=()=>{
        //display modal
        this.setState({isModal: true});
    }

    resetContent=()=>{
         //reset all state
         this.setState({companyName:"", email:"", address:"", password:""});
    }

    handleChange=(event)=> {
        console.log("event" + event.target.value);
       this.setState({foodType: event.target.value});
     }

    render(){           
        
        return(
            <Wrapper>
            
            <Title>Register your company</Title>
            <FormContainer>

                <InputField onChange={(e)=>{this.setState({companyName: e.target.value})}} required id="standard-required" label="Company name" defaultValue="" />
                
                <br/>
                <InputField onChange={(e)=>{this.setState({address: e.target.value})}} required id="standard-required" label="Address" defaultValue="" />

                <br />
                <InputField onChange={(e)=>{this.setState({email: e.target.value})}} required id="standard-required" label="Email" defaultValue="" />

                <br/>
                <InputField  onChange={(e)=>{this.setState({password: e.target.value})}} required type="password" id="standard-required" label="Password" defaultValue="" />
                
                <br />
                <label>Food type</label>
                <Select
                labelId="demo-customized-select-label"
                id="demo-customized-select"
                //   value="okok"
                onChange={this.handleChange}
                >

                    <MenuItem value={"chinese"}>Chinese</MenuItem>
                    <MenuItem value={"korean"}>Korean</MenuItem>
                    <MenuItem value={"indian"}>Indian</MenuItem>
                    <MenuItem value={"italian"}>American</MenuItem>
                    <MenuItem value={"italian"}>Italian</MenuItem>
                    <MenuItem value={"greek"}>Greek</MenuItem>
                </Select>
                
                <br />
                <Button onClick={this.submit} variant="contained">Submit</Button>
            </FormContainer>

                <Dialog
                open={this.state.isModal}
                onClose={this.state.isModal}
                >
                    <DialogTitle id="alert-dialog-title">{"Sucess!"}</DialogTitle>
                    <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Your post have been successfully posted!
                    </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        {/* Add link to post? */}
                    <Button onClick={()=>{this.setState({isModal:false})}} color="primary" autoFocus>
                        Done
                    </Button>
                    </DialogActions>
                </Dialog>
                {this.state.email}
                {this.state.password}
                {this.state.companyName}
                {this.state.address}
                {this.state.foodType}
            </Wrapper>
        )
          
    }
}

export {RegisterCompany};

const Wrapper = styled.div`

`;

const FormContainer = styled.div`
display:flex;
flex-direction:column;
margin: 6% 10%;
`;

const InputField = styled(TextField)`
`

const Title = styled.h1`
text-align:center;
`;