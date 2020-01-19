import React, {Component} from "react";
import Button from '@material-ui/core/Button';
import styled from "styled-components";
import axios from "axios";

class ViewListings extends Component{
state = {
    ButtonChange: true,
    user:[]

}

componentDidMount=()=>{
    let email = localStorage.getItem("email");
    console.log("email: "+email);
    axios.get('http://localhost:3001/company/email/' + email)
    .then((result)=>{
    //   console.log(result.data[0].companyName)
      this.setState({user: result.data, username: result.data[0].companyName, 
        ButtonChange:result.data[0].isPickup })
    });
}

setPickupTrue = ()=>{
    let email = localStorage.getItem("email");
    axios.put('http://localhost:3001/company/updatepickup/' + this.state.user[0]._id , {isPickup: false})
    .then((result)=>{
        console.log(result.data);
            axios.get('http://localhost:3001/company/email/' + email)
            .then((result)=> {this.setState({user: result.data})})
    });
    this.setState({isPickup:true})
}

setPickupFalse = ()=>{
    let email = localStorage.getItem("email");
    axios.put('http://localhost:3001/company/updatepickup/' + this.state.user[0]._id , {isPickup: true})
    .then((result)=>{
        console.log(result.data);
            axios.get('http://localhost:3001/company/email/' + email)
            .then((result)=> {this.setState({user: result.data})})
        
    });
    this.setState({isPickup:false})
}

displayText = this.state.isPickup ? <p>Waiting</p>:<p>test</p>;
    render(){ 
        return(
           <Wrapper>
               <Title>Welcome {this.state.username} </Title>
               <Subtitle>Your status</Subtitle>
                <MainContainer>
                    {this.state.ButtonChange ? <MyButton onClick = {this.setPickupTrue} variant="contained">Ready to pick up</MyButton>
                    :<MyButton onClick = {this.setPickupFalse} variant="contained">Cancel</MyButton>}
                    {this.state.isPickup ? <p>Waiting to be picked up</p>: null}
                </MainContainer>
           </Wrapper>
        )
    }
}

export {ViewListings};

const Wrapper = styled.div`
display: flex;
flex-direction:column;
align-items:center;
justify-content:center;
`;

const MyButton = styled(Button)({
   
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
    textAlign: "center",
  });

  const MainContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center 
  flexDirection: 'column',
  `;

  const Title = styled.h2``;

  const Subtitle = styled.div``;