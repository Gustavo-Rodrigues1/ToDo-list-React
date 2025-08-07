import React from "react";
import styles from "./styles.module.scss";
import { StatsCard } from "../StatsCard/StatsCard";

export const Header: React.FC = () => {
    return (
    <header className={styles.header}>
        <div className={styles.container}>
            <div>
                <h1>To-Do List</h1>
                <span>Bem-Vindo!</span>
            </div>

            <div>
                <StatsCard title="Total de tarefas" value={5}/>
                <StatsCard title="Tarefas pendentes" value={5}/>
                <StatsCard title="Tarefas concluídas" value={5}/>
            </div>
        </div>
    </header>)
}