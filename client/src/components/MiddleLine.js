import React from "react"
import styled from "styled-components"


const MiddleLine = (props)=>{
    

    
    return(
        <MiddleWrapper>
            <div>
                <p>{props.details[props.number].name}</p>
                 <p>{props.details[props.number].address}</p>
            </div>
            
        </MiddleWrapper>
    )

    
}

export {MiddleLine};

const MiddleWrapper = styled.div`
background-color: #f1f1f1;
`;