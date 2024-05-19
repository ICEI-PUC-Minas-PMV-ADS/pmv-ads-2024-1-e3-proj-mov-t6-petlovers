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


    queryPets.forEach((doc: any) => {
      const petData = doc.data();
     
      responseData.push({ ...petData, id: doc.id });
      console.log(doc.id);
    });
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
 

      queryPets.forEach((doc: any) => {
        const petData = doc.data();
       
        responseData.push({ ...petData, id: doc.id });
        console.log(doc.id);
      });
      return res.status(200).json({ data: responseData });
  } catch (error) {
    console.error("Erro ao obter a lista de pets:", error);
    return res.status(500).json({ message: "Erro interno do servidor" });
  }
}



// Função para atualizar dados do pet pelo ID do usuário
export async function handleUpdatePetData(req: Request, res: Response) {
  try {
    const userId = req.params.userId; 
    const newData = req.body; 

    const petSnapshot = await admin.firestore().collection("pets").where("userId", "==", userId).get();

    if (petSnapshot.empty) {
      return res.status(404).json({ message: "Pet não encontrado para o usuário fornecido" });
    }

    const petId = petSnapshot.docs[0].id;

    await admin.firestore().collection("pets").doc(petId).update(newData);

    const updatedPet = await admin.firestore().collection("pets").doc(petId).get();
    
    return res.status(200).json({ data: updatedPet.data() });
  } catch (error) {
    console.error("Erro ao editar dados do pet:", error);
    return res.status(500).json({ message: "Erro interno do servidor" });
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

    const petDoc = petSnapshot.docs[0];
    const petId = petDoc.id;
    const petData = petDoc.data();

    return res.status(200).json({ petId, data: petData, userId });
  } catch (error) {
    console.error("Erro ao obter dados do pet:", error);
    return res.status(500).json({ message: "Erro interno do servidor" });
  }
}



// Função para obter o nome do usuário associado a um pet pelo ID do pet
export async function getUserNameByPetId(req: Request, res: Response) {
  try {
    const petId = req.params.petId; 
    console.log(petId);

    if (!petId) {
      return res.status(400).json({ message: "ID do pet não fornecido" });
    }

    const petSnapshot = await admin.firestore().collection("pets").doc(petId).get();

    if (!petSnapshot.exists) {
      return res.status(404).json({ message: "Pet não encontrado" });
    }

    const petData = petSnapshot.data();
    const userId = petData && petData.userId;
    console.log(userId);


    const userSnapshot = await admin.firestore().collection("users").doc(userId).get();

   
    if (!userSnapshot.exists) {
      return res.status(404).json({ message: "Usuário não encontrado" });
    }

  
    const userData = userSnapshot.data();
    const userName = userData && userData.full_name;
    console.log(userName)

    
    return res.status(200).json({ userName });
  } catch (error) {
    console.error("Erro ao obter o nome do usuário associado ao pet:", error);
    return res.status(500).json({ message: "Erro interno do servidor" });
  }
}








