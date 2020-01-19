import React, {Component} from "react";
import Button from '@material-ui/core/Button';
import styled from "styled-components";

class ViewListings extends Component{
state = {
    ButtonChange: true,
    isPickup: false
}
displayText = this.state.isPickup ? <p>Waiting</p>:<p>test</p>;
    render(){
        
        return(
           <Wrapper>
                {/* <Button variant="contained">Ready to pick up</Button>
                <Button variant="contained">Cancel</Button> */}
                {this.state.ButtonChange ? <MyButton onClick = {() => this.setState({ButtonChange:!this.state.ButtonChange,isPickup:true})} variant="contained">Ready to pick up</MyButton>
                :<MyButton onClick = {() => this.setState({ButtonChange:!this.state.ButtonChange, isPickup:false})} variant="contained">Cancel</MyButton>}
                {this.state.isPickup ? <p>Waiting to be picked up</p>: null}
           </Wrapper>
        )
    }
}

export {ViewListings};

const Wrapper = styled.div`
position: absolute;
	top:0;
	bottom: 0;
	left: 0;
	right: 0;
	margin: auto;
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