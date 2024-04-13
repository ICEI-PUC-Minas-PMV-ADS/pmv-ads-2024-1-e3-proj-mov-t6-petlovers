const express = require('express');
const app = express();
const porta = 3000;

app.get('/message', (req, res) => { 
    const pet = {
        name: 'Scooby',
        age: 10,
        color: 'Marrom',
        raca: 'Labrador'
    }
    res.json(pet);
  });


app.get('/', (req, res) => {
    res.send('Bem-vindo ao servidor PetLovers!');
});


app.listen(porta, () => console.log(`Server runnig in http://localhost:${porta}`));
