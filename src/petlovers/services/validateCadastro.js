export default function validateCadastro(values) {
    let errors = {};

    const namePet = values.name;
    const age = values.age;
    const city = values.city;
    const state = values.state;
    const sex = values.sex;
    const color = values.color;
    const breed = values.breed;
    const size = values.size;
    const about = values.about;

//validacao imagem 

//Validacao nome
if (!namePet) {
    errors.name = "Por favor, informe o nome do seu pet.";
} 

 //Validacao idade
if (!age) {
    errors.age = "Por favor, informe a idade do seu pet.";
} 

 //Validacao cidade
 if (!city) {
    errors.city = "Por favor, informe a sua cidade.";
} 

//Validacao estado
if (!state) {
    errors.state = "Por favor, informe o seu estado.";
} 

 //Validacao sexo
 if (!sex) {
    errors.sex = "Por favor, informe o sexo do seu pet.";
 }

 //Validacao cor
 if (!color) {
    errors.color = "Por favor, informe a cor do seu pet.";
 }

 //Validacao raça
 if (!breed) {
    errors.breed = "Por favor, informe a raça do seu pet.";
 }

 //Validacao porte
 if (!size) {
    errors.size = "Por favor, informe o porte so seu pet.";
 }

 //Validacao sobre o pet
 if (!about) {
    errors.about = "Por favor, forneça informações sobre o seu pet.";
 } else if (about.length > 300) {
    errors.about = "O campo Sobre deve ter no máximo 300 caracteres.";
 }

    return errors;
};
