import { Request, Response } from "express"
import { TurmaDatabase } from "../data/TurmaDatabase"
import Turma from "../model/Turma"


class TurmaEndpoints {

  async criarTurma(req: Request, res: Response) {
    let errorCode: number = 400

    try {
      const nome = req.body.nome

      if(!nome) {
        errorCode = 422
        throw new Error("O campo nome não pode ficar vazio")
      }

      const id = Date.now().toString()
      const modulo = "0"

      const turma = new Turma(id, nome, modulo)

      const turmaDatabase = new TurmaDatabase()

      await turmaDatabase.insertTurma(turma)

      res.status(201).send({message: "Turma criada com sucesso!"})

    } catch (error: any) {
      res.status(errorCode).send({message: error.message} || {message: error.sqlMessage})
    }
  }
}

export default TurmaEndpoints