import React, { useEffect, useState } from 'react';

const TaskList = () => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        const fetchTasks = async () => {
            const response = await fetch('/api/tasks');
            const tasks = await response.json();
            setTasks(tasks);
        };
        fetchTasks();
    }, []);

    return (
        <div>
            <h2>Scheduled Tasks</h2>
            <ul>
                {tasks.map((task: any) => (
                    <li key={task.id}>
                        {task.type} - {task.schedule} - {task.status}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TaskList;
