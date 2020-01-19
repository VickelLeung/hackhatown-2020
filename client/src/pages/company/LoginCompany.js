import React, {Component} from "react";
import TextField from '@material-ui/core/TextField';
import styled from "styled-components";
import Button from '@material-ui/core/Button';

class LoginCompany extends Component{
    render(){
        return(
    <Wrapper>

        <LoginWrapper>
            LOGIN
        </LoginWrapper>
        <InfoWrapper>
            <TextField required id="standard-required" label="Username" defaultValue="Hello World" />
            <TextField required id="standard-required" label="Password" defaultValue="Hello World" />
        </InfoWrapper>
        <ButtonWrapper>
            <MyButton>
                Create an account
            </MyButton>
        </ButtonWrapper>
    </Wrapper>     
                 
        )
    }
}

export {LoginCompany};

const Wrapper = styled.div`
position: absolute;
	top:0;
	bottom: 0;
	left: 0;
	right: 0;
	margin: auto;
`;

const ButtonWrapper = styled.div`
text-align: center;
display: flex;
justify-content: center;
`;

const InfoWrapper = styled.div`
text-align: center;
display: flex;
justify-content: center;
`;

const LoginWrapper = styled.div`
text-align: center;
display: flex;
justify-content: center;
`;

const MyButton = styled(Button)({
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
  });