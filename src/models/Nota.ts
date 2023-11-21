import Sequelize from "sequelize"
import { db } from "../db"

export const Nota = db.define("nota", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    titulo: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    conteudo: {
        type: Sequelize.TEXT,
        allowNull: false,
    },
})
