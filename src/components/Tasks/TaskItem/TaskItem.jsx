import "./TaskItem.css";

function TaskItem (props) {
    const taskDeleteHandler = function() {
        props.onDelete(props.id)
    }
    
    return (
        <li className="task-item" onClick={taskDeleteHandler} >
            {props.children}
        </li>
    )
};  

export default TaskItem;