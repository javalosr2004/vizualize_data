import React, { useState } from "react";
import {CenterDiv, CenterDivRow, Rectangle, Dot, StyledButton} from './styles.jsx'
import "./custom.css"


// FIFO - First In First Out
function Queue(){

    const [ queue, setQueue] = useState([0]);
    const [ inputValue, setInputValue ] = useState("");

    function onEnter(key){
        if (key == 'Enter'){
            enqueue(inputValue);
        }
    }

    // queue = [new_element, ...queue]
    function enqueue(val){
        if (val){
            setInputValue("");
            setQueue([val, ...queue]);
        }


    }

    // pops the "last" element in the array
    function dequeue(){
        let temp = queue;
        temp.pop();
        setQueue([...temp]);
    }

    // return the amount in the queue/enque (array) added
    function returnStack(){
        let stack = [];
        for (let elem of queue){
            stack.push(<Rectangle>{elem}</Rectangle>)
        }
        return stack
    }
    
    return (
    
    <CenterDiv>
        <CenterDivRow>{returnStack()}</CenterDivRow>
        <div id="submit_form">
            <input maxLength="9" value={inputValue} onChange={e => setInputValue(e.target.value)}></input>
            <div>
                <StyledButton onKeyDown={e => onEnter(e.key)} onClick={() => enqueue(inputValue)}>Enqueue</StyledButton>
                <StyledButton onClick={dequeue}>Dequeue</StyledButton>
            </div>
        </div>
    </CenterDiv>
    )
}

export default Queue;