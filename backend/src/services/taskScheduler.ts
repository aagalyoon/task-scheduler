import Task from '../models/task';
import { Op } from 'sequelize';

class TaskScheduler {
    scheduleTask(task: Task) {
        const delay = new Date(task.schedule).getTime() - new Date().getTime();
        setTimeout(() => this.executeTask(task), delay);
    }

    async executeTask(task: Task) {
        task.status = 'executed';
        await task.save();
        console.log(`Task executed: ${task.id} at ${new Date()}`);
    }

    async init() {
        const tasks = await Task.findAll({
            where: {
                status: 'scheduled',
                schedule: {
                    [Op.gte]: new Date(),
                },
            },
        });
        tasks.forEach(this.scheduleTask.bind(this));
    }
}

const taskScheduler = new TaskScheduler();
export default taskScheduler;
