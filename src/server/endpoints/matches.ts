import { Request, Response } from "express";
import admin from "firebase-admin";
import crypto from "crypto";
import { Match } from "../models/match";
import { Pet } from "../models/pet";
import { User } from "../models/user";

// Função para enviar like ou criar um novo match
export async function handleMatchRequest(req: Request, res: Response) {
    try {
      const { pet1_id, pet2_id } = req.body;
  
      // Verificar se os IDs dos pets foram fornecidos
      if (!pet1_id || !pet2_id) {
        return res.status(400).json({ message: "IDs dos pets não fornecidos" });
      }
  
      let matchId: string = '';

      // Verificar se já existe um match entre os dois pets
      const existingMatchQuery = await admin.firestore().collection("matches")
        .where("pet1_id", "==", pet2_id)
        .where("pet2_id", "==", pet1_id)
        .get();
  
      let is_match = false;
      let match_date = null;
  
      // Se já existe um match registrado, atualizar o match
      if (!existingMatchQuery.empty) {
        // Obter o ID do match existente
        const existingMatchId = existingMatchQuery.docs[0].id;
  
        // Atualizar o estado do match para true e a data do match
        await admin.firestore().collection("matches").doc(existingMatchId).update({
          is_match: true,
          match_date: new Date(),
        });
  
        is_match = true;
        match_date = new Date();
      } else {
        // Gerar um ID aleatório para o match
        matchId = crypto.randomUUID();
        
        // Definir a data atual como data do match
        match_date = new Date();
  
        // Criar o documento do match na coleção Firestore
        await admin.firestore().collection("matches").doc(matchId).set({
          id: matchId,
          pet1_id,
          pet2_id,
          is_match: false,
          match_date,
        });
      }
  
      // Retornar os dados do match criado ou atualizado
      const responseData: Match = {
        id: matchId,
        pet1_id,
        pet2_id,
        is_match,
        match_date,
      };
  
      return res.status(200).json(responseData);
    } catch (error) {
      console.error("Erro ao criar ou atualizar match:", error);
      return res.status(500).json({ message: "Erro interno do servidor" });
    }
  }

// Função para obter dados dos pets e dos tutores após match
export async function handleMatchDetailsRequest(req: Request, res: Response) {
  try {
      const matchId = req.params.id;

      // Obter os dados do match pelo ID
      const matchDoc = await admin.firestore().collection("matches").doc(matchId).get();
      if (!matchDoc.exists) {
          return res.status(404).json({ message: "Match não encontrado" });
      }
      const matchData = matchDoc.data() as Match;

      // Obter os dados dos pets
      const pet1Doc = await admin.firestore().collection("pets").doc(matchData.pet1_id).get();
      const pet2Doc = await admin.firestore().collection("pets").doc(matchData.pet2_id).get();
      if (!pet1Doc.exists || !pet2Doc.exists) {
          return res.status(404).json({ message: "Um ou ambos os pets não foram encontrados" });
      }
      const pet1Data = pet1Doc.data() as Pet;
      const pet2Data = pet2Doc.data() as Pet;

      // Obter os dados dos tutores
      const user1Doc = await admin.firestore().collection("users").doc(pet1Data.userId).get();
      const user2Doc = await admin.firestore().collection("users").doc(pet2Data.userId).get();
      if (!user1Doc.exists || !user2Doc.exists) {
          return res.status(404).json({ message: "Um ou ambos os tutores não foram encontrados" });
      }
      const user1Data = user1Doc.data() as User;
      const user2Data = user2Doc.data() as User;

      // Extrair os primeiros nomes dos tutores
      const firstName1 = user1Data.full_name.split(" ")[0];
      const firstName2 = user2Data.full_name.split(" ")[0];

      // Combinar os dados
      const responseData = {
          match: matchData,
          pets: [
              {
                  pet: {
                      ...pet1Data
                  },
                  owner: {
                      first_name: firstName1,
                      whatsapp: user1Data.whatsapp,
                  }
              },
              {
                  pet: {
                      ...pet2Data
                  },
                  owner: {
                      first_name: firstName2,
                      whatsapp: user2Data.whatsapp,
                  }
              }
          ]
      };

      return res.status(200).json(responseData);
  } catch (error) {
      console.error("Erro ao obter detalhes do match, dos pets e dos tutores:", error);
      return res.status(500).json({ message: "Erro interno do servidor" });
  }
}

