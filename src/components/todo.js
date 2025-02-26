import React, {useEffect, useState} from "react";
import "./todo.css";

function Todo(){
    const [task, setTask] = useState("");
    const [tasks, setTasks] = useState(() =>{
        const savedTasks = localStorage.getItem("tasks");
        return savedTasks ? JSON.parse(savedTasks) : [];
    });

    const handleChange = (event)=>{
        setTask(event.target.value);
    };

    const addTask = () =>{
        if (task.trim()!== ""){
            const newTasks = ([...tasks, task]);
            setTasks(newTasks);
            setTask("");
            localStorage.setItem("tasks", JSON.stringify(newTasks));
        }
    };

    const deleteTask = (index)=>{
        const updateTasks = tasks.filter((_, i) => i !== index);
        setTasks(updateTasks);
        localStorage.setItem("tasks", JSON.stringify(updateTasks));
    }

    useEffect(() => {
        const savedTasks = localStorage.getItem("tasks");
        if (savedTasks){
            setTasks(JSON.parse(savedTasks));
        }
    }, []);

    return(
        <div className="todo-container">
            <h1>To-Do List</h1>
            <input
                className="todo-input"
                type = "text"
                placeholder="Enter a task:"
                value={task}
                onChange={handleChange}/>
            <button className= "add-btn"onClick={addTask}>Add Task</button>

            <ul className="task-list">
                {tasks.map((t, index)=> (
                    <li key={index}>{t}
                    <button className="delete-btn" onClick={()=> deleteTask(index)}>X</button>
                    </li>))}
            </ul>
        </div>
    );
}

export default Todo;