import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import styled from "styled-components"

const GeneralCard = (props)=>{
    return(<CardItem  variant="outlined">
      <CardContent>
        <Typography  style={{textDecoration:'underline'}} variant="h4" component="h1">
        {props.title}
        </Typography>
        <Typography variant="h6" component="h3">
            {props.children}
        </Typography>
      </CardContent>
    </CardItem>
    )
}

export {GeneralCard}

const CardItem = styled(Card)`
height:100%;
width:100%;
margin: 0 4%;
`;