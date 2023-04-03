import styled, { css } from "styled-components";

export let CenterDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 100%;
`

export let CenterDivRow = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    overflow-x: auto;
    max-width: 700px;
    margin: 25px 25px;

    @media screen and (max-width: 800px){
        max-width: 400px;
    }
`

export let StyledButton = styled.button`
    margin-top: 3em;
    text-align: center;
    font-size: 16px;
    border-radius: 2px;
    padding: 10px 25px;
    border: none;
    &:hover {
        cursor: pointer;
    }
`

export const Dot = styled.div`
    height: 100px;
    width: 100px;
    background-color: #bbb;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 1em;
`

export const Rectangle = styled.div`
    height: 100px;
    width: 100px;
    background-color: #bbb;
    border: .5px solid black;
    border-radius: 0%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 1em;
    flex-shrink: 0;
`
