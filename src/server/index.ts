// Importa as bibliotecas do express
import express, { Express, Request, Response } from "express";
import cors from "cors";
import * as admin from "firebase-admin";
// Importa a biblioteca dotenv para ler o arquivo .env
import dotenv from "dotenv";
// Importa o endpoint
import { handlePetRequest } from "./endpoints/pets";
import { handleUserRequest } from "./endpoints/users";

// Inicializa o framework de configuração
dotenv.config();

const serviceAccount = {
  projectId: process.env.FIREBASE_ADMIN_PROJECT_ID,
  privateKey: process.env.FIREBASE_ADMIN_PRIVATE_KEY,
  clientEmail: process.env.FIREBASE_ADMIN_CLIENT_EMAIL
};

// Inicializa o Firebase Admin
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

// Cria uma instância servidor com express
const serverApp: Express = express();
const port = 3000;

// Middleware para analisar o corpo da solicitação JSON
serverApp.use(express.json());

// Middleware para habilitar o CORS
serverApp.use(cors());

// Endpoint test
serverApp.get('/api/example', (req: Request, res: Response) => {
  res.json({ message: 'Bem-vindo ao PetLovers server!' });
});

// endpoint pets
serverApp.post("/api/pet", authToken, handlePetRequest);

// endpoint users
serverApp.post("/api/user", handleUserRequest);

// Prepara o servidor para iniciar na porta
serverApp.listen(port, () => {
  console.log(`[Server]: I am running at http://localhost:${port}`);
});

function authToken(req: any, res: Response, next: any) {
  const token = req.headers['auth-token'];
  if (token == null) return res.redirect('/login');
  admin.auth().verifyIdToken(token).then((decodedToken) => {
    req.user = decodedToken.uid;
    next();
  }).catch((error) => {
    return res.redirect('/login');
  });
}