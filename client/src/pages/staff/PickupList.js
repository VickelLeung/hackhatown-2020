import React, {Component} from "react";
import {SideContainer} from "../../components/SideContainer";
import styled from 'styled-components';

class PickupList extends Component{
    render(){
        return(<div>
                <Title>Pick up lists</Title>
               <SideContainer />
            </div>
        )
    }
}

export {PickupList};

const Title = styled.div``;
