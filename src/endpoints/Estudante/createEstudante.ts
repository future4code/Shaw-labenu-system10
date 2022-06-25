import { Request, Response } from "express";
import { insertEstudante } from "../../data/EstudantesDatabase";
import { buscarTurma } from "../../data/TurmaDatabase";
import { Estudante } from "../../model/EstudanteModel";

export default async function criarEstudante(req: Request, res: Response) {
    try {
        const { nome, email, dataNascimento, turmaId } = req.body

        if(!nome || !email || !dataNascimento || !turmaId){
            throw new Error("Esta faltando parametros")
        }

        const turmaExiste = await buscarTurma(turmaId)
        
        if(!turmaExiste){
            throw new Error(`turma com id ${turmaId} nao existe`)
        }

        const novoEstudante:Estudante ={
            id: Date.now().toString(),
            nome,
            email,
            dataNascimento,
            turmaId
        }

      
        await insertEstudante(novoEstudante)

        res.status(201).send({ message: "estudante criado com sucesso" })
    } catch (error: any) {
        res.status(500).send({ message: error.message })
    }
}
