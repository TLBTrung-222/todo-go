import React, { useState, useEffect } from "react";
import { Container, Typography } from "@mui/material";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

const BASE_URL = "https://todo-go-g2zv.onrender.com";

interface Task {
    id: number;
    title: string;
    description: string;
    completed: boolean;
}

const App: React.FC = () => {
    const [tasks, setTasks] = useState<Task[]>([]);

    useEffect(() => {
        fetchTasks();
    }, []);

    const fetchTasks = async () => {
        const response = await fetch(`${BASE_URL}/tasks`);
        const data = await response.json();
        setTasks(data);
    };

    const addTask = async (newTask: Omit<Task, "id" | "completed">) => {
        const response = await fetch(`${BASE_URL}/tasks`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ ...newTask, completed: false }),
        });

        if (response.ok) {
            fetchTasks();
        }
    };

    const updateTask = async (id: number, completed: boolean) => {
        const response = await fetch(`${BASE_URL}/tasks/${id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ completed }),
        });

        if (response.ok) fetchTasks();
    };

    const deleteTask = async (id: number) => {
        const response = await fetch(`${BASE_URL}/tasks/${id}`, {
            method: "DELETE",
        });

        if (response.ok) fetchTasks();
    };

    return (
        <Container maxWidth="sm" sx={{ mt: 4 }}>
            <Typography variant="h4" gutterBottom>
                Todo List
            </Typography>
            <TaskForm onAddTask={addTask} />
            <TaskList
                tasks={tasks}
                onUpdateTask={updateTask}
                onDeleteTask={deleteTask}
            />
        </Container>
    );
};

export default App;
