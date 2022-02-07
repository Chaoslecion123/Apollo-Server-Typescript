import { Sequelize } from "sequelize";
// change to your URI
const sequelize = new 
Sequelize("mysql://root:Newyesterday123.@localhost:3306/my_store")
//Sequelize("postgres://postgres:12345@localhost:5432/todo");
const connect = () => {
    try {
        sequelize.authenticate().then(() => {
        console.log("MySql connection has been established successfully.");
    });
    } catch (error) {
        console.error("Unable to connect to the database:", error);
    }
};
export { sequelize, connect };