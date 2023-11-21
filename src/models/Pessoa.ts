import Sequelize from "sequelize"
import { db } from "../db"

export const Pessoa = db.define("pessoa", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    nome: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    idade: Sequelize.INTEGER,
})
