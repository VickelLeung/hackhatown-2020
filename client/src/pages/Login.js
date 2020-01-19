import React, {Component} from "react";
import {Link} from "react-router-dom";
import { TextField } from "@material-ui/core";
import styled from "styled-components";
import Button from '@material-ui/core/Button';

class Login extends Component {
    state={
        isEmployee: false
    }



    render(){
let displayEmployee = <FormWrapper>
    <Title>Login as Employee</Title>
        <Input >Username</Input>
        <Input >Password</Input>
        <Button>Submit</Button>
        </FormWrapper>

let displayCompany = <FormWrapper>
    <Title>Login as Company</Title>
        <Input >Username</Input>
        <Input >Password</Input>
        <Button>Submit</Button>
        </FormWrapper>

    return(
        <Wrapper>
           <button onClick={()=> this.setState({isEmployee: !this.state.isEmployee})}>
              Switch login to {this.state.isEmployee ? "Employee" : "Company"} </button>

           {this.state.isEmployee? displayEmployee : displayCompany}

        </Wrapper>
    )
    }
}

export {Login};

const Wrapper = styled.div``;

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