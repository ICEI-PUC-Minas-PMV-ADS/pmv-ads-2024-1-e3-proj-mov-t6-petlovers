export default function validateCadastro(values) {
    let errors = {};

    const namePet = values.nome;
    const age = values.idade;
    const city = values.cidade;
    const state = values.estado;
    const sex = values.sexo;
    const color = values.cor;
    const breed = values.raca;
    const size = values.porte;
    const about = values.sobre;

//validacao imagem 

//Validacao nome
if (!namePet) {
    errors.nome = "Por favor, informe o nome do seu pet.";
} 


 //Validacao idade
if (!age) {
    errors.idade = "Por favor, informe a idade do seu pet.";
} 

 //Validacao cidade
 if (!city) {
    errors.cidade = "Por favor, informe a sua cidade.";
} 

//Validacao estado
if (!state) {
    errors.estado = "Por favor, informe o seu estado.";
} 

 //Validacao sexo
 if (!sex) {
    errors.sexo = "Por favor, informe o sexo do seu pet.";
 }

 //Validacao cor
 if (!color) {
    errors.cor = "Por favor, informe a cor do seu pet.";
 }

 //Validacao raça
 if (!breed) {
    errors.raca = "Por favor, informe a raça do seu pet.";
 }

 //Validacao porte
 if (!size) {
    errors.porte = "Por favor, informe o porte so seu pet.";
 }

 //Validacao sobre o pet
 if (!about) {
    errors.sobre = "Por favor, forneça informações sobre o seu pet.";
 } else if (about.length > 700) {
    errors.sobre = "O campo Sobre deve ter no máximo 700 caracteres.";
 }

    return errors;
};
