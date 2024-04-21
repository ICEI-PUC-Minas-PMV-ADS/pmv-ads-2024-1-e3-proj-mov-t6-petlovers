// Importa as bibliotecas do express
import express, { Express } from "express";
import cors from "cors";
import dotenv from "dotenv";
import multer from 'multer';


// Importa o endpoint
import { handlePetRequest } from "./endpoints/pets";
import { handleUserRequest } from "./endpoints/users";
import { getFirebaseAdmin } from "./firebase";
import {handleImageUploadRequest } from './endpoints/images';


// Inicializa o framework de configuração
dotenv.config();

// Inicializa firebase 
getFirebaseAdmin();


// Cria uma instância servidor com express
const serverApp: Express = express();
const port = 3000;

// Middleware para analisar o corpo da solicitação JSON
serverApp.use(express.json());

// Middleware para habilitar o CORS
serverApp.use(cors());

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });


//endpoint imagem
serverApp.post('/api/pet/images', upload.single('file'), handleImageUploadRequest); 

// endpoint pets
serverApp.post("/api/pet", handlePetRequest);

// endpoint users
serverApp.post("/api/user", handleUserRequest);

// Prepara o servidor para iniciar na porta
serverApp.listen(port, () => {
  console.log(`[Server]: I am running at http://localhost:${port}`);
});