export async function handleMatchUserRequest(req: Request, res: Response) {
  try {
      const petId = req.params.id;
      const userId = req.params.userId;
      var cellPhone;

      // Obter os dados do match pelo ID
      const matchSnapshot = await admin.firestore()
                            .collection("matches")
                            .where("pet1_id", "==", petId)
                            .where("is_match", "==", true)
                            .get();
      if (matchSnapshot.empty) {
        const matchSnapshot1 = await admin.firestore()
        .collection("matches")
        .where("pet2_id", "==", petId)
        .where("is_match", "==", true)
        .get();

        if(!matchSnapshot1.empty){
          const matchDoc = matchSnapshot1.docs[0].data();
          const petDoc = (await admin.firestore().collection("pets").doc(matchDoc.pet1_id).get()).data() as Pet;
          const petDoc2 = (await admin.firestore().collection("pets").doc(matchDoc.pet2_id).get()).data() as Pet;
        
          if(petDoc.userId == userId){
            const userDoc = (await admin.firestore().collection("users").doc(petDoc2.userId).get()).data() as User;

            cellPhone = userDoc.whatsapp;
          }
        }
      }
      else{
          const matchDoc = matchSnapshot.docs[0].data();
          const petDoc = (await admin.firestore().collection("pets").doc(matchDoc.pet2_id).get()).data() as Pet;
          const petDoc2 = (await admin.firestore().collection("pets").doc(matchDoc.pet1_id).get()).data() as Pet;
        
          if(petDoc.userId == userId){
            const userDoc = (await admin.firestore().collection("users").doc(petDoc2.userId).get()).data() as User;

            cellPhone = userDoc.whatsapp;
          }
      }

      // Combinar os dados
      const responseData = {
          whatsapp: cellPhone
      };

      return res.status(200).json(responseData);
  } catch (error) {
      console.error("Erro ao obter detalhes do match para o usuário:", error);
      return res.status(500).json({ message: "Erro interno do servidor" });
  }
}


// Função para obter os IDs dos matches do usuário
export async function getUserMatchIds(req: Request, res: Response) {
  try {
    const userId = req.params.userId;

    if (!userId) {
      return res.status(400).json({ message: "ID do usuário não fornecido" });
    }

    console.log(`Procurando pet para o userId: ${userId}`);
    const petSnapshot = await admin.firestore().collection("pets").where("userId", "==", userId).get();

    if (petSnapshot.empty) {
      console.log("Nenhum pet encontrado para o userId fornecido");
      return res.status(404).json({ message: "Pet não encontrado para o usuário fornecido" });
    }

    const petDoc = petSnapshot.docs[0];
    const petId = petDoc.id;
    console.log(`Pet encontrado: ${petId}`);

    const matchesQuerySnapshot1 = await admin.firestore().collection("matches")
      .where("is_match", "==", true)
      .where("pet1_id", "==", petId)
      .get();

    const matchesQuerySnapshot2 = await admin.firestore().collection("matches")
      .where("is_match", "==", true)
      .where("pet2_id", "==", petId)
      .get();

    const matches = matchesQuerySnapshot1.docs.concat(matchesQuerySnapshot2.docs);

    if (matches.length === 0) {
      return res.status(404).json({ message: "Nenhum match encontrado para o pet do usuário" });
    }

    const matchIds = matches.map(matchDoc => matchDoc.id);

    return res.status(200).json({ matchIds });
  } catch (error) {
    console.error("Erro ao obter IDs dos matches do usuário:", error);
    console.log(error);
    return res.status(500).json({ message: "Erro interno do servidor" });
  }
}