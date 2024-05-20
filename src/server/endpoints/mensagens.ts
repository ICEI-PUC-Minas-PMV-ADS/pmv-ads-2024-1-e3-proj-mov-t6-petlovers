import { Request, Response } from "express";
import admin from "firebase-admin";
import crypto from "crypto";
import { Mensagem } from "../models/mensagem";

export async function handleMensagemRequest(req: Request, res: Response) {
  try {
    const mensagemData: Mensagem = req.body as Mensagem;
    const id_mensagem = crypto.randomUUID();

    // Obter o ID do match do corpo da solicitação
    const { id_match, id_destinatario, id_remetente, mensagem } = mensagemData;

    // Verificar se o ID do match foi fornecido
    if (!id_match) {
      return res
        .status(400)
        .json({ message: "ID_match do usuário não fornecido" });
    }

    // Definir a data da mensagem como a data atual
    const mensagem_data = admin.firestore.Timestamp.now();

    // Firestore Database: Cadastrar mensagem
    await admin
      .firestore()
      .collection("mensagens")
      .doc(id_mensagem)
      .set({
        id_mensagem, // Incluímos o ID gerado no documento
        mensagem_data, // Usar a data atual
        id_match,
        id_destinatario,
        id_remetente,
        mensagem,
      });

    // Retornar os dados da mensagem incluindo o id_mensagem e a data atual
    const responseData = {
      id_mensagem,
      mensagem_data,
      id_match,
      id_destinatario,
      id_remetente,
      mensagem,
    };

    return res.status(201).json(responseData);
  } catch (error) {
    console.error("Erro ao cadastrar mensagem:", error);
    return res.status(500).json({ message: "Erro interno do servidor" });
  }
}
