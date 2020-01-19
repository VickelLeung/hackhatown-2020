import React from "react"
import styled from "styled-components"

const LeftSideLine = (props)=>{
 
    
    return(
        <LeftWrapper>
            <li>
                <ul>
                    {props.address.map((x) => {
return <p>{x.name}</p>
})}
                </ul>
                
            </li>
        </LeftWrapper>
    )

    
}

export {LeftSideLine};

const LeftWrapper = styled.div`
background-color: #f1f1f1;
`;