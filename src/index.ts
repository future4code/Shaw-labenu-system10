import { app } from "./app"
import TurmaEndpoints from "./endpoints/TurmaEndpoints"

const turmaEndpoints = new TurmaEndpoints

app.post("/turma", turmaEndpoints.criarTurma)