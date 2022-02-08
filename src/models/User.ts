import { Model, DataTypes, Sequelize } from "sequelize";
import { sequelize } from "../db";


export default class User extends Model {}
User.init(
{
    id: {
        type: DataTypes.UUIDV4,
        primaryKey: true,
        autoIncrement: true
    },
    lastName: {
        type:DataTypes.STRING,
        field: 'last_name'
    },
    createAt: {
        allowNull: false,
        type: DataTypes.DATE,
        field: 'create_at',
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
    }
},
{   sequelize, modelName: "user" }
);