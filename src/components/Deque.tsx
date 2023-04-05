import React, { useState } from "react";
import {CenterDiv, CenterDivRow, Rectangle, Dot, StyledButton} from './styles'
import "./custom.css"


// FIFO - First In First Out
function Deque(){

    const [ queue, setQueue] = useState<(string|number)[]>([0]);
    const [ inputValue, setInputValue ] = useState("");

    // queue = [new_element, ...queue]
    function add_front(val: string){
        if (val){
            setInputValue("");
            setQueue([val, ...queue]);
        }


    }

    // queue = [...queue, new_element]
    function add_back(val: string){
        if (val){
            setInputValue("");
            setQueue([...queue, val]);
        }
    }

    // pops the "last" element in the array
    function remove_back(){
        let temp = queue;
        temp.pop();
        setQueue([...temp]);
    }

    // pops the "first" element in the array
    function remove_front(){
        setQueue([...queue.slice(1)]);
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
        <CenterDivRow draggable="true">{returnStack()}</CenterDivRow>
        <div id="submit_form">
            <input maxLength={9} value={inputValue} onChange={e => setInputValue(e.target.value)}></input>
            <CenterDiv>
                <div>
                    <StyledButton onClick={() => add_front(inputValue)}>Add Front</StyledButton>
                    <StyledButton onClick={() => add_back(inputValue)}>Add Back</StyledButton>
                </div>
                <div>
                    <StyledButton onClick={remove_front}>Remove Front</StyledButton>
                    <StyledButton onClick={remove_back}>Remove Back</StyledButton>
                </div>
            </CenterDiv>
        </div>
    </CenterDiv>
    )
}

export default Deque;