import { Request, Response } from "express"
import { selectEstudante } from "../../data/EstudantesDatabase"

export default async function buscarEstudantePorNome(req: Request, res: Response) {
    try {
        const nome = req.params.nome

        const estudantePorNome = await selectEstudante(nome)

        if(!estudantePorNome){
            throw new Error(`Estudante ${nome} nao existe na base de dados`)
        }

        res.status(201).send(estudantePorNome)
    } catch (error: any) {
        res.status(500).send({ message: error.message })
    }
}
