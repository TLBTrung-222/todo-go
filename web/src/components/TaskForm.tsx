import React, { useState } from "react";
import { TextField, Button } from "@mui/material";

interface TaskFormProps {
    onAddTask: (task: { title: string; description: string }) => void;
}

const TaskForm: React.FC<TaskFormProps> = ({ onAddTask }) => {
    const [task, setTask] = useState({ title: "", description: "" });

    const handleSubmit = () => {
        if (task.title.trim()) {
            onAddTask(task);
            setTask({ title: "", description: "" });
        }
    };

    return (
        <>
            <TextField
                label="Task Title"
                fullWidth
                margin="normal"
                value={task.title}
                onChange={(e) => setTask({ ...task, title: e.target.value })}
            />
            <TextField
                label="Task Description"
                fullWidth
                margin="normal"
                value={task.description}
                onChange={(e) =>
                    setTask({ ...task, description: e.target.value })
                }
            />
            <Button
                variant="contained"
                color="primary"
                fullWidth
                sx={{ mt: 2 }}
                onClick={handleSubmit}
            >
                Add Task
            </Button>
        </>
    );
};

export default TaskForm;
