// Importa as bibliotecas do express
import express, { Express, Request, Response } from "express";
// Importa a biblioteca dotenv para ler o arquivo .env
import dotenv from "dotenv";
import { getAuth,  signInWithEmailAndPassword } from "firebase/auth";

// Importa o endpoint
import { handlePetRequest } from "./endpoints/pets";
import { handleUserRequest } from "./endpoints/users";
import { getFirebaseAdmin } from "./firebase";

const Auth = require('./firebase.ts')
//import { handleLoginRequest } from "./endpoints/login";


// Inicializa o framework de configuração
dotenv.config();

let userLogged;

getAuth().onAuthStateChanged((user) => {
  if(user) {
    userLogged = user;
  }else {
    userLogged =null;
  }
})

// Inicializa firebase 
getFirebaseAdmin();

// Cria uma instância servidor com express
const serverApp: Express = express();
const port = 3000;

// Middleware para analisar o corpo da solicitação JSON
serverApp.use(express.json());

// Endpoint test
serverApp.get('/api/example', (req: Request, res: Response) => {
  res.json({ message: 'Bem-vindo ao PetLovers server!' });
});

// Endpoint login
serverApp.post("/api/login", (req: Request, res: Response) => {
  let getBody = req.body;
  signInWithEmailAndPassword(getAuth(), getBody.email, getBody.password)
  .then((login : any) => {
    if(!login.err) {
      res.render('/api/example');
    } else {
      res.json({ message: 'ERRO!' });
    }}
  )
});


// endpoint pets
serverApp.post("/api/pet", handlePetRequest);

// endpoint users
serverApp.post("/api/user", handleUserRequest);

// Prepara o servidor para iniciar na porta
serverApp.listen(port, () => {
  console.log(`[Server]: I am running at http://localhost:${port}`);
});
