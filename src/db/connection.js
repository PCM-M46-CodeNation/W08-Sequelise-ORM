const { Sequelize } = require("sequelize");

module.exports = {
	context: new Sequelize(process.env.MYSQL_CONNECTION_STRING),

	connect: async function () {
		try {
			await this.context.authenticate();
			console.log("DB Connection established.");
		} catch (error) {
			console.log(error);
		}
	},
};
