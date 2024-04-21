import { Request, Response, urlencoded } from "express";
import { ref, uploadBytes } from "firebase/storage";
import { getStorageApi } from "../index";
import { uuid } from 'uuidv4';

const STORAGE_URL = 'https://firebasestorage.googleapis.com/v0/b/petlovers-f3fd9.appspot.com/o';
    

export async function handleImageUploadRequest(req: Request, res: Response) {
  try {
    if (!req.file) {
      return res.status(400).json({ error: "Nenhuma imagem foi enviada." });
    }
    
    const storage = getStorageApi();
    const token =  uuid();
    const fileName = `pet_${Date.now()}_${req.file.originalname}`;
    const metadata = {
      metadata: {
        firebaseStorageDownloadTokens: token,
      },
      contentType: 'image/png'
   };

    await storage?.bucket().file('images/' + fileName).save(req.file.buffer, {
      metadata
    });
  
    let finalUrl = `${STORAGE_URL}/${encodeURIComponent('images/' + token)}?alt=media&token=${token}`;
    // Retorna a URL da imagem carregada
    return res.status(201).json({ imageUrl : 
       finalUrl,
       id: token
     });
  } catch (error) {
    console.error("Erro ao fazer upload da imagem:", error);
    return res.status(500).json({ error: "Erro ao fazer upload da imagem." });
  }
}

