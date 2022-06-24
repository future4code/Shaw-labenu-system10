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
        throw new Error("O campo nome não pode ficar vazio.")
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


  async mudarTurmaDeModulo(req: Request, res: Response) {
    let errorCode: number = 400

    try {
      const id = req.params.id
      const modulo = req.body.modulo

      if(!modulo) {
        errorCode = 422
        throw new Error("O campo modulo não pode ficar vazio.")
      }

      if(Number(modulo) < 1 || Number(modulo) > 6) {
        errorCode = 422
        throw new Error("O campo modulo deve receber um valor entre 1 e 6.")
      }

      const turmaDatabase = new TurmaDatabase()

      await turmaDatabase.updateModuloDaTurma(id, modulo)
      
      res.status(200).send({message: `O módulo da turma id:${id} foi atualizado com sucesso!`})

    } catch (error: any) {
      res.status(errorCode).send({message: error.message} || {message: error.sqlMessage})
    }
  }


  async buscarTurmasAtivas(req: Request, res: Response) {
    let errorCode: number = 400

    try {
      const turmaDatabase = new TurmaDatabase()

      let resultado: Turma[] = await turmaDatabase.selectTurmasAtivas()

      res.status(200).send(resultado)

    } catch (error: any) {
      res.status(errorCode).send({message: error.message} || {message: error.sqlMessage})
    }
  }
}

export default TurmaEndpoints