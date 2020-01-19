import React from 'react';
import styled from "styled-components";
import {PickupList} from "../src/pages/staff/PickupList";

function App() {
  return (
    <div className="App">
     <div>
       {/* <p>Homepage</p> */}

       {/* <Wrapper>
         <Title>Hello there</Title>
       </Wrapper> */}
       <PickupList/>
     </div>
    </div>
  );
}

export default App;

const Wrapper = styled.div`
  border: 2px solid black;
`;

const Title = styled.h1`
  color:red;
`;
