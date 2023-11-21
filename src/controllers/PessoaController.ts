import { Hono } from "hono"
import { Nota, Pessoa } from "../models"

export const PessoaController = new Hono()

PessoaController.post("/", async (c) => {
    const body = await c.req.json()
    const pessoa = await Pessoa.create(body)
    return c.json(pessoa)
})

PessoaController.get("/", async (c) => {
    const pessoas = await Pessoa.findAll()
    return c.json(pessoas)
})

PessoaController.get("/:id", async (c) => {
    const id = c.req.param("id")
    const pessoa = await Pessoa.findByPk(id, { include: Nota })
    return c.json(pessoa)
})

PessoaController.patch("/:id", async (c) => {
    const id = c.req.param("id")
    const pessoa = await Pessoa.findByPk(id)
    const body = await c.req.json()
    await pessoa?.set(body).save()
    return c.json(pessoa)
})

PessoaController.delete("/:id", async (c) => {
    const id = c.req.param("id")
    const pessoa = await Pessoa.findByPk(id)
    pessoa?.destroy()
    return c.json(pessoa)
})
