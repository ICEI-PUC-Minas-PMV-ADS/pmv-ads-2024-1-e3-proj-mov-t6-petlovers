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
import { handleAllPetsRequest } from "./endpoints/home";
import { handleImageUploadRequest } from './endpoints/images';


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
serverApp.post('/api/pet/images', upload.single('file'), handleImageUploadRequest);

// endpoint pets
serverApp.post("/api/pet", handlePetRequest);

// endpoint users
serverApp.post("/api/user", handleUserRequest);

// endpoint all pets
serverApp.get("/api/allpets", handleAllPetsRequest);

// Prepara o servidor para iniciar na porta
serverApp.listen(port, () => {
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