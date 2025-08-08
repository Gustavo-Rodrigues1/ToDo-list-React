import React, { FormEvent, useState } from "react";
import styles from "./styles.module.scss"

interface Task{
    title:string;
    id:number;
    done:boolean;
}

export const Tasks:React.FC = () => {
    const [taskTitle, setTaskTitle] = useState("");
    const [tasks, setTasks] = useState([] as Task[])

    function handleSubmitTask (event: FormEvent){
        event.preventDefault()

        if(!taskTitle){
            alert("Digite uma tarefa")
            return
        }

        setTasks([
            ...tasks,
            {id: 1, title: taskTitle, done:false},
        ])
        setTaskTitle("")
    }

    return (
        <section className={styles.container}>
            <form  onSubmit={handleSubmitTask}>
                <div>
                    <input onChange ={(event) => setTaskTitle(event.target.value)} value={taskTitle} type="text" id="task-title" placeholder="Adicione uma Tarefa"/>
                </div>
                <button type="submit">Adicionar Tarefa</button>
            </form>

            <ul>
                {tasks.map(task => {
                    return (
                        <li key={task.id}>
                            <input type="checkbox" id={`task-${task.id}`} />
                            <label htmlFor={`task-${task.id}`}>{task.title}</label>
                        </li>
                    )
                })}
            </ul>
        </section>
    )
}