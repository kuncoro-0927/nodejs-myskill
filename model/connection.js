import { Sequelize } from "sequelize";

const connection = new Sequelize("sparking-myskill", "root", "Khitan271", {
  host: "localhost",
  dialect: "mysql",
});

export default connection;
