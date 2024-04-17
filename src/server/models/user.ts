export interface User {
    id: string;
    full_name: string;
    birth_date: Date;
    whatsapp: string;
    email: string;
    //password: string; //Senha é armazenada apenas no Authentication por questões de segurança
  }
  