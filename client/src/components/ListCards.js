import React from 'react';
import styled from 'styled-components';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const ListCards = (props)=>{
    return(<Wrapper>
    <Card  variant="outlined">
      <CardContent>
        <Typography variant="h5" component="h2">
         {props.companyName}
        </Typography>
        <Typography variant="h5" component="h2">
          {props.address}
        </Typography>
        <Typography variant="h5" component="h2">
          {props.foodType}
        </Typography>
        
      </CardContent>
    </Card>
        </Wrapper>
    )
}

export {ListCards};

const Wrapper = styled.div``;