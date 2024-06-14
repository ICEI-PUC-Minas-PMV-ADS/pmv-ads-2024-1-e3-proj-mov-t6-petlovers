# Plano de Testes de Software

| Caso de Teste | CT-001  Cadastrar Usuários (Validação dos campos) |
|----------------------|--------------------------|
| Requisito Associado | **RF-001** <br> O sistema deve possuir uma área para fazer cadastro de novos usuários a partir de 18 anos |
| Objetivo do Teste | Verificar se o aplicativo impede o cadastro de usuário e exibe mensagens de erro ao preencher o formulário com dados em formato inválido e ao deixar campos do formulário em branco |
|Passos | 1. Acessar o aplicativo; <br> 2. Selecionar no banner superior a opção "Cadastre o seu pet na nossa comunidade";  <br> 3. Na tela "Cadastro", preencher os campos do formulário com formato inválido e verificar se são exibidos erros de validação; <br> 4. Preencher o formulário com um ou mais campos em branco e clicar no botão "Salvar"; <br> 5. Verificar se o cadastro foi impedido e se foi exibido o erro correspondente aos campos não preenchidos
| Critério de Êxito | O formulário deve solicitar o preenchimento de todos os campos, nos formatos especificados, e o cadastro não deve ser efetuado ao enviar dados com formato inválido ou com campos em branco |

<br>

| Caso de Teste | CT-002  Cadastrar Usuários (Menores 18 anos) |
|----------------------|--------------------------|
| Requisito Associado |**RF-001** <br> O sistema deve possuir uma área para fazer cadastro de novos usuários a partir de 18 anos |
| Objetivo do Teste | Verificar se o aplicativo impede o cadastro de menores de 18 anos |
| Passos | 1. Acessar o aplicativo; </br> 2. Selecionar no banner superior a opção "Cadastre o seu pet na nossa comunidade";  <br> 3. Na tela "Cadastro", preencher todos os campos obrigatórios; <br> 3. Clicar no botão "Salvar" |
| Critério de Êxito | Se a data de nascimento do usuário corresponder a uma idade menor de 18 anos, o cadastro não será efetuado e será exibida mensagem de erro |

<br>

| Caso de Teste | CT-003  Cadastrar Usuários (Envio do formulário) |
|----------------------|--------------------------|
| Requisito Associado |**RF-001** <br> O sistema deve possuir uma área para fazer cadastro de novos usuários a partir de 18 anos |
| Objetivo do Teste | Verificar se, quando preenchido corretamente, o formulário envia os dados ao banco e o aplicativo direciona para a tela "Cadastro de pet" |
| Passos | 1. Acessar o aplicativo; <br> 2. Selecionar no banner superior a opção "Cadastre o seu pet na nossa comunidade";  <br> 3. Na tela "Cadastro", preencher os campos corretamente e clicar no botão "Salvar"; <br> 4. Verificar se os dados foram enviados ao banco de dados; <br> 5. Verificar se o aplicativo direcionada para a tela "Cadastro de pet" |
| Critério de Êxito | Os dados do usuário devem ser armazenados corretamente no banco e o aplicativo deverá direcionar para a tela seguinte |

<br>

| Caso de Teste | CT-004  Senha mascarada |
|----------------------|--------------------------|
|Requisito Associado | **RF-001** <br> O sistema deve possuir uma área para fazer cadastro de novos usuários a partir de 18 anos |
| Objetivo do Teste | Verificar se os campos "Senha" e "Confirmação de Senha" estão mascarados nos formulários |
| Passos | 1. Acessar o aplicativo; <br> 2. Selecionar no banner superior a opção "Cadastre o seu pet na nossa comunidade";  <br> 3. Na tela "Cadastro", preencher o campo de senha e verificar se o conteúdo está mascarado; <br> 4. Acessar a página de login no menu inferior; <br> 5. Na tela "Login", preencher o campo de senha e verificar se o conteúdo está mascarado  |
| Critério de Êxito | Os caracteres dos campos de senha devem ser mascarados |

<br>

| Caso de Teste | CT-005  Cadastrar Pets (Upload de imagem) |
|----------------------|--------------------------|
| Requisito Associado | **RF-002** <br> O sistema deve permitir cadastrar o perfil de um animal de estimação, com a opção de fazer o upload de imagens |
| Objetivo do Teste | Verificar é possível realizar upload de imagem no cadastro de pet |
| Passos | 1. Acessar o aplicativo; <br> 2. Efetuar cadastro de usuário; <br> 3. Na tela "Cadastro Pet", selecionar o icone para inserir imagem e adicionar uma foto do pet; <br> 4. Verificar se a foto é exibida na página |
| Critério de Êxito | Ao adicionar a imagem ao campo correspondente, a foto do pet deve ser exibida na tela de formulário |

<br>

