// Importa o firebase admin
import * as admin from "firebase-admin";

// Inicializa o framework do firebase-admin
let firebaseAdmin: admin.app.App | null = null;
export function getFirebaseAdmin(){
    if(!firebaseAdmin){
        firebaseAdmin = admin.initializeApp({
            credential: admin.credential.cert(JSON.parse(process.env['FIREBASE_SERVICE_ACCOUNT_KEY']!!)),
        });
    }
    return firebaseAdmin;
}