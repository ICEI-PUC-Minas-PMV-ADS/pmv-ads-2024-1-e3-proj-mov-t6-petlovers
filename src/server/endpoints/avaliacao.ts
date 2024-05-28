import { Request, Response } from "express";
import admin from "firebase-admin";
import crypto from "crypto";
import { Avaliacao } from "../models/avaliacao";

let avaliacoes: Avaliacao[] = []

// Funcao para enviar avaliação
export async function handleRatingRequest(req: any, res: Response) {
    try {
        const avaliacaoData: Avaliacao = req.body as Avaliacao;
        const avaliacaoId = crypto.randomUUID();

        // Obter o ID do usuário do corpo da solicitação
        const userId = avaliacaoData.userId;

        // Verificar se o ID do usuário foi fornecido
        if (!userId) {
            return res.status(400).json({ message: "ID do usuário não fornecido" });
        }

        // Firestore Database: Cadastrar avaliação
        await admin
            .firestore()
            .collection("avaliacao")
            .doc(avaliacaoId)
            .set({
                ...avaliacaoData,
                userId: userId, // Associar a avaliação ao usuário correspondente
            });

        // Retornar os dados da avaliação
        const responseData = { ...avaliacaoData, id: avaliacaoId };

        return res.status(201).json(responseData);
    } catch (error) {
        console.error("Erro ao cadastrar avaliaçao:", error);
        return res.status(500).json({ message: "Erro interno do servidor" });
    }
}
// Funcao para atualizar avaliação
export async function handleUpdateRatingRequest(req: any, res: Response) {
    try {
        const avaliacaoData = req.body;

        // Obter o ID do usuário do corpo da solicitação
        const userId = avaliacaoData.userId;

        // Verificar se o ID do usuário foi fornecido
        if (!userId) {
            return res.status(400).json({ message: "ID do usuário não fornecido" });
        }
        // Firestore Database: Atualizar avaliação
        await admin
            .firestore()
            .collection("avaliacao")
            .doc(avaliacaoData.id)
            .update(avaliacaoData);

        // Retornar os dados da avaliação
        const responseData = { ...avaliacaoData};

        return res.status(200).json(responseData);
    } catch (error) {
        console.error("Erro ao atualizar avaliaçao:", error);
        return res.status(500).json({ message: "Erro interno do servidor" });
    }
}


export async function handleTopRatingRequest(req: Request, res: Response) {
    try {
        const userId = req.params.userId; 
        const responseData: Avaliacao[] = []
        // Firestore Database: Obter 5 avaliações 
        const queryAvaliacao = await admin
            .firestore()
            .collection("avaliacao")
            .where("userId", "!=", userId)
            .limit(10)
            .get();
        // Retornar lista de pets
        queryAvaliacao.forEach((doc: any) => responseData.push(doc.data()));
        return res.status(200).json({ data: responseData });
    } catch (error) {
        console.error("Erro ao obter a lista de avaliações:", error);
        return res.status(500).json({ message: "Erro interno do servidor" });
    }
}


export async function handleUserRatingRequest(req: Request, res: Response) {
    try {
        const userId = req.params.userId; 

        if (!userId) {
          return res.status(400).json({ message: "ID do usuário não fornecido" });
        }

        const avaliacaoSnapshot = await admin.firestore().collection("avaliacao").where("userId", "==", userId).get();

        if (avaliacaoSnapshot.empty) {
          return res.status(404).json({ message: "Avaliação não encontrada para o usuário fornecido" });
        }

        const avaliacaoDoc = avaliacaoSnapshot.docs[0];
        const avaliacaoId = avaliacaoDoc.id;
        const avaliacaoData = avaliacaoDoc.data();

        return res.status(200).json({ avaliacaoId, data: avaliacaoData, userId });
      } catch (error) {
        console.error("Erro ao obter avaliação do usuário:", error);
        return res.status(500).json({ message: "Erro interno do servidor" });
      }
}


// Função para excluir avaliação
export async function handleDeleteRatingRequest (req: Request, res: Response) {
    try {
      const avaliacaoId = req.params.id; // Obter o ID do usuário dos parâmetros da URL
  
      // Obter a avaliação pelo Id no Firestore
      const avaliacaoDoc = await admin.firestore().collection("avaliacao").doc(avaliacaoId).get();
      
      // Verificar se o documento existe
      if (!avaliacaoDoc.exists) {
        return res.status(404).json({ error: "Avaliação não encontrada" });
      }
  
      // Extrair os dados da avaliação do documento
      const avaliacaoData = avaliacaoDoc.data();
      
      // Verificar se a avaliação foi encontrada
      if (!avaliacaoData || !avaliacaoData.id) {
        return res.status(404).json({ error: "Avaliação não encontrada" });
      }  
      // Excluir a avaliação do Firebase
      await admin.firestore().collection("avaliacao").doc(avaliacaoId).delete();
  
      // Retornar uma resposta de sucesso
      return res.status(200).json({ message: "Avaliação excluída com sucesso" });
    } catch (error) {
      console.error("Erro ao excluir avaliação:", error);
      return res.status(500).json({ message: "Erro interno do servidor" });
    }
  }
  
  
  
  

// export async function handleTopRatingRequest(req: Request, res: Response) {
//     try {
//         avaliacoes = [];

//         // Retornar lista de avaliações
//         const doc = { id: "1", userId: "CtGZuZl7kpWyZE3YtiekiaSIRpA3", rate: 1, message: "Teste Liana 1" };
//         avaliacoes.push(doc as Avaliacao);

//         const doc1 = { id: "2", userId: "45454", rate: 2, message: "Teste Liana 2" };
//         avaliacoes.push(doc1 as Avaliacao);

//         const doc2 = { id: "3", userId: "45454", rate: 3, message: "Teste Liana 3 Teste Liana 3 Teste Liana 3 Teste Liana 3 Teste Liana 3 Teste Liana 3" };
//         avaliacoes.push(doc2 as Avaliacao);

//         const doc3 = { id: "4", userId: "45454", rate: 4, message: "Teste Liana 4" };
//         avaliacoes.push(doc3 as Avaliacao);

//         const doc4 = { id: "5", userId: "45454", rate: 5, message: "Teste Liana 5 kashdsfsaldfblsdkjbfkbsfbdsbfbsdfbskdbfkbsdfbskdbfksbdfbsdbfsdbfjbsdfbsdbfsdbfbsdmbfsdmbfmbsdfbsmdbfbsdmnfbsbfsdb" };
//         avaliacoes.push(doc4 as Avaliacao);

//         const doc5 = { id: "6", userId: "45454", rate: 5, message: "Teste Liana 6" };
//         avaliacoes.push(doc5 as Avaliacao);

//         return res.status(200).json({ data: avaliacoes });
//     } catch (error) {
//         console.error("Erro ao obter a lista de avaliações:", error);
//         return res.status(500).json({ message: "Erro interno do servidor" });
//     }
// }

// export async function handleUserRatingRequest(req: Request, res: Response) {
//     try {
//         const userId = req.params.userId;
//         const response = avaliacoes.filter(data => data.userId == userId);
//         var avaliacao;

//         if(response.length > 0)
//             avaliacao = response[0] as Avaliacao;
        
//         // Retorna objeto de avaliação
//         return res.status(200).json({ data: avaliacao });
//     } catch (error) {
//         console.error("Erro ao obter a lista de avaliações:", error);
//         return res.status(500).json({ message: "Erro interno do servidor" });
//     }
// }
