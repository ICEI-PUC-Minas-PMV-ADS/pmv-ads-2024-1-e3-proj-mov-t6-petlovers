import { Request, Response } from "express";
import admin from "firebase-admin";
import crypto from "crypto";
import { User } from "../models/user";

// Funcao para enviar dados user
export async function handleUserRequest(req: Request, res: Response) {
  try {
    const { password, ...userData } = req.body as UserWithPassword; // Extrair a senha
    console.log(userData);

    // Verificar se email e senha foram fornecidos
    if (!userData.email || !password) {
      return res.status(400).json({ error: "E-mail e senha são obrigatórios" });
    }

    // Gerar ID
    const userId = crypto.randomUUID();
    userData.id = userId;

    // Extrair o primeiro nome do usuário
    const firstName = userData.full_name.split(" ")[0];

    // Firebase Authentication
    const userRecord = await admin.auth().createUser({
      email: userData.email,
      password: password, // Senha fornecida separadamente
      displayName: firstName,
      disabled: false, //Temporariamente, apenas para testar a criação de usuário
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

export interface UserWithPassword extends User {
  password: string;
}

// Funcao para recuperar dados do usuário pelo ID
export async function getUserById(req: Request, res: Response) {
  try {
    const userId = req.params.id; // Obter o ID do usuário dos parâmetros da URL

    // Consultar o Firestore Database para obter os dados do usuário
    const userDoc = await admin
      .firestore()
      .collection("users")
      .doc(userId)
      .get();

    // Verificar se o usuário existe
    if (!userDoc.exists) {
      return res.status(404).json({ error: "Usuário não encontrado" });
    }

    // Obter os dados do usuário
    const userData = userDoc.data();

    return res.status(200).json(userData);
  } catch (error) {
    console.error("Erro ao obter usuário:", error);
    return res.status(500).json({ message: "Erro interno do servidor" });
  }
}
