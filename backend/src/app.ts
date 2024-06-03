import express from 'express';
import bodyParser from 'body-parser';
import taskRoutes from './routes/taskRoutes';
import sequelize from './database';
import taskScheduler from './services/taskScheduler';

const app = express();

app.use(bodyParser.json());
app.use('/api', taskRoutes);

sequelize.sync().then(() => {
    taskScheduler.init();
    console.log('Database synced');
});

export default app;
