import React, { useState } from "react";
import {CenterDiv, CenterDivRow, Rectangle, Dot, StyledButton} from './styles'
import "./custom.css"


// LIFO - Last In First Out
function Stack(){

    const [ stack, setStack] = useState<(string|number)[]>([0]);
    const [ inputValue, setInputValue ] = useState("");


    // queue = [new_element, ...queue]
    function enqueue(val: string | number){
        if (val){
            setInputValue("");
            setStack([val, ...stack]);
        }
    }

    // pops the "last" element in the array
    function dequeue(){
        let temp = stack.slice(1)
        setStack([...temp]);
    }

    // return the amount in the queue/enque (array) added
    function returnStack(){
        let arr = [];
        for (let elem of stack){
            arr.push(<Rectangle>{elem}</Rectangle>)
        }
        return arr
    }
    
    return (
    
    <CenterDiv>
        <CenterDivRow>{returnStack()}</CenterDivRow>
        <div id="submit_form">
            <input maxLength={9} value={inputValue} onChange={e => setInputValue(e.target.value)}></input>
            <div>
                <StyledButton onClick={() => enqueue(inputValue)}>Add</StyledButton>
                <StyledButton onClick={dequeue}>Remove</StyledButton>
            </div>
        </div>
    </CenterDiv>
    )
}

export default Stack;