# Programação de Funcionalidades

|ID    | Descrição do Requisito  | Artefatos produzidos |
|------|-----------------------------------------|------|
|RF-001| O sistema deve possuir uma área para fazer cadastro de novos usuários a partir de 18 anos. |Cadastro.js,  FormInput.js, FormButton.js, Navigations.js  |
|RF-002| O sistema deve permitir cadastrar o perfil de um animal de estimação, com a opção de fazer o upload de imagens.   |petlovers/pages/CadastroPet.js, Server/models/pet.ts, Server/endpoints/images.ts |
|RF-003| O sistema deve possibilitar ao usuário a modificação ou exclusão de suas informações cadastradas, bem como as relacionadas ao seu <b>pet</b>.|Petlovers/pages/MinhaConta.js, petlovers/pages/DadosUser.js, petlovers/pages/DadosPet.js, server/endpoints/pets.js, server/endpoints/users.ts,  server/models/pet.ts. server/models/user.ts, server/index.js |
|RF-004| O sistema deve ter uma área para buscar/filtrar e visualizar o perfil de outros <b>pets</b>.  | petlovers/pages/BuscarPet.js, petlovers/components/SearchBar.js, petlovers/MatchCard.js |
|RF-005| O sistema deve permitir que o usuário consiga dar <b>like</b>  ou dar <b>dislike</b> perfis de outros <b>pets</b>.| server/endpoint/matches.ts, server/models/match.ts, petlovers/components/MacthCard.js, petlovers/pages/BuscarPet.js, petlovers/components/NoMoreCards.js|
|RF-006| O sistema deve emitir notificação ao usuário quando acontece um <b>match</b>. | |
|RF-007|  O sistema deve exibir um ícone de mensagens instantâneas para os usuários que deram <b>match</b>. | |
|RF-008| O sistema deve permitir que os usuários avaliem a experiência. |  |
|RF-009| O site deve incluir uma página de login. |Login.js,  FormInput.js, FormButton.js, Navigations.js   |
|RF-010| O site deve incluir uma página de favoritos. |  |
