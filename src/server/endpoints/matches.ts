import { Request, Response } from "express";
import admin from "firebase-admin";
import crypto from "crypto";
import { Match } from "../models/match";

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
