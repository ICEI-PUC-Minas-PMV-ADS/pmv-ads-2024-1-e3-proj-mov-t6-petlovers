# Plano de Testes de Software

| Caso de Teste | CT-001  Cadastrar Usuários (Validação dos campos) |
|----------------------|--------------------------|
| Requisito Associado | **RF-001** <br> O sistema deve possuir uma área para fazer cadastro de novos usuários a partir de 18 anos |
| Objetivo do Teste | Verificar se o aplicativo impede o cadastro de usuário e exibe mensagens de erro ao preencher o formulário com dados em formato inválido e ao deixar campos do formulário em branco |
|Passos | 1. Na página inicial, selecionar no banner superior a opção "Cadastre o seu pet na nossa comunidade";  <br> 2. Na tela "Cadastro", preencher os campos do formulário com formato inválido e verificar se são exibidos erros de validação; <br> 3. Preencher o formulário com um ou mais campos em branco e clicar no botão "Salvar"; <br> 4. Verificar se o cadastro foi impedido e se foi exibido o erro correspondente aos campos não preenchidos
| Critério de Êxito | O formulário deve solicitar o preenchimento de todos os campos, nos formatos especificados, e o cadastro não deve ser efetuado ao enviar dados com formato inválido ou com campos em branco |

<br>

| Caso de Teste | CT-002  Cadastrar usuários (Menores 18 anos) |
|----------------------|--------------------------|
| Requisito Associado |**RF-001** <br> O sistema deve possuir uma área para fazer cadastro de novos usuários a partir de 18 anos |
| Objetivo do Teste | Verificar se o aplicativo impede o cadastro de menores de 18 anos |
| Passos | 1. Na página inicial, selecionar no banner superior a opção "Cadastre o seu pet na nossa comunidade";  <br> 2. Na tela "Cadastro", preencher todos os campos obrigatórios; <br> 3. Clicar no botão "Salvar" |
| Critério de Êxito | Se a data de nascimento do usuário corresponder a uma idade menor de 18 anos, o cadastro não será efetuado e será exibida mensagem de erro |

<br>

| Caso de Teste | CT-003  Cadastrar usuários (Envio do formulário) |
|----------------------|--------------------------|
| Requisito Associado |**RF-001** <br> O sistema deve possuir uma área para fazer cadastro de novos usuários a partir de 18 anos |
| Objetivo do Teste | Verificar se, quando preenchido corretamente, o formulário envia os dados ao banco e o aplicativo direciona para a tela "Cadastro de pet" |
| Passos | 1. Na página inicial, selecionar no banner superior a opção "Cadastre o seu pet na nossa comunidade";  <br> 2. Na tela "Cadastro", preencher os campos corretamente e clicar no botão "Salvar"; <br> 3. Verificar se os dados foram enviados ao banco de dados; <br> 4. Verificar se o aplicativo direcionada para a tela "Cadastro de pet" |
| Critério de Êxito | Os dados do usuário devem ser armazenados corretamente no banco e o aplicativo deverá direcionar para a tela seguinte |

<br>

| Caso de Teste | CT-004  Senha mascarada |
|----------------------|--------------------------|
|Requisito Associado | **RF-001** <br> O sistema deve possuir uma área para fazer cadastro de novos usuários a partir de 18 anos |
| Objetivo do Teste | Verificar se os campos "Senha" e "Confirmação de Senha" estão mascarados nos formulários |
| Passos | 1. Na página inicial, selecionar no banner superior a opção "Cadastre o seu pet na nossa comunidade";  <br> 2. Na tela "Cadastro", preencher o campo de senha e verificar se o conteúdo está mascarado; <br> 3. Acessar a página de login no menu inferior; <br> 5. Na tela "Login", preencher o campo de senha e verificar se o conteúdo está mascarado  |
| Critério de Êxito | Os caracteres dos campos de senha devem ser mascarados |

<br>

| Caso de Teste | CT-005  Cadastrar pets (Upload de imagem) |
|----------------------|--------------------------|
| Requisito Associado | **RF-002** <br> O sistema deve permitir cadastrar o perfil de um animal de estimação, com a opção de fazer o upload de imagens |
| Objetivo do Teste | Verificar é possível realizar upload de imagem no cadastro de pet |
| Passos | 1. Efetuar cadastro de usuário; <br> 2. Na tela "Cadastro Pet", selecionar o icone para inserir imagem e adicionar uma foto do pet; <br> 3. Verificar se a foto é exibida na página |
| Critério de Êxito | Ao adicionar a imagem ao campo correspondente, a foto do pet deve ser exibida na tela de formulário |

<br>

