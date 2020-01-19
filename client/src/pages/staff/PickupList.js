import React, {Component} from "react";
import styled from "styled-components";
import {LeftSideLine} from "../../components/LeftSideLine"
import {MiddleLine} from "../../components/MiddleLine"

class PickupList extends Component{
    state ={
         iteration:0
    }

    render(){


        const increment = () =>{
            console.log(this.state.iteration)
            if(this.state.iteration < Name.length-1)
            this.setState({iteration:++this.state.iteration})
          
        }
        const Name = [
            {
              name : "Bulgogi house",
              address: "1234 rue somewhere",
              IspickUp: false
            },
            {
                name : "Seoul chako",
                address: "1234 rue Nowhere",
                IspickUp: false
            },
            {
                name : "Sara Penthouse",
                address: "1234 rue Mypants",
                IspickUp: false
            },
            {
                name : "Fisshu",
                address: "1234 rue Fish",
                IspickUp: false
            },
          ];
        return(
            <Wrapper>
                <LeftSideLine address = {Name} ayo = {this.state.i}/>
                <MiddleContainer>
                
                
                <MiddleLine details = {Name} number = {this.state.iteration}/>
                
                <button onClick={increment}>Picked Up</button>
                </MiddleContainer>
            </Wrapper>
        )
    }
}

export {PickupList};

const Wrapper = styled.div`
  border: 2px solid black;
  display:flex;
  flex-direction:row;
  justify-content: space-around;
`;

const MiddleContainer = styled.div`
  display:flex;
  flex-direction:column;
`;
