import React, { useState } from "react";
import {CenterDiv, CenterDivRow, Rectangle, Dot, StyledButton} from './styles.jsx'

function Board(props){

    const [ count, setCount ] = useState(1);

    // return the amount in the queue/enque (array) added
    function returnStack(count){
        let stack = [];
        for (let i = 0; i < count; i++){
            stack.push(<Rectangle>{"Stack " + i}</Rectangle>)
        }
        return stack
    }
    
    // return the amount of nodes added
    function returnNodes(count){
        let nodes = [];
        for (let i = 0; i < count; i++){
            nodes.push(<Dot>{"Node " + i}</Dot>)
        }
        return nodes
    }
    return (
    
    <CenterDiv>
        <h1>{props.name}</h1>
        <CenterDivRow>{returnStack(count)}</CenterDivRow>
        <StyledButton onClick={() => setCount(count + 1)}>Add</StyledButton>
    </CenterDiv>
    )
}

export default Board;