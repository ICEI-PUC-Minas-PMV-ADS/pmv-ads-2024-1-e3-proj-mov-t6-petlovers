
// Importa as bibliotecas do express
import express, { Express } from "express";
import cors from "cors";
import * as admin from "firebase-admin";
// Importa a biblioteca dotenv para ler o arquivo .env
import dotenv from "dotenv";
import multer from 'multer';


// Importa o endpoint
import { handlePetRequest } from "./endpoints/pets";
import { handleUserRequest } from "./endpoints/users";
import { getUserById } from "./endpoints/users";
import { updateUserById } from "./endpoints/users";
import { deleteUserById } from "./endpoints/users";
import { handleAllPetsRequest } from "./endpoints/pets";
import { handleImageUploadRequest } from './endpoints/images';
import { handleFourPetsRequest } from "./endpoints/pets";
import { handleRatingRequest } from "./endpoints/avaliacao";
import { handleUpdatePetData } from "./endpoints/pets";
import { handleTopRatingRequest } from "./endpoints/avaliacao";
import { handleMatchRequest } from "./endpoints/matches";
import { handleMatchDetailsRequest } from "./endpoints/matches";
import { getPetDataByUserId } from './endpoints/pets';
import {getUserNameByPetId}   from "./endpoints/pets";
import { handleMensagemRequest} from "./endpoints/mensagens";
import { getMensagens } from "./endpoints/mensagens";
import { updateMensagem } from "./endpoints/mensagens";
import { deleteMensagem } from "./endpoints/mensagens";

// Inicializa o framework de configuração
dotenv.config();

const serviceAccount = {
  projectId: process.env.FIREBASE_ADMIN_PROJECT_ID,
  privateKey: process.env.FIREBASE_ADMIN_PRIVATE_KEY,
  clientEmail: process.env.FIREBASE_ADMIN_CLIENT_EMAIL,
};

// Inicializa o Firebase Admin
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  storageBucket: "petlovers-f3fd9.appspot.com"
});

//acessa o storage do firebase
export function getStorageApi(){
  return admin?.storage();
}

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
serverApp.post('/api/pet/:id/images', upload.single('file'), handleImageUploadRequest);


// endpoint pets
serverApp.post("/api/pet", handlePetRequest);
serverApp.get("/api/allpets", handleAllPetsRequest);
serverApp.get("/api/fourpets", handleFourPetsRequest);
serverApp.put('/api/update-pets/:userId', handleUpdatePetData);
serverApp.get('/api/get-pet-data/:userId', getPetDataByUserId);
serverApp.get('/api/get-user-name/:petId', getUserNameByPetId);


// endpoint users
serverApp.post("/api/user", handleUserRequest);
serverApp.get("/api/user/:id", getUserById)
serverApp.patch("/api/user/:id", updateUserById)
serverApp.delete("/api/user/:id", deleteUserById);


//endpoint para renderizar as 5 primeiras avaliações
serverApp.get("/api/avaliacao", handleTopRatingRequest);

// endpoint para cadastrar avaliação
serverApp.post("/api/avaliacao", handleRatingRequest);

// requisições de match
serverApp.post("/api/match", handleMatchRequest);
serverApp.get('/api/match/:id/details', handleMatchDetailsRequest);

// requisições de mensagem 
serverApp.post("/api/mensagem", handleMensagemRequest);
serverApp.get("/api/mensagem", getMensagens);
serverApp.put("/api/mensagem", updateMensagem);
serverApp.delete("/api/mensagem", deleteMensagem);

// Prepara o servidor para iniciar na porta, ouvindo em todas as interfaces de rede disponíveis
serverApp.listen(port, '0.0.0.0', () => {
  console.log(`[Server]: I am running at http://localhost:${port}`);
});

function authToken(req: any, res: any, next: any) {
  const token = req.headers['auth-token'];
  if (token == null) return res.redirect('/login');
  admin.auth().verifyIdToken(token).then((decodedToken) => {
    req.user = decodedToken.uid;
    next();
  }).catch((error) => {
    return res.redirect('/login');
  });
}















