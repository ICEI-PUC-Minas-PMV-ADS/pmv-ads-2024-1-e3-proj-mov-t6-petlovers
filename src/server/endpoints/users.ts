import { Request, Response } from "express";
import admin from "firebase-admin";
import crypto from "crypto";
import bcrypt from "bcrypt";
import { User } from "../models/user";

const saltRounds = 10; // Rounds de hashing para proteger a senha

// Funcao para enviar dados user
export async function handleUserRequest(req: Request, res: Response) {
  try {
    const userData: User = req.body as User;
    console.log(userData);

    // Hash da senha antes de salvar
    const hashedPassword = await hashPassword(userData.password);
    userData.password = hashedPassword;

    // Gerar ID
    const id = crypto.randomUUID();
    userData.id = id;

    await admin.firestore().collection("user")
    .doc(id)
    .create(userData);

    return res.status(201).json({ data: userData });
  } catch (error) {
    console.error("Erro ao cadastrar usuário:", error);
    return res.status(500).json({ message: "Erro interno do servidor" });
  }
}

// Função para criar hash da senha
async function hashPassword(password: string): Promise<string> {
    const salt = await bcrypt.genSalt(saltRounds);
    const hash = await bcrypt.hash(password, salt);
    return hash;
  }
