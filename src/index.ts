import { serve } from "@hono/node-server"
import { Hono } from "hono"
import { db } from "./db"
import { PessoaController } from "./controllers/PessoaController"
import { NotaController } from "./controllers/NotaController"

// { force: true }
db.sync()

const app = new Hono().basePath("/api/v1")
app.route("/pessoas", PessoaController)
app.route("/notas", NotaController)

serve(app)
