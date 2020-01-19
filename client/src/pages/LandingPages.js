import React, {Component} from "react";
import styled from 'styled-components';
import {GeneralCard} from "../components/GeneralCard";
import {TruckLocation} from "../pages/TruckLocation";
import Button from '@material-ui/core/Button';
import {Link} from "react-router-dom";

class LandingPages extends Component{
    render(){
        return(
            <Wrapper>
                {/* welcome messages */}
                <Title>Welcome to FoodTown</Title>

                <Subtitle>Are you an employee or Company? Click login below</Subtitle>
                <Link to="/login" style={{textDecoration:"none"}}>
                    <Button variant="contained">Login</Button>
                </Link>

                <Description>Have you ever wondered how many tons of foods we wasted per years? We waste so much foods in one year that we can used it to actually feeds at least 20% of a country population. It is for that 
                    reason that this applications is perfect for those who needs foods and also for those who wish to help the environment. If you are a company, restaurants or any form of food service then we will gadly accept your food donations.
                </Description>

                <CardContainer>
                    <GeneralCard title="Save food">This app is perfect for those who are in needs of foods because we will help you by giving out free foods during our working hours.</GeneralCard>
                    <GeneralCard title="Be more green">We strive to make the world a better place and what else is better is then by making food free for those in needs.</GeneralCard>
                    <GeneralCard title="Help others">We are constantly trying to helps others and we do not question any of their background. If they need our help, we will do our best to assist them.</GeneralCard>
                </CardContainer>

                <TruckLocation />
         
            </Wrapper>
        )
    }
}

export {LandingPages};

const Wrapper = styled.div`
text-align:center;
`;

const Title = styled.h1``;

const Description = styled.h3`
margin: 2% 4%;
`;

const CardContainer = styled.div`
display:flex;
flex-direction: row;
align-items:center;
justify-content: center;
`;

const Subtitle = styled.h2`
margin: 2% 0;
`;