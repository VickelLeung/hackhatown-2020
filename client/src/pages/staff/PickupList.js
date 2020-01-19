import React, {Component} from "react";
import {ListCards} from '../../components/ListCards'
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import axios from 'axios';

class PickupList extends Component{
state={
    iteration:0,
    list:[],
    companyName:"",
    address:"",
    foodType:"",
    currentId:""
}

componentDidMount=()=>{
    this.fletchDb();
    //set initial cards
    // this.setState({
    //     companyName: this.state.list[0].companyName,
    //     address: this.state.list[0].address,
    //     foodType: this.state.list[0].foodType
    // })
}

fletchDb = ()=>{
    axios.get('http://localhost:3001/company/')
    .then((result)=>{
      console.log(result.data)
      this.setState({list: result.data,})
      if(this.state.list[0].isPickup != false)
        this.setState({ 
            currentId: result.data[0]._id,
            companyName: result.data[0].companyName,
            address: result.data[0].address,
            foodType: result.data[0].foodType
        })
    });
}

displayCards = (name)=>{
    console.log("test" + name);
    // console.log("test: "+ this.state.list[1].companyName);
    for(let i = 0; i<this.state.list.length; i++){
        if(this.state.list[i].companyName == name){
            console.log("true: " + name);
            if(this.state.list[i].isPickup != false)
                this.setState({
                    currentId: this.state.list[i]._id,
                    companyName: this.state.list[i].companyName,
                    address: this.state.list[i].address,
                    foodType: this.state.list[i].foodType
                })
        }
    }
}

deleteFood =()=>{
    let email = localStorage.getItem("email");
    axios.put('http://localhost:3001/company/updatepickup/' + this.state.currentId , {isPickup: false})
    .then((result)=>{
        console.log(result.data);
            axios.get('http://localhost:3001/company/email/' + email)
            .then((result)=> {this.setState({user: result.data})})
        
    });
    this.setState({isPickup:false})
}

handler=()=> {
    console.log("value")
 }

    render(){
        return(<Wrapper>
                <Title>Pick up location</Title>
                <MainContainer>
                <div>
                  {this.state.list.map((item)=>{
                      if(item.isPickup!= false)
                        return <ListItem onClick={()=>this.displayCards(item.companyName)} button>
                        <ListItemText primary={item.companyName}  />
                        </ListItem>
                        })}
                </div>

                <div>
                    <ListCards companyName={this.state.companyName} address={this.state.address}
                        foodType={this.state.foodType}
                    />
                    <Button onClick={this.deleteFood}>Picked up food</Button>
                </div>
                    {this.state.currentId}
               </MainContainer>
            </Wrapper>
        )
    }
}

export {PickupList};

const Title = styled.h2``;

const Wrapper = styled.div`
text-align:center;
`;

const MainContainer = styled.div`
display:flex;
flex-direction: row;
`;