import React, {useState} from "react";

function Todo(){
    const [task, setTask] = useState("");
    const [tasks, setTasks] = useState([]);

    const handleChange = (event)=>{
        setTask(event.target.value);
    };

    const addTask = () =>{
        if (task.trim()!= ""){
            setTasks([...tasks, task]);
            setTask("");
        }
    };

    return(
        <div>
            <h1>To-Do List</h1>
            <input
                type = "text"
                placeholder="Enter a task:"
                value={task}
                onChange={handleChange}/>
            <button onClick={addTask}>Add Task</button>

            <ul>
                {tasks.map((t, index)=> (
                    <li key={index}>{t}</li>))}
            </ul>
        </div>
    );
}

export default Todo;