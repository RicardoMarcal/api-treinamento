import { Pessoa } from "./Pessoa"
import { Nota } from "./Nota"

Nota.belongsTo(Pessoa, {
    foreignKey: { allowNull: false },
    onDelete: "CASCADE",
})
Pessoa.hasMany(Nota)

export { Pessoa, Nota }
