// Importa o firebase admin
import * as admin from "firebase-admin";
import { getApp } from "firebase-admin/app";
import { FirebaseStorage, getStorage } from "firebase/storage";


// Inicializa o framework do firebase-admin
let firebaseAdmin: admin.app.App | null = null;
export function getFirebaseAdmin(){
    if(!firebaseAdmin){
        firebaseAdmin = admin.initializeApp({
            credential: admin.credential.cert(JSON.parse(process.env['FIREBASE_SERVICE_ACCOUNT_KEY']!!)),
            storageBucket: "petlovers-f3fd9.appspot.com"
        });
    }
    return firebaseAdmin;
}

//acessa o storage do firebase
export function getStorageApi(){
    return firebaseAdmin?.storage();
}
