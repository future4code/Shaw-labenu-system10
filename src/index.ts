import { app } from "./app"
import TurmaEndpoints from "./endpoints/TurmaEndpoints"

const turmaEndpoints = new TurmaEndpoints

app.post("/turmas", turmaEndpoints.criarTurma)

app.put("/turmas/:id", turmaEndpoints.mudarTurmaDeModulo)

app.get("/turmas/ativas", turmaEndpoints.buscarTurmasAtivas)