import TaskItem from "../TaskItem/TaskItem";
import "./TaskList.css";

function TaskList(props) {
  return (
    <ul className="task-list">
      {props.tasks.map((task) => (
        <TaskItem
          key={task.id}
          id={task.id}
          onDelete={props.onDeleteTask}
          onEdit={props.editTaskHandler}
        >
          {task.task}
        </TaskItem>
      ))}
    </ul>
  );
}

export default TaskList;
