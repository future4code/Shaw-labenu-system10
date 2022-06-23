class Turma {

  constructor(
    private id: string,
    private nome: string,
    private modulo: "0" | "1" | "2" | "3" | "4" | "5" | "6" = "0"
  ) {}

  getTurmaId() {
    return this.id
  }

  getTurmaNome() {
    return this.nome
  }
  
  getTurmaModulo() {
    return this.modulo
  }
}

export default Turma