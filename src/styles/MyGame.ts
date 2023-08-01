import styled from "styled-components";

export const HtmlWrapper = styled.div`
    width:100%;
    height:100vh;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    align-self:center;
`
export const Text = styled.div`
    width:auto;
    font-size: 40px;
    margin-bottom: 25px;
    text-align: center;
    font-family: cursive;
`
export const GameDiv = styled.div`
    width:40%;
    height:50%;
    display:grid;
    background: linear-gradient(#B0C4DE, #DDA0DD);
    border-radius: 20px;
    grid-template-columns: repeat(4, 1fr);
    grid-auto-rows: 1fr;
    gap: 30px;
    padding: 30px;
`
export const GameItem = styled.div`
    display:flex;
    width:100%;
    height:100%;
    background-color: #9370DB;
    border-radius: 20px;
    cursor: pointer;
    font-size: 50px;
    align-items:center; 
    justify-content:center;
`
export const Restart = styled.div`
    width:200px;
    background: linear-gradient(#B0C4DE, #DDA0DD);
    border-radius: 20px;
    cursor: pointer;
    font-size: 25px;
    text-align: center;
    font-family: cursive;
    margin-bottom: 25px;
`