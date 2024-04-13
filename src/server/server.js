import express from 'express';

const app = express();
const porta = 3000;

app.listen(porta, () => console.log(`Servidor ouvindo em http://localhost:${porta}`));