| Caso de Teste | CT-006  Cadastrar pets (Validação dos campos) |
|----------------------|--------------------------|
| Requisito Associado | **RF-002** <br> O sistema deve permitir cadastrar o perfil de um animal de estimação, com a opção de fazer o upload de imagens |
| Objetivo do Teste | Verificar se o aplicativo impede o cadastro de pet sem fornecer todos os dados obrigatórios |
| Passos | 1. Efetuar cadastro de usuário; <br> 2. Na tela "Cadastro Pet", preencher o formulário com um ou mais campos em branco e clicar no botão "Cadastrar"; <br> 3. Verificar se o cadastro foi impedido e se foi exibido o erro correspondente aos campos não preenchidos |
| Critério de Êxito | O formulário deve solicitar o preenchimento de todos os campos e o cadastro não deve ser efetuado ao enviar campos em branco |

<br>

| Caso de Teste | CT-007  Cadastrar pets (Envio do formulário) |
|----------------------|--------------------------|
| Requisito Associado | **RF-002** <br> O sistema deve permitir cadastrar o perfil de um animal de estimação, com a opção de fazer o upload de imagens |
| Objetivo do Teste | Verificar se, quando preenchido corretamente, o formulário envia os dados do pet ao banco e vincula aos dados do usuário cadastrado |
| Passos | 1. Efetuar cadastro de usuário; <br> 2. Na tela "Cadastro Pet", preencher o formulário com todos os dados obrigatórios e clicar no botão "Cadastrar"; <br> 3. Verificar se os dados foram enviados ao banco de dados e se o pet foi vinculado ao ID correto de usuário |
| Critério de Êxito | Os dados do usuário pet devem ser armazenados corretamente no banco, com a imagem escolhida e o ID de usuário vinculado |

<br>

| Caso de Teste | CT-008  Login (Autenticar usuário) |
|----------------------|--------------------------|
| Requisito Associado | *RF-009* <br> O site deve possuir uma página de login |
| Objetivo do Teste | Verificar se a autenticação de usuário ocorre corretamente |
| Passos | 1. Acessar a página de login no menu inferior ;  <br> 2. Na tela "Login", preencher os campos de e-mail e senha; <br> 3. Clicar no botão em "Entrar".|
| Critério de Êxito | O login deve ser efetuado ao fornecer os dados de usuários cadastrados e a autenticação não deve ocorrer se os campos de e-mail e senha forem preenchidos com dados inválidos |

<br>

| Caso de Teste | CT-009 Atualizar dados do usuário |
|----------------------|--------------------------|
| Requisito Associado | **RF-003** <br> O sistema deve permitir que o usuário modifique suas informações e as de seu pet, além de oferecer a opção de excluir sua conta |
| Objetivo do Teste | Verificar se o usuário consegue atualizar os dados cadastrados |
| Passos | 1. Realizar login de usuário; <br> 2. Acessar a tela "Meu Perfil" no menu inferior e clicar no link para  "Editar meus dados"; <br> 3. Na tela "Meus dados", modificar os dados cadastrados e clicar em "Salvar" |
| Critério de Êxito | Os dados do usuário devem ser atualizados no banco de dados, seguindo as mesmas validações do formulário de cadastro |

<br>

| Caso de Teste | CT-010 Atualização/Recuperação de senha |
|----------------------|--------------------------|
| Requisito Associado | **RF-003** <br> O sistema deve permitir que o usuário modifique suas informações e as de seu pet, além de oferecer a opção de excluir sua conta |
| Objetivo do Teste | Verificar se o usuário consegue atualizar sua senha cadastrada |
| Passos | 1. Realizar login de usuário; <br> 2. Acessar a tela "Meu Perfil" no menu inferior e clicar no link para  "Editar meus dados"; <br> 3. Na tela "Meus dados", solicitar a atualização de senha |
| Critério de Êxito | A aplicação deve enviar um e-mail de recuperação de senha para o endereço de e-mail fornecido pelo usuário |

<br>

| Caso de Teste | CT-011  Atualizar dados do pet |
|----------------------|--------------------------|
| Requisito Associado | **RF-003** <br> O sistema deve permitir que o usuário modifique suas informações e as de seu pet, além de oferecer a opção de excluir sua conta |
| Objetivo do Teste | Verificar se o usuário consegue atualizar os dados do pet cadastrado |
| Passos | 1. Realizar login de usuário; <br> 2. Acessar a tela "Meu Perfil" no menu inferior e clicar no link para  "Editar dados pet"; <br> 3. Na tela "Dados Pet", modificar os dados cadastrados e clicar em "Salvar" |
| Critério de Êxito | Os dados do pet devem ser atualizados no banco de dados, seguindo as mesmas validações do formulário de cadastro de pet |

<br>

| Caso de Teste | CT-012  Excluir conta do usuário e do pet vinculado |
|----------------------|--------------------------|
| Requisito Associado | **RF-003** <br> O sistema deve permitir que o usuário modifique suas informações e as de seu pet, além de oferecer a opção de excluir sua conta |
| Objetivo do Teste | Verificar se o usuário consegue excluir sua conta |
| Passos | 1. Realizar login de usuário; <br> 2. Acessar a tela "Meu Perfil" no menu inferior e clicar no link para  "Excluir conta"; <br> 3. Confirmar a exclusão de conta |
Critério de Êxito | Os dados do usuário devem ser excluídos do banco de dados, assim como os dados do pet vinculado, e o usuário não conseguirá mais acessar a aplicação com suas credenciais |

