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

      const queryPets = await admin
          .firestore()
          .collection("pets")
          .get();

      queryPets.forEach((doc: any) => responseData.push(doc.data()));
      return res.status(200).json({ data: responseData });
  } catch (error) {
    console.error("Erro ao obter a lista de pets:", error);
    return res.status(500).json({ message: "Erro interno do servidor" });
  }
}


//funcao obter dados somente de alguns pets
export async function handleFourPetsRequest(req: Request, res: Response) {
  try {
      const responseData: Pet[] = []

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


//Update dados pet
export async function handleUpdatePetData(req: Request, res: Response) {
  try {
    const petId = req.params.id; 
    const newData = req.body; 

    await admin.firestore().collection("pets").doc(petId).update(newData);

    const updatedPet = await admin.firestore().collection("pets").doc(petId).get();
    
    return res.status(200).json({ data: updatedPet.data() });
  } catch (error) {
    console.error("Erro ao editar dados do pet:", error);
    return res.status(500).json({ message: error });
  }
}



// Função para obter os dados do pet associados ao usuário pelo ID
export async function getPetDataByUserId(req: Request, res: Response) {
  try {
    const userId = req.params.userId; 

    if (!userId) {
      return res.status(400).json({ message: "ID do usuário não fornecido" });
    }

    const petSnapshot = await admin.firestore().collection("pets").where("userId", "==", userId).get();

    if (petSnapshot.empty) {
      return res.status(404).json({ message: "Pet não encontrado para o usuário fornecido" });
    }

    const petData = petSnapshot.docs[0].data();
    return res.status(200).json({ data: petData,  userId: userId  });
  } catch (error) {
    console.error("Erro ao obter dados do pet:", error);
    return res.status(500).json({ message: "Erro interno do servidor" });
  }
}

// Função para obter os dados do usuário associados ao ID do usuário na coleção de pets
export async function getUserDataByUserIdInPets(req: Request, res: Response) {
  try {
    const userId = req.params.userId;

    if (!userId) {
      return res.status(400).json({ message: "ID do usuário não fornecido" });
    }

    const petSnapshot = await admin.firestore().collection("pets").where("userId", "==", userId).get();

    if (petSnapshot.empty) {
      return res.status(404).json({ message: "Nenhum pet encontrado para o ID do usuário fornecido" });
    }

    const userData = await admin.firestore().collection("users").doc(userId).get();

    if (!userData.exists) {
      return res.status(404).json({ message: "Usuário não encontrado para o ID fornecido" });
    }

    return res.status(200).json({ data: userData.data() });
  } catch (error) {
    console.error("Erro ao obter dados do usuário associados ao ID do usuário na coleção de pets:", error);
    return res.status(500).json({ message: "Erro interno do servidor" });
  }
}

