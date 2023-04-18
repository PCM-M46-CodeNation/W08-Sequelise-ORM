const { Sequelize } = require("sequelize");

const context = new Sequelize(process.env.MYSQL_CONNECTION_STRING);
context.authenticate();

console.log("MySQL DB connected on port 3306.");

module.exports = context;
