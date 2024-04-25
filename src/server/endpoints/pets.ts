import { Request, Response } from "express";
import admin from "firebase-admin";
import crypto from "crypto";
import { Pet } from "../models/pet";

// Funcao para enviar dados pet
export async function handlePetRequest(req: any, res: Response) {
  try {
    const petData: Pet = req.body as Pet;
    const petId = crypto.randomUUID();

    console.log("Cadastro pet: ", petData)

    // Obter o ID do usuário do corpo da solicitação
    const userId = petData.userId;

    // Verificar se o ID do usuário foi fornecido
    if (!userId) {
      return res.status(400).json({ message: "ID do usuário não fornecido" });
    }

    // Firestore Database: Cadastrar pet associado ao usuário
    await admin
      .firestore()
      .collection("pets")
      .doc(petId)
      .set({
        ...petData,
        userId: userId, // Associar o pet ao usuário correspondente
      });

    // Retornar os dados do pet
    const responseData = { ...petData, id: petId };

    return res.status(201).json(responseData);
  } catch (error) {
    console.error("Erro ao cadastrar pet:", error);
    return res.status(500).json({ message: "Erro interno do servidor" });
  }
}


// Funcao obter dados todos pet
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


//funcao obter dados de 4 pets 
export async function handleFourPetsRequest(req: Request, res: Response) {
  try {
      const responseData: Pet[] = []

      // obter apenas 4 pets cadastrados
      const queryPets = await admin
          .firestore()
          .collection("pets")
          .limit(2) 
          .get();


      queryPets.forEach((doc: any) => responseData.push(doc.data()));
      return res.status(200).json({ data: responseData });
  } catch (error) {
    console.error("Erro ao obter a lista de pets:", error);
    return res.status(500).json({ message: "Erro interno do servidor" });
  }
}
