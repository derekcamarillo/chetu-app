import React from "react";
import styled from "styled-components";
import { NavBar } from "../components/NavBar";
import { Controller } from "../components/Controller";
import { AlgoDisplay } from "../components/AlgoDisplay";

const Container = styled.div`
  margin: 20px 10px;
  min-height: calc(100vh - 50px);
  position: relative;
  overflow: hidden;
  margin-bottom: 50px;
`;

const Home = () => {
    return (
        <>
        <Container>
        <div className='home'>
            <NavBar />
            <br /> 
            <Controller />
        </div>
        
            <AlgoDisplay /> 
        </Container> 
        </>
    )
}

export default Home