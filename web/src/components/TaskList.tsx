import React from "react";
import { List } from "@mui/material";
import TaskItem from "./TaskItem";

interface Task {
    id: number;
    title: string;
    description: string;
    completed: boolean;
}

interface TaskListProps {
    tasks: Task[];
    onUpdateTask: (id: number, completed: boolean) => void;
    onDeleteTask: (id: number) => void;
}

const TaskList: React.FC<TaskListProps> = ({
    tasks,
    onUpdateTask,
    onDeleteTask,
}) => {
    return (
        <List sx={{ mt: 4 }}>
            {tasks.map((task) => (
                <TaskItem
                    key={task.id}
                    task={task}
                    onToggleComplete={onUpdateTask}
                    onDeleteTask={onDeleteTask}
                />
            ))}
        </List>
    );
};

export default TaskList;
