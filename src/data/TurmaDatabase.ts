import BaseDatabase from "./BaseDatabase"
import Turma from "../model/Turma"

export class TurmaDatabase extends BaseDatabase {
  
  async insertTurma(turma: Turma): Promise<void> {

    await BaseDatabase.connection("TURMA")
      .insert({
        id: turma.getTurmaId(),
        nome: turma.getTurmaNome(),
        modulo: turma.getTurmaModulo()
      })
      .into("TURMA")
  }
}