import React, { useState } from 'react';

const TaskForm = ({ onAdd }: { onAdd: (task: any) => void }) => {
    const [type, setType] = useState('one-time');
    const [schedule, setSchedule] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const response = await fetch('/api/tasks', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ type, schedule }),
        });
        const task = await response.json();
        onAdd(task);
        setSchedule('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Type:
                <select value={type} onChange={(e) => setType(e.target.value)}>
                    <option value="one-time">One-Time</option>
                    <option value="recurring">Recurring</option>
                </select>
            </label>
            <label>
                Schedule:
                <input
                    type="text"
                    value={schedule}
                    onChange={(e) => setSchedule(e.target.value)}
                    placeholder="YYYY-MM-DD HH:MM:SS or Cron"
                />
            </label>
            <button type="submit">Add Task</button>
        </form>
    );
};

export default TaskForm;
