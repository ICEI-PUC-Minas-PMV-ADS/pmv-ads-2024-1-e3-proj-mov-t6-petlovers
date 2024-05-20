import { Request, Response } from "express";
import admin from "firebase-admin";
import crypto from "crypto";
import { Match } from "../models/match";
import { Notificacoes } from "../models/mensagem";
import { User } from "../models/user";

