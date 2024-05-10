import { Request, Response } from "express";
import admin from "firebase-admin";
import crypto from "crypto";
import { Avaliacao } from "../models/avaliacao";

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

export async function handleTopRatingRequest(req: Request, res: Response) {
    try {
        const responseData: Avaliacao[] = []
        // Firestore Database: Obter 5 avaliações 
        const queryAvaliacao = await admin
            .firestore()
            .collection("avaliacao")
            .limit(5)
            .get();

        // Retornar lista de pets
        queryAvaliacao.forEach((doc: any) => responseData.push(doc.data()));
        return res.status(200).json({ data: responseData });
    } catch (error) {
        console.error("Erro ao obter a lista de avaliações:", error);
        return res.status(500).json({ message: "Erro interno do servidor" });
    }
}
