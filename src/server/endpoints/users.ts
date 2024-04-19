import { Request, Response } from "express";
import admin from "firebase-admin";
import crypto from "crypto";
import { User } from "../models/user";

// Funcao para enviar dados user
export async function handleUserRequest(req: Request, res: Response) {
  try {
    const userData: User = req.body as User;
    console.log(userData);

    // Gerar ID
    const userId = crypto.randomUUID();
    userData.id = userId;

    // Extrair o primeiro nome do usuário
    const firstName = userData.full_name.split(" ")[0];

    // Firebase Authentication
    const userRecord = await admin.auth().createUser({
      email: userData.email,
      displayName: firstName,
      disabled: false, //Temporariamente, apenas para testar a criação de usuário sem senha
    });

    // Firestore Database
    await admin.firestore().collection("users").doc(userId).set({
      full_name: userData.full_name,
      birth_date: userData.birth_date,
      whatsapp: userData.whatsapp,
      email: userData.email,
    });

    // Retornar o ID do usuário no corpo da resposta
    const responseData = { ...userData, id: userId };

    return res.status(201).json(responseData); 
  } catch (error) {
    console.error("Erro ao cadastrar usuário:", error);
    return res.status(500).json({ message: "Erro interno do servidor" });
  }
}
