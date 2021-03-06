import { Model, DataTypes, Sequelize } from "sequelize";
import { sequelize } from "../db";


export default class Quote extends Model {}
Quote.init(
{
    id: {
        type: DataTypes.UUIDV4,
        primaryKey: true,
        autoIncrement: true
    },
    phrase: DataTypes.STRING,
    quotee: DataTypes.STRING,
    createAt: {
        allowNull: false,
        type: DataTypes.DATE,
        field: 'create_at',
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
    }
},
{   sequelize, modelName: "quote" }
);