import { Request, Response } from 'express';
import { StudentDataBase } from '../../data/EstudantesDatabase';

export const changeEstudanteTurma = async (
  req: Request,
  resp: Response
): Promise<void> => {
  let errorCode = 400;
  try {
    const id: string = req.params.id;
    const turma_id: string = req.body.turma_id;

    if (!turma_id) {
      throw new Error('Por favor informe o Id da turma.');
    }

    const studentData = new StudentDataBase();
    await studentData.changeStudentFromTeam(id, turma_id);

    resp.status(200).send('Estudante foi trocado de turma!');
  } catch (error: any) {
    resp.status(errorCode).send(error.message || error.sqlMessage);
  }
};