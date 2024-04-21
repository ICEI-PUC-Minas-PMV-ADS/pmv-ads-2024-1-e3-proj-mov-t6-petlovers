import { Request, Response } from "express";
import admin from "firebase-admin";
import { Pet } from "../models/pet";

// Funcao obter dados pet
export async function handleAllPetsRequest(req: Request, res: Response) {
    try {
        const responseData: Pet[] = []

        // Firestore Database: Obter todos os pets cadastrados
        const queryPets = await admin
            .firestore()
            .collection("pets")
            .get();

        // Retornar lista de pets
        queryPets.forEach((doc: any) => responseData.push(doc.data()));
        return res.status(200).json({ data: responseData });
    } catch (error) {
      console.error("Erro ao obter a lista de pets:", error);
      return res.status(500).json({ message: "Erro interno do servidor" });
    }
  }