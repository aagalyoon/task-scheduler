import { Model, DataTypes } from 'sequelize';
import sequelize from '../database';

class Task extends Model {
    public id!: number;
    public type!: string;
    public schedule!: string;
    public status!: string;
}

Task.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    type: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    schedule: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    status: {
        type: DataTypes.STRING,
        defaultValue: 'scheduled',
    },
}, {
    sequelize,
    modelName: 'Task',
});

export default Task;
