import { Request, Response } from "express";
import { Login } from "../models/login";
const express = require("express");
const admin = require("firebase-admin");
const ejs = require('ejs');
const firebase = require('firebase');
const Auth = require("../Auth.ts");
let userLogged;


/*export async function handleLoginRequest(req: Request, res: Response) {  
  try {
    const loginData: Login = req.body as Login;
    console.log(loginData);
    //const user = await admin.auth().signInWithEmailAndPassword(loginData.email, loginData.password);

    const terste = await admin.firestore().collection("pet")
    .auth()
    .signInWithEmailAndPassword(loginData.email, loginData.password)
    .create(loginData);

    res.json({ terste });
  } catch (error) {
    console.error("Erro:", error);
    res.status(401).json({ error: "Credenciais inválidas" });
  }
}
*/





