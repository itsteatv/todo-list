import { useState } from "react";
import "./TaskInput.css";
import { AiOutlinePlusCircle } from 'react-icons/ai';


function TaskInput (props) {
    const [enteredValue, setEnteredValue] = useState("");
    const [valid, setValid] = useState(true);

    const inputChangeHandler = function(event) {
        if(event.target.value.trim().length > 0) {
            setValid(true)
        }
        setEnteredValue(event.target.value);
    }

    const formSubmitHandler = function(event) {
        event.preventDefault();
        if(enteredValue.trim().length === 0) {
            setValid(false);
            return;
        }
        props.onAddTasks(enteredValue);
        setEnteredValue("");
    }

    return (
        <form onSubmit={formSubmitHandler} >
            <div className={`form-control ${!valid ? "invalid" : ""}`}>
                <label>Tasks</label>
                <div>No Task, Please Add One!</div>
                <input type="text" onChange={inputChangeHandler} placeholder="Add new task" value={enteredValue} ></input>
                <button type="submit" className="submit-btn"> Create <AiOutlinePlusCircle/> </button>
            </div>
        </form>
    )
};  

export default TaskInput;