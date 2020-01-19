import React, {Component} from "react";
import {Link} from "react-router-dom";
import { TextField } from "@material-ui/core";
import styled from "styled-components";
import Button from '@material-ui/core/Button';

import axios from "axios";

class Login extends Component {
    state={
        isEmployee: true,
        employeeEmail:"",
        employeePass:"",
        companyEmail:"",
        companyPass:""
    }

loginEmployee =()=>{

}

loginCompany =()=>{
    let user ={email: this.state.companyEmail, password: this.state.companyPass}
    axios.post('http://localhost:3001/company/login',user)
    .then(response => { 
        console.log(response.data);  
        
        localStorage.setItem("email", response.data.email);
        //set link
        // this.setState({linkID: response.data});
        this.props.history.push("/viewlistings");
    })
    .catch(err => console.log(err));
}

    render(){
let displayEmployee = <FormWrapper>
    <Title>Login as Employee</Title>
        <Input onChange={(e)=>{this.setState({employeeEmail: e.target.value})}} label="Username" />
        <br />
        <Input onChange={(e)=>{this.setState({employeePass: e.target.value})}} label="Password" />
        <Button onClick={this.loginEmployee}>Submit</Button>
        </FormWrapper>

let displayCompany = <FormWrapper>
    <Title>Login as Company</Title>
        <Input onChange={(e)=>{this.setState({companyEmail: e.target.value})}} label="Username" />
        <br />
        <Input onChange={(e)=>{this.setState({companyPass: e.target.value})}} label="Password" />
        <Button onClick={this.loginCompany}>Submit</Button>
        <br />
        <Link style={{textDecoration:"none"}} to="registercompany">Don't have an account? Register now</Link>
        </FormWrapper>

    return(
        <Wrapper>
           <button onClick={()=> this.setState({isEmployee: !this.state.isEmployee})}>
              Switch login to {this.state.isEmployee ? "Employee" : "Company"} </button>

           {this.state.isEmployee?  displayCompany : displayEmployee }

        </Wrapper>
    )
    }
}

export {Login}

const Wrapper = styled.div`
text-align:center;
margin-top:20%;
`;

const FormWrapper = styled.div`
display:flex;
flex-direction:column;
justify-content: center;
align-items: center;
`;

const Input = styled(TextField)`
width: 30%;
`;

const Title = styled.h2``;