| Caso de Teste | CT-006  Cadastrar Pets (Validação dos campos) |
|----------------------|--------------------------|
| Requisito Associado | **RF-002** <br> O sistema deve permitir cadastrar o perfil de um animal de estimação, com a opção de fazer o upload de imagens |
| Objetivo do Teste | Verificar se o aplicativo impede o cadastro de pet sem fornecer todos os dados obrigatórios |
| Passos | 1. Acessar o aplicativo; <br> 2. Efetuar cadastro de usuário; <br> 3. Na tela "Cadastro Pet", preencher o formulário com um ou mais campos em branco e clicar no botão "Cadastrar"; <br> 5. Verificar se o cadastro foi impedido e se foi exibido o erro correspondente aos campos não preenchidos |
| Critério de Êxito | O formulário deve solicitar o preenchimento de todos os campos e o cadastro não deve ser efetuado ao enviar campos em branco |

<br>

| Caso de Teste | CT-007  Cadastrar Pets (Envio do formulário) |
|----------------------|--------------------------|
| Requisito Associado | **RF-002** <br> O sistema deve permitir cadastrar o perfil de um animal de estimação, com a opção de fazer o upload de imagens |
| Objetivo do Teste | Verificar se, quando preenchido corretamente, o formulário envia os dados do pet ao banco e vincula aos dados do usuário cadastrado |
| Passos | 1. Acessar o aplicativo; <br> 2. Efetuar cadastro de usuário; <br> 3. Na tela "Cadastro Pet", preencher o formulário com todos os dados obrigatórios e clicar no botão "Cadastrar"; <br> 4. Verificar se os dados foram enviados ao banco de dados e se o pet foi vinculado ao ID correto de usuário |
| Critério de Êxito | Os dados do usuário pet devem ser armazenados corretamente no banco, com a imagem escolhida e o ID de usuário vinculado |

<br>

| Caso de Teste | CT-008  Login (Autenticar usuário) |
|----------------------|--------------------------|
| Requisito Associado | *RF-009* <br> O site deve possuir uma página de login |
| Objetivo do Teste | Verificar se a autenticação de usuário ocorre corretamente |
| Passos | 1. Acessar o aplicativo; <br> 2. Acessar a página de login no menu inferior ;  <br> 3. Na tela "Login", preencher os campos de e-mail e senha; <br> 4. Clicar no botão em "Entrar".|
| Critério de Êxito | O login deve ser efetuado ao fornecer os dados de usuários cadastrados e a autenticação não deve ocorrer se os campos de e-mail e senha forem preenchidos com dados inválidos |

<br>

| Caso de Teste | CT-009 Atualizar dados do usuário |
|----------------------|--------------------------|
| Requisito Associado | **RF-003** <br> O sistema deve permitir que o usuário modifique suas informações e as de seu pet, além de oferecer a opção de excluir sua conta |
| Objetivo do Teste | Verificar se o usuário consegue atualizar os dados cadastrados |
| Passos | 1. Acessar o aplicativo; <br> 2. Realizar login de usuário; <br> 3. Acessar a tela "Meu Perfil" no menu inferior e clicar no link para  "Editar meus dados"; <br> 4. Na tela "Meus dados", modificar os dados cadastrados e clicar em "Salvar" |
| Critério de Êxito | Os dados do usuário devem ser atualizados no banco de dados, seguindo as mesmas validações do formulário de cadastro |


| Caso de Teste | CT-010  Atualizar dados do pet |
|----------------------|--------------------------|
| Requisito Associado | **RF-003** <br> O sistema deve permitir que o usuário modifique suas informações e as de seu pet, além de oferecer a opção de excluir sua conta |
| Objetivo do Teste | Verificar se o usuário consegue atualizar os dados do pet cadastrado |
| Passos | 1. Acessar o aplicativo; <br> 2. Realizar login de usuário; <br> 3. Acessar a tela "Meu Perfil" no menu inferior e clicar no link para  "Editar dados pet"; <br> 4. Na tela "Dados Pet", modificar os dados cadastrados e clicar em "Salvar" |
| Critério de Êxito | Os dados do pet devem ser atualizados no banco de dados, seguindo as mesmas validações do formulário de cadastro de pet |

<br>

| Caso de Teste | CT-011  Excluir conta do usuário e do pet vinculado |
|----------------------|--------------------------|
| Requisito Associado | **RF-003** <br> O sistema deve permitir que o usuário modifique suas informações e as de seu pet, além de oferecer a opção de excluir sua conta |
| Objetivo do Teste | Verificar se o usuário consegue excluir sua conta |
| Passos | 1. Acessar o aplicativo; <br> 2. Realizar login de usuário; <br> 3. Acessar a tela "Meu Perfil" no menu inferior e clicar no link para  "Excluir conta"; <br> 4. Confirmar a exclusão de conta |
Critério de Êxito | Os dados do usuário devem ser excluídos do banco de dados, assim como os dados do pet vinculado, e o usuário não conseguirá mais acessar a aplicação com suas credenciais |

<br>

