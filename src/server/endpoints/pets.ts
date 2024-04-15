import { Request, Response } from "express";
import admin from "firebase-admin";
import crypto from "crypto";
import { Pet } from "../models/pet";

// Funcao para enviar dados pet
export async function handlePetRequest(req: Request, res: Response) {
  try {
    const petData: Pet = req.body as Pet;
    console.log(petData);

    const id = crypto.randomUUID();
    await admin.firestore().collection("pet")
    .doc(id)
    .create(petData);
    petData.id = id;

    return res.status(201).json({ data: petData });
  } catch (error) {
    console.error("Erro ao cadastrar pet:", error);
    return res.status(500).json({ message: "Erro interno do servidor" });
  }
}
