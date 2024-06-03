import React, { useState } from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

const App = () => {
    const [tasks, setTasks] = useState([]);

    const handleAddTask = (task: any) => {
        setTasks([...tasks, task]);
    };

    return (
        <div>
            <h1>Distributed Task Scheduler</h1>
            <TaskForm onAdd={handleAddTask} />
            <TaskList />
        </div>
    );
};

export default App;
