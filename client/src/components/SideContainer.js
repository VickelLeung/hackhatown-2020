import React from 'react';
import styled from 'styled-components';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const SideContainer = (props) =>{
    return(
        <Wrapper>
                  {props.companyName.map((item)=>{
                return <ListItem button>
                    <ListItemText primary={item.companyName}  />
              </ListItem>
            })} 
         
        </Wrapper>
    )
}

export {SideContainer};

const Wrapper = styled.div`
display:flex;
flex-direction:column;
align-items:center;
justify-content: center;

border:0.5px solid black;
box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
`;