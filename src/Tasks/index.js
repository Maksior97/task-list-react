import "./style.css";

const Tasks = (props) => (
    <ul className="tasks">
        {props.tasks.map(task =>
            <li
                key={task.id}
                className={`${task.done && props.hideDoneTasks ? 
                "tasks__element--hidden" : ""}`}>
            <button 
                className="tasks__button tasks__button--toggleDone"> 
                {task.done ? "✔" : ""} 
            </button>
            <span
                className={`tasks__content 
                ${task.done ? "tasks__content--done" : 
                ""}`}>
                {task.content} 
            </span>
            <button 
                className="tasks__button tasks__button--remove">🗑
            </button>
            </li>)}
    </ul>
    );

const tasks = [
    {id: 1, content: "testowe zadanie 1", done: false},
    {id: 2, content: "testowe zadanie 2", done: true},
  ];

  export default Tasks;