<br>

| Caso de Teste | CT-013  Buscar e visualizar perfis de pets |
|----------------------|--------------------------|
| Requisito Associado | **RF-004** <br> O sistema deve ter uma área para buscar/filtrar e visualizar o perfil de outros pets |
| Objetivo do Teste | Verificar se o usuário consegue buscar e visualizar o perfil de outros pets |
| Passos | 1. Realizar login de usuário; <br> 2. Na página inicial, clicar em "Ver mais" ou em "Buscar"; <br> 3. Na barra de pesquisa, inserir o nome ou a característica do pet que deseja buscar; <br> 3. Verificar se a lista de resultados é exibida corretamente, deslizando para direita ou esquerda; <br> 4. Clicar no ícone do meio para visualizar os detalhes do pet |
| Critério de Êxito | A busca deve retornar uma lista de perfis de pets que correspondem aos critérios inseridos; <br> O usuário deve ser capaz de visualizar os detalhes de um perfil de pet selecionado |

<br>

| Caso de Teste | CT-014  Dar like ou dislike em perfis de outros pets |
|----------------------|--------------------------|
| Requisito Associado | **RF-005** <br> O sistema deve permitir que o usuário consiga dar like ou dislike em perfis de outros pets |
| Objetivo do Teste | Verificar se o usuário consegue dar like ou dislike em perfis de outros pets |
| Passos | 1. Realizar login de usuário; <br> 2. Na página inicial, clicar em "Ver mais" ou em "Buscar"; <br> 3. Na barra de pesquisa, inserir o nome ou a característica do pet que deseja buscar; <br> 4. Deslizar para a direita (Like); <br> 5. Deslizar para a esquerda (Dislike).  |
| Critério de Êxito | O sistema deve registrar corretamente a ação de like ou dislike no perfil do pet e mostrar um alerta na tela; <br> Em caso de like, os dados serão salvos na colecão matches no banco de dados |

<br>

| Caso de Teste | CT-015  Notificação de match e ícone do whatsapp |
|----------------------|--------------------------|
| Requisito Associado   | **RF-006** **RF-007** </br> O sistema deve emitir notificação ao usuário quando acontece um match	, e exibir um ícone de mensagens instantâneas. |
| Objetivo do Teste |Verificar se o usuário consegue visualizar todos os perfis que deu macth na página de notificações, e se o ícone do WhatsApp redireciona para a janela de conversa do tutor do pet que deu macth.|
| Passos | 1. Realizar login de usuário; <br> 2. Na página inicial, clicar em "Ver mais" ou em "Buscar"; <br> 3. Na barra de pesquisa, inserir o nome ou a característica do pet que deseja buscar; <br> 4. Deslizar para a direita (Like)  |
| Critério de Êxito | Se o usuário receber um like de volta, aparecerá um alerta na tela que ocorreu um macth, e verá na tela de notificações o perfil do pet que deu match, junto com o ícone do WhatsApp. Ao clicar no ícone, a janela de conversa com o tutor do pet se abrirá no WhatsApp. |

<br>


| Caso de Teste | CT-016  Avaliar a experiência |
|----------------------|--------------------------|
| Requisito Associado   | **RF-008** <br> O sistema deve permitir que o usuário avalie a experiência |
| Objetivo do Teste | Verificar se o usuário consegue realizar a avaliação com sucesso |
| Passos | 1. Realizar login de usuário; <br> 2. Na tela inicial, clicar em "Ver Avaliações do App"; <br> 2. Preencher a nota para a experiência com as patinhas, onde 1 representa a pior nota e 5 a melhor nota; <br> 3. Escrever comentário e clicar no botão "Enviar" para submeter a avaliação |
| Critério de Êxito | A avaliação deve ser enviada ao banco de dados e o comentário será visível para outros usuários |

<br>

| Caso de Teste | CT-017  Favoritar e desfavoritar um perfil |
|----------------------|--------------------------|
| Requisito Associado | **RF-010** <br> O site deve incluir uma página de favoritos |
| Objetivo do Teste | Verificar se o usuário consegue favoritar um perfil ou remover dos favoritos |
| Passos | 1. Realizar login de usuário; <br> 2. Na página inicial, clicar em "Ver mais" ou em "Buscar"; <br> 3. Na barra de pesquisa, inserir o nome ou a característica do pet que deseja buscar; <br> 3. Deslizar para a direita (Like); <br> 4. Acessar a página de favoritos no menu inferior; <br> 5. Verificar se os pets curtidos aparecem na lista; <br> 6. Clicar no ícone de coração para desfavoritar |
| Critério de Êxito | Os pets que o usuário deu like devem aparecer na página de favoritos e, ao clicar no ícone de coração, esse pet deverá ser removido da lista |





