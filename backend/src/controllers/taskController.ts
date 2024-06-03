import { Request, Response } from 'express';
import Task from '../models/task';
import taskScheduler from '../services/taskScheduler';

export const createTask = async (req: Request, res: Response) => {
    const { type, schedule } = req.body;
    const task = await Task.create({ type, schedule });
    taskScheduler.scheduleTask(task);
    res.status(201).json(task);
};

export const getTasks = async (req: Request, res: Response) => {
    const tasks = await Task.findAll();
    res.json(tasks);
};
