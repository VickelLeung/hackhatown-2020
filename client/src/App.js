import React from 'react';
import styled from "styled-components";
import {LoginCompany} from "../src/pages/company/LoginCompany";

function App() {
  return (
    <div className="App">
     <div>
       <p>Homepage</p>

       <Wrapper>
         <Title>Hello there</Title>
       </Wrapper>
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
