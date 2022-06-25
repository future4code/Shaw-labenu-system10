import { EstudantesModel, tipagemEstudante } from '../model/EstudanteModel';
import { BaseDatabase } from '../data/BaseDatabase';

export async function insertEstudante(estudante:EstudantesModel): Promise<void> {
  const { id, nome, email, dataNascimento, turmaId } = estudante;

  await BaseDatabase("estudante").insert({
      id,
      nome,
      email,
      data_nasc: dataNascimento,
      turma_id: turmaId,
  })
}

export async function selectEstudante(nome: string, idEstudante?: string): Promise<EstudantesModel | undefined> {

  const [result] = await BaseDatabase("estudante")
      .where({ nome })
      .orWhere({id:idEstudante})
      
  if (result) {
      const tipoEstudante = tipagemEstudante(result)
      return tipoEstudante
  } else {
      return undefined
  }
}