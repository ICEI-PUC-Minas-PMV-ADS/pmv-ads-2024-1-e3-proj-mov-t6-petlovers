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
    await admin.firestore().collection("mensagens").doc(id_mensagem).set({
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

//função para obter as mensagens que estão no BD

export async function getMensagens(req: Request, res: Response) {
  try {
    // Obter a referência à coleção de mensagens
    const mensagensRef = admin.firestore().collection("mensagens");

    // Executar a consulta para obter todos os documentos da coleção
    const snapshot = await mensagensRef.get();

    // Verificar se há documentos retornados
    if (snapshot.empty) {
      return res.status(404).json({ message: "Nenhuma mensagem encontrada" });
    }

    // Mapear os documentos para o formato Mensagem
    const mensagens: Mensagem[] = snapshot.docs.map((doc) => {
      const data = doc.data();
      return {
        id_mensagem: data.id_mensagem,
        id_match: data.id_match,
        mensagem: data.mensagem,
        id_destinatario: data.id_destinatario,
        id_remetente: data.id_remetente,
        mensagem_data: data.mensagem_data.toDate(), // Converte Firestore Timestamp para Date
      };
    });

    // Retornar as mensagens
    return res.status(200).json(mensagens);
  } catch (error) {
    console.error("Erro ao recuperar mensagens:", error);
    return res.status(500).json({ message: "Erro interno do servidor" });
  }
}

// Função para editar uma mensagem
export async function updateMensagem(req: Request, res: Response) {
  try {
    const { id_mensagem, mensagem, id_remetente } = req.body;

    // Verificar se todos os parâmetros necessários foram fornecidos
    if (!id_mensagem || !mensagem || !id_remetente) {
      return res.status(400).json({ message: "Parâmetros inválidos" });
    }

    // Obter a referência ao documento da mensagem
    const mensagemRef = admin
      .firestore()
      .collection("mensagens")
      .doc(id_mensagem);

    // Obter o documento da mensagem
    const doc = await mensagemRef.get();

    // Verificar se a mensagem existe
    if (!doc.exists) {
      return res.status(404).json({ message: "Mensagem não encontrada" });
    }

    // Verificar se o usuário que está tentando editar a mensagem é o remetente original
    const data = doc.data() as Mensagem;
    if (data.id_remetente !== id_remetente) {
      return res.status(403).json({ message: "Permissão negada" });
    }

    // Atualizar a mensagem no Firestore
    await mensagemRef.update({ mensagem });

    // Retornar os dados atualizados da mensagem
    return res.status(200).json({ id_mensagem, mensagem });
  } catch (error) {
    console.error("Erro ao atualizar mensagem:", error);
    return res.status(500).json({ message: "Erro interno do servidor" });
  }
}

// Função para deletar uma mensagem
export async function deleteMensagem(req: Request, res: Response) {
  try {
    const { id_mensagem, id_remetente } = req.body;

    if (!id_mensagem || !id_remetente) {
      return res.status(400).json({ message: "Parâmetros inválidos" });
    }

    const mensagemRef = admin
      .firestore()
      .collection("mensagens")
      .doc(id_mensagem);
    const doc = await mensagemRef.get();

    if (!doc.exists) {
      return res.status(404).json({ message: "Mensagem não encontrada" });
    }

    const data = doc.data() as Mensagem;
    if (data.id_remetente !== id_remetente) {
      return res.status(403).json({ message: "Permissão negada" });
    }

    await mensagemRef.delete();

    return res.status(200).json({ message: "Mensagem deletada com sucesso" });
  } catch (error) {
    console.error("Erro ao deletar mensagem:", error);
    return res.status(500).json({ message: "Erro interno do servidor" });
  }
}
