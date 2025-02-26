import React from "react";
import { ListItem, ListItemText, IconButton, Checkbox } from "@mui/material";
import { Delete as DeleteIcon } from "@mui/icons-material";

interface Task {
    id: number;
    title: string;
    description: string;
    completed: boolean;
}

interface TaskItemProps {
    task: Task;
    onToggleComplete: (id: number, completed: boolean) => void;
    onDeleteTask: (id: number) => void;
}

const TaskItem: React.FC<TaskItemProps> = ({
    task,
    onToggleComplete,
    onDeleteTask,
}) => {
    return (
        <ListItem
            secondaryAction={
                <IconButton edge="end" onClick={() => onDeleteTask(task.id)}>
                    <DeleteIcon />
                </IconButton>
            }
        >
            <Checkbox
                edge="start"
                checked={task.completed}
                onChange={() => onToggleComplete(task.id, !task.completed)}
            />
            <ListItemText
                primary={task.title}
                secondary={task.description}
                sx={{
                    textDecoration: task.completed ? "line-through" : "none",
                }}
            />
        </ListItem>
    );
};

export default TaskItem;
