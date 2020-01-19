import React, {Component} from "react";
import styled from "styled-components";

class TruckLocation extends Component{
    render(){
        return(<Wrapper>
            <Title>Locations of our trucks</Title>
            {/* Map of locations of trucks */}
            
            <MainContainer>
           <iframe src="http://maps.google.com/maps?q=22.364204,114.1379784&z=15&output=embed"  allowfullscreen></iframe>
                {/* Google maps with markers */}
                <HoursContainer>
                    <Subtitle>Here is our working hours</Subtitle>
                    <Time>Monday: 11pm-2am</Time>
                    <Time>Wednesday: 11pm-2am</Time>
                    <Time>Friday: 11pm-2am</Time>
                </HoursContainer>
            </MainContainer>
            {/* Working hours div container > p (hours inside) */}
            </Wrapper>
        )
    }
}

export {TruckLocation};
const Wrapper = styled.div``;
const Title = styled.h2``;

const HoursContainer = styled.div`
display:flex;
flex-direction:column;
margin: 0 5%;
`;

const Subtitle = styled.h4``;

const Time = styled.h5``;

const MainContainer = styled.div`
display:flex;
flex-direction:row;
justify-content:center;
align-items:center;
`;