import { app } from "./app"
import TurmaEndpoints from "./endpoints/TurmaEndpoints"
import { changeEstudanteTurma } from "./endpoints/Estudante/chanceEstudanteTurma"
import { createEstudante } from "./endpoints/Estudante/createEstudante"
import { getEstudante } from "./endpoints/Estudante/getEstudante"

const turmaEndpoints = new TurmaEndpoints

app.post("/turmas", turmaEndpoints.criarTurma)

app.put("/turmas/:id", turmaEndpoints.mudarTurmaDeModulo)

app.get("/turmas/ativas", turmaEndpoints.buscarTurmasAtivas)


app.get("/estudante/:nome", getEstudante);
app.post("/criar-estudante", createEstudante);
app.post("/mudanca-estudante-turma", changeEstudanteTurma);