|Caso de Teste         |CT-21  Login (Teste de recuperação de senha)|
|----------------------|--------------------------|
|Requisito Associado   |**RF-09** </br> O site deve fornecer uma maneira segura para os usuários recuperarem suas senhas em caso de esquecimento. |
|Objetivo do Teste| Verificar se o sistema permite que os usuários solicitem uma recuperação de senha, caso tenham esquecido suas senhas. |
| Passos | <br> Acesse a tela de login. <br> Clique no link "Esqueceu sua senha?". <br>Insira o e-mail associado à conta. <br>Pressione o botão de enviar/recuperar.|
|Critério de Êxito| <br> O site deve enviar um e-mail de recuperação de senha para o endereço fornecido pelo usuário, caso ele exista na base de dados.|</br></br>


| Caso de Teste         | CT-26  Buscar Perfis de Outros Pets e visualizar suas informações |
|----------------------|--------------------------|
| Requisito Associado   | **RF-004** </br> O sistema deve ter uma área para buscar|
| Objetivo do Teste | Verificar se o usuário consegue buscar e visualizar o perfil dos pets corretamente. |
| Passos | <br> Na página inicial, clique em ver mais ou em buscar. <br> Na barra de pesquisa insira o nome ou a característica do pet que deseja buscar. <br> Clique no botão de busca . <br> Verifique se a lista de resultados é exibida corretamente deslizando para direita ou esquerda. <br> Para visualizar os detalhes clique no icone do meio. |
| Critério de Êxito | <br> A busca deve retornar uma lista de perfis de pets que correspondem aos critérios inseridos. <br> O usuário deve ser capaz de visualizar os detalhes de um perfil de pet selecionado.|




| Caso de Teste         | CT-27  Dar Like ou Dislike em Perfis de Outros Pets |
|----------------------|--------------------------|
| Requisito Associado   | **RF-005** </br> O sistema deve permitir que o usuário consiga dar like ou dislike em perfis de outros pets. |
| Objetivo do Teste | Verificar se o usuário consegue dar like ou dislike em perfis de outros pets corretamente. |
| Passos | <br> Na página inicial, clique em ver mais, e na barra de busca  insira o nome ou a característica do pet que deseja encontrar. <br> Clique no botão em Buscar. <br> Desliza para a direita (Like). <br> Deslize para a esquerda (Dislike).  |
| Critério de Êxito | <br> O sistema deve registrar corretamente a ação de like ou dislike no perfil do pet mostrando um lerta na tela. <br> Em caso de like, os dados serão salvos na colecão macthes no fireabase. |


| Caso de Teste         | CT-28  Notificar o usuário quando acontecer um match |
|----------------------|--------------------------|
| Requisito Associado   | **RF-006** </br> O sistema deve emitir notificação ao usuário quando acontece um match.	 |
| Objetivo do Teste | Verificar se o usuário recebe uma notificação se houver um match. |
| Passos | <br> Na página inicial, clique em ver mais, e na barra de busca  insira o nome ou a característica do pet que deseja encontrar. <br> Clique no botão em Buscar. <br> Desliza para a direita (Like).  |
| Critério de Êxito |Caso receba um like de volta, o usuário verá na tela de notificações o perfil do pet que deu match. |


| Caso de Teste         | CT-29 Exibir um ícone de mensagens  |
|----------------------|--------------------------|
| Requisito Associado   | **RF-007** </br> O sistema deve exibir um ícone de mensagens instantâneas para os usuários que deram match.	.	 |
| Objetivo do Teste | Verificar se o usuário consegue avaliar a experiência corretamente. |
| Passos |  |
| Critério de Êxito ||



| Caso de Teste         | CT-30  Avaliar a Experiência |
|----------------------|--------------------------|
| Requisito Associado   | **RF-008** - O sistema deve permitir que o usuário avalie a experiência. |
| Objetivo do Teste | Verificar se o usuário consegue realizar a avaliação com sucesso. |
| Passos | 1. Na tela inicial, clique em "Ver Avaliações do App". </br> 2. Preencha as patinhas de avaliação conforme sua preferência, onde 1 representa a pior nota e 5 a melhor nota. </br> 3. Escreva seu comentário na seção destinada a ele. </br> 4. Clique em "Enviar" para submeter a avaliação. |
| Critério de Êxito | O comentário será visível para outros usuários. |



| Caso de Teste         | CT-31  Favoritar e desfavoritar um perfil|
|----------------------|--------------------------|
| Requisito Associado   | **RF-010** </br> O site deve incluir uma página de favoritos.	 |
| Objetivo do Teste | Verificar se o usuário consegue favoritar um perfil ou remover dos favoritos. |
| Passos | <br> Na página inicial, clique em ver mais, e na barra de busca  insira o nome ou a característica do pet que deseja encontrar. <br> Clique no botão em Buscar. <br> Desliza para a direita (Like).  |
| Critério de Êxito | Todos os pets que o usuário deu like aparecerão na página de favoritos, e ao clicar no ícone de coração, esse pet será removido da lista.|





