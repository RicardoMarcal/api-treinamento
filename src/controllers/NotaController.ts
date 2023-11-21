import { Hono } from "hono"
import { Nota, Pessoa } from "../models"

export const NotaController = new Hono()

NotaController.post("/", async (c) => {
    const body = await c.req.json()
    const nota = await Nota.create(body)
    return c.json(nota)
})

NotaController.get("/", async (c) => {
    const notas = await Nota.findAll()
    return c.json(notas)
})

NotaController.get("/:id", async (c) => {
    const id = c.req.param("id")
    const nota = await Nota.findByPk(id, { include: Pessoa })
    return c.json(nota)
})

NotaController.patch("/:id", async (c) => {
    const id = c.req.param("id")
    const nota = await Nota.findByPk(id)
    const body = await c.req.json()
    await nota?.set(body).save()
    return c.json(nota)
})

NotaController.delete("/:id", async (c) => {
    const id = c.req.param("id")
    const nota = await Nota.findByPk(id)
    nota?.destroy()
    return c.json(nota)
})
