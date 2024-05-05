export interface Avaliacao {
    id: string;
    userId: string; // ID do usuário associado a avaliação
    rate: number;
    message: string;
  }